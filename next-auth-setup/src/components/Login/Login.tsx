'use client';
import { UserLogin } from '@/type';
import Email from '@/components/Form/Email';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import Password from '../Form/Password';
import SubmitBtm from '../Form/SubmitBtm';
import { signIn } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { use } from 'react';

export default function Login() {
  const form = useForm<UserLogin>();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const router = useRouter();

  const onSubmit = async (data: UserLogin) => {
    console.log(data);
    const result = await signIn('credentials', {
      redirect: false,
      email: data.emailaddress,
      password: data.password,
    });
    console.log(result);

    if (!result?.ok) {
      // Handle login errors here (optional)
      console.log(result?.error);
    } else {
      // Redirect to the home page after successful authentication
      router.push('/');
    }
  };

  return (
    <div className='bg-white w-screen h-screen flex justify-around items-center'>
      <div className='text-center'>
        <h1 className='text-slate-800 text-4xl font-poppins font-[900]'>Welcome To Akil</h1>
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
      </div>
      <div className=' sm:min-w-[450px] max-w-lg shadow-md rounded-xl p-3 mb-8 pb-14 space-y-5'>
        <h1 className='text-indigo-900 text-4xl m-5 text-center font-poppins font-[800]'>
          Welcome Back
        </h1>
        <div className='w-full flex justify-between px-5 my-4 mb-5'>
          <p className='min-w-32 border border-indigo-500'></p>
          <p className='min-w-32 border border-indigo-500'></p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='text-lg' noValidate>
          <Email
            register={register}
            errors={errors}
            value={'Email Address'}
            placeHolder={'Enter Your Email Address'}
          />
          <Password
            register={register}
            errors={errors}
            value={'Password'}
            placeHolder={'Enter Your pass'}
          />
          <SubmitBtm value={'Login'} account={false} />
        </form>
      </div>
    </div>
  );
}
