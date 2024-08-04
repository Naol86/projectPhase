import { Link } from 'react-router-dom';
import JobCard from '../JobCard/JobCard';
import { JobPost } from '../../type/type';
import Header from '../Header/Header';

export default function JobList({ data }: { data: JobPost[] }) {
  return (
    <main className='flex items-center justify-center mx-5 my-10'>
      <div>
        <Header />
        {data.map((data) => (
          <>
            <Link to={`/${data.id}`} key={data.id}>
              <JobCard data={data} />
            </Link>
          </>
        ))}
      </div>
    </main>
  );
}
