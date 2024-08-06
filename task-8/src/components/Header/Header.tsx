import SelectSortedBy from '../SelectSortedBy/SelectSortedBy';

export default function Header({ count }: { count: number }) {
  return (
    <div className='flex items-center justify-between pr-2 my-5 mb-10'>
      <div>
        <h1 className='text-4xl font-bolder'>Opportunities</h1>
        <h3 className='font-medium text-md text-slate-500'>Showing {count} results</h3>
      </div>
      <div className='flex items-center font-epilogue'>
        <h3 className='mx-2 text-sm font-medium text-slate-500'>sorted by:</h3>
        <SelectSortedBy />
      </div>
    </div>
  );
}
