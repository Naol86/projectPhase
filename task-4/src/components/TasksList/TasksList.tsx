import React from 'react';
import { useTaskContext } from '../../context/taskContext';
import Task from '../Task/Task';

export default function TasksList() {
  const { tasks } = useTaskContext();

  return (
    <>
      <h1 className='my-5 text-2xl font-semibold text-slate-800'>TaskLists</h1>
      <div className='divide-y-2 divide-slate-400'>
        {tasks
          .slice()
          .reverse()
          .map((task: any) => (
            <Task key={task.id} task={task} />
          ))}
      </div>
    </>
  );
}
