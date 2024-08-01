import React from 'react';
import SendToGroup from './SendToGroup';
import SendToIndv from './SendToIndv';

export default function SendTo({ register, watch, validateReceiver }: any) {
  const selectedGroups = watch('receiver.group');
  const selectedIndividuals = watch('receiver.individual');

  return (
    <div className='p-2 w-[40vw]'>
      <div className='w-full h-full p-5 rounded-md bg-slate-500 opacity-90'>
        <h1 className='my-3 text-3xl font-bold text-center text-slate-800'>
          Send To
        </h1>
        <div className='flex justify-between'>
          <SendToGroup register={register} />
          <SendToIndv register={register} />
        </div>
        <button
          type='submit'
          className='px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600'
        >
          Submit
        </button>
      </div>
      <div className='mt-4'>
        <h2 className='text-lg font-semibold'>Selected Groups:</h2>
        <ul>
          {selectedGroups &&
            selectedGroups.map((group: string, index: number) => (
              <li key={index}>{group}</li>
            ))}
        </ul>
        <h2 className='text-lg font-semibold'>Selected Individuals:</h2>
        <ul>
          {selectedIndividuals &&
            selectedIndividuals.map((individual: string, index: number) => (
              <li key={index}>{individual}</li>
            ))}
        </ul>
      </div>
    </div>
  );
}
