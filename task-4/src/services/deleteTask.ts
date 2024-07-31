import { deleteDoc, doc } from 'firebase/firestore';
import db from '../database/connect';

export const deleteTask = async (id: string) => {
  // Your code here
  await deleteDoc(doc(db, 'todo', id));
};
