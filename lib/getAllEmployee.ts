// lib/getAllEmployee.ts

import getCollection, {DATA_COLLECTION} from "@/db";
import {EmployeeProps} from "@/types";

export default async function getAllEmployee(userId: string): Promise<EmployeeProps[]> {
    const employeeCollection = await getCollection(DATA_COLLECTION);
  
    const data = await employeeCollection.find({ userId: userId }).toArray();
  
    const employees: EmployeeProps[] = data.map((e) => ({
        id: e._id.toHexString(),
        name: e.name,
        salary: e.salary,
        absences: e.absences,
        otdays: e.otdays,
        othours: e.othours,
        weddinghours: e.weddinghours,
        status: e.status,
        weddingpay: e.weddingpay,
        bonusmultiplier: e.bonusmultiplier,
        basepay: e.basepay,
        totalpay: e.totalpay,
    }));
  
    return employees.reverse();
  }
  