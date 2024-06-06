import * as React from 'react';
import Typography from './typography';
import Link from 'next/link';
import { FaEye } from 'react-icons/fa';
import { IoIosTimer } from 'react-icons/io';
import CloudinaryImage from './cloudinary-image';
import { formatDate } from '@/utils/date';

export type BlogCardProps = {
  id: number;
  title: string;
  date: string;
  description: string;
  subtitle: string;
  images: string;
  url: string;
  views: number;
  minute_read: number;
};

export default function BlogCard(blog: BlogCardProps) {
  return (
    <Link
      className='flex rounded-xl flex-col gap-2 cursor-pointer bg-[#181818]  hover:bg-gray-800 hover:bg-opacity-50 transition-all duration-500 ease-in-out hover:scale-105'
      href={`/blogs/${blog.url}`}
    >
      <CloudinaryImage
        src={blog.images}
        alt={blog.title}
        width={500}
        height={300}
        className='rounded-t-xl w-full'
      />
      <div className='px-5 py-3 flex flex-col gap-1'>
        <Typography className='font-bold text-white text-xl'>
          {blog.title}
        </Typography>
        <div className='flex gap-5 pt-1'>
          <div className='flex items-center gap-1'>
            <IoIosTimer className='w-4 h-4' />
            <Typography className='text-white text-medium'>
              {blog.minute_read} min read
            </Typography>
          </div>
          <div className='flex items-center gap-1'>
            <FaEye className='w-4 h-4' />
            <Typography className='text-white text-medium'>
              {blog.views} views
            </Typography>
          </div>
        </div>
        <Typography className='text-white pt-4 text-sm' weight='semibold'>
          {formatDate(blog.date)}
        </Typography>
        <Typography
          className='line-clamp-2 text-justify text-white pt-1'
          weight='light'
        >
          {blog.subtitle}
        </Typography>
      </div>
    </Link>
  );
}
