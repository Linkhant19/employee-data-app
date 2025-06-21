// components/full-employee.tsx

import { EmployeeProps } from "@/types";
import Employee from "./employee";

export default function FullEmployee({ person }: { person: EmployeeProps }) {
    return (
        <div>
            <Employee data={person} />
        </div>
    );
}