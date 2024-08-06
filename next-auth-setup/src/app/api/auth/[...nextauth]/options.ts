import NextAuth, { NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { jwtDecode } from 'jwt-decode';

interface Token {
  accessToken: string;
  refreshToken: string;
  accessTokenExpires: number;
  error?: string;
}

async function refreshAccessToken(token: Token): Promise<Token> {
  try {
    const response = await fetch('/api/auth/refresh', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        refreshToken: token.refreshToken,
      }),
    });

    const refreshedTokens = await response.json();

    return {
      ...token,
      accessToken: refreshedTokens.accessToken,
      accessTokenExpires: (jwtDecode(refreshedTokens.accessToken) as { exp: number }).exp * 1000,
    };
  } catch (error) {
    console.error('Error refreshing access token:', error);
    return {
      ...token,
      error: 'RefreshAccessTokenError',
    };
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'enter your name' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const res = await fetch('https://akil-backend.onrender.com/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(credentials),
        });
        const user = await res.json();

        if (user.success) {
          return {
            id: user.data.id,
            accessToken: user.data.accessToken,
            refreshToken: user.data.refreshToken,
            name: user.data.name,
            email: user.data.email,
            role: user.data.role,
            profileComplete: user.data.profileComplete,
          };
        } else {
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET as string,
  callbacks: {
    async jwt({ token, user }): Promise<any> {
      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.accessTokenExpires = (jwtDecode(user.accessToken) as { exp: number }).exp * 1000;
      }

      if (Date.now() < (token as Token).accessTokenExpires) {
        return token;
      }

      return refreshAccessToken(token as Token);
    },
    async session({ session, token }) {
      session.accessToken = (token as Token).accessToken;
      session.refreshToken = (token as Token).refreshToken;
      return session;
    },
  },
};

export default NextAuth(authOptions);
