import { getServerSession } from 'next-auth/next';
import React from 'react';

export default async function page() {
  const session = await getServerSession();
  console.log('this is from post', session);
  return <div>wel come to post page</div>;
}
