import Link from 'next/link';

export default function Page() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <Link href='/posts'>
        <button className='px-3 py-1 bg-indigo-950'>get started</button>
      </Link>
    </div>
  );
}
