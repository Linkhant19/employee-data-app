// components/forms/update-bonusmultiplier-form.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UpdateBonusMultiplierForm({
    action,
    id,
    onSuccess,
}: {
    action: (formData: FormData) => Promise<void>;
    id: string;
    onSuccess: () => void;
}) {
    const [bonusmultiplier, setBonusMultiplier] = useState("");
    const router = useRouter();

    async function handleSubmit(formData: FormData) {
        await action(formData);
        router.refresh(); 
        setBonusMultiplier(""); 
        onSuccess();    
    }

    return (
        <form action={handleSubmit}>
        <input type="hidden" name="id" value={id} />

        <label htmlFor="bonusmultiplier">New Bonus Multiplier</label>
        <input
            type="text"
            name="bonusmultiplier"
            value={bonusmultiplier}
            onChange={(e) => setBonusMultiplier(e.target.value)}
        />

        <button type="submit" className="hover:cursor-pointer">Update</button>
        </form>
    );
}