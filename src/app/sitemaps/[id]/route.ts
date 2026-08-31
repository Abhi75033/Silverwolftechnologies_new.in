import { NextResponse } from 'next/server';
import { SERVICES, CITIES, SUB_CITIES, SITE, citySlug } from '@/data/site';

// Target 1500 URLs per file to stay well under Google's 50,000 limit
const CHUNK_SIZE = 1500;

function generateXmlUrlset(urls: { loc: string; changefreq: string; priority: string }[]) {
  const date = new Date().toISOString();
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
}

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const baseUrl = SITE.domain;
  const id = params.id; // e.g., "service-pages.xml"
  
  let urls: { loc: string; changefreq: string; priority: string }[] = [];

  // ─── 1. Base Service Pages ──────────────────────────────────────────────────
  if (id === 'service-pages.xml') {
    // Include core static pages
    urls.push({ loc: `${baseUrl}/`, changefreq: 'weekly', priority: '1.0' });
    urls.push({ loc: `${baseUrl}/services`, changefreq: 'weekly', priority: '0.9' });
    urls.push({ loc: `${baseUrl}/contact`, changefreq: 'monthly', priority: '0.8' });
    
    for (const service of SERVICES) {
      urls.push({
        loc: `${baseUrl}/services/${service.slug}`,
        changefreq: 'weekly',
        priority: '0.9'
      });
    }
  } 
  
  // ─── 2. City + Service Pages ────────────────────────────────────────────────
  else if (id === 'city-pages.xml') {
    for (const service of SERVICES) {
      for (const city of CITIES) {
        urls.push({
          loc: `${baseUrl}/services/${service.slug}/${citySlug(city)}`,
          changefreq: 'weekly',
          priority: '0.8'
        });
      }
    }
  } 
  
  // ─── 3. Sub-City + City + Service Pages (Chunked) ───────────────────────────
  else if (id.startsWith('subcity-pages-') && id.endsWith('.xml')) {
    const match = id.match(/subcity-pages-(\d+)\.xml/);
    if (!match) return new NextResponse('Not Found', { status: 404 });
    
    const chunkNumber = parseInt(match[1], 10);
    
    // Gather ALL sub-city URLs deterministically
    const allSubCityUrls: string[] = [];
    for (const service of SERVICES) {
      for (const city of CITIES) {
        const subs = SUB_CITIES[city] || [];
        for (const subCity of subs) {
          allSubCityUrls.push(`${baseUrl}/services/${service.slug}/${citySlug(city)}/${citySlug(subCity)}`);
        }
      }
    }
    
    // Calculate total chunks to validate requests
    const totalChunks = Math.ceil(allSubCityUrls.length / CHUNK_SIZE);
    
    // Validate chunk number to prevent 404s on out-of-bounds requests
    if (chunkNumber < 1 || chunkNumber > totalChunks) {
      return new NextResponse('Not Found', { status: 404 });
    }
    
    // Slice array for this exact chunk
    const startIndex = (chunkNumber - 1) * CHUNK_SIZE;
    const endIndex = startIndex + CHUNK_SIZE;
    const chunkUrls = allSubCityUrls.slice(startIndex, endIndex);
    
    urls = chunkUrls.map(loc => ({
      loc,
      changefreq: 'weekly',
      priority: '0.7' // Sub-city pages have slightly lower priority than city pages
    }));
  } 
  
  // ─── 404 Fallback for unknown files ─────────────────────────────────────────
  else {
    return new NextResponse('Not Found', { status: 404 });
  }

  // Generate the final XML
  const xml = generateXmlUrlset(urls);

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      // Cache sitemaps for 24 hours to reduce server load
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=43200',
    },
  });
}
