import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seoService';
import branchesData from '@/data/branches.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: `${SITE_URL}`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 1.0 },
    { url: `${SITE_URL}/menu`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.95 },
    { url: `${SITE_URL}/live-dosa-catering`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${SITE_URL}/outdoor-catering`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${SITE_URL}/branches`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${SITE_URL}/franchise`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${SITE_URL}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${SITE_URL}/terms-and-disclaimer`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${SITE_URL}/cookie-policy-uk`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
  ];

  const branchRoutes = branchesData.map(b => ({
    url: `${SITE_URL}/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85
  }));

  return [...routes, ...branchRoutes];
}
