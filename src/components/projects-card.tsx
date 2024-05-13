import Link from 'next/link';
import React from 'react';
import { FaEye, FaReact, FaGithub, FaFigma, FaDocker } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import {
  SiTailwindcss,
  SiRedux,
  SiGnubash,
  SiPostgresql,
  SiPostman,
  SiCloudflare,
  SiGo,
  SiNginx,
  SiPrettier,
  SiMysql,
  SiEslint,
  SiTypescript,
  // SiGin,
} from 'react-icons/si';
import Typography from './typography';
import Image from 'next/image';
import { IconType } from 'react-icons';
import { Project } from '@/types/project';

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
  return (
    <Link
      className='border border-gray-500 p-4 rounded flex flex-col gap-2 cursor-pointer hover:bg-gray-800 hover:bg-opacity-50 transition-all duration-500 ease-in-out hover:scale-105'
      href={`/projects/${project.id}` ?? '/'}
    >
      <Image
        src={project.images}
        alt={project.title}
        width={500}
        height={300}
        className='rounded w-full'
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
      <Typography
        className='text-gray-400 line-clamp-2 text-justify'
        variant='label'
      >
        {project.description}
      </Typography>
      <div className='flex gap-2 pt-2'>
        {project.project_tech_stacks.map(({ projectId, TechStacks }, index) => (
          <div key={projectId ?? index} className='text-white'>
            {TechStacks.icon === 'TbBrandNextjs' && <TbBrandNextjs />}
            {TechStacks.icon === 'FaReact' && <FaReact />}
            {TechStacks.icon === 'SiTailwindcss' && <SiTailwindcss />}
            {TechStacks.icon === 'SiRedux' && <SiRedux />}
            {TechStacks.icon === 'SiGnubash' && <SiGnubash />}
            {TechStacks.icon === 'SiPostgresql' && <SiPostgresql />}
            {TechStacks.icon === 'SiPostman' && <SiPostman />}
            {TechStacks.icon === 'SiCloudflare' && <SiCloudflare />}
            {TechStacks.icon === 'FaGithub' && <FaGithub />}
            {TechStacks.icon === 'FaFigma' && <FaFigma />}
            {TechStacks.icon === 'SiGo' && <SiGo />}
            {/* {TechStacks.icon === 'SiGin' && <SiGin />} */}
            {TechStacks.icon === 'FaDocker' && <FaDocker />}
            {TechStacks.icon === 'SiNginx' && <SiNginx />}
            {TechStacks.icon === 'SiPrettier' && <SiPrettier />}
            {TechStacks.icon === 'SiMysql' && <SiMysql />}
            {TechStacks.icon === 'SiEslint' && <SiEslint />}
            {TechStacks.icon === 'SiTypescript' && <SiTypescript />}
          </div>
        ))}
      </div>
    </Link>
  );
}
