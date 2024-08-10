'use client';
import Header from '@/components/Header/Header';
import JobCard from '@/components/JobCard/JobCard';
import { JobPost, JobPosting } from '@/types/type';
import { SessionProvider } from 'next-auth/react';

export default function JobList({ data }: { data: JobPosting }) {
  return (
    <main className='flex items-center justify-center mx-5 my-10'>
      <div>
        <SessionProvider>
          <Header count={data.count} />
        </SessionProvider>
        {data?.data?.map((data) => (
          <JobCard key={data.id} data={data} />
        ))}
      </div>
    </main>
  );
}
