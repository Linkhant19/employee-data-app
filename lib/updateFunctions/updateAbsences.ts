// lib/updateFunctions/updateAbsences.ts

"use server";

import getCollection, { DATA_COLLECTION } from "@/db";
import { ObjectId } from "mongodb";
import calcBasePay from "@/lib/calcFunctions/calcBasePay";
import calcTotalPay from "@/lib/calcFunctions/calcTotalPay";

export default async function updateAbsences(formData: FormData): Promise<void> {
    const id = formData.get("id") as string;
    const absences = formData.get("absences") as string;

    // get salary from person's document
    const collection = await getCollection(DATA_COLLECTION);
    const person = await collection.findOne({ _id: new ObjectId(id) });
    const salary = person?.salary;
    const othours = person?.othours;
    const weddinghours = person?.weddinghours;
    const weddingpay = person?.weddingpay;
    const bonusmultiplier = person?.bonusmultiplier;
    const bonusvalue = person?.bonusvalue;
    const date = person?.date;

    const result = await collection.updateOne(
        { _id: new ObjectId(id) }, // because I am using ObjectId instead of string
        { $set: { absences } }
    );

    if (result.modifiedCount === 0) {
        throw new Error("Update failed: Employee not found.");
    }

    const basepay = await calcBasePay(Number(salary), Number(absences), date, Number(othours), Number(weddinghours), Number(weddingpay));
    const result1 = await collection.updateOne(
        { _id: new ObjectId(id) }, 
        { $set: { basepay } }
    );

    const totalpay = await calcTotalPay(Number(salary), Number(bonusmultiplier), Number(bonusvalue), Number(absences), date, Number(basepay));
    const result2 = await collection.updateOne(
        { _id: new ObjectId(id) }, 
        { $set: { totalpay } }
    );
}