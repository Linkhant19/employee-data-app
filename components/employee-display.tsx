// components/employee-display.tsx

"use client";

import { EmployeeProps } from "@/types";
import { useState } from "react";
import EmployeePreview from "./employee-preview";
import NewEmployeeForm from "./new-employee-form";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid black;
    padding: 5px;
`;

const StyledParagraph = styled.p`
    width: 10%;
    font-size: 1.3em;
    margin: 0;
`;

export default function EmployeeDisplay({ inputEmployees } : { inputEmployees: EmployeeProps[] }) {
    const [employees, setEmployees] = useState(inputEmployees);

    return (
        <div>
            <NewEmployeeForm 
                append={(newEmployee: EmployeeProps) => setEmployees([...employees, newEmployee])} 
            />
            <StyledDiv>
                <StyledParagraph>Name</StyledParagraph>
                <StyledParagraph>Salary</StyledParagraph>
                <StyledParagraph>Absences</StyledParagraph>
                <StyledParagraph>OT Days</StyledParagraph>
                <StyledParagraph>OT Hours</StyledParagraph>
                <StyledParagraph>Wedding Hours</StyledParagraph>
                <StyledParagraph>Total Pay</StyledParagraph>
                <StyledParagraph>Status</StyledParagraph>
            </StyledDiv>
            
            <div>
                {employees.map((employee) => (
                    <EmployeePreview key={employee.id} person={employee} />
                ))}
            </div>
        </div>
    );
}