import React from 'react';
import { useMenuContext } from '../../context/menuContext';

export default function Menu() {
  const { sideBarDispatch } = useMenuContext();
  const handleClick = () => {
    console.log('Menu clicked');
    sideBarDispatch({ type: 'menu/TOGGLE_MENU' });
  };

  return (
    <div className='flex items-center justify-between my-2 mb-5 text-xl font-semibold text-gray-800'>
      Menu
      <>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 448 512'
          className='w-6 h-6'
          fill='currentColor'
          color='gray'
          onClick={handleClick}
        >
          <path d='M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z' />
        </svg>
      </>
    </div>
  );
}
