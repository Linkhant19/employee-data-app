// components/forms/update-othours-form.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UpdateOthoursForm({
    action,
    id,
}: {
    action: (formData: FormData) => Promise<void>;
    id: string;
}) {
    const [othours, setOthours] = useState("");
    const router = useRouter();

    async function handleSubmit(formData: FormData) {
        await action(formData);
        router.refresh(); 
        setOthours("");     
    }

    return (
        <form action={handleSubmit}>
        <input type="hidden" name="id" value={id} />

        <label htmlFor="othours">New Number of Overtime Hours</label>
        <input
            type="text"
            name="othours"
            value={othours}
            onChange={(e) => setOthours(e.target.value)}
        />

        <button type="submit">Update</button>
        </form>
    );
}