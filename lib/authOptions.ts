// lib/authOptions.ts

import GoogleProvider from "next-auth/providers/google";
import { adapter } from "@/lib/mongodbAdapter";
import { AuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";

export const getAuthOptions = async (): Promise<AuthOptions> => {
    return {
        adapter: await adapter(),
        providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        ],
        session: {
            strategy: "jwt", 
        },
        callbacks: {
            async jwt({ token, account }: { token: JWT; account?: any }) {
                console.log("[JWT Callback] Before:", { token, account });
                if (account) {
                    token.id = account.providerAccountId;
                    console.log("[JWT Callback] Assigned token.id =", token.id);
                }
                console.log("[JWT Callback] After:", token);
                return token;
            },
            async session({ session, token }: { session: any; token: any }) {
                console.log("[Session Callback] Before:", { session, token });
                if (session?.user && token?.id) {
                    session.user.id = token.id;
                    console.log("[Session Callback] Assigned session.user.id =", session.user.id);
                }
                console.log("[Session Callback] After:", session);
                return session;
            },
        },
        pages: {
        signIn: "/auth/signin",
        },
        secret: process.env.NEXTAUTH_SECRET,
    };
};