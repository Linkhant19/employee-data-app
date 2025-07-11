// components/new-employee-form.tsx

"use client";

import addNewEmployee from "@/lib/addNewEmployee";
import { EmployeeProps } from "@/types";
import { Textarea } from "@mui/joy";
import { Button, FormHelperText, TextField } from "@mui/material";
import { useState } from "react";

export default function NewEmployeeForm({append}: {append: (data: EmployeeProps) => void}) {
    const [name, setName] = useState("");
    const [salary, setSalary] = useState(0);

    return (
        <form onSubmit={async (event) => {
            event.preventDefault();
            addNewEmployee(name, salary)
                .then((newEmployee) => append(newEmployee))
                .catch((err) => console.error(err));
        }}>
            <TextField
                id="name"
                label="Name"
                sx={{ backgroundColor: "white", width: "100%" }}
                variant="outlined"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <TextField
                id="salary"
                label="Salary"
                sx={{ backgroundColor: "white", width: "100%" }}
                variant="outlined"
                value={salary}
                onChange={(event) => setSalary(Number(event.target.value))}
            />
            
            <Button type="submit" variant="contained">Add Employee</Button>
        </form>
    );
}