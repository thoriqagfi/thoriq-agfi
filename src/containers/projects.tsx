import ButtonLink from '@/components/links/ButtonLink';
import ProjectCard from '@/components/projects-card';
import Typography from '@/components/typography';
// import { Project } from '@/types/project';
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
    tech_stacks: [TbBrandNextjs, FaReact, SiTailwindcss, SiRedux],
    images: '/images/projects/ppdb-surabaya.png',
    url_site: '/projects/ppdb-surabaya',
    views: 5,
  },
  {
    id: 2,
    title: 'ITS Expo 2023',
    description:
      'ITS Expo 2023 is an big event that accommodates the entire ITS Students to demonstrate ITS inovation to public.',
    tech_stacks: [TbBrandNextjs, FaReact, SiTailwindcss, SiRedux],
    images: '/images/projects/its-expo.png',
    url_site: '/projects/its-expo',
    views: 3,
  },
  {
    id: 3,
    title: 'Spasial 2024',
    description:
      'SPASIAL is one of the most prestigious events hosted by Interior Design students at ITS.',
    tech_stacks: [TbBrandNextjs, FaReact, SiTailwindcss, SiRedux],
    images: '/images/projects/spasial.png',
    url_site: '/projects/spasial',
    views: 2,
  },
];

export default function Projects() {
  return (
    <div id='about' className='min-h-screen flex flex-col justify-center'>
      <Typography
        variant='h2'
        className='text-transparent bg-clip-text bg-gradient-to-tr from-primary-600 via-primary-700 to-primary-800 font-bold'
        data-aos='fade-up'
      >
        PROJECTS
      </Typography>
      <div
        className='pt-5 grid grid-cols-2 xl:grid-cols-3 gap-4'
        data-aos='fade-up'
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id ?? index} {...project} />
        ))}
        {/* {allProjectsData.map((project, index) => (
          <ProjectCard key={project.id ?? index} {...project} />
        ))} */}
      </div>
      <div className='mt-4'>
        <ButtonLink href='/projects' variant='primary'>
          See more projects
        </ButtonLink>
      </div>
    </div>
  );
}
