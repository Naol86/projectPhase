// adding middle ware

export { default } from 'next-auth/middleware';

export const config = { matcher: ['/post', '/users', '/', '/category'] };
