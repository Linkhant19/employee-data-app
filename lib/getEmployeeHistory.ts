// lib/getEmployeeHistory.ts
"use server";

import getCollection, { DATA_COLLECTION } from "@/db";

export default async function getEmployeeHistory(employeeId: string) {
    const collection = await getCollection(DATA_COLLECTION);
    const history = await collection
        .find({ employeeId }) 
        .sort({ date: 1 })   
        .toArray();

    return history.map(entry => ({
        id: entry._id.toHexString(),
        date: entry.date,
        totalpay: entry.totalpay,
    }));
}
