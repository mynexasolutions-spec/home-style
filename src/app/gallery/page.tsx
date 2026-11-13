import { pageMetadata } from '@/lib/seo';
import GalleryBrowser from '@/components/GalleryBrowser';
import PageHero from '@/components/PageHero';
import SectionHead from '@/components/SectionHead';
import CtaSection from '@/components/sections/CtaSection';
import SpacesSection from '@/components/sections/SpacesSection';
import { IMG } from '@/data/images';
import { galleryItems } from '@/data/projects';

export const metadata = pageMetadata({
  title: 'Photo Gallery – Home Interiors & Finishes',
  description:
    'Photo gallery of Home Style work – kitchens, bathrooms, bedrooms, living rooms, lighting, painting, panelling and more across Gurugram.',
  path: '/gallery',
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Photo"
        accent="Gallery"
        subtitle="Browse our work room by room and trade by trade. Tap any photo to view it full size."
        image={IMG.sofa}
        imageAlt="Cosy living room with a tufted sofa"
        crumbs={[{ label: 'Gallery' }]}
      />

      <section className="section">
        <div className="container">
          <SectionHead title="Inspiration for" accent="Every Room" sub="Ideas, finishes and details from our recent work." />
          <GalleryBrowser items={galleryItems} variant="masonry" />
        </div>
      </section>

      <SpacesSection />
      <CtaSection />
    </>
  );
}
