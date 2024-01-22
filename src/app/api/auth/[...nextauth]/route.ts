import NextAuth from "next-auth"
import { credenciales } from "./providers/credenciales";
import { google } from "./providers/google";

export const auth = NextAuth({
  // Configure one or more authentication providers
  providers: [
    credenciales,
    google
  ],
})

export { auth as GET, auth as POST}