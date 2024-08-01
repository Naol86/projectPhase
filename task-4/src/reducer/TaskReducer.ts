import { Task } from '../types/types';

type Action =
  | { type: 'task/ADD_ALL'; payload: Task[] }
  | { type: 'task/ADD_TASK'; payload: Task }
  | { type: 'task/DELETE_TASK'; payload: string }
  | { type: 'task/TOGGLE_TASK'; payload: string }
  | { type: 'task/UPDATE_TASK'; payload: { id: string; title: string } };

export default function TaskReducer(state: Task[], action: Action): Task[] {
  switch (action.type) {
    case 'task/ADD_ALL':
      return [...state, ...action.payload];

    case 'task/ADD_TASK':
      console.log('payload', action.payload);
      return [...state, action.payload];

    case 'task/DELETE_TASK':
      return state.filter((task) => task.id !== action.payload);

    case 'task/TOGGLE_TASK':
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task,
      );

    case 'task/UPDATE_TASK':
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, title: action.payload.title }
          : task,
      );

    default:
      return state;
  }
}
