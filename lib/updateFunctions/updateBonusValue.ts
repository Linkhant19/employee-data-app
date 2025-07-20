// lib/updateFunctions/updateBonusValue.ts

"use server";

import getCollection, { DATA_COLLECTION } from "@/db";
import { ObjectId } from "mongodb";
import calcBasePay from "@/lib/calcFunctions/calcBasePay";

export default async function updateBonusValue(formData: FormData): Promise<void> {
    const id = formData.get("id") as string;
    const bonusvalue = formData.get("bonusvalue") as string;

    const collection = await getCollection(DATA_COLLECTION);
    const person = await collection.findOne({ _id: new ObjectId(id) });
    const salary = person?.salary;

    const result = await collection.updateOne(
        { _id: new ObjectId(id) }, 
        { $set: { bonusvalue } }
    );

    if (result.modifiedCount === 0) {
        throw new Error("Update failed: Employee not found.");
    }

    
}