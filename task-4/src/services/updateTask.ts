import { doc, updateDoc } from 'firebase/firestore';
import db from '../database/connect';

export const updateTask = async (id: string, task: any) => {
  await updateDoc(doc(db, 'todo', id), task);
};
