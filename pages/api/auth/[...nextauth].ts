import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from "@prisma/client"
import { useState } from "react";
// import prisma from 'lib/prisma'

// const prisma = new PrismaClient()

// const [users, setUsers] = useState([])

// const fetchData = async () => {
//   const allUsers = await prisma.user.findMany()
//   // setUsers(allUsers)
// }

// fetchData();

export default NextAuth({
  // adapter: PrismaAdapter(prisma),
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
        email: { label: "Email", type: "email", placeholder: "youremail@test.com"},
        password: { label: "Password", type: "password"}
      },
      authorize: (credentials, req) => {
        // database look up
        if(credentials.email === "youremail@test.com" && credentials.password === "test") {
          console.log('login success')
          return {
            name: "john",
            email: "johndoe@test.com"
          }
        }
        // login failed
        console.log('login failed')
        return null;
      },
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
});
