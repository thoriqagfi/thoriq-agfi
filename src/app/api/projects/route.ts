import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const result = prisma.projects.findMany({
    include: {
      ProjectTechStacks: {
        include: {
          TechStacks: true,
        },
      },
    },
  });
  return NextResponse.json({ message: 'success', data: result });
}
