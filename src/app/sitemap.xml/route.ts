import { NextResponse } from 'next/server';
import { SERVICES, CITIES, SUB_CITIES, SITE } from '@/data/site';

// Target 1500 URLs per file to stay well under Google's 50,000 limit
const CHUNK_SIZE = 1500;

export async function GET() {
  const baseUrl = SITE.domain;
  
  // 1. Calculate total sub-city combinations
  let totalSubCityUrls = 0;
  for (const city of CITIES) {
    const subs = SUB_CITIES[city] || [];
    totalSubCityUrls += subs.length;
  }
  // Total is SubCities * Services
  totalSubCityUrls = totalSubCityUrls * SERVICES.length;
  
  // 2. Determine number of chunks needed
  const totalChunks = Math.ceil(totalSubCityUrls / CHUNK_SIZE);
  
  // 3. Build the list of individual sitemaps
  const sitemaps = [
    `${baseUrl}/sitemaps/service-pages.xml`,
    `${baseUrl}/sitemaps/city-pages.xml`,
  ];
  
  for (let i = 1; i <= totalChunks; i++) {
    sitemaps.push(`${baseUrl}/sitemaps/subcity-pages-${i}.xml`);
  }
  
  // Using current date for lastmod (or could use a fixed build date)
  const date = new Date().toISOString();
  
  // 4. Generate XML string
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.map(url => `  <sitemap>
    <loc>${url}</loc>
    <lastmod>${date}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      // Cache the index for 24 hours to reduce server load
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=43200',
    },
  });
}
