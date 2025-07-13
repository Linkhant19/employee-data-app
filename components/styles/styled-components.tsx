// components/styles/styled-components.tsx

"use client"

import styled from "styled-components";
import Link from "next/link";
import { TextField } from "@mui/material";

export const SignOutButton = styled.button`
    border: 1px solid white;
    padding: 5px 20px;
    border-radius: 7.5px;
`;

export const StyledTitle1 = styled.h1`
    font-size: 2em;
`;

export const HeaderDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 50px;
`;

export const TextFieldDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const StyledImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

export const StyledLink = styled(Link)`
    font-size: 1.5em;
    margin: 50px 20px;
`;

export const StyledTextField = styled(TextField)`
    background-color: white;
    width: 50%;
    border: 1px solid black;
    border-radius: 5px;
    margin: 10px;
`;

export const AddButton = styled.button`
    background-color: darkblue;
    width: 20%;
    height: 5%;
    border-radius: 5px;
    margin: 0 0 20px 0;

    &:hover {
        cursor: pointer;
        background-color: navy;
    }
`;