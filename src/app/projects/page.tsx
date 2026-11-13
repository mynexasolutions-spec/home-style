import { pageMetadata } from '@/lib/seo';
import GalleryBrowser from '@/components/GalleryBrowser';
import PageHero from '@/components/PageHero';
import SectionHead from '@/components/SectionHead';
import BannerSection from '@/components/sections/BannerSection';
import CtaSection from '@/components/sections/CtaSection';
import StatsBar from '@/components/sections/StatsBar';
import { IMG } from '@/data/images';
import { projects } from '@/data/projects';

export const metadata = pageMetadata({
  title: 'Our Projects – Interiors, Painting & Renovation in Gurugram',
  description:
    'Browse recent Home Style projects – modular kitchens, wardrobes, bathrooms, lighting, painting, UPVC and waterproofing across Gurugram and Delhi NCR.',
  path: '/projects',
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Our Recent"
        accent="Projects"
        subtitle="A glimpse of our completed works across home and commercial spaces."
        image={IMG.kitchenWhite}
        imageAlt="Contemporary white kitchen"
        crumbs={[{ label: 'Projects' }]}
      />

      <section className="section">
        <div className="container">
          <SectionHead
            title="Featured"
            accent="Work"
            sub="Filter by service to see what we can do for your space."
          />
          <GalleryBrowser items={projects} variant="cards" mixAll />
        </div>
      </section>

      <StatsBar />
      <BannerSection />
      <CtaSection />
    </>
  );
}
