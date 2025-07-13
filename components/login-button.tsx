// components/login-button.tsx

'use client';

import { signIn } from "next-auth/react";
import { SignOutButton } from "./styles/styled-components";

export default function LoginButton() {
    return (
        <SignOutButton onClick={() => signIn("google", { callbackUrl: "/" })}> Sign In with Google </SignOutButton>
    );
}
