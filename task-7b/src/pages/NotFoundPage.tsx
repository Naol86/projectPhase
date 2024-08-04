import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(window.history.length);
    if (window.history.length > 2) {
      // console.log('asd');
      navigate('/');
      // navigate(-1); // Navigate one step back if there is history
    } else {
      navigate('/'); // Navigate to home page if there is no history
    }
  };

  return (
    <div className='flex items-center justify-around w-screen min-h-screen bg-white'>
      <div>
        <h1 className='text-[60px] m-5'>Oops...</h1>
        <p className='text-3xl text-slate-600 font-[600]'>Page not found</p>
        <h3 className='my-2 font-[400] text-slate-500'>Message</h3>
        <button
          onClick={handleClick}
          className='border bg-blue-100 border-blue-600 text-blue-700 font-[550] px-3 py-1 rounded-xl hover:scale-105 transition-all duration-300'
        >
          Go Back
        </button>
      </div>
      <div className='rounded-[36px] shadow-lg max-w-md'>
        <img
          src='https://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg'
          alt='404 Error'
        />
      </div>
    </div>
  );
}
