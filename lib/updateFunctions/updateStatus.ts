// lib/updateFunctions/updateStatus.ts

"use server";

import getCollection, { DATA_COLLECTION } from "@/db";
import { ObjectId } from "mongodb";

export default async function updateStatus(formData: FormData): Promise<void> {
    const id = formData.get("id") as string;
    const status = formData.get("status") as string;

    const collection = await getCollection(DATA_COLLECTION);

    const result = await collection.updateOne(
        { _id: new ObjectId(id) }, 
        { $set: { status } }
    );

    if (result.modifiedCount === 0) {
        throw new Error("Update failed: Employee not found.");
    }
}