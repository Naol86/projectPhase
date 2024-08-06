import NextAuth from 'next-auth';
import { authOptions } from './option';

const handlers = NextAuth(authOptions);

export { handlers as GET, handlers as POST };
