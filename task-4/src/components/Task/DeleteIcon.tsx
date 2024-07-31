import React from 'react';
import { useTaskContext } from '../../context/taskContext';
import { deleteTask } from '../../services/deleteTask';

export default function DeleteIcon({ id }: { id: number }) {
  const { dispatch } = useTaskContext();

  const handleClicked = () => {
    dispatch({
      type: 'task/DELETE_TASK',
      payload: id,
    });

    deleteTask(id.toString());
  };

  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 448 512'
        className='w-6 h-6 text-red-900'
        fill='currentcolor'
        onClick={() => handleClicked()}
      >
        <path d='M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z' />
      </svg>
    </>
  );
}
