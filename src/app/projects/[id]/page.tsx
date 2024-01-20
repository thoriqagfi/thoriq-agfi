import React from 'react';
import prisma from '@/lib/prisma';
import ProjectDetail from '@/components/project-detail';

export default function DetailProjectsPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div className='layout min-h-screen py-32'>
      <ProjectPage id={id} />
    </div>
  );
}

async function ProjectPage({ id }: { id: string }) {
  const data = await getDetailProjectData({ id });
  return (
    <div>
      {data.map((project) => (
        <ProjectDetail
          key={project.id}
          {...project}
          description={project.description || null}
          content={project.content || null}
          url_site={project.url_site || null}
          href={project.href || null}
          project_tech_stacks={project.ProjectTechStacks}
        />
      ))}
    </div>
  );
}

async function getDetailProjectData({ id }: { id: string }) {
  const result = await prisma.projects.findMany({
    where: {
      id: Number(id),
    },
    include: {
      ProjectTechStacks: {
        include: {
          TechStacks: true,
        },
      },
    },
  });
  return result;
}
