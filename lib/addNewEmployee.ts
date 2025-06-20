// lib/addNewEmployee.ts

"use server";
import getCollection, {DATA_COLLECTION} from "@/db";
import {EmployeeProps} from "@/types"

export default async function addNewEmployee(
    name: string,
    salary: number,
): Promise<EmployeeProps> {
    console.log("Adding New Employee");
    const e = {
        name: name,
        salary: salary,
        absences: 0,
        otdays: 0,
        othours: 0,
        weddinghours: 0,
        status: "",
    }

    const employeeCollection = await getCollection(DATA_COLLECTION);
    const res = await employeeCollection.insertOne({...e})

    if (!res.acknowledged) {
        throw new Error("DB Insert Failed");
    }

    return {...e, id: res.insertedId.toHexString()};
}