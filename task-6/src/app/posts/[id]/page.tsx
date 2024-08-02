import About from '@/components/About/About';
import Detail from '@/components/Detail/Detail';
import React from 'react';

export default async function page({ params }: { params: { id: string } }) {
  const data = await loader(params.id);
  return (
    <div className='flex justify-around p-5'>
      <Detail data={data} />
      <About data={data} />
    </div>
  );
}

async function loader(id: string) {
  const response = await fetch(`http://localhost:3000/api/posts/${id}`);
  const data = await response.json();
  return data;
}
