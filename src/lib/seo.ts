import type { Metadata } from 'next';
import { IMG, photoUrl } from '@/data/images';
import { site } from '@/data/site';

/** Absolute URL on the live domain (no trailing slash issues). */
export const absoluteUrl = (path = '') => `${site.url}${path}`;

/** Search results cut descriptions at ~160 characters, so keep them inside that. */
export const trimDescription = (text: string, max = 158) => {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(' '))}…`;
};

type PageSeo = {
  title: string;
  description: string;
  /** Path on the site, e.g. "/about". Used for the canonical URL and og:url. */
  path: string;
  /** Photo id (see data/images.ts) used for the social-share preview. */
  image?: string;
  keywords?: string[];
  /** Use the title exactly as given instead of adding " | Home Style". */
  absoluteTitle?: boolean;
};

/**
 * Builds the full metadata for a page: title, description, canonical URL,
 * Open Graph and Twitter cards. Every page should use this so nothing is missed.
 */
export function pageMetadata({ title, description, path, image, keywords, absoluteTitle }: PageSeo): Metadata {
  const desc = trimDescription(description);
  const shareTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  const shareImage = photoUrl(image ?? IMG.heroLiving);
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description: desc,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      url: path,
      siteName: site.name,
      locale: 'en_IN',
      title: shareTitle,
      description: desc,
      images: [{ url: shareImage, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: shareTitle,
      description: desc,
      images: [shareImage],
    },
  };
}
