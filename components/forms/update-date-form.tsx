// components/forms/update-date-form.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UpdateDateForm({
    action,
    id,
    onSuccess,
}: {
    action: (formData: FormData) => Promise<void>;
    id: string;
    onSuccess: () => void;
}) {
    const [date, setDate] = useState("");
    const router = useRouter();

    async function handleSubmit(formData: FormData) {
        await action(formData);
        router.refresh(); 
        setDate(""); 
        onSuccess();    
    }

    return (
        <form action={handleSubmit}>
        <input type="hidden" name="id" value={id} />

        <label htmlFor="name">New Date</label>
        <input
            type="text"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="MM-YYYY" 
        />

        <button type="submit" className="hover:cursor-pointer">Update</button>
        </form>
    );
}