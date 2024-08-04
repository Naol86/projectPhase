import { useParams } from 'react-router-dom';
import Detail from '../components/Detail/Detail';
import About from '../components/About/About';
import { useGetJobPostByIdQuery } from '../features/api/apiSlice';
import { JobPost } from '../type/type';

export default function DetailPage() {
  const params = useParams();
  console.log(params);
  const { data } = useGetJobPostByIdQuery(params.id ?? '');
  const lis: JobPost = data ? data?.data : {};
  console.log(lis);
  if (!data) return <div>Loading...</div>;
  return (
    <div className='flex justify-around'>
      {data && (
        <>
          <Detail data={lis} />
          <About data={lis} />
        </>
      )}
    </div>
  );
}
