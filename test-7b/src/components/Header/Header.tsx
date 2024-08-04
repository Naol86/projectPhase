'use client';
import { Dispatch, SetStateAction } from 'react';
import { useGetJobPostQuery } from '../../features/api/apiSlice';
import SelectSortedBy from '../SelectSortedBy/SelectSortedBy';

export default function Header({ selectBy }: { selectBy: Dispatch<SetStateAction<number>> }) {
  const { data } = useGetJobPostQuery();
  return (
    <div className='flex items-center justify-between pr-2 my-5 mb-10'>
      <div>
        <h1 className='text-xl sm:text-4xl font-bolder'>Opportunities</h1>
        <h3 className='text-sm font-medium sm:text-md text-slate-500'>
          Showing {data?.data.length} results
        </h3>
      </div>
      <div className='flex items-center font-epilogue'>
        <h3 className='mx-2 text-sm font-medium text-slate-500'>sorted by:</h3>
        <SelectSortedBy selectBy={selectBy} />
      </div>
    </div>
  );
}
