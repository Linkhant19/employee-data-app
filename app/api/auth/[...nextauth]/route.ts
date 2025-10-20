// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import { getAuthOptions } from "@/lib/authOptions";
import { NextRequest } from "next/server";

const handler = async (req: NextRequest, ctx: { params: { nextauth: string[] }}) => {
  const authOptions = await getAuthOptions();
  const authHandler = NextAuth(authOptions);
  return authHandler(req, ctx);
};

export { handler as GET, handler as POST };
