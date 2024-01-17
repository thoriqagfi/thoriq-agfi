import Typography from '@/components/typography';
import React from 'react';
import ProjectCard from '@/components/projects-card';
import prisma from '@/lib/prisma';

export default function ProjectsPage() {
  const allProjectsData = getProjectsData();
  return (
    <div className='min-h-screen py-32 layout'>
      <div className='flex flex-col'>
        <Typography
          variant='h2'
          className='text-transparent bg-clip-text bg-gradient-to-tr from-primary-600 via-primary-700 to-primary-800 font-bold'
        >
          PROJECTS
        </Typography>
      </div>
      <div className='pt-5 grid grid-cols-2 xl:grid-cols-3 gap-4'>
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
    </div>
  );
}

async function getProjectsData() {
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
}
