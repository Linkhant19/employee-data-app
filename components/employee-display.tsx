// components/employee-display.tsx

"use client";

import { EmployeeProps } from "@/types";
import { useState } from "react";
import EmployeePreview from "./employee-preview";
import NewEmployeeForm from "./new-employee-form";

export default function EmployeeDisplay({ inputEmployees } : { inputEmployees: EmployeeProps[] }) {
    const [employees, setEmployees] = useState(inputEmployees);

    return (
        <div>
            <NewEmployeeForm 
                append={(newEmployee: EmployeeProps) => setEmployees([...employees, newEmployee])} 
            />
            <div>
                {employees.map((employee) => (
                    <EmployeePreview key={employee.id} person={employee} />
                ))}
            </div>
        </div>
    );
}