'use client';
import SelectSortedBy from '../SelectSortedBy/SelectSortedBy';

export default function Header() {
  return (
    <div className='flex items-center justify-between pr-2 my-5 mb-10'>
      <div>
        <h1 className='text-4xl font-bolder'>Opportunities</h1>
        <h3 className='font-medium text-md text-slate-500'>Showing 73 results</h3>
      </div>
      <div className='flex items-center font-epilogue'>
        <h3 className='mx-2 text-sm font-medium text-slate-500'>sorted by:</h3>
        {/* <select
          name='sort'
          id='sort'
          className='px-2 bg-white border-none outline-none min-w-36 decoration-none'
        >
          <option
            value='most-relevant'
            className='text-sm font-semibold bg-white font-epilogue text-slate-700'
          >
            Most relevant
          </option>
          <option
            value='most-relevant'
            className='text-sm font-semibold bg-white font-epilogue text-slate-700'
          >
            Most relevant
          </option>
          <option
            value='most-relevant'
            className='text-sm font-semibold bg-white font-epilogue text-slate-700'
          >
            Most relevant
          </option>
        </select> */}
        <SelectSortedBy />
      </div>
    </div>
  );
}
