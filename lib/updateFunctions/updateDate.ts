// lib/updateFunctions/updateDate.ts

"use server";

import getCollection, { DATA_COLLECTION } from "@/db";
import { EmployeeProps } from "@/types";
import { ObjectId } from "mongodb";
import calcBasePay from "@/lib/calcFunctions/calcBasePay";
import calcTotalPay from "@/lib/calcFunctions/calcTotalPay";

import { getServerSession } from "next-auth";
import { getAuthOptions } from "@/lib/authOptions";

export default async function updateDate(formData: FormData): Promise<string> {
    const id = formData.get("id") as string;
    const date = formData.get("date") as string;

    const collection = await getCollection(DATA_COLLECTION);
    const person = await collection.findOne({ _id: new ObjectId(id) });
    const {
        employeeId,
        name,
        salary,
        status,
    } = person as unknown as EmployeeProps;

    const existing = await collection.findOne({ employeeId, date: date });

    const session = await getServerSession(await getAuthOptions());
    if (!session?.user?.id) {
        throw new Error("Unauthorized");
    }

    const absences = 0;
    const othours = 0;
    const weddinghours = 0;
    const weddingpay = 0;
    const bonusmultiplier = person?.bonusmultiplier;
    const bonusvalue = 0;
    const totalbonuspoints = 0;

    const basepay = await calcBasePay(salary, absences, date, othours, weddinghours, weddingpay);
    const totalpay = await calcTotalPay(salary, bonusmultiplier, bonusvalue, totalbonuspoints, absences, date, basepay);

    const newDoc = {
        name,
        employeeId,
        salary,
        status,
        date: date,
        absences,
        otdays: 0,
        othours,
        weddinghours,
        weddingpay,
        bonusmultiplier,
        bonusvalue,
        basepay,
        totalpay,
        userId: session.user.id
    };

    const result = await collection.insertOne(newDoc);
    if (!result.insertedId) throw new Error("Insert failed");

    return result.insertedId.toHexString();
}