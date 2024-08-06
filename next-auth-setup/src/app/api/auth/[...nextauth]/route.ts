import NextAuth from 'next-auth';
import { authOptions } from './options';

const handler: any = NextAuth(authOptions);

export { handler as GET, handler as POST };
