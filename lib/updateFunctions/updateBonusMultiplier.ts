// lib/updateFunctions/updateBonusMultiplier.ts

"use server";

import getCollection, { DATA_COLLECTION } from "@/db";
import { ObjectId } from "mongodb";
import calcTotalPay from "@/lib/calcFunctions/calcTotalPay";

export default async function updateBonusMultiplier(formData: FormData): Promise<void> {
    const id = formData.get("id") as string;
    const bonusmultiplier = formData.get("bonusmultiplier") as string;
    
    const collection = await getCollection(DATA_COLLECTION);
    const person = await collection.findOne({ _id: new ObjectId(id) });
    const salary = person?.salary;
    const othours = person?.othours;
    const weddinghours = person?.weddinghours;
    const weddingpay = person?.weddingpay;
    const absences = person?.absences;
    const basepay = person?.basepay;

    const result = await collection.updateOne(
        { _id: new ObjectId(id) }, // because I am using ObjectId instead of string
        { $set: { bonusmultiplier } }
    );

    if (result.modifiedCount === 0) {
        throw new Error("Update failed: Employee not found.");
    }

    console.log("Salary:", salary);
    console.log("Absences:", absences);

    const totalpay = await calcTotalPay(Number(salary), Number(othours), Number(weddinghours), Number(weddingpay), Number(bonusmultiplier), Number(bonuspointsvalue), Number(absences), Number(basepay));
    console.log("Calculated totalpay:", totalpay);

    const result1 = await collection.updateOne(
        { _id: new ObjectId(id) }, 
        { $set: { totalpay } }
    );

    if (result1.modifiedCount === 0) {
        throw new Error("Update failed: Employee not found.");
    }
}