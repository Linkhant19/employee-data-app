// components/forms/update-weddinghours-form.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UpdateWeddingHoursForm({
    action,
    id,
}: {
    action: (formData: FormData) => Promise<void>;
    id: string;
}) {
    const [weddinghours, setWeddingHours] = useState("");
    const router = useRouter();

    async function handleSubmit(formData: FormData) {
        await action(formData);
        router.refresh(); 
        setWeddingHours("");     
    }

    return (
        <form action={handleSubmit}>
        <input type="hidden" name="id" value={id} />

        <label htmlFor="weddinghours">New Number of Wedding Hours</label>
        <input
            type="text"
            name="weddinghours"
            value={weddinghours}
            onChange={(e) => setWeddingHours(e.target.value)}
        />

        <button type="submit">Update</button>
        </form>
    );
}