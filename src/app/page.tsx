import Hero from '@/containers/hero';
import Projects from '@/containers/projects';
import React from 'react';

export default function Home() {
  return (
    <main className='layout flex min-h-screen flex-col items-center'>
      <Hero />
      <Projects />
    </main>
  );
}
