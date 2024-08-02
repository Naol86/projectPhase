import { NextRequest, NextResponse } from 'next/server';
import { data } from '../../data';
import { JobPost, JobPosting } from '@/type/type';
import next from 'next';

export function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const response = data.job_postings.find((ele) => ele.id === params.id);

  return NextResponse.json(response);
}
