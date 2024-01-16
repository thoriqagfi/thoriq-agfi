import Hero from '@/containers/hero';
import Projects from '@/containers/projects';
// import prisma from '@/lib/prisma';
import React from 'react';

export default function Home() {
  return (
    <main className='layout flex min-h-screen flex-col items-center'>
      <Hero />
      <Projects />
    </main>
  );
}

// export const getStaticProps = async () => {
//   const allProjectsData = await prisma.projects.findMany({
//     orderBy: {
//       id: 'desc',
//       views: 'desc',
//     },
//     take: 3,
//   });
//   return {
//     props: {
//       allProjectsData,
//     },
//   };
// };
