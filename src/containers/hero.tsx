import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Typography from '@/components/typography';
import { cn } from '@/lib/cn';
import React from 'react';
import { FaArrowDown, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const SocialMedia = [
  {
    id: 1,
    name: 'Github',
    icon: FaGithub,
    href: 'https://github.com/thoriqagfi',
  },
  {
    id: 2,
    name: 'Linkedin',
    icon: FaLinkedin,
    href: 'https://linkedin.com/in/thariqagfihermawan/',
  },
  {
    id: 3,
    name: 'Instagram',
    icon: FaInstagram,
    href: 'https://instagram.com/thoriqagfi',
  },
];

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <div className='flex flex-col gap-5 h-full'>
        <Typography variant='h5' color='white' weight='bold' data-aos='fade-up'>
          Hello there!
        </Typography>
        <Typography
          variant='h1'
          color='white'
          weight='bold'
          data-aos='fade-up'
          data-aos-duration='700'
        >
          This is{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-tr from-primary-600 via-primary-700 to-primary-800 animate-pulse'>
            Agfi&apos;s
          </span>{' '}
          Portfolio
        </Typography>
        <Typography
          variant='p'
          color='gray'
          weight='medium'
          data-aos='fade-up'
          data-aos-duration='800'
        >
          Highly interested in IT Infrastructure, Machine Learning, and Software
          Engineering with several Certifications
        </Typography>
        <div className='flex gap-5' data-aos='fade-up' data-aos-duration='600'>
          <ButtonLink
            href='/about'
            className='text-gray-800 dark:text-gray-800'
            variant='primary'
          >
            Want to know more about me?
          </ButtonLink>
        </div>
        <div className='flex gap-5'>
          {SocialMedia.map((social) => (
            <UnstyledLink
              data-aos='fade-up'
              data-aos-duration='900'
              href={social.href}
              key={social.id}
              className={cn(
                'text-sm font-bold text-gray-400 flex items-center gap-0.5',
                'hover:text-gray-100 ease-in-out transition-all duration-500'
              )}
            >
              <social.icon />
              &nbsp;{social.name}
            </UnstyledLink>
          ))}
        </div>
      </div>
      <UnstyledLink href={'#about'}>
        <FaArrowDown className='w-5 h-5 animate-bounce bottom-10 absolute cursor-pointer' />
      </UnstyledLink>
    </div>
  );
}
