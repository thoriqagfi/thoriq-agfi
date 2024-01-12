import { cn } from '@/lib/cn';
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <div
      className={cn(
        'z-[50] fixed top-4 w-full flex justify-center',
        'transition-all duration-500 ease-in-out'
      )}
    >
      <div
        className={cn(
          'relative flex items-center shadow-lg justify-between rounded-lg px-6 py-2 md:flex-row',
          'bg-gradient-to-b from-zinc-200 to-zinc-200 dark:from-zinc-800 dark:to-zinc-800/30',
          'transition-all duration-500 ease-in-out',
          'flex-col group h-16 md:h-16 md:hover:h-16 hover:h-fit'
        )}
      >
        <div
          className={cn(
            'items-center justify-center gap-4 md:flex',
            'transition-all duration-500 ease-in-out md:translate-y-0 -translate-y-[200%] md:group-hover:translate-y-0 group-hover:translate-y-2'
          )}
        >
          <ul className='flex items-center justify-center gap-4'>
            <li className='text-white'>
              <Link href='/'>Home</Link>
            </li>
            <li className='text-white'>
              <Link href='#about'>About</Link>
            </li>
            <li className='text-white'>
              <Link href='#projects'>Projects</Link>
            </li>
            <li className='text-white'>
              <Link href='#blogs'>Blogs</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
