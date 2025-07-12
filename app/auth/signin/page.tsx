"use client";

import { signIn } from "next-auth/react";

export default function SignInPage() {
    const handleSignIn = async () => {
        await signIn("google", { callbackUrl: "/" });
    };

    return (
        <div style={{ textAlign: "center", padding: "2rem" }}>
        <h1>Welcome</h1>
        <p>Please sign in to access your dashboard</p>
        <button
            onClick={handleSignIn}
            style={{
            marginTop: "1rem",
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            borderRadius: "0.5rem",
            backgroundColor: "#4285F4",
            color: "white",
            border: "none",
            cursor: "pointer",
            }}
        >
            Sign in with Google
        </button>
        </div>
    );
}
