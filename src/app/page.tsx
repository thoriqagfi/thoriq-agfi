import Hero from '@/containers/hero';
import Projects from '@/containers/projects';
import prisma from '@/lib/prisma';
import React from 'react';

export default async function Home() {
  const data = await getData();
  const projectsWithTechStacksData = data.props.projectsWithTechStacksData.map(
    (project) => ({
      ...project,
      project_tech_stacks: project.ProjectTechStacks,
    })
  );
  return (
    <main className='layout flex min-h-screen flex-col items-center'>
      <Hero />
      <Projects projectsWithTechStacksData={projectsWithTechStacksData} />
    </main>
  );
}

const getData = async () => {
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

  return {
    props: {
      projectsWithTechStacksData,
    },
  };
};
