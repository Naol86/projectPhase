import NextAuth, {
  NextAuthOptions,
  Session as NextAuthSession,
  User as NextAuthUser,
} from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { jwtDecode } from 'jwt-decode';

interface Token {
  accessToken: string;
  refreshToken: string;
  accessTokenExpires: number;
  error?: string;
}

interface CustomSession extends NextAuthSession {
  accessToken: string;
  refreshToken: string;
}

async function refreshAccessToken(token: Token): Promise<Token> {
  try {
    const response = await fetch(`/api/auth/refresh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken: token.refreshToken }),
    });

    const data = await response.json();

    return {
      ...token,
      accessToken: data.accessToken,
      accessTokenExpires: (jwtDecode(data.accessToken) as { exp: number }).exp * 1000,
    };
  } catch (error) {
    return {
      ...token,
      error: 'RefreshAccessTokenError',
    };
  }
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
        const data = { email: credentials?.email, password: credentials?.password };
        console.log('the data is ', data);
        const res = await fetch(`https://akil-backend.onrender.com/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        const user = await res.json();
        console.log('user is ', user);
        if (res.ok && user) {
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
      if (token && Date.now() < (token.accessTokenExpires as number)) {
        return token;
      }

      return refreshAccessToken(token as Token);
    },
    async session({ session, token }) {
      (session as CustomSession).accessToken = token.accessToken;
      (session as CustomSession).refreshToken = token.refreshToken;
      return session;
    },
  },
};

export default NextAuth(authOptions);
