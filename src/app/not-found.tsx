import Link from 'next/link';
import { FaArrowRight, FaPhone } from 'react-icons/fa6';
import { site } from '@/data/site';

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <p className="nf-code">404</p>
        <h1>This page has been redecorated</h1>
        <p>The page you are looking for has moved or does not exist. Let&apos;s get you back on track.</p>
        <div className="hero-cta" style={{ justifyContent: 'center' }}>
          <Link href="/" className="btn btn--gold">
            Back to Home <FaArrowRight aria-hidden="true" />
          </Link>
          <a href={site.phoneHref} className="btn btn--ghost">
            <FaPhone aria-hidden="true" /> {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
