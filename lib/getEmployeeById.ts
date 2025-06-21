// lib/getEmployeeById.ts

import getCollection, {DATA_COLLECTION} from "@/db";
import {ObjectId} from "mongodb";
import {EmployeeProps} from "@/types";

export default async function getEmployeeById(id: string) : Promise<EmployeeProps | null> {

    const employeeId = ObjectId.createFromHexString(id);

    const employeeCollection = await getCollection(DATA_COLLECTION);

    const data = await employeeCollection.findOne({ _id: employeeId})

    if (data === null) {
        return null
    }

    const employee = {
        id: id,
        name: data.name,
        salary: data.salary,
        absences: data.absences,
        otdays: data.otdays,
        othours: data.othours,
        weddinghours: data.weddinghours,
        status: data.status,
    };

    return employee;
}

