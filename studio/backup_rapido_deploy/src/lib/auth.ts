import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // SENHA MESTRA ALQUIMISTA 2024
        if (credentials?.password === "alchemista_2024") {
          return {
            id: "1",
            name: "ANATHERON Supremo",
            email: "toloczkocoutinho@gmail.com", // SEU EMAIL AQUI
            quantumLevel: 11,
            resonance: 98.7
          };
        }
        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.quantumLevel = user.quantumLevel;
        token.resonance = user.resonance;
      }
      return token;
    },
    async session({ session, token }: any) {
      session.user.quantumLevel = token.quantumLevel;
      session.user.resonance = token.resonance;
      return session;
    }
  },
  pages: {
    signIn: '/auth/signin'
  },
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET || "alchemista_quantum_toloczkocoutinho_2024"
};
