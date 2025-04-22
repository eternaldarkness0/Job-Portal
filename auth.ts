import { NextAuthOptions } from 'next-auth';
import GooglProvider from "next-auth/providers/google";

export const authOptions:NextAuthOptions = {
    providers: [
        GooglProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
} satisfies NextAuthOptions;