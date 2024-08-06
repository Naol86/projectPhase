import { getServerSession } from 'next-auth';
import React from 'react';

export default async function page() {
  const session = await getServerSession();
  console.log(session);

  if (!session) {
    return <div>you are not logged in</div>;
  }

  return <div>wel come to users page</div>;
}
