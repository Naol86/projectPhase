import { useSession } from 'next-auth/react';
import React from 'react';

export default function Public() {
  const session = useSession();
  console.log('client side session is ', session);
  return <div>Public</div>;
}
