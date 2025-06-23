// lib/updateName.ts

"use server";

import getCollection, {DATA_COLLECTION} from "@/db";
import {EmployeeProps} from "@/types";

export default async function updateName(
    id: string,
    name: string,
): Promise<void> {

    const employeeCollection = await getCollection(DATA_COLLECTION);
    const employee = await employeeCollection.findOneAndUpdate({id}, {name});

    if (!employee) {
        throw new Error ("Cannot find employee or update");
    }

}