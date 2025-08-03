// lib/updateFunctions/updateSalary.ts

"use server";

import getCollection, { DATA_COLLECTION } from "@/db";
import { ObjectId } from "mongodb";
import calcTotalPay from "@/lib/calcFunctions/calcTotalPay";
import calcBasePay from "@/lib/calcFunctions/calcBasePay";
import getTotalBonusPoints from "../getTotalBonusPoints";

export default async function updateSalary(formData: FormData): Promise<void> {
    const id = formData.get("id") as string;
    const salary = formData.get("salary") as string;

    const collection = await getCollection(DATA_COLLECTION);
    const person = await collection.findOne({ _id: new ObjectId(id) });
    const othours = person?.othours;
    const weddingpay = person?.weddingpay;
    const weddinghours = person?.weddinghours;
    const bonusmultiplier = person?.bonusmultiplier;
    const bonusvalue = person?.bonusvalue;
    const absences = person?.absences;
    const date = person?.date;
    const userId = person?.userId;

    const totalbonuspoints = await getTotalBonusPoints(userId, date);

    const result = await collection.updateOne(
        { _id: new ObjectId(id) }, // because I am using ObjectId instead of string
        { $set: { salary } }
    );

    if (result.modifiedCount === 0) {
        throw new Error("Update failed: Employee not found.");
    }

    const basepay = await calcBasePay(Number(salary), Number(absences), date, Number(othours), Number(weddinghours), Number(weddingpay));

    const result1 = await collection.updateOne(
        { _id: new ObjectId(id) }, 
        { $set: { basepay } }
    );

    const totalpay = await calcTotalPay(Number(salary), Number(bonusmultiplier), Number(bonusvalue), Number(totalbonuspoints), Number(absences), date, Number(basepay));
            
    const result2 = await collection.updateOne(
        { _id: new ObjectId(id) }, 
        { $set: { totalpay } }
    );

}