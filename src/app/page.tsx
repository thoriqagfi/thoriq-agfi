import Hero from '@/containers/hero';
import Projects from '@/containers/projects';
import prisma from '@/lib/prisma';
import React from 'react';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main className='layout flex min-h-screen flex-col items-center'>
      <Hero />
      <ProjectComponent />
    </main>
  );
}

async function ProjectComponent() {
  const data = await getData();
  const projectsWithTechStacksData = data.props.projectsWithTechStacksData.map(
    (project) => ({
      ...project,
      project_tech_stacks: project.ProjectTechStacks,
    })
  );
  return <Projects projectsWithTechStacksData={projectsWithTechStacksData} />;
}

async function getData() {
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
}
