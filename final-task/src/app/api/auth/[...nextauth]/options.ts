import { NextAuthOptions, Session as NextAuthSession } from 'next-auth';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

interface Token {
  accessToken: string;
  refreshToken: string;
  accessTokenExpires: number;
  error?: string;
}

// initialize custom session interface by extending NextAuthSession
interface CustomSession extends NextAuthSession {
  accessToken: string;
  refreshToken: string;
}

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
          return {
            id: user.data.id,
            email: user.data.email,
            accessToken: user.data.accessToken,
            refreshToken: user.data.refreshToken,
            profileComplete: user.data.profileComplete,
            message: user.message,
            success: user.success,
            name: user.data.name,
            role: user.data.role,
          };
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
        // token = { ...token, ...user };
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
      }
      // console.log('new token is ', token);
      // token.name = user;
      return token;
    },
    async session({ session, token }) {
      // session.user = token;
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      // console.log('first session is ', session, 'token in session is ', token);
      return session;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
};

export default NextAuth(authOptions);
