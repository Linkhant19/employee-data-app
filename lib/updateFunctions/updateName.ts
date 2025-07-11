// lib/updateFunctions/updateName.ts

"use server";

import getCollection, { DATA_COLLECTION } from "@/db";
import { ObjectId } from "mongodb";

export default async function updateName(formData: FormData): Promise<void> {
    const id = formData.get("id") as string;
    const name = formData.get("name") as string;

    const collection = await getCollection(DATA_COLLECTION);

    const result = await collection.updateOne(
        { _id: new ObjectId(id) }, // because I am using ObjectId instead of string
        { $set: { name } }
    );

    if (result.modifiedCount === 0) {
        throw new Error("Update failed: Employee not found.");
    }
}