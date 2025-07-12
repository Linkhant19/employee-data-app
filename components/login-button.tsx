// components/login-button.tsx

'use client';

import { signIn } from "next-auth/react";

export default function LoginButton() {
    return (
        <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="px-4 py-2 bg-blue-600 text-white rounded"
        >
        Sign In with Google
        </button>
    );
}
