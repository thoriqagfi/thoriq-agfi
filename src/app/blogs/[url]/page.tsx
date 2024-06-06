import * as React from 'react';
import { Metadata } from 'next';
import prisma from '@/lib/prisma';
import Typography from '@/components/typography';
import CloudinaryImage from '@/components/cloudinary-image';
import { formatDate } from '@/utils/date';
import { IoIosTimer } from 'react-icons/io';
import { FaEye } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Detail Blog',
};

export default function DetailBlog({
  params: { url },
}: {
  params: { url: string };
}) {
  const data = getDetailBlogData({ url });
  return (
    <div className='layout min-h-screen py-28 text-white'>
      {data.then((data) => {
        return (
          <div className='flex flex-col gap-4'>
            <CloudinaryImage
              src={data[0].images}
              alt={data[0].title}
              width={500}
              height={200}
              className='rounded-md w-full'
            />
            <div className='flex flex-col text-start gap-3'>
              <Typography className='text-3xl' weight='bold' color='white'>
                {data[0].title}
              </Typography>
              <Typography className='text-start text-md' color='gray'>
                Published {formatDate(data[0].createdAt.toString())} by Thariq
                Agfi Hermawan
              </Typography>
            </div>
            <div className='flex gap-5 pt-1'>
              <div className='flex items-center gap-1'>
                <IoIosTimer className='w-4 h-4' />
                <Typography className='text-white text-medium'>
                  {data[0].minutes_read} min read
                </Typography>
              </div>
              <div className='flex items-center gap-1'>
                <FaEye className='w-4 h-4' />
                <Typography className='text-white text-medium'>
                  {data[0].views} views
                </Typography>
              </div>
            </div>
            <hr />
            <Typography className='text-white'>
              {data[0].description}
            </Typography>
          </div>
        );
      })}
    </div>
  );
}

// async function updateBlogView({ id, url }: { url: string; id: string }) {
//   await prisma.blogs.update({
//     where: {
//       id: Number(id),
//       url: url,
//     },
//     data: {
//       views: {
//         increment: 1,
//       },
//     },
//   });
// }

async function getDetailBlogData({ url }: { url: string }) {
  // await updateBlogView({ id, url });
  const result = await prisma.blogs.findMany({
    where: {
      url: url,
    },
  });
  return result;
}
