// app/page.js
import Header from '@/components/Header/Header';
import JobCard from '@/components/JobCard/JobCard';
import Link from 'next/link';
import { JobPost, JobPosting } from '@/type/type';

export default async function Page() {
  const posts: Promise<JobPosting> = await loader();
  const { job_postings } = await posts;
  // console.log(job_postings);

  return (
    <main className='flex items-center justify-center my-10'>
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

export async function loader() {
  const response = await fetch('http://localhost:3000/api/posts', { cache: 'no-cache' });
  const posts = await response.json();
  // console.log(posts, 'i am post');

  return posts;
}
