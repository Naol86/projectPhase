import About from '@/components/About/About';
import Detail from '@/components/Detail/Detail';
import React from 'react';

export default async function page({ params }: { params: { id: string } }) {
  const { data } = await loader(params.id);
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
