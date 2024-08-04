import { Skeleton } from '../ui/skeleton';

export default function MainPageSkeleton() {
  return (
    <div id='root'>
      <div>
        <div className='flex justify-center sm:mx-5 min-w-[600px]'>
          <main className='flex items-center justify-center mx-5 my-10'>
            <div>
              <div className='flex items-center justify-between pr-2 my-5 mb-10'>
                <div>
                  <Skeleton className='w-48 h-10' />
                  <Skeleton className='w-32 h-6 mt-2' />
                </div>
                <div className='flex items-center'>
                  <Skeleton className='w-16 h-6 mx-2' />
                  <div className='h-10 m-1 w-52'>
                    <Skeleton className='w-full h-10' />
                  </div>
                </div>
              </div>

              {[...Array(4)].map((_, i) => (
                <a key={i} href='#'>
                  <div className='flex py-4 px-8 border-2 rounded-[30px] space-x-2 my-3'>
                    <div className='w-[60px] h-[60px] flex-shrink-0 my-1'>
                      <Skeleton className='w-full h-full' />
                    </div>
                    <div className='max-w-2xl mx-2 space-y-1'>
                      <Skeleton className='w-48 h-6' />
                      <Skeleton className='w-32 h-4' />
                      <Skeleton className='w-full h-4' />
                      <div className='flex items-center'>
                        <div className='pr-2 mr-2 border-r-2'>
                          <Skeleton className='w-20 h-8' />
                        </div>
                        <Skeleton className='w-20 h-8' />
                        <Skeleton className='w-20 h-8' />
                        <Skeleton className='w-20 h-8' />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
