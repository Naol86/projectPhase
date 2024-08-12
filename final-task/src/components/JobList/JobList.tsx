import Header from '@/components/Header/Header';
import JobCard from '@/components/JobCard/JobCard';
import { JobPosting } from '@/types/type';

import AuthProvider from '../AuthProvider/AuthProvider';

export default function JobList({ data }: { data: JobPosting }) {
  return (
    <main className='flex items-center justify-center mx-5 my-10'>
      <div>
        <AuthProvider>
          <Header count={data.count} />
        </AuthProvider>
        {data?.data?.map((data) => (
          <JobCard key={data.id} data={data} />
        ))}
      </div>
    </main>
  );
}
