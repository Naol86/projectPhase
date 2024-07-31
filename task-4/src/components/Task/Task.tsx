import React, { useState } from 'react';
import DoneIcon from './DoneIcon';
import EditIcon from './EditIcon';
import DeleteIcon from './DeleteIcon';
import { useTaskContext } from '../../context/taskContext';
import Cancel from './Cancel';
import Update from './Update';
import { updateTask } from '../../services/updateTask';

export default function Task({ task: { id, title, completed } }: any) {
  const [edit, setEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const { dispatch } = useTaskContext();

  const handleCancel = () => {
    setEdit(false);
    setNewTitle(title);
  };

  const handleUpdate = () => {
    setEdit(false);
    dispatch({ type: 'task/UPDATE_TASK', payload: { id, title: newTitle } });
    updateTask(id, { id: id, title: newTitle, completed });
    // update
  };

  return (
    <div className='flex items-center px-2 my-2 '>
      <DoneIcon completed={completed} id={id} />
      {edit ? (
        <input
          type='text'
          className='w-full px-2 my-1 text-lg font-semibold border rounded-md outline-none bg-slate-100 border-slate-700'
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          autoFocus
        />
      ) : (
        <h1 className='text-lg'>{title}</h1>
      )}
      <div className='flex items-center my-1 ml-auto space-x-2'>
        {edit ? (
          <>
            <Cancel handleCancel={handleCancel} />
            <Update handleUpdate={handleUpdate} />
          </>
        ) : (
          <>
            <EditIcon id={id} handleEdit={setEdit} />
            <DeleteIcon id={id} />
          </>
        )}
      </div>
    </div>
  );
}
