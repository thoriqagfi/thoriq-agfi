import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-row justify-between items-center w-full max-w-3xl px-4 py-4'>
        <div className='flex flex-row justify-center items-center'>
          <Link
            className='font-bold text-2xl text-gray-900 dark:text-gray-100'
            href='/'
          >
            Thariq Agfi Hermawan
          </Link>
        </div>
        <div className='flex flex-row justify-center items-center'>
          <Link
            className='font-bold text-lg text-gray-900 dark:text-gray-100'
            href='/blog'
          ></Link>
          <Link
            className='font-bold text-lg text-gray-900 dark:text-gray-100 ml-4'
            href='/portfolio'
          >
            Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
