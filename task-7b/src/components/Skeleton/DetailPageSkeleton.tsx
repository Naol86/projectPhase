import { Skeleton } from '../ui/skeleton';

export default function DetailPageSkeleton() {
  return (
    <>
      <div id='root'>
        <div>
          <div className='flex justify-around'>
            <div className='flex-shrink my-10 min-w-[65vw]'>
              <div className='my-3'>
                <Skeleton className='w-full h-6 mb-4 bg-slate-200' />
                <Skeleton className='w-full h-4 mb-2 bg-slate-200' />
                <Skeleton className='w-full h-4 mb-2 bg-slate-200' />
                <Skeleton className='w-full h-4 mb-2 bg-slate-200' />
              </div>
              <div className='my-3'>
                <Skeleton className='w-1/2 h-6 mb-4 bg-slate-200' />
                <ul>
                  <li className='flex my-1.5'>
                    <Skeleton className='w-5 h-5 mr-2 bg-slate-200' />
                    <Skeleton className='w-full h-4 bg-slate-200' />
                  </li>
                  <li className='flex my-1.5'>
                    <Skeleton className='w-5 h-5 mr-2 bg-slate-200' />
                    <Skeleton className='w-full h-4 bg-slate-200' />
                  </li>
                  <li className='flex my-1.5'>
                    <Skeleton className='w-5 h-5 mr-2 bg-slate-200' />
                    <Skeleton className='w-full h-4 bg-slate-200' />
                  </li>
                  <li className='flex my-1.5'>
                    <Skeleton className='w-5 h-5 mr-2 bg-slate-200' />
                    <Skeleton className='w-full h-4 bg-slate-200' />
                  </li>
                  <li className='flex my-1.5'>
                    <Skeleton className='w-5 h-5 mr-2 bg-slate-200' />
                    <Skeleton className='w-full h-4 bg-slate-200' />
                  </li>
                  <li className='flex my-1.5'>
                    <Skeleton className='w-5 h-5 mr-2 bg-slate-200' />
                    <Skeleton className='w-full h-4 bg-slate-200' />
                  </li>
                </ul>
              </div>
              <div className='my-3'>
                <Skeleton className='w-1/2 h-6 mb-4 bg-slate-200' />
                <ul>
                  <Skeleton className='w-full h-4 mb-2 bg-slate-200' />
                </ul>
              </div>
              <div className='my-5'>
                <Skeleton className='w-1/2 h-6 mb-4 bg-slate-200' />
                <div className='flex items-center'>
                  <Skeleton className='mr-3 bg-slate-200 w-11 h-11' />
                  <Skeleton className='w-3/4 h-4 bg-slate-200' />
                </div>
              </div>
            </div>
            <div className='flex-shrink-0 max-w-[250px] mx-3 hidden md:block lg:max-w-[300px] xl:max-w-[350]'>
              <div className='pb-4 my-4 border-b-2'>
                <Skeleton className='w-1/2 h-6 mb-4 bg-slate-200' />
                <div className='flex items-center my-3.5'>
                  <Skeleton className='w-10 h-10 mr-2 bg-slate-200' />
                  <div>
                    <Skeleton className='w-3/4 h-4 mb-2 bg-slate-200' />
                    <Skeleton className='w-1/2 h-4 bg-slate-200' />
                  </div>
                </div>
                <div className='flex items-center my-3.5'>
                  <Skeleton className='w-10 h-10 mr-2 bg-slate-200' />
                  <div>
                    <Skeleton className='w-3/4 h-4 mb-2 bg-slate-200' />
                    <Skeleton className='w-1/2 h-4 bg-slate-200' />
                  </div>
                </div>
                <div className='flex items-center my-3.5'>
                  <Skeleton className='w-10 h-10 mr-2 bg-slate-200' />
                  <div>
                    <Skeleton className='w-3/4 h-4 mb-2 bg-slate-200' />
                    <Skeleton className='w-1/2 h-4 bg-slate-200' />
                  </div>
                </div>
                <div className='flex items-center my-3.5'>
                  <Skeleton className='w-10 h-10 mr-2 bg-slate-200' />
                  <div>
                    <Skeleton className='w-3/4 h-4 mb-2 bg-slate-200' />
                    <Skeleton className='w-1/2 h-4 bg-slate-200' />
                  </div>
                </div>
                <div className='flex items-center my-3.5'>
                  <Skeleton className='w-10 h-10 mr-2 bg-slate-200' />
                  <div>
                    <Skeleton className='w-3/4 h-4 mb-2 bg-slate-200' />
                    <Skeleton className='w-1/2 h-4 bg-slate-200' />
                  </div>
                </div>
              </div>
              <div className='pb-4 my-4 border-b-2'>
                <Skeleton className='w-1/2 h-6 mb-4 bg-slate-200' />
                <div className='space-y-1.5'>
                  <Skeleton className='w-40 h-8 mb-2 bg-slate-200' />
                  <Skeleton className='w-40 h-8 bg-slate-200' />
                </div>
              </div>
              <div className='my-5'>
                <Skeleton className='w-1/2 h-6 mb-4 bg-slate-200' />
                <div className='min-h-40 max-w-56'>
                  <Skeleton className='w-20 h-6 mb-2 bg-slate-200' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
