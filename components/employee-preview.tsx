// components/employee-preview.tsx

import { EmployeeProps } from "@/types";
import Link from "next/link";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    margin: 20px;
`;

const StyledParagraph = styled.p`
    width: 10%;
    font-size: 1em;
    margin: 0;
    text-align: center;
`;

export default function EmployeePreview({ person }: { person: EmployeeProps }) {
    return (

        // this is each employee data that I will be mapping in the EmployeeDisplay component
        // I am going to change the styling so each employee looks like a row in a table
        <Link href={`/employees/${person.id}`} style={{ textDecoration: "none", cursor: "pointer" }}>
            <StyledDiv>
                <StyledParagraph>{person.name}</StyledParagraph>
                <StyledParagraph>{person.salary}</StyledParagraph>
                <StyledParagraph>{person.absences}</StyledParagraph>
                <StyledParagraph>{person.othours}</StyledParagraph>
                <StyledParagraph>{person.weddinghours}</StyledParagraph>
                <StyledParagraph>{String(person.basepay)}</StyledParagraph>  
                <StyledParagraph>{person.totalpay - person.basepay}</StyledParagraph>
                <StyledParagraph>{person.totalpay}</StyledParagraph>
            </StyledDiv>     
        </Link>
    );

}
