'use client';
import Testss from '@/components/Testss';
import { SessionProvider } from 'next-auth/react';
import React from 'react';

export default function page() {
  return (
    <div>
      <SessionProvider>
        <Testss />
      </SessionProvider>
    </div>
  );
}
