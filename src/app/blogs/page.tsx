import BlogsCard from '@/components/blogs-card';
import Typography from '@/components/typography';
import prisma from '@/lib/prisma';
import * as React from 'react';

export const dynamic = 'force-dynamic';
export const metadata = {
  title: 'Blogs',
};

export default function Blogs() {
  const blogsData = getBlogsData();
  return (
    <div className='min-h-screen layout py-40'>
      <Typography
        variant='h2'
        className='text-transparent bg-clip-text bg-gradient-to-tr from-primary-600 via-primary-700 to-primary-800 font-bold pb-4'
        data-aos='fade-up'
      >
        BLOGS
      </Typography>
      <div
        className='pt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'
        data-aos='fade-up'
      >
        {blogsData.then((data) =>
          data.map((blog, index) => (
            <BlogsCard
              date={blog.createdAt.toString()}
              key={blog.id ?? index}
              {...blog}
              description={blog.description || 'Empty'}
              subtitle={blog.description || 'Empty'}
              minute_read={blog.minutes_read || 0}
            />
          ))
        )}
      </div>
    </div>
  );
}

async function getBlogsData() {
  const blogsData = await prisma.blogs.findMany();
  return blogsData;
}
