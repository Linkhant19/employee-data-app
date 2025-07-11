// lib/addNewEmployee.ts

"use server";

import getCollection, { DATA_COLLECTION } from "@/db";
import { EmployeeProps } from "@/types";
import { getServerSession } from "next-auth";
import { getAuthOptions } from "@/lib/authOptions";

export default async function addNewEmployee(
    name: string,
    salary: number
): Promise<EmployeeProps> {
    const session = await getServerSession(await getAuthOptions());

    if (!session?.user?.id) {
        throw new Error("Unauthorized");
    }

    const userId = session.user.id;

    const e = {
        name,
        salary,
        absences: 0,
        otdays: 0,
        othours: 0,
        weddinghours: 0,
        status: "Active",
        weddingpay: 0,
        bonusmultiplier: 0,
        basepay: 0,
        totalpay: 0,
        userId, 
    };

    const employeeCollection = await getCollection(DATA_COLLECTION);
    const res = await employeeCollection.insertOne({ ...e });

    if (!res.acknowledged) {
        throw new Error("DB Insert Failed");
    }

    return { ...e, id: res.insertedId.toHexString() };
}
