'use client';
import Header from '@/components/Header/Header';
import JobCard from '@/components/JobCard/JobCard';
import { JobPost, JobPosting } from '@/type/type';
import { SessionProvider } from 'next-auth/react';
import Link from 'next/link';

export default function JobList({ data }: { data: JobPosting }) {
  return (
    <main className='flex items-center justify-center mx-5 my-10'>
      <div>
        <SessionProvider>
          <Header count={data.count} />
        </SessionProvider>
        {data?.data?.map((data) => (
          <Link href={`/posts/${data.id}`} key={data.id}>
            <JobCard key={data.id} data={data} />
          </Link>
        ))}
      </div>
    </main>
  );
}
