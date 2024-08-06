import SignUp from '@/components/Signup/Signup';
import React from 'react';

export default function page() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='shadow-lg min-w-[400px] p-5 rounded-lg pb-8 relative'>
        <h1 className='text-indigo-900 text-4xl m-5 text-center font-poppins font-[1000]'>
          Sign Up Today!
        </h1>
        <div className='flex w-full justify-center border-2 py-1.5 items-center text-indigo-950 border-indigo-300 rounded-md'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 488 512' className='w-6 h-6'>
            <path d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z' />
          </svg>{' '}
          <span className='font-poppins mx-1 font-[600] text-sm'>Sign Up With Google</span>
        </div>
        <p className='text-[14px] text-indigo-950 font-[600] font-poppins min-w-44 text-center flex justify-center mx-20 left-1/2 before:left-0 before:-z-10 bg-white before:bg-indigo-900 before:h-0.5 overflow-hidden before:mt-1 before:w-full before: before:absolute before:text-start before:items-start mt-5'>
          Or Sign Up with Google
        </p>
        <SignUp />
      </div>
    </div>
  );
}
