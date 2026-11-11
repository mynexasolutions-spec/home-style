import Reveal from '../Reveal';
import SectionHead from '../SectionHead';
import TestimonialSlider from '../TestimonialSlider';

export default function TestimonialsSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead
          title="What Our"
          accent="Clients Say"
          sub="Real words from homeowners who trusted us with their spaces."
        />
        <Reveal>
          <TestimonialSlider />
        </Reveal>
      </div>
    </section>
  );
}
