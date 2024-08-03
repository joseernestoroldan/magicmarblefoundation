import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const host = request.headers.get('host');

  if (!host) {
    return NextResponse.json({ error: 'Hostname not found' }, { status: 500 });
  }

  return NextResponse.json({ host });
}