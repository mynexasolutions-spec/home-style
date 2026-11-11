import type { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { site } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/about', '/services', '/projects', '/gallery', '/contact', '/privacy', '/terms'];
  const now = new Date();
  return [
    ...pages.map((p) => ({
      url: `${site.url}${p}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: p === '' ? 1 : 0.7,
    })),
    ...services.map((s) => ({
      url: `${site.url}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
