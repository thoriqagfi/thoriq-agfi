import Typography from '@/components/typography';
import React from 'react';

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center w-full bg-[#083344]'>
      <div className='flex flex-col gap-4 h-full'>
        <Typography variant='h5' color='white' weight='bold'>
          Hello there!
        </Typography>
        <Typography variant='h1' color='white' weight='bold'>
          This is{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-tr from-primary-600 via-primary-700 to-primary-800 animate-pulse'>
            Agfi&apos;s
          </span>{' '}
          Portfolio
        </Typography>
        <Typography variant='p' color='gray' weight='medium'>
          Highly interested in IT Infrastructure, Machine Learning, and Software
          Engineering with several Certifications
        </Typography>
        <div></div>
      </div>
    </div>
  );
}
