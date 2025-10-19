// lib/addNewEmployee.ts

"use server";

import getCollection, { DATA_COLLECTION } from "@/db";
import { EmployeeProps } from "@/types";
import { getServerSession } from "next-auth";
import { getAuthOptions } from "@/lib/authOptions";
import { randomUUID } from "crypto";

export default async function addNewEmployee(
    name: string,
    date: string,
    salary: number
): Promise<EmployeeProps> {
    const session = await getServerSession(await getAuthOptions());

    if (!session?.user?.id) {
        throw new Error("Unauthorized");
    }

    const userId = session.user.id;

    const e = {
        name,
        employeeId: randomUUID(), // we want to randomly generate a RFC 4122 version 4 UUID
        salary,
        absences: 0,
        otdays: 0,
        othours: 0,
        weddinghours: 0,
        status: "Active",
        weddingpay: 0,
        bonusmultiplier: 0,
        bonusvalue: 0,
        basepay: 0,
        totalpay: 0,
        date,
        userId, 
    };

    const employeeCollection = await getCollection(DATA_COLLECTION);
    const res = await employeeCollection.insertOne({ ...e });

    if (!res.acknowledged) {
        throw new Error("DB Insert Failed");
    }

    return { ...e, id: res.insertedId.toHexString() };
}
