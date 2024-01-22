import NextAuth from "next-auth"
import { credenciales } from "./providers/credenciales";
import { google } from "./providers/google";

export const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    credenciales,
    google
  ],
})

export { handler as GET, handler as POST}