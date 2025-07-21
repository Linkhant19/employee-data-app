// components/forms/update-month-form.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const MONTHS = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export default function UpdateMonthForm({
    action,
    id,
    onSuccess,
}: {
    action: (formData: FormData) => Promise<void>;
    id: string;
    onSuccess: () => void;
}) {
    const [month, setMonth] = useState("");
    const router = useRouter();
  
    async function handleSubmit(formData: FormData) {
        await action(formData);
        router.refresh();
        setMonth("");
        onSuccess();
    }
  
    return (
        <form action={handleSubmit}>
            <input type="hidden" name="id" value={id} />
    
            <label htmlFor="name">Select Month</label>
            <select
            name="name"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            >
            <option value="" disabled>Select a month</option>
            {MONTHS.map((m) => (
                <option key={m} value={m}>{m}</option>
            ))}
            </select>
    
            <button type="submit" className="hover:cursor-pointer">Update</button>
        </form>
    );
  }