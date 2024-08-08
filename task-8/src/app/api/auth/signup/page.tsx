import SignUpForm from '@/components/Form/SignUpForm';
import Image from 'next/image';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function page() {
  return (
    <div className='flex justify-around items-center min-h-screen'>
      <div className='w-[30vw] h-[60vh] relative'>
        <Image
          src='/assets/new-user.png'
          alt='hello'
          layout='fill'
          objectFit='cover'
          sizes='100vw'
          className='object-cover'
        />
      </div>
      <SignUpForm />
      {/* <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      /> */}
    </div>
  );
}
