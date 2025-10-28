import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

export const dynamic = 'force-dynamic';

const paths: string[] = [
  '/',
  '/company',
  '/compliance',
  '/contact',
  '/custom-development',
  '/demo',
  '/explore',
  '/industries/financial',
  '/industries/healthcare',
  '/industries/insurance',
  '/privacy',
  '/resources',
  '/roi-calculator',
  '/security',
  '/solutions',
  '/solutions/ai-ocr',
  '/solutions/ai-doc',
  '/solutions/ai-agents',
  '/solutions/ai-priceinsights',
  '/solutions/ai-saude',
  '/solutions/echo-ai-hub',
  '/terms',
];

function buildXml(baseUrl: string) {
  const now = new Date().toISOString();
  const urls = paths
    .map(
      (p) => `  <url>\n    <loc>${baseUrl}${p}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
}

export async function GET() {
  const host = headers().get('host') || 'localhost:3000';
  const protocol = host.includes('localhost') ? 'http' : 'https';
  const baseUrl = `${protocol}://${host}`;

  const xml = buildXml(baseUrl);
  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}