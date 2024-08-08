import About from '@/components/About/About';
import Detail from '@/components/Detail/Detail';
import { getServerSession } from 'next-auth';
import { getSession } from 'next-auth/react';
import { NextRequest } from 'next/server';
import React from 'react';

export default async function page({ params: { id } }: { params: { id: string } }) {
  const session = await getServerSession();
  console.log('request is ', session, 'request end here');
  const { data } = await loader(id);
  return (
    <div className='flex p-5 justify-evenly'>
      <Detail data={data} />
      <About data={data} />
    </div>
  );
}

async function loader(id: string) {
  const response = await fetch(`https://akil-backend.onrender.com/opportunities/${id}`);
  const data = await response.json();
  return data;
}
