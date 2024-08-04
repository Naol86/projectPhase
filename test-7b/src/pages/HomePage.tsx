import { RootState } from '../app/store';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useGetJobPostQuery } from '../features/api/apiSlice';
import { JobPost } from '../type/type';
import JobList from '../components/JobList/JobList';
import MainPageSkeleton from '../components/Skeleton/MainPageSkeleton';

export default function Home() {
  const value = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();
  const { data, isLoading, isError, isSuccess, error } = useGetJobPostQuery();
  const list: JobPost[] | undefined = data?.data;
  if (isLoading) return <MainPageSkeleton />;
  return <div className='flex justify-center sm:mx-5'>{list && <JobList data={list} />}</div>;
}
