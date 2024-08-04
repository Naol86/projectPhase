import { useGetJobPostQuery } from '../features/api/apiSlice';
import { JobPost } from '../type/type';
import JobList from '../components/JobList/JobList';
import MainPageSkeleton from '../components/Skeleton/MainPageSkeleton';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header/Header';
import { useEffect, useState } from 'react';

export default function Home() {
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetJobPostQuery();
  const list: JobPost[] | undefined = data?.data;

  const [sortedList, setSortedList] = useState<JobPost[]>([]);
  const [sortBy, setSortBy] = useState(1);

  useEffect(() => {
    if (list) {
      const sorted = [...list]; // Create a copy of the data to avoid mutating the original data

      if (sortBy === 1) {
        // Sort by posted date
        sorted.sort((a, b) => new Date(b.datePosted).getTime() - new Date(a.datePosted).getTime());
      } else if (sortBy === 2) {
        // Sort by view count
        sorted.sort((a, b) => b.viewsCount - a.viewsCount);
      } else if (sortBy === 3) {
        // Sort by start date
        sorted.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
      }

      setSortedList(sorted);
    } else {
      setSortedList([]);
    }
  }, [sortBy, list]);

  if (isLoading) return <MainPageSkeleton />;
  if (error) navigate('/error');

  return (
    <main className='flex items-center justify-center px-2 my-10 sm:mx-5'>
      <div>
        <Header selectBy={setSortBy} />
        <div className='sm:mx-3'>{list && <JobList data={sortedList} />}</div>
      </div>
    </main>
  );
}
