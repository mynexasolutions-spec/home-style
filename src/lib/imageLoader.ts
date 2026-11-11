/**
 * Custom next/image loader.
 * Unsplash resizes images on its CDN, so we only need to add the width/quality
 * params. Any other URL is returned untouched.
 */
export default function imageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  if (src.startsWith('https://images.unsplash.com/')) {
    const url = new URL(src);
    url.searchParams.set('auto', 'format');
    url.searchParams.set('fit', 'crop');
    url.searchParams.set('w', String(width));
    url.searchParams.set('q', String(quality || 75));
    return url.toString();
  }
  return src;
}
