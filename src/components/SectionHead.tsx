import AnimatedHeading from './AnimatedHeading';
import Reveal from './Reveal';

type Props = {
  title: string;
  accent?: string;
  sub?: string;
  /** light text for use on dark backgrounds */
  light?: boolean;
};

export default function SectionHead({ title, accent, sub, light = false }: Props) {
  return (
    <div className={`sec-head${light ? ' sec-head--light' : ''}`}>
      <AnimatedHeading as="h2" text={title} accent={accent} decor />
      {sub && (
        <Reveal as="p" delay={250}>
          {sub}
        </Reveal>
      )}
    </div>
  );
}
