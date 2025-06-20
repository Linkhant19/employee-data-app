"use server";
import getCollection, {DATA_COLLECTION} from "@/db";
import {EmployeeProps} from "@/types"

export default async function addNewEmployee(
    id: string,
    name:string,
): Promise<EmployeeProps> {
    console.log("Adding New Employee");
    const e = {
        id: id,
        name: name,
        salary: 0,
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