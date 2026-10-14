import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seoService';
import { getSiteContent } from '@/lib/firebaseService';
import branchesData from '@/data/branches.json';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteContent = await getSiteContent();
  const pagesSeo = siteContent?.pagesSeo || {};

  const baseRoutes = [
    { path: '/', defaultPriority: 1.0, defaultFreq: 'daily' as const },
    { path: '/menu', defaultPriority: 0.95, defaultFreq: 'weekly' as const },
    { path: '/central-london', defaultPriority: 0.9, defaultFreq: 'weekly' as const },
    { path: '/wembley', defaultPriority: 0.9, defaultFreq: 'weekly' as const },
    { path: '/tooting', defaultPriority: 0.9, defaultFreq: 'weekly' as const },
    { path: '/outdoor-catering', defaultPriority: 0.9, defaultFreq: 'weekly' as const },
    { path: '/live-dosa-catering', defaultPriority: 0.9, defaultFreq: 'weekly' as const },
    { path: '/branches', defaultPriority: 0.8, defaultFreq: 'monthly' as const },
    { path: '/franchise', defaultPriority: 0.7, defaultFreq: 'monthly' as const },
    { path: '/about-us', defaultPriority: 0.75, defaultFreq: 'monthly' as const },
    { path: '/contact-us', defaultPriority: 0.8, defaultFreq: 'monthly' as const },
    { path: '/privacy-policy', defaultPriority: 0.3, defaultFreq: 'yearly' as const },
    { path: '/terms-and-disclaimer', defaultPriority: 0.3, defaultFreq: 'yearly' as const },
    { path: '/cookie-policy-uk', defaultPriority: 0.3, defaultFreq: 'yearly' as const },
  ];

  // Also include any custom routes added from the Admin CMS
  const customRoutes = Object.keys(pagesSeo)
    .filter((route) => !baseRoutes.some((b) => b.path === route) && !route.startsWith('/admin') && !route.startsWith('/api'))
    .map((route) => ({
      path: route,
      defaultPriority: 0.7,
      defaultFreq: 'weekly' as const,
    }));

  const allRoutes = [...baseRoutes, ...customRoutes];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const r of allRoutes) {
    const seo = pagesSeo[r.path];
    // Exclude if marked robotsIndex === false
    if (seo?.robotsIndex === false) continue;

    sitemapEntries.push({
      url: `${SITE_URL}${r.path === '/' ? '' : r.path}`,
      lastModified: new Date(),
      changeFrequency: (seo?.changeFrequency as any) || r.defaultFreq,
      priority: seo?.priority !== undefined ? Number(seo.priority) : r.defaultPriority,
    });
  }

  // Branch direct routes
  for (const branch of branchesData) {
    const branchPath = `/${branch.slug}`;
    if (!sitemapEntries.some((e) => e.url === `${SITE_URL}${branchPath}`)) {
      sitemapEntries.push({
        url: `${SITE_URL}${branchPath}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.85,
      });
    }
  }

  return sitemapEntries;
}
