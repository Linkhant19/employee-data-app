// lib/auth.ts
import { getServerSession } from "next-auth";
import { getAuthOptions } from "./authOptions"; 

export async function getSession() {
    const authOptions = await getAuthOptions();
    return await getServerSession(authOptions);
}
