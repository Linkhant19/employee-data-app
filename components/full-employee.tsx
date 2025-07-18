// components/full-employee.tsx

// this is the component we will render for each employee with their respective ids.

"use client";

import { useState } from "react";
import { EmployeeProps } from "@/types";

// update forms
import UpdateNameForm from "@/components/forms/update-name-form";
import UpdateSalaryForm from "@/components/forms/update-salary-form";
import UpdateAbsencesForm from "@/components/forms/update-absences-form";
import UpdateOtDaysForm from "@/components/forms/update-otdays-form";
import UpdateOtHoursForm from "@/components/forms/update-othours-form";
import UpdateWeddingHoursForm from "@/components/forms/update-weddinghours-form";
import UpdateStatusForm from "@/components/forms/update-status-form";
import UpdateWeddingPayForm from "@/components/forms/update-weddingpay-form";
import UpdateBonusMultiplierForm from "@/components/forms/update-bonusmultiplier-form";

// update functions
import updateName from "@/lib/updateFunctions/updateName";
import updateSalary from "@/lib/updateFunctions/updateSalary";
import updateAbsences from "@/lib/updateFunctions/updateAbsences";
import updateOtDays from "@/lib/updateFunctions/updateOtdays";
import updateOtHours from "@/lib/updateFunctions/updateOthours";
import updateWeddingHours from "@/lib/updateFunctions/updateWeddingHours";
import updateStatus from "@/lib/updateFunctions/updateStatus";
import updateWeddingPay from "@/lib/updateFunctions/updateWeddingPay";
import updateBonusMultiplier from "@/lib/updateFunctions/updateBonusMultiplier";

// calc functions
import calcBasePay from "@/lib/calcFunctions/calcBasePay";
import calcTotalPay from "@/lib/calcFunctions/calcTotalPay";

// our styles
import { StyledLink, FieldsDiv, StyledDiv0, StyledDiv2, StyledDiv3, FinalPayDiv } from "@/components/styles/styled-components";

export default function FullEmployee({ person, bonusPointValue }: { person: EmployeeProps, bonusPointValue: number }) {
    const [showNameForm, setShowNameForm] = useState(false);
    const [showSalaryForm, setShowSalaryForm] = useState(false);
    const [showAbsencesForm, setShowAbsencesForm] = useState(false);
    const [showOtDaysForm, setShowOtDaysForm] = useState(false);
    const [showOtHoursForm, setShowOtHoursForm] = useState(false);
    const [showWeddingHoursForm, setShowWeddingHoursForm] = useState(false);
    const [showStatusForm, setShowStatusForm] = useState(false);
    const [showWeddingPayForm, setShowWeddingPayForm] = useState(false);
    const [showBonusMultiplierForm, setShowBonusMultiplierForm] = useState(false);

    return (
        <StyledDiv0>
            <StyledLink href={`/`}>← Home</StyledLink>

            <FieldsDiv>
                {/* Name */}
                <FieldToggle
                    label="Name"
                    value={person.name}
                    showForm={showNameForm}
                    toggle={() => setShowNameForm((prev) => !prev)}
                    form={
                        <UpdateNameForm 
                            action={updateName} 
                            id={person.id} 
                            onSuccess={() => setShowNameForm(false)} 
                        />}
                />

                {/* Salary */}
                <FieldToggle
                    label="Salary"
                    value={person.salary}
                    showForm={showSalaryForm}
                    toggle={() => setShowSalaryForm((prev) => !prev)}
                    form={
                        <UpdateSalaryForm 
                            action={updateSalary} 
                            id={person.id} 
                            onSuccess={() => setShowSalaryForm(false)}
                        />}
                />

                {/* Absences */}
                <FieldToggle
                    label="Absences"
                    value={person.absences}
                    showForm={showAbsencesForm}
                    toggle={() => setShowAbsencesForm((prev) => !prev)}
                    form={
                        <UpdateAbsencesForm
                            action={updateAbsences}
                            id={person.id}
                            onSuccess={() => setShowAbsencesForm(false)}
                        />
                    }
                />


                {/* OT Days */}
                <FieldToggle
                    label="OT Days"
                    value={person.otdays}
                    showForm={showOtDaysForm}
                    toggle={() => setShowOtDaysForm((prev) => !prev)}
                    form={
                        <UpdateOtDaysForm 
                            action={updateOtDays} 
                            id={person.id} 
                            onSuccess={() => setShowOtDaysForm(false)}
                        />}
                />

                {/* OT Hours */}
                <FieldToggle
                    label="OT Hours"
                    value={person.othours}
                    showForm={showOtHoursForm}
                    toggle={() => setShowOtHoursForm((prev) => !prev)}
                    form={
                        <UpdateOtHoursForm 
                            action={updateOtHours} 
                            id={person.id} 
                            onSuccess={() => setShowOtHoursForm(false)}
                        />}
                />

                {/* Wedding Hours */}
                <FieldToggle
                    label="Wedding Hours"
                    value={person.weddinghours}
                    showForm={showWeddingHoursForm}
                    toggle={() => setShowWeddingHoursForm((prev) => !prev)}
                    form={
                        <UpdateWeddingHoursForm 
                            action={updateWeddingHours} 
                            id={person.id} 
                            onSuccess={() => setShowWeddingHoursForm(false)}
                        />}
                />

                {/* Status */}
                <FieldToggle
                    label="Status"
                    value={person.status}
                    showForm={showStatusForm}
                    toggle={() => setShowStatusForm((prev) => !prev)}
                    form={
                        <UpdateStatusForm 
                            action={updateStatus} 
                            id={person.id} 
                            onSuccess={() => setShowStatusForm(false)}
                        />}
                />

                {/* Wedding Pay */}
                <FieldToggle
                    label="Wedding Pay"
                    value={person.weddingpay}
                    showForm={showWeddingPayForm}
                    toggle={() => setShowWeddingPayForm((prev) => !prev)}
                    form={
                        <UpdateWeddingPayForm 
                            action={updateWeddingPay} 
                            id={person.id} 
                            onSuccess={() => setShowWeddingPayForm(false)}
                        />}
                />

                {/* Bonus Multiplier */}
                <FieldToggle
                    label="Bonus Multiplier"
                    value={person.bonusmultiplier}
                    showForm={showBonusMultiplierForm}
                    toggle={() => setShowBonusMultiplierForm((prev) => !prev)}
                    form={
                        <UpdateBonusMultiplierForm 
                            action={updateBonusMultiplier} 
                            id={person.id} 
                            onSuccess={() => setShowBonusMultiplierForm(false)}
                        />}
                />
            </FieldsDiv>

            <FinalPayDiv>
                {/* Base Pay calculated with calcBasePay */}
                <p>
                    <strong>Base Pay:</strong> {calcBasePay(person.salary, person.absences)}
                </p>

                {/* Total Pay calculated with calcTotalPay */}
                <p>
                    <strong>Total Pay:</strong> {calcTotalPay(person.salary, person.othours, person.weddinghours, person.weddingpay, person.bonusmultiplier, bonusPointValue, person.absences, calcBasePay(person.salary, person.absences))}
                </p>
            </FinalPayDiv>
            
        </StyledDiv0>
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
        <div>
            <StyledDiv2>
                <p onClick={toggle} style={{ cursor: "pointer" }}>
                <strong>{label}:</strong> {value}
                </p>
                <button onClick={toggle}>{showForm ? "✔" : "✎"}</button>
            </StyledDiv2>
            <StyledDiv3>
                {showForm && form}
            </StyledDiv3>
        </div>
    );
}
