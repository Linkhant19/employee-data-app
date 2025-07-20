// components/forms/update-name-form.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UpdateNameForm({
    action,
    id,
    onSuccess,
}: {
    action: (formData: FormData) => Promise<void>;
    id: string;
    onSuccess: () => void;
}) {
    const [name, setName] = useState("");
    const router = useRouter();

    async function handleSubmit(formData: FormData) {
        await action(formData);
        router.refresh(); 
        setName(""); 
        onSuccess();    
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

        <button type="submit" className="hover:cursor-pointer">Update</button>
        </form>
    );
}