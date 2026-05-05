import { MetadataRoute } from 'next'
import { SERVICES, CITIES, citySlug, SITE } from '@/data/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.domain;
  const currentDate = new Date();

  const routes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: currentDate, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/portfolio`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/locations`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.6 },
  ];

  // Service + city pages (no sub-city pages — they are noindexed)
  for (const s of SERVICES) {
    routes.push({
      url: `${baseUrl}/services/${s.slug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    });
    
    for (const c of CITIES) {
      routes.push({
        url: `${baseUrl}/services/${s.slug}/${citySlug(c)}`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    }
  }

  return routes;
}
