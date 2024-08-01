import { createContext, useContext } from 'react';
import { Task } from '../types/types';

const TaskContext = createContext<
  { tasks: Task[]; dispatch: React.Dispatch<any> } | undefined
>(undefined);

const useTaskContext = (): any => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};

export { useTaskContext };
export default TaskContext;
