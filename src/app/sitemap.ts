import type { MetadataRoute } from 'next';
import { IMG, photoUrl } from '@/data/images';
import { services } from '@/data/services';
import { absoluteUrl } from '@/lib/seo';

const img = (id: string) => absoluteUrl(photoUrl(id));

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: { path: string; priority: number; images?: string[] }[] = [
    { path: '', priority: 1, images: [img(IMG.heroLiving)] },
    { path: '/services', priority: 0.9 },
    { path: '/projects', priority: 0.8 },
    { path: '/gallery', priority: 0.7 },
    { path: '/about', priority: 0.7 },
    { path: '/contact', priority: 0.8 },
    { path: '/privacy', priority: 0.3 },
    { path: '/terms', priority: 0.3 },
  ];

  return [
    ...pages.map((p) => ({
      url: absoluteUrl(p.path),
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: p.priority,
      images: p.images,
    })),
    // Service pages also list their photos so they can appear in Google Images.
    ...services.map((s) => ({
      url: absoluteUrl(`/services/${s.slug}`),
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
      images: [s.image, ...s.gallery].filter((id, i, all) => all.indexOf(id) === i).map(img),
    })),
  ];
}
