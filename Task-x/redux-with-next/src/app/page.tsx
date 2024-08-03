'use client';
import Name from '@/components/Name';
import store from '@/store/store';
import { Provider } from 'react-redux';

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <div>hello world</div>
        <Name />
      </Provider>
    </>
  );
}
