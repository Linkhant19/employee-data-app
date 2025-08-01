// components/employee-display.tsx

"use client";

import { EmployeeProps } from "@/types";
import { useState } from "react";
import EmployeePreview from "./employee-preview";
import NewEmployeeForm from "./new-employee-form";
import styled from "styled-components";

const TableDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 1px solid black;
    padding: 5px;
    margin: 20px;
    background-color: #4285F4; // edit note: change this when we have a actual palette
`;

const StyledParagraph = styled.p`
    width: 10%;
    font-size: 1.3em;
    margin: 0;
    text-align: center;
    font-weight: bold;
    color: #222222; // edit note: change this when we have a actual palette
`;

export default function EmployeeDisplay({ inputEmployees } : { inputEmployees: EmployeeProps[] }) {
    const [employees, setEmployees] = useState(inputEmployees);

    return (
        <div>
            <NewEmployeeForm 
                append={(newEmployee: EmployeeProps) => setEmployees([...employees, newEmployee])} 
            />
            <TableDiv>
                <StyledParagraph>Name</StyledParagraph>
                <StyledParagraph>Salary</StyledParagraph>
                <StyledParagraph>Absences</StyledParagraph>
                <StyledParagraph>OT Hours</StyledParagraph>
                <StyledParagraph>Wedding Hours</StyledParagraph>
                <StyledParagraph>Base Pay</StyledParagraph>
                <StyledParagraph>Bonus Amount</StyledParagraph>
                <StyledParagraph>Total Pay</StyledParagraph>
            </TableDiv>
            
            <div>
                {employees.map((employee) => (
                    <EmployeePreview key={employee.id} person={employee} />
                ))}
            </div>
        </div>
    );
}