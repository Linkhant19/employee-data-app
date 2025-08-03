// lib/updateFunctions/updateWeddingHours.ts

"use server";

import getCollection, { DATA_COLLECTION } from "@/db";
import { ObjectId } from "mongodb";
import calcTotalPay from "@/lib/calcFunctions/calcTotalPay";
import getTotalBonusPoints from "../getTotalBonusPoints";

export default async function updateWeddingHours(formData: FormData): Promise<void> {
    const id = formData.get("id") as string;
    const weddinghours = formData.get("weddinghours") as string;

    const collection = await getCollection(DATA_COLLECTION);
    const person = await collection.findOne({ _id: new ObjectId(id) });
    const salary = person?.salary;
    const othours = person?.othours;
    const weddingpay = person?.weddingpay;
    const bonusmultiplier = person?.bonusmultiplier;
    const bonusvalue = person?.bonusvalue;
    const absences = person?.absences;
    const basepay = person?.basepay;
    const date = person?.date;
    const userId = person?.userId;

    const totalbonuspoints = await getTotalBonusPoints(userId, date);

    const result = await collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: { weddinghours } }
    );

    if (result.modifiedCount === 0) {
        throw new Error("Update failed: Employee not found.");
    }

    const totalpay = await calcTotalPay(Number(salary), Number(bonusmultiplier), Number(bonusvalue), Number(totalbonuspoints), Number(absences), date, Number(basepay));

    const result1 = await collection.updateOne(
        { _id: new ObjectId(id) }, 
        { $set: { totalpay } }
    )  
}