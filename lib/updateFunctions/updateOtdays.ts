// lib/updateFunctions/updateOtdays.ts

"use server";

import getCollection, { DATA_COLLECTION } from "@/db";
import { ObjectId } from "mongodb";
import calcBasePay from "@/lib/calcFunctions/calcBasePay";

export default async function updateOtdays(formData: FormData): Promise<void> {
    const id = formData.get("id") as string;
    const otdays = formData.get("otdays") as string;
    const totalpay = formData.get("totalpay") as string;

    const collection = await getCollection(DATA_COLLECTION);
    const person = await collection.findOne({ _id: new ObjectId(id) });
    const salary = person?.salary;

    const result = await collection.updateOne(
        { _id: new ObjectId(id) }, // because I am using ObjectId instead of string
        { $set: { otdays } }
    );

    if (result.modifiedCount === 0) {
        throw new Error("Update failed: Employee not found.");
    }

    const basepay = await calcBasePay(Number(salary), Number(otdays));
    const result1 = await collection.updateOne(
        { _id: new ObjectId(id) }, 
        { $set: { basepay } }
    );

    if (result1.modifiedCount === 0) {
        throw new Error("Update failed: Employee not found.");
    }
}