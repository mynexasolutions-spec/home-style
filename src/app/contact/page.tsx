import type { Metadata } from 'next';
import { FaLocationDot, FaPhone, FaRegEnvelope, FaWhatsapp } from 'react-icons/fa6';
import AnimatedHeading from '@/components/AnimatedHeading';
import PageHero from '@/components/PageHero';
import QuoteForm from '@/components/QuoteForm';
import Reveal from '@/components/Reveal';
import FaqSection from '@/components/sections/FaqSection';
import { IMG } from '@/data/images';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    `Contact Home Style for a free site visit and no-obligation quote. Call ${site.phone}, message us on WhatsApp or send an enquiry online.`,
};

const cards = [
  { icon: FaPhone, title: 'Call Us', line: site.phone, href: site.phoneHref },
  { icon: FaWhatsapp, title: 'WhatsApp', line: 'Chat with our team', href: site.whatsappQuote },
  { icon: FaRegEnvelope, title: 'Email Us', line: site.email, href: `mailto:${site.email}` },
  { icon: FaLocationDot, title: 'Visit Us', line: site.addressLine, href: undefined },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        accent="Us"
        subtitle="Tell us about your project – we will arrange a free site visit and send you a clear, itemised quote."
        image={IMG.ctaLiving}
        imageAlt="Elegant living room interior"
        crumbs={[{ label: 'Contact' }]}
      />

      <section className="section contact-cards-sec">
        <div className="container">
          <div className="contact-cards">
            {cards.map(({ icon: Icon, title, line, href }, i) => {
              const body = (
                <>
                  <span className="pillar-ic">
                    <Icon aria-hidden="true" />
                  </span>
                  <h3>{title}</h3>
                  <p>{line}</p>
                </>
              );
              return (
                <Reveal key={title} className="fill" delay={i * 110}>
                  {href ? (
                    <a
                      href={href}
                      className="contact-card"
                      {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {body}
                    </a>
                  ) : (
                    <div className="contact-card">{body}</div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container contact-layout">
          <Reveal variant="left">
            <QuoteForm
              id="quote"
              title="Request a Free Quote"
              subtitle="Fill in the form and we will call you back shortly."
            />
          </Reveal>

          <div className="contact-side">
            <AnimatedHeading as="h2" text="Find" accent="Our Office" className="about-h" />
            <Reveal as="p" className="txt" delay={150}>
              {site.addressLine}. Call ahead and we will be happy to arrange a time to meet, or we can visit you.
            </Reveal>
            <Reveal className="map" variant="zoom" delay={200}>
              <iframe
                title="Home Style location on Google Maps"
                src={site.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </Reveal>
          </div>
        </div>
      </section>

      <FaqSection />
    </>
  );
}
