import { Link } from 'react-router-dom';
import JobCard from '../JobCard/JobCard';
import { JobPost } from '../../type/type';

export default function JobList({ data }: { data: JobPost[] }) {
  return (
    <>
      {data.map((data) => (
        <Link to={`/${data.id}`} key={data.id}>
          <JobCard data={data} />
        </Link>
      ))}
    </>
  );
}
