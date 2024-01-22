import CredentialsProvider from "next-auth/providers/credentials";

export const credenciales = CredentialsProvider({
    // The name to display on the sign in form (e.g. "Sign in with...")
    name: "Credenciales",
    // `credentials` is used to generate a form on the sign in page.
    credentials: {
      email: { label: "Username", type: "text", placeholder: "jsmith" },
      clave: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
      // Add logic here to look up the user from the credentials supplied
      const email = credentials?.email
      const clave = credentials?.clave
      if(!email || !clave || email === '' || clave === '') return null
      const idTemp = crypto.randomUUID()
      const dataSend = { id: idTemp, email, clave }
      return dataSend
    }
  })