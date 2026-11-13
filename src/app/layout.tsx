import type { Metadata, Viewport } from 'next';
import { Open_Sans } from 'next/font/google';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import Header from '@/components/Header';
import JsonLd from '@/components/JsonLd';
import ScrollProgress from '@/components/ScrollProgress';
import { IMG, photoUrl } from '@/data/images';
import { services } from '@/data/services';
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
    default: 'Home Interior & Renovation Services in Gurugram | Home Style',
    template: '%s | Home Style',
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: 'Home improvement',
  keywords: [
    'home interior Gurugram',
    'home renovation Gurugram',
    'wooden work Gurugram',
    'modular kitchen Gurugram',
    'electrician Gurugram',
    'plumber Gurugram',
    'painting contractor Gurugram',
    'waterproofing Gurugram',
    'UPVC panelling',
    'deep cleaning Gurugram',
    'home improvement Delhi NCR',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  // Only added when you set the code from Google Search Console in the environment.
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  openGraph: {
    type: 'website',
    url: '/',
    siteName: site.name,
    locale: 'en_IN',
    title: 'Home Style – Complete Home Improvement & Interior Solutions in Gurugram',
    description: site.description,
    images: [{ url: photoUrl(IMG.heroLiving), width: 1600, height: 844, alt: 'Home Style – home interior' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Style – Home Improvement & Interior Solutions in Gurugram',
    description: site.description,
    images: [photoUrl(IMG.heroLiving)],
  },
};

export const viewport: Viewport = {
  themeColor: '#0c2340',
  width: 'device-width',
  initialScale: 1,
};

const telephone = site.phoneHref.replace('tel:', '');

/** Business details for Google (local search / knowledge panel). Only real, known facts. */
const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${site.url}/#business`,
  name: site.name,
  slogan: site.tagline,
  description: site.description,
  url: site.url,
  logo: `${site.url}/home-style-logo.png`,
  image: `${site.url}${photoUrl(IMG.heroLiving)}`,
  telephone,
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.addressLine)}`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone,
    contactType: 'customer service',
    areaServed: 'IN',
    availableLanguage: ['en', 'hi'],
  },
  areaServed: [
    { '@type': 'City', name: 'Gurugram' },
    { '@type': 'City', name: 'Delhi' },
    { '@type': 'City', name: 'Faridabad' },
    { '@type': 'AdministrativeArea', name: 'Delhi NCR' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Home improvement services',
    itemListElement: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.title, url: `${site.url}/services/${s.slug}` },
    })),
  },
  // Social profiles are added automatically once real links replace the "#" placeholders in data/site.ts.
  sameAs: Object.values(site.social).filter((u) => u.startsWith('http')),
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${site.url}/#website`,
  name: site.name,
  url: site.url,
  inLanguage: 'en-IN',
  publisher: { '@id': `${site.url}/#business` },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={openSans.variable}>
      <head>
        {/* Without JavaScript, show everything instead of waiting for scroll animations */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}.rv-wipe::after{display:none!important}.split .w>span{transform:none!important}`}</style>
        </noscript>
        <JsonLd data={businessJsonLd} />
        <JsonLd data={websiteJsonLd} />
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
