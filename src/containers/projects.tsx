import ProjectCard from '@/components/projects-card';
import Typography from '@/components/typography';
import prisma from '@/lib/prisma';
import { Button, Link } from '@nextui-org/react';
import React from 'react';

// const projects = [
//   {
//     id: 1,
//     title: 'PPDB Surabaya',
//     description:
//       'PPDB Surabaya is a website for elementary student registration in Surabaya.',
//     tech_stacks: [TbBrandNextjs, FaReact, SiTailwindcss, SiRedux],
//     images: '/images/projects/ppdb-surabaya.png',
//     url_site: '/projects/ppdb-surabaya',
//     views: 5,
//   },
//   {
//     id: 2,
//     title: 'ITS Expo 2023',
//     description:
//       'ITS Expo 2023 is an big event that accommodates the entire ITS Students to demonstrate ITS inovation to public.',
//     tech_stacks: [TbBrandNextjs, FaReact, SiTailwindcss, SiRedux],
//     images: '/images/projects/its-expo.png',
//     url_site: '/projects/its-expo',
//     views: 3,
//   },
//   {
//     id: 3,
//     title: 'Spasial 2024',
//     description:
//       'SPASIAL is one of the most prestigious events hosted by Interior Design students at ITS.',
//     tech_stacks: [TbBrandNextjs, FaReact, SiTailwindcss, SiRedux],
//     images: '/images/projects/spasial.png',
//     url_site: '/projects/spasial',
//     views: 2,
//   },
// ];

export default function ProjectsPage() {
  const allProjectsData = getData();
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
        {allProjectsData.then((data) =>
          data.map((project, index) => (
            <ProjectCard
              key={project.id ?? index}
              {...project}
              description={project.description || null}
              content={project.content || null}
              url_site={project.url_site || null}
              href={project.href || null}
              project_tech_stacks={project.ProjectTechStacks}
            />
          ))
        )}
      </div>
      <div className='mt-4'>
        <Button
          as={Link}
          href='/projects'
          color='secondary'
          variant='solid'
          className='font-bold rounded-sm bg-primary-600'
        >
          See more projects
        </Button>
      </div>
    </div>
  );
}

export const getData = async () => {
  const projectsWithTechStacksData = await prisma.projects.findMany({
    include: {
      ProjectTechStacks: {
        include: {
          TechStacks: true,
        },
      },
    },
  });
  return projectsWithTechStacksData;
};
