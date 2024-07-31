import React from 'react';
import Menu from '../Menu/Menu';
import TasksList from '../TasksList/TasksList';
import Search from '../Search/Search';
import { useMenuContext } from '../../context/menuContext';

export default function SideBar() {
  const { sideBar } = useMenuContext();
  console.log(sideBar);

  return (
    <div
      className={`${
        sideBar.sideBar ? 'hidden' : ''
      } h-[96vh] fixed -left-full min-[430px]:fixed min-w-[6rem] min-[430px]:left-0 rounded-xl p-3 m-3 bg-slate-300 max-w-[260px]`}
    >
      <Menu />
      <Search />
      <TasksList />
    </div>
  );
}
