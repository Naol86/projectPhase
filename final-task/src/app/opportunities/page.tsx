import { JobPosting } from '@/types/type';
import JobList from '@/components/JobList/JobList';
import { getAllPosts } from '../api/actions/getAllPosts';

export default async function Page() {
  const posts: Promise<JobPosting> = await getAllPosts();
  // console.log('the posts we are receiving', posts);
  const data = await posts;

  return (
    <>
      <JobList data={data} />
    </>
  );
}
