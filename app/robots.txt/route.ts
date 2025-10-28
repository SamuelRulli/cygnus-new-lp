import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

export const dynamic = 'force-dynamic';

export async function GET() {
  const host = headers().get('host') || 'localhost:3000';
  const protocol = host.includes('localhost') ? 'http' : 'https';
  const lines = [
    'User-agent: *',
    'Allow: /',
    `Sitemap: ${protocol}://${host}/sitemap.xml`,
  ];

  return new NextResponse(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain' },
  });
}