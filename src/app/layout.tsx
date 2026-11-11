import type { Metadata, Viewport } from 'next';
import { Open_Sans } from 'next/font/google';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import Header from '@/components/Header';
import ScrollProgress from '@/components/ScrollProgress';
import { IMG, unsplash } from '@/data/images';
import { site } from '@/data/site';

import '@/styles/base.css';
import '@/styles/layout.css';
import '@/styles/sections.css';
import '@/styles/pages.css';
import '@/styles/animations.css';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Home Style | Home Improvement & Interior Solutions in Gurugram',
    template: '%s | Home Style',
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: 'website',
    siteName: site.name,
    locale: 'en_IN',
    title: 'Home Style – Complete Home Improvement & Interior Solutions',
    description: site.description,
    images: [{ url: `${unsplash(IMG.heroLiving)}?auto=format&fit=crop&w=1200&q=75`, width: 1200, height: 800 }],
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = {
  themeColor: '#0c2340',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: site.name,
  description: site.description,
  url: site.url,
  logo: `${site.url}/home-style-logo.png`,
  telephone: site.phone,
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  areaServed: ['Gurugram', 'Delhi NCR'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={openSans.variable}>
      <head>
        {/* Without JavaScript, show everything instead of waiting for scroll animations */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}.rv-wipe::after{display:none!important}.split .w>span{transform:none!important}`}</style>
        </noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ScrollProgress />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
