import NavBar from '@/components/NavBar';
import { getServerSession } from 'next-auth';

export default async function Home() {
  const session = await getServerSession();
  console.log(session);
  if (!session) {
    return <div>Access Denied</div>;
  }

  return (
    <div>
      <NavBar />{' '}
    </div>
  );
}
