import ProjectCard from '@/components/projects-card';
import Typography from '@/components/typography';
import React from 'react';
import { FaReact } from 'react-icons/fa';
import { SiRedux, SiTailwindcss } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

const projects = [
  {
    id: 1,
    title: 'PPDB Surabaya',
    description:
      'PPDB Surabaya is a website for elementary student registration in Surabaya.',
    icon: [TbBrandNextjs, FaReact, SiTailwindcss, SiRedux],
    img: '/images/projects/ppdb-surabaya.png',
    href: '/projects/ppdb-surabaya',
    views: 5,
  },
  {
    id: 2,
    title: 'ITS Expo 2023',
    description:
      'ITS Expo 2023 is an big event that accommodates the entire ITS Students to demonstrate ITS inovation to public.',
    icon: [TbBrandNextjs, FaReact, SiTailwindcss, SiRedux],
    img: '/images/projects/its-expo.png',
    href: '/projects/its-expo',
    views: 3,
  },
];

export default function Projects() {
  return (
    <div
      id='about'
      className='min-h-screen flex flex-col justify-center items-center'
    >
      <Typography
        variant='h2'
        className='text-transparent bg-clip-text bg-gradient-to-tr from-primary-600 via-primary-700 to-primary-800 font-bold'
      >
        PROJECTS
      </Typography>
      <div className='pt-5 grid grid-cols-2 xl:grid-cols-3 gap-4'>
        {projects.map((project, index) => (
          <ProjectCard key={project.id ?? index} {...project} />
        ))}
      </div>
    </div>
  );
}
