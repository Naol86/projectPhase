import Select, { SingleValue } from 'react-select';
import { Dispatch, SetStateAction } from 'react';

interface Option {
  value: string;
  label: string;
}

export default function SelectSortedBy({
  selectBy,
}: {
  selectBy: Dispatch<SetStateAction<number>>;
}) {
  const options: Option[] = [
    { value: '1', label: 'Most relevant' },
    { value: '2', label: 'View Count' },
    { value: '3', label: 'Highest Rated' },
  ];

  const handleChange = (selectedOption: SingleValue<Option>) => {
    if (selectedOption) {
      selectBy(Number(selectedOption.value));
    }
  };

  return (
    <Select
      options={options}
      className='h-10 m-1 text-sm outline-none sm:w-52'
      onChange={handleChange}
    />
  );
}
