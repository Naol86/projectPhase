import { JobPosting } from '@/type/type';
import JobList from '@/components/JobList/JobList';

export default async function Page() {
  const posts: Promise<JobPosting> = await loader();
  const data = await posts;

  return (
    <>
      <JobList data={data} />
    </>
  );
}

export async function loader() {
  // fetch data from the server using the `fetch` function
  const response = await fetch(`${process.env.BACKEND_URL}/opportunities/search`, {
    cache: 'no-cache',
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
