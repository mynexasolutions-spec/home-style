import Image from 'next/image';
import Link from 'next/link';

type Props = {
  /** Use on dark backgrounds: places the logo on a white card so it stays readable */
  onDark?: boolean;
};

export default function Logo({ onDark = false }: Props) {
  return (
    <Link href="/" className={`logo${onDark ? ' logo--card' : ''}`} aria-label="Home Style – home page">
      <Image
        src="/home-style-logo.png"
        alt="Home Style – Interiors, Renovation, Painting"
        width={554}
        height={273}
        priority={!onDark}
        className="logo-img"
      />
    </Link>
  );
}
