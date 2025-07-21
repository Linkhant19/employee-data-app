// lib/updateFunctions/updateBonusValue.ts

"use server";

import getCollection, { DATA_COLLECTION } from "@/db";
import { ObjectId } from "mongodb";
import calcTotalPay from "@/lib/calcFunctions/calcTotalPay";

export default async function updateBonusValue(formData: FormData): Promise<void> {
    const id = formData.get("id") as string;
    const bonusvalue = formData.get("bonusvalue") as string;

    const collection = await getCollection(DATA_COLLECTION);
    const person = await collection.findOne({ _id: new ObjectId(id) });
    const salary = person?.salary;
    const othours = person?.othours;
    const weddinghours = person?.weddinghours;
    const weddingpay = person?.weddingpay;
    const bonusmultiplier = person?.bonusmultiplier;
    const absences = person?.absences;
    const basepay = person?.basepay;
    const month = person?.month;
    const year = person?.year;

    const result = await collection.updateOne(
        { _id: new ObjectId(id) }, 
        { $set: { bonusvalue } }
    );

    if (result.modifiedCount === 0) {
        throw new Error("Update failed: Employee not found.");
    }

    const totalpay = await calcTotalPay(Number(salary), Number(othours), Number(weddinghours), Number(weddingpay), Number(bonusmultiplier), Number(bonusvalue), Number(absences), month, Number(year), Number(basepay));
    
    const result1 = await collection.updateOne(
        { _id: new ObjectId(id) }, 
        { $set: { totalpay } }
    );

    if (result1.modifiedCount === 0) {
        throw new Error("Update failed: Employee not found.");
    }
    
}