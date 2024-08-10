import { useSession } from 'next-auth/react';
import React from 'react';

export default function Testss() {
  const session = useSession();
  console.log('first session is from client ', session);
  return <div>here we go</div>;
}
