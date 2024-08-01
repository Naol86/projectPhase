import { doc, getDoc, updateDoc } from 'firebase/firestore';
import db from '../database/connect';

export const toggleDone = async (id: string) => {
  try {
    // Get a reference to the task document
    const taskRef = doc(db, 'todo', id);

    // Fetch the current document
    const taskDoc = await getDoc(taskRef);

    if (taskDoc.exists()) {
      // Get the current 'completed' value
      const currentCompleted = taskDoc.data().completed;

      // Toggle the 'completed' value
      const newCompleted = !currentCompleted;

      // Update the document with the new 'completed' value
      await updateDoc(taskRef, { completed: newCompleted });

      console.log(`Task ${id} updated successfully.`);
    } else {
      console.log(`No task found with ID: ${id}`);
    }
  } catch (error) {
    console.error('Error updating task: ', error);
  }
};
