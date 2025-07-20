// components/forms/update-bonusvalue-form.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UpdateBonusValueForm({
    action,
    id,
    onSuccess,
}: {
    action: (formData: FormData) => Promise<void>;
    id: string;
    onSuccess: () => void;
}) {
    const [bonusvalue, setBonusValue] = useState("");
    const router = useRouter();

    async function handleSubmit(formData: FormData) {
        await action(formData);
        router.refresh(); 
        setBonusValue(""); 
        onSuccess();    
    }

    return (
        <form action={handleSubmit}>
        <input type="hidden" name="id" value={id} />

        <label htmlFor="bonusmultiplier">New Bonus Value</label>
        <input
            type="text"
            name="bonusvalue"
            value={bonusvalue}
            onChange={(e) => setBonusValue(e.target.value)}
        />

        <button type="submit" className="hover:cursor-pointer">Update</button>
        </form>
    );
}