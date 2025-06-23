// components/update-name-form.tsx

"use client";

import {Button, TextField} from "@mui/material";
import updateName from "@/lib/updateName";
import {useState} from 'react';
import { EmployeeProps } from "@/types";

export default function UpdateNameForm({append}: {append: EmployeeProps }) {
    const [name, setName] = useState("");

    return (
        <form onSubmit = {async (event) => {
            event.preventDefault();
            updateName(append.id, name)
            .then((newName) => newName)
            .catch((err) => console.error(err))
        }}>

        <TextField id="name"
            label="Name"
            sx={{ backgroundColor: "white", width: "100%" }}
            variant="outlined"
            value={name}
            onChange={(event) => setName(event.target.value)}
        />

        <Button type="submit" variant="contained">Update</Button>
        </form>
    );
}