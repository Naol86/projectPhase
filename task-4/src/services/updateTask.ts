import { doc, updateDoc } from 'firebase/firestore';
import { Task } from '../reducer/TaskReducer';
import db from '../database/connect';

export const updateTask = async (id: string, task: Task) => {
  await updateDoc(doc(db, 'todo', id), task);
};
