'use client';
import Header from '@/components/Header/Header';
import JobCard from '@/components/JobCard/JobCard';
import Link from 'next/link';
import { JobPost } from '@/type/type';

export default function JobList({ job_postings }: { job_postings: JobPost[] }) {
  return (
    <main className='flex items-center justify-center mx-5 my-10'>
      <div>
        <Header />
        {job_postings.map((data) => (
          <>
            <Link href={`/posts/${data.id}`}>
              <JobCard key={data.title} data={data} />
            </Link>
          </>
        ))}
      </div>
    </main>
  );
}
