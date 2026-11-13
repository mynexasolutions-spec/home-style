import { pageMetadata } from '@/lib/seo';
import {
  FaBroom,
  FaClipboardCheck,
  FaFileInvoiceDollar,
  FaHelmetSafety,
  FaHouseCircleCheck,
  FaShieldHalved,
} from 'react-icons/fa6';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHead from '@/components/SectionHead';
import CtaSection from '@/components/sections/CtaSection';
import FaqSection from '@/components/sections/FaqSection';
import ProcessSection from '@/components/sections/ProcessSection';
import ServicesGrid from '@/components/sections/ServicesGrid';
import { IMG } from '@/data/images';

export const metadata = pageMetadata({
  title: 'Home Improvement Services in Gurugram & Delhi NCR',
  description:
    'Wooden work, electrical, plumbing, tiles & marble, painting, Duco, wood polish, wallpaper, UPVC, waterproofing and deep cleaning – all under one roof in Gurugram.',
  path: '/services',
});

const included = [
  { icon: FaClipboardCheck, title: 'Free site visit', text: 'We measure, assess and advise at no cost.' },
  { icon: FaFileInvoiceDollar, title: 'Itemised quote', text: 'Clear pricing so there are no surprises later.' },
  { icon: FaHelmetSafety, title: 'Skilled, verified team', text: 'Experienced tradespeople who respect your home.' },
  { icon: FaBroom, title: 'Clean job sites', text: 'Dust control and a full clean-up on completion.' },
  { icon: FaHouseCircleCheck, title: 'On-time handover', text: 'A realistic timeline, and we stick to it.' },
  { icon: FaShieldHalved, title: 'Post-work support', text: 'We are a call away if you need us after handover.' },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our"
        accent="Services"
        subtitle="Comprehensive home and commercial improvement services – all under one roof."
        image={IMG.kitchenIsland}
        imageAlt="Beautifully finished modern kitchen"
        crumbs={[{ label: 'Services' }]}
      />

      <section className="section">
        <div className="container">
          <SectionHead
            title="Everything Your"
            accent="Space Needs"
            sub="Choose a single service or let us handle the complete job – one team, one point of contact."
          />
          <ServicesGrid />
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHead
            title="Included With"
            accent="Every Project"
            sub="The standards you can expect, whichever service you choose."
          />
          <div className="included-grid">
            {included.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} className="fill" delay={(i % 3) * 120}>
                <div className="included">
                  <span className="pillar-ic">
                    <Icon aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection soft={false} />
      <FaqSection />
      <CtaSection />
    </>
  );
}
