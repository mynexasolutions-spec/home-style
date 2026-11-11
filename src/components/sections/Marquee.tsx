import { FaStar } from 'react-icons/fa6';
import { marqueeItems } from '@/data/content';

/** Slowly scrolling strip of our trades – pure CSS animation. */
export default function Marquee() {
  const row = (hidden: boolean) => (
    <ul className="marquee-row" aria-hidden={hidden || undefined}>
      {marqueeItems.map((item) => (
        <li key={item}>
          {item}
          <FaStar aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="marquee" role="presentation">
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
