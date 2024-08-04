import Select from 'react-select';

export default function SelectSortedBy() {
  const options = [
    { value: 'most-relevant', label: 'Most relevant' },
    { value: 'newest', label: 'Newest' },
    { value: 'highest-rated', label: 'Highest Rated' },
  ];
  return (
    <>
      <Select options={options} className='h-10 m-1 text-sm outline-none w-52' />
    </>
  );
}
