import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import About from '@/components/About/About';
import Detail from '@/components/Detail/Detail';
import { getServerSession } from 'next-auth';
import React from 'react';

export default async function page({ params: { id } }: { params: { id: string } }) {
  const { data } = await loader(id);
  return (
    <div className='flex p-5 justify-evenly'>
      <Detail data={data} />
      <About data={data} />
    </div>
  );
}

async function loader(id: string) {
  const session = await getServerSession(authOptions);
  const response = await fetch(`https://akil-backend.onrender.com/opportunities/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + session?.accessToken,
    },
  });
  const data = await response.json();
  return data;
}
