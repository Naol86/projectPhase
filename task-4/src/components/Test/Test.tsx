import React from 'react';
import { Task } from '../../reducer/TaskReducer';
import { useTaskContext } from '../../context/taskContext';

export default function Test({ tasks }: { tasks: Task[] }) {
  const { dispatch } = useTaskContext();
  tasks.forEach((task) => {
    console.log(task);
    dispatch({ type: 'task/ADD_TASK', payload: task });
  });
  return <></>;
}
