// services/taskService.ts
import { addDoc, collection } from 'firebase/firestore';
import db from '../database/connect';
import { Task } from '../reducer/TaskReducer';

export const addTask = async (task: Task) => {
  try {
    const docRef = await addDoc(collection(db, 'todo'), task);
    console.log(docRef);
  } catch (error) {
    console.error('Error adding document: ', error);
    throw error;
  }
};
