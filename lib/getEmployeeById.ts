// lib/getEmployeeById.ts

import getCollection, {DATA_COLLECTION} from "@/db";
import {ObjectId} from "mongodb";
import {EmployeeProps} from "@/types";

export default async function getEmployeeById(
    id: string,
    userId: string
): Promise<EmployeeProps | null> {
    const employeeCollection = await getCollection(DATA_COLLECTION);
  
    const data = await employeeCollection.findOne({
        _id: new ObjectId(id),
        userId: userId,
    });
  
    if (!data) return null;
  
    const employee: EmployeeProps = {
        id,
        name: data.name,
        salary: data.salary,
        absences: data.absences,
        otdays: data.otdays,
        othours: data.othours,
        weddinghours: data.weddinghours,
        status: data.status,
        weddingpay: data.weddingpay,
        bonusmultiplier: data.bonusmultiplier,
        basepay: data.basepay,
        totalpay: data.totalpay,
    };
  
    return employee;
}

