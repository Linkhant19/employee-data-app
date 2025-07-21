// lib/updateFunctions/updateBonusPointValue.ts

// not used right now. maybe delete

"use server";

import getCollection from "@/db";

type GlobalSettings = {
    _id: string;
    bonus_point_value: number;
};

export default async function updateBonusPointValue(formData: FormData) {
    const value = Number(formData.get("bonus"));

    if (isNaN(value)) {
        throw new Error("Invalid bonus point value");
    }

    const collection = await getCollection<GlobalSettings>("globals");

    await collection.updateOne(
        { _id: "bonus-settings" },
        { $set: { bonus_point_value: value } },
        { upsert: true }
    );
}