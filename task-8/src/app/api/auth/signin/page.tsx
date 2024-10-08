'use client';
import LoginForm from '@/components/Form/LoginForm';
import React from 'react';
import Image from 'next/image';
import { SessionProvider, useSession } from 'next-auth/react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { getServerSession } from 'next-auth';

export default function Page() {
  // const router = useRouter();
  // const session = useSession();
  // console.log('session is ', session);

  return (
    <>
      <div className='bg-white w-screen h-screen flex justify-around items-center'>
        <div className='text-center hidden min-[800px]:block'>
          <h1 className='text-slate-800 text-4xl font-poppins font-[900]'>Welcome To Akil</h1>
          <div className='w-[35vw] h-[60vh] relative'>
            <Image
              src='/assets/welcome.png'
              alt='hello'
              layout='fill'
              objectFit='cover'
              sizes='100vw'
              className='object-cover'
            />
          </div>
        </div>
        <SessionProvider>
          <LoginForm />
        </SessionProvider>
      </div>
      <ToastContainer
        position='top-right'
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme='light'
        className=''
      />

      <ToastContainer />
    </>
  );
}
