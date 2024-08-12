import { JobPosting } from '@/type/type';
import JobList from '@/components/JobList/JobList';
import { getSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/option';

export default async function Page() {
  const posts: Promise<JobPosting> = await loader();
  // console.log('the posts we are receiving', posts);
  const data = await posts;

  return (
    <>
      <JobList data={data} />
    </>
  );
}

export async function loader() {
  const session = await getServerSession(authOptions);
  // console.log('get posts data with session', session);
  // fetch data from the server using the `fetch` function
  const response = await fetch(`${process.env.BACKEND_URL}/opportunities/search`, {
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.accessToken}`, // Add token to the Authorization header
    },
  });

  // testing if error page is working
  // throw new Error('error');

  // test if error is happening here throw new Error(error.message);
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const posts = await response.json();
  return posts;
}
