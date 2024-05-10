import React from 'react';
import Typography from '@/components/typography';
import { SocialMedia } from '@/containers/hero';
import { cn } from '@/lib/cn';
import { Link } from '@nextui-org/react';

export default function Footer() {
  return (
    <footer className='bg-gray-900 py-2'>
      <div className='flex flex-col items-center'>
        <div className='flex gap-5 mt-5'>
          {SocialMedia.map((social) => (
            <Link
              isExternal
              target='_blank'
              href={social.href}
              key={social.id}
              className={cn(
                'text-sm text-gray-400 flex items-center gap-0.5',
                'hover:text-gray-100 ease-in-out transition-all duration-500'
              )}
            >
              <social.icon />
              &nbsp;{social.name}
            </Link>
          ))}
        </div>
      </div>
      <Typography
        className='flex justify-center items-center text-gray-600 pt-4'
        variant='label'
        weight='medium'
      >
        Copyright {new Date().getFullYear()} &copy; All rights reserved. Made by
        &nbsp;
        <span className='hover:text-white ease-in-out transition-all duration-500'>
          Thariq Agfi Hermawan.
        </span>
      </Typography>
    </footer>
  );
}
