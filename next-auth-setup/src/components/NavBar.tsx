import { getServerSession } from 'next-auth';
import Link from 'next/link';
import React from 'react';

export default async function NavBar() {
  const session = await getServerSession();
  console.log(session);
  return (
    <div className='bg-sky-200 text-2xl font-semibold flex justify-around'>
      <Link href='/users'>users</Link>
      <Link href='/post'>post</Link>
      <Link href='/category'>category</Link>
      {session ? (
        <Link href='/api/auth/signout?callbackUrl=/'>Log out</Link>
      ) : (
        <Link href='/api/auth/signin'>Log in</Link>
      )}
    </div>
  );
}
