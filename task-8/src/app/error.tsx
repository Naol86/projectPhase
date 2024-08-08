'use client';

import React from 'react';

export default function error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className='text-3xl bg-slate-400 w-screen min-h-screen flex justify-center items-center'>
      {error?.message}
    </div>
  );
}
