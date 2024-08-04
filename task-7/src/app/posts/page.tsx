import { JobPosting } from '@/type/type';
import JobList from '@/components/JobList/JobList';

export default async function Page() {
  const posts: Promise<JobPosting> = await loader();
  const { data } = await posts;

  return (
    <>
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
