/* eslint-disable @typescript-eslint/no-explicit-any */
import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const id = req.nextUrl.pathname.split('/')[3];
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
  return NextResponse.json({
    message: `success fetching ${id}`,
    data: result,
  });
}
