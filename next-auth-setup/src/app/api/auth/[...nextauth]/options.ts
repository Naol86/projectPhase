// import git hub provider
import GitHubProvider from 'next-auth/providers/github';
// import google provider
import GoogleProvider from 'next-auth/providers/google';
// custom provider
import CredentialsProvider from 'next-auth/providers/credentials';

// import next auth
import NextAuth from 'next-auth';

// create options
export const options = {
  // configure providers
  providers: [
    // git hub provider
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),

    // google provider
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    // custom provider
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'enter ur name' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials: Record<'username' | 'password', string> | undefined) {
        console.log('user data', credentials);
        const res = await fetch('https://akil-backend.onrender.com/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(credentials),
        });
        console.log('res is ', res);
        const user = await res.json();
        console.log('message from backend', user);
        if (user.success) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  // configure secret key
  secret: process.env.NEXTAUTH_SECRET,
};

// export handler
export default NextAuth(options);
