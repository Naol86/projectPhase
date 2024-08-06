// 'use client';
import { JobPosting } from '@/type/type';
import JobList from '@/components/JobList/JobList';
import Link from 'next/link';
import { SessionProvider, useSession } from 'next-auth/react';
import Public from '@/components/Public/Public';

export default function Page() {
  // console.log('NEXTAUTH_URL:', process.env.NEXT_LOCAL_URL as string);
  // console.log('SECRET:', process.env.SECRET_KEY as string);
  // console.log('NEXT_PUBLIC_API_URL:', process.env.NEXT_PUBLIC_API_URL as string);

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <Link href='/posts'>
        <button className='px-3 py-1 bg-indigo-950'>get started</button>
        {/* <SessionProvider>
          <Public />
        </SessionProvider> */}
      </Link>
    </div>
  );
}
