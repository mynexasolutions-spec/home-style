import Link from 'next/link';
import { FaArrowRight, FaCircleCheck, FaRegCirclePlay } from 'react-icons/fa6';
import AnimatedHeading from '@/components/AnimatedHeading';
import GalleryBrowser from '@/components/GalleryBrowser';
import Img from '@/components/Img';
import Parallax from '@/components/Parallax';
import QuoteForm from '@/components/QuoteForm';
import Reveal from '@/components/Reveal';
import SectionHead from '@/components/SectionHead';
import Typewriter from '@/components/Typewriter';
import AboutSplit from '@/components/sections/AboutSplit';
import BannerSection from '@/components/sections/BannerSection';
import CtaSection from '@/components/sections/CtaSection';
import FaqSection from '@/components/sections/FaqSection';
import Marquee from '@/components/sections/Marquee';
import ProcessSection from '@/components/sections/ProcessSection';
import ServicesGrid from '@/components/sections/ServicesGrid';
import SpacesSection from '@/components/sections/SpacesSection';
import StatsBar from '@/components/sections/StatsBar';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import TrustBar from '@/components/sections/TrustBar';
import WhySection from '@/components/sections/WhySection';
import { IMG } from '@/data/images';
import { galleryItems } from '@/data/projects';

export default function HomePage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <Parallax speed={0.2}>
          <Img id={IMG.heroLiving} alt="" sizes="100vw" priority />
        </Parallax>
        <div className="container">
          <div className="hero-copy">
            <Reveal as="span" className="eyebrow">
              Transforming Spaces, Enhancing Lives
            </Reveal>
            <AnimatedHeading
              as="h1"
              text="Complete Home Improvement &"
              accent="Interior Solutions"
              breakBeforeAccent
              stagger={90}
            />
            <Reveal as="p" className="lead" delay={500}>
              Carpentry, Electrical, Tiles &amp; Marble, Plumbing, Painting, Wallpaper, Panelling, UPVC and
              Waterproofing – all under one roof.
            </Reveal>
            <Reveal as="p" className="hero-type" delay={650}>
              Experts in{' '}
              <Typewriter words={['Carpentry', 'Electrical Work', 'Tiles & Marble', 'Plumbing', 'Interior Painting', 'Texture & Design', 'Waterproofing']} />
            </Reveal>
            <Reveal className="hero-cta" delay={800}>
              <Link href="/services" className="btn btn--gold">
                Our Services <FaArrowRight aria-hidden="true" />
              </Link>
              <Link href="/projects" className="btn btn--ghost">
                <FaRegCirclePlay aria-hidden="true" /> View Projects
              </Link>
            </Reveal>
            <Reveal as="p" className="hero-points" delay={950}>
              <span>
                <FaCircleCheck aria-hidden="true" />
                Free site visit
              </span>
              <span>
                <FaCircleCheck aria-hidden="true" />
                No-obligation quote
              </span>
              <span>
                <FaCircleCheck aria-hidden="true" />
                Work warranty
              </span>
            </Reveal>
          </div>

          <Reveal variant="right" delay={400} className="hero-form">
            <QuoteForm id="quote" />
          </Reveal>
        </div>
      </section>

      <TrustBar />
      <Marquee />

      {/* ---------- Services ---------- */}
      <section className="section">
        <div className="container">
          <SectionHead
            title="Our"
            accent="Services"
            sub="Comprehensive home and commercial improvement services tailored to your needs."
          />
          <ServicesGrid />
        </div>
      </section>

      <section className="section section--soft about">
        <AboutSplit />
      </section>

      <WhySection />
      <SpacesSection />
      <ProcessSection />

      {/* ---------- Projects ---------- */}
      <section className="section">
        <div className="container">
          <SectionHead
            title="Our Recent"
            accent="Projects"
            sub="A glimpse of our completed works across home and commercial spaces."
          />
          <GalleryBrowser items={galleryItems} variant="grid" allLimit={12} tabLimit={8} />
          <Reveal className="center-cta">
            <Link href="/projects" className="btn btn--ghost">
              View All Projects <FaArrowRight aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <BannerSection />
      <StatsBar />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
