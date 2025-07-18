// lib/updateFunctions/updateAbsences.ts

"use server";

import getCollection, { DATA_COLLECTION } from "@/db";
import { ObjectId } from "mongodb";
import calcBasePay from "@/lib/calcFunctions/calcBasePay";

export default async function updateAbsences(formData: FormData): Promise<void> {
    const id = formData.get("id") as string;
    const absences = formData.get("absences") as string;
    const totalpay = formData.get("totalpay") as string;
    

    // get salary from person's document
    const collection = await getCollection(DATA_COLLECTION);
    const person = await collection.findOne({ _id: new ObjectId(id) });
    const salary = person?.salary;

    // const collection = await getCollection(DATA_COLLECTION);

    const result = await collection.updateOne(
        { _id: new ObjectId(id) }, // because I am using ObjectId instead of string
        { $set: { absences } }
    );

    if (result.modifiedCount === 0) {
        throw new Error("Update failed: Employee not found.");
    }

    console.log("Salary:", salary);
    console.log("Absences:", absences);

    console.log(Number(salary), Number(absences));
    const basepay = await calcBasePay(Number(salary), Number(absences));
    console.log("Calculated basepay:", basepay);
    const result1 = await collection.updateOne(
        { _id: new ObjectId(id) }, 
        { $set: { basepay } }
    );

    if (result1.modifiedCount === 0) {
        throw new Error("Update failed: Employee not found.");
    }
}