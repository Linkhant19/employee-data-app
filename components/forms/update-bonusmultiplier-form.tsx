// components/forms/update-bonusmultiplier-form.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UpdateBonusMultiplierForm({
    action,
    id,
}: {
    action: (formData: FormData) => Promise<void>;
    id: string;
}) {
    const [bonusMultiplier, setBonusMultiplier] = useState("");
    const router = useRouter();

    async function handleSubmit(formData: FormData) {
        await action(formData);
        router.refresh(); 
        setBonusMultiplier("");     
    }

    return (
        <form action={handleSubmit}>
        <input type="hidden" name="id" value={id} />

        <label htmlFor="bonusmultiplier">New Bonus Multiplier</label>
        <input
            type="text"
            name="bonusmultiplier"
            value={bonusMultiplier}
            onChange={(e) => setBonusMultiplier(e.target.value)}
        />

        <button type="submit">Update</button>
        </form>
    );
}