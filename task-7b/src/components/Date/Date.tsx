import React from 'react';

interface DateProps {
  date: string | undefined;
}

const DateComponent: React.FC<DateProps> = ({ date }) => {
  if (!date) return <div>data is not provided</div>;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <h3 className='text-sm font-[550] text-slate-900'>{formattedDate}</h3>
    </>
  );
};

export default DateComponent;
