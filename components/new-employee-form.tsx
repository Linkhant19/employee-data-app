// components/new-employee-form.tsx

"use client";

import addNewEmployee from "@/lib/addNewEmployee";
import { EmployeeProps } from "@/types";
import { useState } from "react";
import { StyledTextField, TextFieldDiv, AddButton } from "./styles/styled-components";

export default function NewEmployeeForm({append}: {append: (data: EmployeeProps) => void}) {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [salary, setSalary] = useState(0);

    return (
        <form onSubmit={async (event) => {
            event.preventDefault();
            addNewEmployee(name, date, salary)
                .then((newEmployee) => append(newEmployee))
                .catch((err) => console.error(err));
        }}>
            <TextFieldDiv>
                <StyledTextField
                    id="name"
                    label="Name"
                    variant="outlined"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />

                <StyledTextField
                    id="date"
                    label="Date"
                    variant="outlined"
                    onChange={(event) => setDate(event.target.value)}
                />

                <StyledTextField
                    id="salary"
                    label="Salary"
                    variant="outlined"
                    value={salary}
                    onChange={(event) => setSalary(Number(event.target.value))}
                />
                <AddButton type="submit">Add</AddButton>
            </TextFieldDiv>
            
            
          
        </form>
    );
}