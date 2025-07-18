// components/forms/update-absences-form.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function UpdateAbsencesForm({
    action,
    id,
    onSuccess,
}: {
    action: (formData: FormData) => Promise<void>;
    id: string;
    onSuccess: () => void;
}) {
    const [absences, setAbsences] = useState("");
    const router = useRouter();

    async function handleSubmit(formData: FormData) {
        await action(formData);
        router.refresh(); 
        setAbsences(""); 
        onSuccess();    
    }

    return (
        <form action={handleSubmit}>
        <input type="hidden" name="id" value={id} />

        <label htmlFor="absences">New Number of Absences</label>
        <input
            type="text"
            name="absences"
            value={absences}
            onChange={(e) => setAbsences(e.target.value)}
        />

        <button type="submit" className="hover:cursor-pointer">Update</button>
        </form>
    );
}