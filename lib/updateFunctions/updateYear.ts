// lib/updateFunctions/updateYear.ts

"use server";

import getCollection, { DATA_COLLECTION } from "@/db";
import { ObjectId } from "mongodb";
import calcBasePay from "@/lib/calcFunctions/calcBasePay";
import calcTotalPay from "@/lib/calcFunctions/calcTotalPay";

export default async function updateYear(formData: FormData): Promise<void> {
    const id = formData.get("id") as string;
    const year = formData.get("year") as string;

    const collection = await getCollection(DATA_COLLECTION);
    const person = await collection.findOne({ _id: new ObjectId(id) });
    const salary = person?.salary;
    const absences = person?.absences;
    const month = person?.month;
    const othours = person?.othours;
    const weddinghours = person?.weddinghours;
    const weddingpay = person?.weddingpay;
    const bonusmultiplier = person?.bonusmultiplier;
    const bonusvalue = person?.bonusvalue;

    const result = await collection.updateOne(
        { _id: new ObjectId(id) }, 
        { $set: { year } }
    );

    if (result.modifiedCount === 0) {
        throw new Error("Update failed: Employee not found.");
    }

    const basepay = await calcBasePay(Number(salary), Number(absences), month, Number(year));
    const result1 = await collection.updateOne(
        { _id: new ObjectId(id) }, 
        { $set: { basepay } }
    );

    const totalpay = await calcTotalPay(Number(salary), Number(othours), Number(weddinghours), Number(weddingpay), Number(bonusmultiplier), Number(bonusvalue), Number(absences), month, Number(year), Number(basepay));
    const result2 = await collection.updateOne(
        { _id: new ObjectId(id) }, 
        { $set: { totalpay } }
    );
}