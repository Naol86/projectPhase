import AddTask from '../AddTask/AddTask';
import TasksList from '../TasksList/TasksList';

export default function Main() {
  return (
    <div className='w-full min-h-[96vh] p-3 m-3 min-[430px]:ml-[17rem]'>
      <h1 className='mt-2 mb-10 text-3xl font-bold text-slate-700'>
        TODO List
      </h1>

      <AddTask />
      <TasksList />
    </div>
  );
}
