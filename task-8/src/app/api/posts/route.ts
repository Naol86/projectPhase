import { NextRequest, NextResponse } from 'next/server';
import { data } from '../data';

export function GET(request: NextRequest) {
  return NextResponse.json(data);
}
