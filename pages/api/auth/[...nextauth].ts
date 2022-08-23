import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function auth(req, res){
  return await NextAuth(req, res, {

  secret: process.env.SECRET,

  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email address"},
        password: { label: "Password", type: "password"}
      },
      async authorize(credentials) {
        const user = await prisma.user.findFirst({
          where: {
              email: credentials.email,
              password: credentials.password
          }
        });

        if (user !== null)
        {
            return user;
        }
        else {
          throw new Error('Login failed. Please make sure you insert the correct email and password.')
        }
      }
    }),
  ],

  callbacks: {
    jwt: ({ token, user }) => {
      if(user){
        token.id = user.id;
      }
      return token;
    },
    session: ({ session, token }) => {
      if(token) {
        session.id = token.id;
      }
      return session;
    }
  },

  // @ts-ignore:next-line
  secret: "test",
  jwt: {
    secret: "test",
  },


  // database: process.env.DATABASE_URL,
  // // @ts-ignore:next-line
  // secret: process.env.SECRET,

  // session: {
  //   // @ts-ignore:next-line
  //   jwt: true,
  //   maxAge: 30 * 24 * 60 * 60, // 30 days
  // },

  // jwt: {
  //   secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnX',
  //   // encryption: true,
  // },

  // debug: true,
  
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
})};