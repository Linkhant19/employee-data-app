// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import { getAuthOptions } from "@/lib/authOptions";

const handler = async (...args: any) => {
    const authOptions = await getAuthOptions();
    return NextAuth(authOptions)(...args);
};

export { handler as GET, handler as POST };
