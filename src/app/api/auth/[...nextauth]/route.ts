import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const nextauthconfig: NextAuthOptions = {
  // إضافة مفتاح السر هنا أساسي لربط التشفير مع ملف البيئة
  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    Credentials({
      name: "fresh-cart",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const res = await fetch(
          "https://ecommerce.routemisr.com/api/v1/auth/signin",
          {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const finaldata = await res.json();
        console.log("final", finaldata);

        if (res.ok && finaldata.message === "success") {
          return {
            id: finaldata.user?._id || finaldata.user?.email || "1",
            name: finaldata.user?.name,
            email: finaldata.user?.email,
            token: finaldata.token,
          } as any;
        }

        return null;
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
        token.accessToken = (user as any).token;
      }
      return token;
    },

    async session({ session, token }) {
      if (token && session) {
        (session as any).user = token.user;
        (session as any).accessToken = token.accessToken;
      }
      return session;
    },
  },
};

const handler = NextAuth(nextauthconfig);

export { handler as GET, handler as POST };