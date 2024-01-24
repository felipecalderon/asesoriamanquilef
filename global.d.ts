import NextAuth, { DefaultSession, DefaultJWT } from "next-auth";
import { JWT } from "next-auth/jwt";

type HeadersOption = {
    [key: string]: string
}

interface OptionsFetch  {
    method: 'POST' | 'GET' | 'PUT' | 'DELETE',
    headers: HeadersOption,
    body: string,
    cache?: RequestCache
};

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    userId: string;
  } 
}