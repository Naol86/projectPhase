import React from 'react';

export default function SendToGroup({ register }: any) {
  const groups = ['Group 1', 'Group 2', 'Group 3', 'Group 4', 'Group 5'];
  const [drop, setDrop] = React.useState(false);

  return (
    <div className='w-[45%]'>
      <h1 className='mb-2 font-bold text-md text-slate-800'>Send to Group</h1>
      <hr className='my-2 border-t-2 rounded-md border-slate-600' />

      <div>
        <label className='block text-xs font-semibold text-slate-300'>
          Select Group
        </label>
        <ul className='text-sm w-full px-2 py-1 transition-all duration-300 divide-y-2 rounded-md bg-slate-100 max-h-[35vh]'>
          <li
            key={0}
            className='flex items-center '
            onClick={() => setDrop((pre) => !pre)}
          >
            Select Group
          </li>
          {drop &&
            groups.map((group, index) => (
              <li key={index} className='flex items-center py-1'>
                <input
                  type='checkbox'
                  id={group}
                  {...register('receiver.' + group)}
                  className='mr-2'
                />
                <label htmlFor={group} className='text-gray-800'>
                  {group}
                </label>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
