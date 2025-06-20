// components/employee-preview.tsx

import { EmployeeProps } from "@/types";
import Link from "next/link";

export default function EmployeePreview({ person }: { person: EmployeeProps }) {
    return (

        // this is each employee data that I will be mapping in the EmployeeDisplay component
        // I am going to change the styling so each employee looks like a row in a table
        <Link href={`/employees/${person.id}`}>
            <p>{person.name}</p>
            <p>{person.salary}</p>
            <p>{person.absences}</p>
            <p>{person.otdays}</p>
            <p>{person.othours}</p>
            <p>{person.weddinghours}</p>
            <p>{person.status}</p>
        </Link>
    );

}
