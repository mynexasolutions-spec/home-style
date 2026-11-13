import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaArrowRight, FaPhone } from 'react-icons/fa6';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import SectionHead from '@/components/SectionHead';
import OfferCards from '@/components/service/OfferCards';
import QuoteSplit from '@/components/service/QuoteSplit';
import ServiceChips from '@/components/service/ServiceChips';
import ServiceIntro from '@/components/service/ServiceIntro';
import WhyBand from '@/components/service/WhyBand';
import CtaSection from '@/components/sections/CtaSection';
import FaqSection from '@/components/sections/FaqSection';
import ServicesGrid from '@/components/sections/ServicesGrid';
import { photoUrl } from '@/data/images';
import { getService, services } from '@/data/services';
import { site } from '@/data/site';
import { absoluteUrl, pageMetadata } from '@/lib/seo';

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: `${service.title} in Gurugram`,
    description: `${service.short} Free site visit and quote from Home Style, Gurugram & Delhi NCR.`,
    path: `/services/${service.slug}`,
    image: service.image,
    keywords: [
      `${service.title} Gurugram`,
      `${service.title} Delhi NCR`,
      ...service.offerings.slice(0, 4).map((o) => `${o} Gurugram`),
    ],
  });
}

export default async function ServicePage({ params }: { params: Params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const url = absoluteUrl(`/services/${service.slug}`);
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.title,
    description: service.intro,
    url,
    image: absoluteUrl(photoUrl(service.image)),
    provider: { '@id': absoluteUrl('/#business') },
    areaServed: [
      { '@type': 'City', name: 'Gurugram' },
      { '@type': 'AdministrativeArea', name: 'Delhi NCR' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${service.title} services`,
      itemListElement: service.offerings.map((o) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: o },
      })),
    },
  };
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
      { '@type': 'ListItem', position: 2, name: 'Services', item: absoluteUrl('/services') },
      { '@type': 'ListItem', position: 3, name: service.title, item: url },
    ],
  };

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <PageHero
        size="lg"
        title={service.title}
        subtitle={service.short}
        image={service.image}
        imageAlt={service.title}
        crumbs={[{ label: 'Services', href: '/services' }, { label: service.title }]}
      >
        <Link href="#quote" className="btn btn--gold">
          Get a Free Quote <FaArrowRight aria-hidden="true" />
        </Link>
        <a href={site.phoneHref} className="btn btn--outline-light">
          <FaPhone aria-hidden="true" /> {site.phone}
        </a>
      </PageHero>

      <ServiceChips current={service.slug} />
      <ServiceIntro service={service} />
      <OfferCards service={service} />
      <WhyBand service={service} />
      <QuoteSplit service={service} />
      <FaqSection items={service.faqs} />

      <section className="section">
        <div className="container">
          <SectionHead title="Explore More" accent="Services" sub="Everything else we can take care of in your home." />
          <ServicesGrid exclude={service.slug} limit={3} />
        </div>
      </section>

      <CtaSection />
    </>
  );
}
