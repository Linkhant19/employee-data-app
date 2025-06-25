// components/update-name-form.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UpdateNameForm({
    action,
    id,
}: {
    action: (formData: FormData) => Promise<void>;
    id: string;
}) {
    const [name, setName] = useState("");
    const router = useRouter();

    async function handleSubmit(formData: FormData) {
        await action(formData);
        router.refresh(); 
        setName("");     
    }

    return (
        <form action={handleSubmit}>
        <input type="hidden" name="id" value={id} />

        <label htmlFor="name">New Name</label>
        <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />

        <button type="submit">Update</button>
        </form>
    );
}