import ProjectCard from '@/components/projects-card';
import Typography from '@/components/typography';
import prisma from '@/lib/prisma';
import { Button, Link } from '@nextui-org/react';
import React from 'react';

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
        className='pt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'
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
    take: 3,
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
