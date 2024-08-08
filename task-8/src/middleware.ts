// pages/_middleware.ts or pages/api/auth/_middleware.ts

export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/posts', '/posts/:path*'],
};

// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//   console.log(request);
//   // return NextResponse.redirect(new URL('/home', request.url))
// }
