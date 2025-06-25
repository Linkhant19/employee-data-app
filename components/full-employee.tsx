// components/full-employee.tsx

"use client";

import { useState } from "react";
import { EmployeeProps } from "@/types";
import updateName from "@/lib/updateName";
import UpdateNameForm from "@/components/update-name-form";

export default function FullEmployee({ person }: { person: EmployeeProps }) {
    const [showForm, setShowForm] = useState(false);

    function toggleForm() {
        setShowForm((prev) => !prev);
    }

    return (
        <div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <p
                    onClick={toggleForm}
                    style={{ cursor: "pointer", fontWeight: "bold" }}
                >
                    {person.name}
                </p>
                <button onClick={toggleForm}>
                    {showForm ? "Cancel" : "Update"}
                </button>
            </div>

            

            <p>{person.salary}</p>
            <p>{person.absences}</p>
            <p>{person.otdays}</p>
            <p>{person.othours}</p>
            <p>{person.weddinghours}</p>
            <p>{person.status}</p>

            {showForm && (
                <UpdateNameForm action={updateName} id={person.id} />
            )}
        </div>
    );
}
