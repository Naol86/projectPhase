'use client';
import { getServerSession } from 'next-auth';
import { getSession } from 'next-auth/react';
import React from 'react';

export default async function page() {
  // const session = await getServerSession();
  const session = await getSession();
  console.log('from users page', session);

  return <div>wel come to users page {session?.user?.name}</div>;
}
