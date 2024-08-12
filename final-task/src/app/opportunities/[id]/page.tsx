import { getPostById } from '@/app/api/actions/getPostById';
import About from '@/components/About/About';
import Detail from '@/components/Detail/Detail';
import React from 'react';

export default async function page({ params: { id } }: { params: { id: string } }) {
  const { data } = await getPostById(id);
  return (
    <div className='flex p-5 justify-evenly'>
      <Detail data={data} />
      <About data={data} />
    </div>
  );
}
