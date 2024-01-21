import React from 'react';
import prisma from '@/lib/prisma';
import ProjectDetail from '@/components/project-detail';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote/rsc';

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
      <ProjectDetail
        key={data.id}
        {...data}
        description={data.description || null}
        content={data.content || null}
        url_site={data.url_site || null}
        href={data.href || null}
        project_tech_stacks={data.ProjectTechStacks}
      />
      <MDXRemote source={data.mdxSource} />
      <div>{data.content}</div>
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
  const mdxSource: MDXRemoteSerializeResult = await serialize(
    result[0].content ?? 'No content found'
  );
  return {
    ...result[0],
    mdxSource: mdxSource,
  };
}
