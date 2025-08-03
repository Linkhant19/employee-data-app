// lib/getTotalBonusPoints.ts
"use server";

import getCollection, { DATA_COLLECTION } from "@/db";

export default async function getTotalBonusPoints(
    userId: string,
    date: string
    ): Promise<number> {
    const col = await getCollection(DATA_COLLECTION);

    const agg = await col
        .aggregate([
        { $match: { userId, date } },
        {
            $project: {
            // Safely coerce to numbers; fallback to 0 on error/null
            salaryNum: {
                $convert: { input: "$salary", to: "double", onError: 0, onNull: 0 },
            },
            bonusMultiplierNum: {
                $convert: {
                input: "$bonusmultiplier",
                to: "double",
                onError: 0,
                onNull: 0,
                },
            },
            },
        },
        {
            $project: {
            points: {
                $multiply: [{ $divide: ["$salaryNum", 100] }, "$bonusMultiplierNum"],
            },
            },
        },
        { $group: { _id: null, total: { $sum: "$points" } } },
        ])
        .toArray();

    return agg.length ? agg[0].total : 0;
}
