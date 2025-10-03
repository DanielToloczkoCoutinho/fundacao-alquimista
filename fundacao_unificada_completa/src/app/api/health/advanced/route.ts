import { NextResponse } from 'next/server';
import { performSystemHealthCheck } from '@/lib/system-health';

export async function GET() {
  const healthReport = await performSystemHealthCheck();

  return NextResponse.json(healthReport, {
    status: healthReport.status === 'unhealthy' ? 503 : 200,
  });
}
