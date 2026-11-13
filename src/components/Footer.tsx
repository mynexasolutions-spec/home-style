import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
  FaRegEnvelope,
  FaWhatsapp,
} from 'react-icons/fa6';
import Logo from './Logo';
import { navLinks, site } from '@/data/site';
import { services } from '@/data/services';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid">
          <div>
            <Logo onDark />
            <p>
              Your one-stop solution for wooden work, electrical, tiles &amp; marble, plumbing, painting,
              wallpaper, panelling, UPVC, waterproofing and deep cleaning.
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Our Services</h4>
            <ul>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Contact Info</h4>
            <ul className="f-contact">
              <li>
                <FaLocationDot aria-hidden="true" />
                <span>{site.addressLine}</span>
              </li>
              <li>
                <FaPhone aria-hidden="true" />
                <a href={site.phoneHref}>{site.phone}</a>
              </li>
              <li>
                <FaRegEnvelope aria-hidden="true" />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Follow Us</h4>
            <div className="social">
              <a href={site.social.instagram} aria-label="Instagram">
                <FaInstagram aria-hidden="true" />
              </a>
              <a href={site.social.facebook} aria-label="Facebook">
                <FaFacebookF aria-hidden="true" />
              </a>
              <a href={site.whatsapp} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp aria-hidden="true" />
              </a>
              <a href={site.social.linkedin} aria-label="LinkedIn">
                <FaLinkedinIn aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="copy">
        <div className="container">
          <span>© {new Date().getFullYear()} Home Style. All Rights Reserved.</span>
          <div className="links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
