// lib/getBonusPointValue.ts

import getCollection from "@/db";

type GlobalSettings = {
    _id: string;
    bonus_point_value: number;
};

export async function getBonusPointValue(): Promise<number> {
    const collection = await getCollection<GlobalSettings>("globals");

    const doc = await collection.findOne({ _id: "bonus-settings" });

    return doc?.bonus_point_value ?? 0;
}