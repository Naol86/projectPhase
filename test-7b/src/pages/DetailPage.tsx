import { useNavigate, useParams } from 'react-router-dom';
import Detail from '../components/Detail/Detail';
import About from '../components/About/About';
import { useGetJobPostByIdQuery } from '../features/api/apiSlice';
import DetailPageSkeleton from '@/components/Skeleton/DetailPageSkeleton';

export default function DetailPage() {
  const navigator = useNavigate();
  const params = useParams();
  const { data, isLoading, error } = useGetJobPostByIdQuery(params.id ?? '');

  if (isLoading) return <DetailPageSkeleton />;
  if (error || !data?.success) navigator('/not-found');
  return (
    <div className='flex justify-around mx-5'>
      {data && (
        <>
          <Detail data={data.data} />
          <About data={data.data} />
        </>
      )}
    </div>
  );
}
