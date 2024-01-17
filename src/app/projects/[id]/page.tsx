'use client';
import prisma from '@/lib/prisma';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function DetailProjectsPage() {
  const pathname = usePathname();
  // Get the id of the project from the pathname
  const id = pathname.split('/')[2];
  const projectDetailData = getProjectsData(Number(id));
  return (
    <div className='layout min-h-screen'>
      {projectDetailData.then((data) => (
        <div className='flex flex-col'>
          <div className='flex flex-col'>
            <h1 className='text-5xl font-bold text-primary-600'>
              {data?.title}
            </h1>
            <h2 className='text-2xl font-bold text-primary-600'>
              {data?.description}
            </h2>
            <h3 className='text-xl font-bold text-primary-600'>
              {data?.content}
            </h3>
            <h4 className='text-lg font-bold text-primary-600'>
              {data?.url_site}
            </h4>
            <h5 className='text-lg font-bold text-primary-600'>{data?.href}</h5>
            <h6 className='text-lg font-bold text-primary-600'>
              {data?.ProjectTechStacks.map((tech_stack, index) => (
                <div key={index}>{tech_stack.TechStacks.name}</div>
              ))}
            </h6>
          </div>
        </div>
      ))}
    </div>
  );
}

async function getProjectsData(id: number) {
  const projectData = await prisma.projects.findUnique({
    where: {
      id: id,
    },
    include: {
      ProjectTechStacks: {
        include: {
          TechStacks: true,
        },
      },
    },
  });
  return projectData;
}
