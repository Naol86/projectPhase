import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Username', type: 'email', placeholder: 'Enter Your Email Address' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const email = credentials?.email;
        const password = credentials?.password;
        const res = await fetch(`https://akil-backend.onrender.com/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
        const user = await res.json();
        // console.log('first user is ', user);
        if (res.status === 200) {
          // console.log('authorize response is ', user);
          return user.data;
        } else {
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET as string,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // console.log('sign in with user', user);
      return true;
    },
    async jwt({ token, user }) {
      // console.log('first token is ', token, 'user in jwt is ', user);
      if (user) {
        token = { ...token, ...user };
      }
      // console.log('new token is ', token);
      // token.name = user;
      return token;
    },
    async session({ session, token }) {
      session.user = token;
      // console.log('first session is ', session, 'token in session is ', token);
      return session;
    },
  },
  pages: {
    signIn: '/login',
    signOut: '/logout',
  },
};

export default NextAuth(authOptions);
