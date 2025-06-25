// components/update-salary-form.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UpdateSalaryForm({
    action,
    id,
}: {
    action: (formData: FormData) => Promise<void>;
    id: string;
}) {
    const [salary, setSalary] = useState("");
    const router = useRouter();

    async function handleSubmit(formData: FormData) {
        await action(formData);
        router.refresh(); 
        setSalary("");     
    }

    return (
        <form action={handleSubmit}>
        <input type="hidden" name="id" value={id} />

        <label htmlFor="salary">New Salary</label>
        <input
            type="text"
            name="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
        />

        <button type="submit">Update</button>
        </form>
    );
}