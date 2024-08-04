import { JobPost } from '../../type/type';

export default function Detail({ data }: { data: JobPost }) {
  return (
    <div className='flex-shrink max-w-3xl my-10'>
      <div className='my-3'>
        <h1 className=''>Description</h1>
        <h3 className='py-2 font-normal text-justify text-md text-slate-800'>
          {data.description || 'NOT PROVIDED'}
        </h3>
      </div>
      <div className='my-3'>
        <h1 className='mb-3'>Responsibility</h1>
        <ul>
          {data
            ? data.responsibilities.split('\n').map((ele, index) => (
                <li key={index} className='flex my-1.5 text-slate-800'>
                  <svg
                    width='21'
                    height='20'
                    viewBox='0 0 21 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='mr-2'
                  >
                    <g clipPath='url(#clip0_138_1217)'>
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M10.5 3.33335C6.81812 3.33335 3.83335 6.31812 3.83335 10C3.83335 13.6819 6.81812 16.6667 10.5 16.6667C14.1819 16.6667 17.1667 13.6819 17.1667 10C17.1667 6.31812 14.1819 3.33335 10.5 3.33335ZM2.16669 10C2.16669 5.39765 5.89765 1.66669 10.5 1.66669C15.1024 1.66669 18.8334 5.39765 18.8334 10C18.8334 14.6024 15.1024 18.3334 10.5 18.3334C5.89765 18.3334 2.16669 14.6024 2.16669 10Z'
                        fill='#56CDAD'
                      />
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M13.5893 7.74408C13.9147 8.06951 13.9147 8.59715 13.5893 8.92259L10.2559 12.2559C9.93051 12.5814 9.40287 12.5814 9.07743 12.2559L7.41076 10.5893C7.08533 10.2638 7.08533 9.73618 7.41076 9.41074C7.7362 9.08531 8.26384 9.08531 8.58928 9.41074L9.66669 10.4882L12.4108 7.74408C12.7362 7.41864 13.2638 7.41864 13.5893 7.74408Z'
                        fill='#56CDAD'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_138_1217'>
                        <rect width='20' height='20' fill='white' transform='translate(0.5)' />
                      </clipPath>
                    </defs>
                  </svg>

                  {ele}
                </li>
              ))
            : 'NOT PROVIDED'}
        </ul>
      </div>
      <div className='my-3'>
        <h1 className='my-5'>Ideal Candidate we want</h1>
        <ul>{data.idealCandidate || 'NOT PROVIDED'}</ul>
      </div>
      <div className='my-5'>
        <h1 className='mb-5'>When & Where</h1>
        <svg
          width='45'
          height='44'
          viewBox='0 0 45 44'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='inline-block mr-3'
        >
          <rect x='1' y='0.5' width='43' height='43' rx='21.5' fill='white' />
          <rect x='1' y='0.5' width='43' height='43' rx='21.5' stroke='#D6DDEB' />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M25 20.5005C25 19.1192 23.8808 18 22.5005 18C21.1192 18 20 19.1192 20 20.5005C20 21.8808 21.1192 23 22.5005 23C23.8808 23 25 21.8808 25 20.5005Z'
            stroke='#26A4FF'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M22.4995 31C21.301 31 15 25.8984 15 20.5633C15 16.3866 18.3571 13 22.4995 13C26.6419 13 30 16.3866 30 20.5633C30 25.8984 23.698 31 22.4995 31Z'
            stroke='#26A4FF'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>

        <h3 className='inline-block text-slate-800'>{data.whenAndWhere || 'NOT PROVIDED'}</h3>
      </div>
    </div>
  );
}
