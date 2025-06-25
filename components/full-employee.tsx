"use client";

import { useState } from "react";
import { EmployeeProps } from "@/types";
import UpdateNameForm from "@/components/forms/update-name-form";
import UpdateSalaryForm from "@/components/forms/update-salary-form";
import UpdateAbsencesForm from "@/components/forms/update-absences-form";
import UpdateOtDaysForm from "@/components/forms/update-otdays-form";
import UpdateOtHoursForm from "@/components/forms/update-othours-form";
import UpdateWeddingHoursForm from "@/components/forms/update-weddinghours-form";
import UpdateStatusForm from "@/components/forms/update-status-form";
import updateName from "@/lib/updateFunctions/updateName";
import updateSalary from "@/lib/updateFunctions/updateSalary";
import updateAbsences from "@/lib/updateFunctions/updateAbsences";
import updateOtDays from "@/lib/updateFunctions/updateOtdays";
import updateOtHours from "@/lib/updateFunctions/updateOthours";
import updateWeddingHours from "@/lib/updateFunctions/updateWeddingHours";
import updateStatus from "@/lib/updateFunctions/updateStatus";

export default function FullEmployee({ person }: { person: EmployeeProps }) {
    const [showNameForm, setShowNameForm] = useState(false);
    const [showSalaryForm, setShowSalaryForm] = useState(false);
    const [showAbsencesForm, setShowAbsencesForm] = useState(false);
    const [showOtDaysForm, setShowOtDaysForm] = useState(false);
    const [showOtHoursForm, setShowOtHoursForm] = useState(false);
    const [showWeddingHoursForm, setShowWeddingHoursForm] = useState(false);
    const [showStatusForm, setShowStatusForm] = useState(false);

    return (
        <div>
        {/* Name */}
        <FieldToggle
            label="Name"
            value={person.name}
            showForm={showNameForm}
            toggle={() => setShowNameForm((prev) => !prev)}
            form={<UpdateNameForm action={updateName} id={person.id} />}
        />

        {/* Salary */}
        <FieldToggle
            label="Salary"
            value={person.salary}
            showForm={showSalaryForm}
            toggle={() => setShowSalaryForm((prev) => !prev)}
            form={<UpdateSalaryForm action={updateSalary} id={person.id} />}
        />

        {/* Absences */}
        <FieldToggle
            label="Absences"
            value={person.absences}
            showForm={showAbsencesForm}
            toggle={() => setShowAbsencesForm((prev) => !prev)}
            form={<UpdateAbsencesForm action={updateAbsences} id={person.id} />}
        />

        {/* OT Days */}
        <FieldToggle
            label="OT Days"
            value={person.otdays}
            showForm={showOtDaysForm}
            toggle={() => setShowOtDaysForm((prev) => !prev)}
            form={<UpdateOtDaysForm action={updateOtDays} id={person.id} />}
        />

        {/* OT Hours */}
        <FieldToggle
            label="OT Hours"
            value={person.othours}
            showForm={showOtHoursForm}
            toggle={() => setShowOtHoursForm((prev) => !prev)}
            form={<UpdateOtHoursForm action={updateOtHours} id={person.id} />}
        />

        {/* Wedding Hours */}
        <FieldToggle
            label="Wedding Hours"
            value={person.weddinghours}
            showForm={showWeddingHoursForm}
            toggle={() => setShowWeddingHoursForm((prev) => !prev)}
            form={<UpdateWeddingHoursForm action={updateWeddingHours} id={person.id} />}
        />

        {/* Status */}
        <FieldToggle
            label="Status"
            value={person.status}
            showForm={showStatusForm}
            toggle={() => setShowStatusForm((prev) => !prev)}
            form={<UpdateStatusForm action={updateStatus} id={person.id} />}
        />
        </div>
    );
}

function FieldToggle({
    label,
    value,
    showForm,
    toggle,
    form,
}: {
    label: string;
    value: string | number;
    showForm: boolean;
    toggle: () => void;
    form: React.ReactNode;
}) {
    return (
        <div style={{ marginBottom: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <p onClick={toggle} style={{ cursor: "pointer" }}>
            <strong>{label}:</strong> {value}
            </p>
            <button onClick={toggle}>{showForm ? "Cancel" : "Update"}</button>
        </div>
        {showForm && form}
        </div>
    );
}
