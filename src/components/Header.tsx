'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaArrowRight, FaBars, FaChevronDown, FaXmark } from 'react-icons/fa6';
import Logo from './Logo';
import ServiceIcon from './ServiceIcon';
import { navLinks } from '@/data/site';
import { services } from '@/data/services';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close the drawer whenever the route changes
  useEffect(() => {
    setOpen(false);
    setSubOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock page scroll while the drawer is open; close on Escape / desktop resize
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth > 900 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header className={`header${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <Logo />

          <nav className={`nav${open ? ' open' : ''}`} id="main-nav" aria-label="Main navigation">
            <button className="nav-close" onClick={() => setOpen(false)} aria-label="Close menu">
              <FaXmark aria-hidden="true" />
            </button>

            {navLinks.map((link) =>
              link.href === '/services' ? (
                <div className={`has-dd${subOpen ? ' sub-open' : ''}`} key={link.href}>
                  <div className="dd-row">
                    <Link href={link.href} className={`nl${isActive(link.href) ? ' active' : ''}`}>
                      {link.label} <FaChevronDown className="dd-caret" aria-hidden="true" />
                    </Link>
                    <button
                      className="dd-toggle"
                      onClick={() => setSubOpen((v) => !v)}
                      aria-label="Show services"
                      aria-expanded={subOpen}
                    >
                      <FaChevronDown aria-hidden="true" />
                    </button>
                  </div>
                  <div className="dd">
                    {services.map((s) => (
                      <Link key={s.slug} href={`/services/${s.slug}`}>
                        <ServiceIcon name={s.icon} />
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={link.href} href={link.href} className={`nl${isActive(link.href) ? ' active' : ''}`}>
                  {link.label}
                </Link>
              ),
            )}

            <Link href="/contact#quote" className="btn btn--gold m-cta">
              Get a Free Quote <FaArrowRight aria-hidden="true" />
            </Link>
          </nav>

          <Link href="/contact#quote" className="btn btn--gold header-cta">
            Get a Free Quote <FaArrowRight aria-hidden="true" />
          </Link>
          <button
            className="burger"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="main-nav"
          >
            <FaBars aria-hidden="true" />
          </button>
        </div>
      </header>
      <div className={`scrim${open ? ' show' : ''}`} onClick={() => setOpen(false)} />
    </>
  );
}
