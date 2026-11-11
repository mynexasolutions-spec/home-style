import type { Metadata } from 'next';
import Founders from '@/components/about/Founders';
import StatementBand from '@/components/about/StatementBand';
import StoryMosaic from '@/components/about/StoryMosaic';
import TeamGrid from '@/components/about/TeamGrid';
import ValueCards from '@/components/about/ValueCards';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/sections/CtaSection';
import { IMG } from '@/data/images';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Meet the founders and team behind Home Style – a Gurugram home-improvement company with in-house carpenters, electricians, plumbers, painters and finishing specialists.',
};

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
      <TeamGrid />
      <CtaSection
        title="Ready to Work With"
        accent="Our Team?"
        text="Tell us about your project and we will arrange a free site visit and a clear, itemised quote."
      />
    </>
  );
}
