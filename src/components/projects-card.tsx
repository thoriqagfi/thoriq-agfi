import Link from 'next/link';
import React from 'react';
import { FaEye, FaReact } from 'react-icons/fa';
import Typography from './typography';
import Image from 'next/image';
import { IconType } from 'react-icons';
import { Project } from '@/types/project';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiRedux, SiTailwindcss } from 'react-icons/si';

export type ProjectCardProps = {
  id: number;
  title: string;
  description: string;
  tech_stacks: IconType[];
  images: string;
  url_site: string;
  views: number;
};

export default function ProjectCard(project: Project) {
  const iconComponents: { [key: string]: IconType } = {
    TbBrandNextjs: TbBrandNextjs,
    FaReact: FaReact,
    SiTailwindcss: SiTailwindcss,
    SiRedux: SiRedux,
    // add other icon components here...
  };
  return (
    <Link
      className='border border-gray-500 p-4 rounded flex flex-col gap-2 cursor-pointer hover:bg-gray-800 hover:bg-opacity-50 transition-all duration-500 ease-in-out hover:scale-105'
      href={project.url_site ?? '/'}
    >
      <Image
        src={project.images}
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
        {project.project_tech_stacks.map(({ projectId, TechStacks }, index) => (
          <div key={projectId ?? index} className='text-white'>
            {TechStacks.icon &&
              React.createElement(iconComponents[TechStacks.icon])}
          </div>
        ))}
      </div>
    </Link>
  );
}
