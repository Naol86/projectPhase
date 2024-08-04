import Button from '../Buttons/Button';
import { JobPost } from '../../type/type';

function JobCard({ data }: { data: JobPost }) {
  return (
    <div className='flex py-4 p-1 md:px-8 sm:px-4 border-2 rounded-[30px] space-x-2 my-3'>
      <div className='sm:w-[60px] h-[60px] flex-shrink-0 my-1'>
        <img
          src={data.logoUrl}
          alt='company logo'
          // width={50}
          // height={50}
          className='block object-cover w-full h-full'
        />
      </div>
      <div className='max-w-2xl mx-2 space-y-1'>
        <h1 className=''>{data.title}</h1>
        <h3 className='text-xs text-slate-500 font-epilogue'>{data.location}</h3>
        <p className='py-1 text-sm font-medium text-justify font-epilogue text-slate-700'>
          {data.description}
        </p>
        <div className='flex items-center align-middle'>
          <div className='mr-2 border-r-2 '>
            <Button
              background={'bg-green-100'}
              border={''}
              text={'text-green-400'}
              value={'In Person'}
            />
          </div>
          <Button
            background={'bg-slate-50'}
            border={'border border-amber-400'}
            text={'text-yellow-500'}
            value={'Education'}
          />
          <Button
            background={'bg-slate-50'}
            border={'border border-indigo-800'}
            text={'text-indigo-700'}
            value={'IT'}
          />
          <div className='flex items-center mx-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 576 512'
              className='w-6 h-6 mr-1 text-sky-900'
              fill='currentcolor'
            >
              <path d='M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z' />
            </svg>
            <p className='text-sm font-[500] text-slate-800'>{data.viewsCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
