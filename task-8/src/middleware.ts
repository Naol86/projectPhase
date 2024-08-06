// pages/_middleware.ts or pages/api/auth/_middleware.ts

export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/posts', '/posts/:path*'],
};
