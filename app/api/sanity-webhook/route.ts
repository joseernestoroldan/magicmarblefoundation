import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();

  // Handle the new document data
  console.log('New document created:', data);

  // Update your application's state or data store here

  return NextResponse.json({ message: 'Webhook received' });
}