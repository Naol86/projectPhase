'use client';
import Link from 'next/link';
import SelectSortedBy from '../SelectSortedBy/SelectSortedBy';
import { useSession } from 'next-auth/react';

export default function Header({ count }: { count: number }) {
  const session = useSession();
  // console.log('log in session', session);
  return (
    <div>
      <div className='flex items-center justify-between pr-2 my-5 mb-10'>
        <div>
          <h1 className='text-4xl font-bolder'>Opportunities</h1>
          <h3 className='font-medium text-md text-slate-500'>Showing {count} results</h3>
          <h4>{session.data?.user?.name} - welcome to akil</h4>
        </div>
        <div className='flex items-center font-epilogue'>
          <h3 className='mx-2 text-sm font-medium text-slate-500'>sorted by:</h3>
          <SelectSortedBy />
          <button className='text-lg font-medium bg-slate-800 text-white px-3 py-1 rounded-lg'>
            {!session.data ? (
              <Link href='/api/auth/signin'>Login</Link>
            ) : (
              <Link href='/api/auth/signout?callbackUrl=/'> logout</Link>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}