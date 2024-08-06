import { getServerSession } from 'next-auth/next';
import React from 'react';

export default async function page() {
  const session = await getServerSession();
  console.log(session);
  return <div>public page</div>;
}
