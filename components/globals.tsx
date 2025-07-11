// components/globals.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Globals({
    initialValue,
    action,
    }: {
    initialValue: number;
    action: (formData: FormData) => Promise<void>;
    }) {
    const [value, setValue] = useState(initialValue.toString());
    const [showForm, setShowForm] = useState(false);
    const router = useRouter();

    async function handleSubmit(formData: FormData) {
        await action(formData);
        router.refresh(); // re-fetches updated value
        setShowForm(false);
    }

    return (
        <div>
        <h2 onClick={() => setShowForm((prev) => !prev)} style={{ cursor: "pointer" }}>
            Bonus Point Value: {initialValue}
        </h2>

        {showForm && (
            <form action={handleSubmit}>
            <input
                type="number"
                name="bonus"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit">Update</button>
            </form>
        )}
        </div>
    );
}