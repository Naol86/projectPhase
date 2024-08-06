'use client';
import Text from '@/components/Form/Text';
import { UserRegister } from '@/type';
import React from 'react';
import Email from '@/components/Form/Email';
import { useForm } from 'react-hook-form';
import Password from '../Form/Password';
import SubmitBtm from '../Form/SubmitBtm';

export default function SignUp() {
  const form = useForm<UserRegister>();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: UserRegister) => {
    console.log(data);
  };

  return (
    <div className='max-w-sm'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Text
          register={register}
          errors={errors}
          value={'Full Name'}
          placeHolder={'Enter Your Full Name'}
        />
        <Email
          register={register}
          errors={errors}
          value={'Email Address'}
          placeHolder={'Enter Your Email address'}
        />
        <Password
          register={register}
          errors={errors}
          value={'Password'}
          placeHolder='Enter Your password'
        />
        <Password
          register={register}
          errors={errors}
          value={'Confirm Password'}
          placeHolder='Confirm Your password'
        />
        <SubmitBtm value={'Continue'} account={true} />
        <p className='text-xs text-slate-400 my-3 '>
          {`By clicking 'Continue', you acknowledge that you have read and accepted our Terms of
          Service and Privacy Policy.`}
        </p>
      </form>
    </div>
  );
}
