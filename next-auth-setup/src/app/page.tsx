import NavBar from '@/components/NavBar';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/options';

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log('accessToken is ', session?.accessToken);
  if (!session) {
    return <div>Access Denied</div>;
  }

  return (
    <div>
      <NavBar />{' '}
    </div>
  );
}
