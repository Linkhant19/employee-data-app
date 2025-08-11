// components/employee-display.tsx

"use client";

import { EmployeeProps } from "@/types";
import { useState, useMemo } from "react";
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
    const [dateFilter, setDateFilter] = useState<string>(""); // I would expect like a "07-2025"

    // We will build a distinct list of dates that exist in the data to power the dropdown
    // using this method since we are not expecting a lot of data entry
    // if we have to scale, we can look into server-side filtering
    const availableDates = useMemo(
        () => Array.from(new Set(employees.map(e => e.date).filter(Boolean))).sort(),
        [employees]
    );

    const filtered = useMemo(() => {
        if (!dateFilter) return employees;
        return employees.filter(e => e.date === dateFilter);
    }, [employees, dateFilter]);
    

    return (
        <div>
            <div style={{ display: "flex", gap: 12, alignItems: "center", margin: "16px 20px" }}>
                <label>
                <span style={{ marginRight: 8, fontWeight: 600 }}>Filter by month:</span>
                <select
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                    style={{ padding: 6 }}
                >
                    <option value="">All</option>
                    {availableDates.map(d => (
                    <option key={d} value={d}>{d}</option>
                    ))}
                </select>
                </label>
                {dateFilter && (
                <button onClick={() => setDateFilter("")} style={{ padding: "6px 10px", cursor: "pointer" }}>
                    Clear
                </button>
                )}
            </div>

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
                {filtered.map((employee) => (
                    <EmployeePreview key={employee.id} person={employee} />
                ))}
                {filtered.length === 0 && (
                    <p style={{ margin: 20 }}>No entries for {dateFilter}.</p>
                )}
            </div>
        </div>
    );
}