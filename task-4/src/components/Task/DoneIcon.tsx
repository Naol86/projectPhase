import React from 'react';
import { useTaskContext } from '../../context/taskContext';

export default function DoneIcon({
  completed,
  id,
}: {
  completed: boolean;
  id: number;
}): JSX.Element {
  const { dispatch } = useTaskContext();

  const handleClick = () => {
    dispatch({ type: 'task/TOGGLE_TASK', payload: id });
  };

  return (
    <div className='flex items-center w-6 h-6 mx-2 mt-1' onClick={handleClick}>
      {completed ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'
          className='w-6 h-6 text-green-600'
          fill='currentColor'
        >
          <path d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z' />
        </svg>
      ) : (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
          <path d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z' />
        </svg>
      )}
    </div>
  );
}
