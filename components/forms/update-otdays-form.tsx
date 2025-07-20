// components/forms/update-otdays-form.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UpdateOtdaysForm({
    action,
    id,
    onSuccess,
}: {
    action: (formData: FormData) => Promise<void>;
    id: string;
    onSuccess: () => void;
}) {
    const [otdays, setOtdays] = useState("");
    const router = useRouter();

    async function handleSubmit(formData: FormData) {
        await action(formData);
        router.refresh(); 
        setOtdays("");     
        onSuccess();
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

        <button type="submit" className="hover:cursor-pointer">Update</button>
        </form>
    );
}