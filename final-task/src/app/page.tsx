import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/options';
import { NextApiRequest } from 'next';
import Link from 'next/link';

export default async function Home(req: NextApiRequest) {
  return (
    <section className='w-screen min-h-screen flex justify-center items-center'>
      <div className='text-center'>
        <p className='text-4xl font-[900] text-indigo-900'>Welcome to Akil</p>
        <button className='px-4 py-1 bg-indigo-800 m-3 rounded-lg text-2xl text-white font-bold'>
          <Link href='/opportunities'>Get Started</Link>
        </button>
      </div>
    </section>
  );
}
