import Main from './components/Main/Main';
import SideBar from './components/SideBar/SideBar';
import TaskContext from './context/taskContext';
import { useEffect, useReducer } from 'react';
import TaskReducer, { Task } from './reducer/TaskReducer';
import getTodo from './services/getDocs';
import MenuContext from './context/menuContext';
import MenuReducer from './reducer/MenuReducer';

function App() {
  const initialTasks: Task[] = [];
  const [tasks, dispatch] = useReducer(TaskReducer, initialTasks);
  const [sideBar, sideBarDispatch] = useReducer(MenuReducer, {
    sideBar: false,
  });

  useEffect(() => {
    getTodo().then((data) => {
      data.forEach((doc: any) => {
        const task = doc.data();
        dispatch({ type: 'task/ADD_TASK', payload: { ...task, id: doc.id } });
      });
    });
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      <MenuContext.Provider value={{ sideBar, sideBarDispatch }}>
        <div className='relative flex bg-slate-100'>
          <SideBar />
          <Main />
        </div>
      </MenuContext.Provider>
    </TaskContext.Provider>
  );
}

export default App;
