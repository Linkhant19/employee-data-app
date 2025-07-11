// components/forms/update-status-form.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UpdateStatusForm({
    action,
    id,
}: {
    action: (formData: FormData) => Promise<void>;
    id: string;
}) {
    const [status, setStatus] = useState("");
    const router = useRouter();

    async function handleSubmit(formData: FormData) {
        await action(formData);
        router.refresh(); 
        setStatus("");     
    }

    return (
        <form action={handleSubmit}>
        <input type="hidden" name="id" value={id} />

        <label htmlFor="status">New Status</label>
        <input
            type="text"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
        />

        <button type="submit">Update</button>
        </form>
    );
}