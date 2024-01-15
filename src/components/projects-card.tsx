import Link from 'next/link';
import React from 'react';
import { FaEye } from 'react-icons/fa';
import Typography from './typography';
import Image from 'next/image';
import { IconType } from 'react-icons';

export type ProjectCardProps = {
  id: number;
  title: string;
  description: string;
  icon: IconType[];
  img: string;
  href: string;
  views: number;
};

export default function ProjectCard(project: ProjectCardProps) {
  return (
    <Link
      className='border border-gray-500 p-4 rounded flex flex-col gap-2 cursor-pointer hover:bg-gray-800 hover:bg-opacity-50 transition-all duration-500 ease-in-out hover:scale-105'
      href={project.href}
    >
      <Image
        src={project.img}
        alt={project.title}
        width={500}
        height={300}
        className='rounded'
      />
      <Typography className='font-bold text-white' variant='h6'>
        {project.title}
      </Typography>
      <div className='flex items-center gap-1'>
        <FaEye />
        <Typography className='text-primary-400' variant='label'>
          {project.views} views
        </Typography>
      </div>
      <Typography className='text-gray-400' variant='label'>
        {project.description}
      </Typography>
      <div className='flex gap-2 pt-2'>
        {project.icon.map((Icon, index) => (
          <Icon key={index} className='text-white' />
        ))}
      </div>
    </Link>
  );
}
