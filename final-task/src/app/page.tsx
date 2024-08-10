'use server';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/options';
import { NextApiRequest } from 'next';

export default async function Home(req: NextApiRequest) {
  const session = await getServerSession(authOptions);

  return <>hello</>;
}
