import Image from 'next/image';
import { unsplash } from '@/data/images';

type Props = {
  /** Unsplash photo id (see data/images.ts) */
  id: string;
  alt: string;
  /** Responsive `sizes` hint – keeps downloads small */
  sizes?: string;
  /** Load eagerly (use for above-the-fold images only) */
  priority?: boolean;
  className?: string;
};

/**
 * Fills its (position: relative) parent and covers it.
 * The parent controls the size / aspect ratio.
 */
export default function Img({ id, alt, sizes = '100vw', priority = false, className = '' }: Props) {
  return (
    <Image
      src={unsplash(id)}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={`cover ${className}`.trim()}
    />
  );
}
