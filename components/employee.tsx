// components/employee.tsx

import { EmployeeProps } from "@/types";

export default function Employee({ data }: { data: EmployeeProps }) {
    return (
        <>
            <p>{data.name}</p>
            <p>{data.salary}</p>
            <p>{data.absences}</p>
            <p>{data.otdays}</p>
            <p>{data.othours}</p>
            <p>{data.weddinghours}</p>
            <p>{data.status}</p>
        </>
    );

}