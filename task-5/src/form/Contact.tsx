import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormValues {
  firstName: string;
  lastName: string;
  message: string;
  email: string;
}

export default function Contact() {
  const { register, handleSubmit, formState } = useForm<FormValues>();
  const { errors } = formState;

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    alert('Form Submitted');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-wrap justify-center'
      noValidate
    >
      <div className='w-[35vw] h-screen p-2 mx-2 font-mono'>
        <div className='w-full h-full p-5 rounded-md opacity-90 bg-slate-400'>
          <h1 className='w-full my-3 text-3xl font-bold text-center text-slate-800'>
            Contact Form
          </h1>
          <hr className='my-4 border-t-2 rounded-md border-slate-600' />
          <div className='flex justify-between w-full my-3'>
            <div className='w-[45%] my-3'>
              <label
                htmlFor='firstName'
                className='block text-lg font-semibold text-slate-800'
              >
                First Name
              </label>
              <input
                type='text'
                id='firstName'
                className='w-full px-3 py-1 font-semibold rounded-md outline-none bg-slate-100 text-slate-800'
                {...register('firstName', {
                  required: 'First Name is required',
                })}
              />
              <p className='my-1 text-xs font-semibold text-red-600'>
                {errors.firstName?.message}
              </p>
            </div>
            <div className='w-[50%] my-3'>
              <label
                htmlFor='lastName'
                className='block text-lg font-semibold text-slate-800'
              >
                Last Name
              </label>
              <input
                type='text'
                id='lastName'
                className='w-full px-3 py-1 font-semibold rounded-md outline-none bg-slate-100 text-slate-800'
                {...register('lastName', {
                  required: 'Last Name is required',
                })}
              />
              <p className='my-1 text-xs font-semibold text-red-600'>
                {errors.lastName?.message}
              </p>
            </div>
          </div>
          <div className='my-3 w-cull'>
            <label
              htmlFor='email'
              className='block text-lg font-semibold text-slate-800'
            >
              Email
            </label>
            <input
              type='text'
              id='email'
              className='w-full px-3 py-1 font-semibold rounded-md outline-none bg-slate-100 text-slate-800'
              {...register('email', {
                required: 'email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                  message: 'Invalid email',
                },
              })}
            />
            <p className='my-1 text-xs font-semibold text-red-600'>
              {errors.email?.message}
            </p>
          </div>
          <div className='w-full my-3'>
            <label
              htmlFor='message'
              className='block text-lg font-semibold text-slate-800'
            >
              Message
            </label>
            <textarea
              id='message'
              className='w-full px-3 py-1 rounded-md outline-none bg-slate-100 min-h-[25vh] font-semibold text-slate-800'
              {...register('message', {
                required: 'Message is required',
              })}
            ></textarea>
            <p className='my-1 text-xs font-semibold text-red-600'>
              {errors.message?.message}
            </p>
          </div>
          <div>
            <input
              type='submit'
              className='w-full p-2 text-xl font-semibold transition-all duration-200 rounded-md text-slate-50 bg-slate-800 active:scale-105'
            />
          </div>
        </div>
      </div>
    </form>
  );
}
