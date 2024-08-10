'use client';
import { useEffect, useState } from 'react';

import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { redirect, useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'react-toastify';
import { send } from 'process';

export default function OTP() {
  const [value, setValue] = useState('');
  const router = useRouter();

  const [searchParams]: any = useSearchParams();
  const email = searchParams[1];
  console.log(email);

  useEffect(() => {
    console.log('use effect', value.length);
    const sendOTP = async () => {
      const response = await fetch(`https://akil-backend.onrender.com/verify-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          otp: value,
          email: email,
        }),
      });
      console.log('virify user', email);
      const res = await response.json();
      console.log(res, 'verify');

      if (!res.success) {
        // toast.error(res.message, {
        //   position: 'top-right',
        //   autoClose: 5000,
        //   hideProgressBar: false,
        // });
        alert('error');
        return;
        // router.push('/api/auth/signup');
      } else {
        // toast.success(res.message, {
        //   position: 'top-right',
        //   autoClose: 4000,
        //   hideProgressBar: false,
        // });
        router.push('/api/auth/signin');
      }
    };
    if (value.length === 4) {
      console.log('here we go ');
      sendOTP();
    }
  }, [value, email]);

  return (
    <div className='w-full flex justify-center'>
      <InputOTP maxLength={4} value={value} onChange={(value) => setValue(value)}>
        <InputOTPGroup className='space-x-3'>
          <InputOTPSlot index={0} className='border-2 rounded-lg border-indigo-800' />
          <InputOTPSlot index={1} className='border-2 rounded-lg border-indigo-800' />
          <InputOTPSlot index={2} className='border-2 rounded-lg border-indigo-800' />
          <InputOTPSlot index={3} className='border-2 rounded-lg border-indigo-800' />
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
}
