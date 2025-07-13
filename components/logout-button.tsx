// components/logout-button.tsx

'use client';

import { signOut } from "next-auth/react";
import { SignOutButton } from "./styles/styled-components";

export default function LogoutButton() {
    return (
        <SignOutButton onClick={() => signOut({ callbackUrl: "/" })}> Sign Out </SignOutButton>
    );
}
