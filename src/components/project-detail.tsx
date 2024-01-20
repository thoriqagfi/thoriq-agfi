import { Project } from '@/types/project';
import Image from 'next/image';
import Typography from './typography';
import { Link } from '@nextui-org/react';
import React from 'react';
import { FaEye } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';

export default function ProjectDetail(project: Project) {
  return (
    <div key={project.id} className='flex flex-col gap-4'>
      <Image
        src={project.images}
        alt={project.title}
        width={500}
        height={300}
        className='rounded w-full'
      />
      <div className='flex flex-col gap-2'>
        <Typography className='' color='white' variant='h3' weight='bold'>
          {project.title}
        </Typography>
        <Typography
          className='text-gray-500 text-start'
          color='gray'
          variant='caption'
          weight='regular'
        >
          {project.description}
        </Typography>
        <div>
          <Link
            isExternal
            href={`${project.url_site}`}
            size='sm'
            underline='hover'
            showAnchorIcon
            className='text-gray-400'
          >
            URL {project.title} Site
          </Link>
        </div>
        <div className='flex gap-10'>
          <div className='flex gap-1 items-center'>
            <FaEye className='text-gray-400' />
            <Typography
              className='text-gray-400'
              color='gray'
              variant='label'
              weight='regular'
            >
              {project.views}&nbsp;Views
            </Typography>
          </div>
          <div className='flex gap-1 items-center'>
            <IoPerson className='text-gray-400' />
            <Typography
              className='text-gray-400'
              color='gray'
              variant='label'
              weight='regular'
            >
              {project.total_team}&nbsp;Person
            </Typography>
          </div>
        </div>
      </div>
      <hr className='w-full h-2' />
      <div>{project.content}</div>
    </div>
  );
}
