import AnimatedHeading from '../AnimatedHeading';
import Faq from '../Faq';
import Img from '../Img';
import Reveal from '../Reveal';
import { faqs as defaultFaqs } from '@/data/content';
import { IMG } from '@/data/images';

export default function FaqSection({ items = defaultFaqs }: { items?: { q: string; a: string }[] }) {
  return (
    <section className="section section--soft faq">
      <div className="container">
        <div className="faq-intro">
          <AnimatedHeading as="h2" text="Frequently Asked" accent="Questions" />
          <Reveal as="p" delay={200}>
            Find quick answers to common questions about our services.
          </Reveal>
        </div>
        <Reveal delay={150}>
          <Faq items={items} />
        </Reveal>
        <Reveal className="faq-img" variant="right" delay={250}>
          <Img id={IMG.blueprint} alt="Project plans and tools laid out on a work table" sizes="260px" />
        </Reveal>
      </div>
    </section>
  );
}
