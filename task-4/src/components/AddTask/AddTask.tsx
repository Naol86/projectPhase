import React, { FormEvent, useState } from 'react';
import { useTaskContext } from '../../context/taskContext';
import { addTask } from '../../services/addData';

export default function AddTask() {
  const { dispatch } = useTaskContext();
  const [task, setTask] = useState('');

  const handleClicked = (e: FormEvent) => {
    e.preventDefault();
    if (!task) {
      alert('Please enter a task');
      return;
    }

    const newTask = {
      id: Math.floor(Math.random() * 10000).toString(),
      title: task,
      completed: false,
    };

    try {
      addTask(newTask);
    } catch (error) {}

    dispatch({
      type: 'task/ADD_TASK',
      payload: newTask,
    });
    setTask('');
  };

  return (
    <form className='relative my-5' onSubmit={handleClicked}>
      <input
        type='text'
        className='w-full p-2 pl-12 font-semibold border-2 rounded-md outline-none border-slate-400 bg-slate-50 text-slate-800'
        placeholder='Add a New Task...'
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 448 512'
        className='absolute w-8 h-8 left-2 top-1.5 text-slate-400'
        fill='currentColor'
        onClick={handleClicked}
      >
        <path d='M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z' />
      </svg>
    </form>
  );
}
