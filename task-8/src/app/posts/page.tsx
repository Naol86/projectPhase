import { JobPosting } from '@/type/type';
import JobList from '@/components/JobList/JobList';
import Link from 'next/link';

export default async function Page() {
  const posts: Promise<JobPosting> = await loader();
  const data = await posts;
  // console.log('----------------------------------------------------------------');
  // console.log(posts);
  // console.log('----------------------------------------------------------------');

  return (
    <>
      <Link href='/api/auth/signout?callbackUrl=/'> logout</Link>
      <JobList data={data} />
    </>
  );
}

export async function loader() {
  const response = await fetch('https://akil-backend.onrender.com/opportunities/search', {
    cache: 'no-cache',
  });
  const posts = await response.json();

  return posts;
}
