// components/forms/update-weddingpay-form.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UpdateWeddingPayForm({
    action,
    id,
}: {
    action: (formData: FormData) => Promise<void>;
    id: string;
}) {
    const [weddingpay, setWeddingPay] = useState("");
    const router = useRouter();

    async function handleSubmit(formData: FormData) {
        await action(formData);
        router.refresh(); 
        setWeddingPay("");     
    }

    return (
        <form action={handleSubmit}>
        <input type="hidden" name="id" value={id} />

        <label htmlFor="weddingpay">New Wedding Pay</label>
        <input
            type="text"
            name="weddingpay"
            value={weddingpay}
            onChange={(e) => setWeddingPay(e.target.value)}
        />

        <button type="submit">Update</button>
        </form>
    );
}