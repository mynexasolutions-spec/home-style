import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaArrowRight, FaPhone } from 'react-icons/fa6';
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
import { getService, services } from '@/data/services';
import { site } from '@/data/site';

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: `${service.short} ${service.intro}`,
  };
}

export default async function ServicePage({ params }: { params: Params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
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
