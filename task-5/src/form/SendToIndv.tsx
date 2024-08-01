import React, { useState } from 'react';

export default function SendToIndv({ register }: any) {
  const individuals = [
    'individual 1',
    'individual 2',
    'individual 3',
    'individual 4',
    'individual 5',
  ];
  const [drop, setDrop] = useState(false);

  return (
    <div className='w-[45%]'>
      <h1 className='mb-2 font-bold text-md text-slate-800'>Send to Group</h1>
      <hr className='my-2 border-t-2 rounded-md border-slate-600' />

      <div>
        <label className='block text-xs font-semibold text-slate-300'>
          Select individuals
        </label>
        <ul className='text-sm w-full px-2 py-1 transition-all duration-300 divide-y-2 rounded-md bg-slate-100 max-h-[35vh]'>
          <li
            key={0}
            className='flex items-center '
            onClick={() => setDrop((pre) => !pre)}
          >
            Select individuals
          </li>
          {drop &&
            individuals.map((individual, index) => (
              <li key={index} className='flex items-center py-1'>
                <input
                  type='checkbox'
                  id={individual}
                  {...register('receiver.' + individual)}
                  className='mr-2'
                />
                <label htmlFor={individual} className='text-gray-800'>
                  {individual}
                </label>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
