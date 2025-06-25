// components/update-otdays-form.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UpdateOtdaysForm({
    action,
    id,
}: {
    action: (formData: FormData) => Promise<void>;
    id: string;
}) {
    const [otdays, setOtdays] = useState("");
    const router = useRouter();

    async function handleSubmit(formData: FormData) {
        await action(formData);
        router.refresh(); 
        setOtdays("");     
    }

    return (
        <form action={handleSubmit}>
        <input type="hidden" name="id" value={id} />

        <label htmlFor="otdays">New Number of Overtime Hours</label>
        <input
            type="text"
            name="otdays"
            value={otdays}
            onChange={(e) => setOtdays(e.target.value)}
        />

        <button type="submit">Update</button>
        </form>
    );
}