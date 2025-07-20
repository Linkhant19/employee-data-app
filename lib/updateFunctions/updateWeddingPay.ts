// lib/updateFunctions/updateWeddingPay.ts

"use server";

import getCollection, { DATA_COLLECTION } from "@/db";
import { ObjectId } from "mongodb";
import calcTotalPay from "@/lib/calcFunctions/calcTotalPay";

export default async function updateWeddingPay(formData: FormData): Promise<void> {
    const id = formData.get("id") as string;
    const weddingpay = formData.get("weddingpay") as string;
    const totalpay = formData.get("totalpay") as string;

    const collection = await getCollection(DATA_COLLECTION);
    const person = await collection.findOne({ _id: new ObjectId(id) });
    const salary = person?.salary;

    const result = await collection.updateOne(
        { _id: new ObjectId(id) }, // because I am using ObjectId instead of string
        { $set: { weddingpay } }
    );

    if (result.modifiedCount === 0) {
        throw new Error("Update failed: Employee not found.");
    }
}