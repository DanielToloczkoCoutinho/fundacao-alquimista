
import { NextResponse } from 'next/server';

// Mock implementation as the original file is removed
const register = {
    metrics: async () => "",
    contentType: 'text/plain',
}

export async function GET() {
  const metrics = await register.metrics();
  return new NextResponse(metrics, {
    status: 200,
    headers: { 'Content-Type': register.contentType },
  });
}
