import { useState } from 'react';

export default function Search() {
  const [newTask, setNewTask] = useState('');

  return (
    <div className='relative my-2'>
      <input
        type='text'
        className='w-full px-2 pl-6 rounded-md outline-none bg-slate-100'
        placeholder='Search Task'
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 512 512'
        className='absolute w-4 h-4 text-xl text-slate-600 top-1 left-1'
        fill='currentColor'
      >
        <path d='M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z' />
      </svg>
    </div>
  );
}
