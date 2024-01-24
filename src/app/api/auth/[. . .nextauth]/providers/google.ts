import Google from "next-auth/providers/google";

const envs = {
    clientId: process.env.NEXTAUTH_GOOGLE_ID as string,
    clientSecret: process.env.NEXTAUTH_GOOGLE_KEY as string
  }

export const google = Google({
    clientId: envs.clientId,
    clientSecret: envs.clientSecret,
})