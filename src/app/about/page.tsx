import { pageMetadata } from '@/lib/seo';
import Founders from '@/components/about/Founders';
import StatementBand from '@/components/about/StatementBand';
import StoryMosaic from '@/components/about/StoryMosaic';
import ValueCards from '@/components/about/ValueCards';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/sections/CtaSection';
import { IMG } from '@/data/images';

export const metadata = pageMetadata({
  title: 'About Us – Home Improvement Company in Gurugram',
  description:
    'Meet the founder behind Home Style – a Gurugram home-improvement company with in-house wood, electrical, plumbing, painting and finishing teams.',
  path: '/about',
  image: IMG.livingGreen,
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About"
        accent="Home Style"
        subtitle="The people, the story and the standards behind every home we work on."
        image={IMG.livingGreen}
        imageAlt="Stylish living room with a deep green feature wall"
        crumbs={[{ label: 'About Us' }]}
      />
      <StoryMosaic />
      <Founders />
      <StatementBand />
      <ValueCards />
      <CtaSection
        title="Ready to Work With"
        accent="Our Team?"
        text="Tell us about your project and we will arrange a free site visit and a clear, itemised quote."
      />
    </>
  );
}
