'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled]           = useState(false);
  const pathname = usePathname();

  /* Shrink navbar on scroll */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close mobile menu when route changes */
  useEffect(() => { setIsMobileMenuOpen(false); }, [pathname]);

  /* Lock body scroll while menu is open */
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Home',       href: '/',         icon: 'home' },
    { label: 'Services',   href: '/services', icon: 'medical_services' },
    { label: 'About Us',   href: '/about',    icon: 'info' },
    { label: 'Contact',    href: '/contact',  icon: 'call' },
  ];

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300
        ${isScrolled
          ? 'bg-surface/95 backdrop-blur-lg shadow-[0_2px_20px_rgba(11,28,48,0.08)] py-0'
          : 'bg-surface/90 backdrop-blur-md shadow-sm py-0'}`}
    >
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-extrabold text-primary tracking-tight hover:opacity-80 transition-opacity"
          aria-label="VET PET CLINIC – go to homepage"
        >
          VET PET CLINIC
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-1" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200
                ${isActive(link.href)
                  ? 'bg-primary/10 text-primary'
                  : 'text-on-surface-variant hover:text-primary hover:bg-primary/5'}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex gap-3 items-center">
          <a
            href="tel:07240549293"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors shadow-[0_4px_14px_rgba(32,94,155,0.3)] hover:shadow-[0_6px_20px_rgba(32,94,155,0.4)]"
          >
            <span className="material-symbols-outlined text-base">call</span>
            Call Now
          </a>
        </div>

        {/* Mobile right: call pill + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="tel:07240549293"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-white text-sm font-bold shadow-[0_4px_14px_rgba(32,94,155,0.25)]"
            aria-label="Call clinic"
          >
            <span className="material-symbols-outlined text-base">call</span>
            Call
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container transition-colors"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <span className="material-symbols-outlined text-2xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* ── Mobile slide-down menu ── */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 top-16 bg-surface/98 backdrop-blur-md z-40 flex flex-col overflow-y-auto"
          aria-label="Mobile navigation"
        >
          <nav className="flex flex-col gap-1 px-4 pt-4 pb-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-4 px-4 py-4 rounded-2xl font-semibold text-base transition-colors
                  ${isActive(link.href)
                    ? 'bg-primary/10 text-primary'
                    : 'text-on-surface hover:bg-surface-container'}`}
              >
                <span className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0
                  ${isActive(link.href) ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
                  <span className="material-symbols-outlined icon-fill text-xl">{link.icon}</span>
                </span>
                {link.label}
                {isActive(link.href) && (
                  <span className="ml-auto material-symbols-outlined text-primary text-lg">check</span>
                )}
              </Link>
            ))}
          </nav>

          {/* Bottom action buttons */}
          <div className="mt-auto px-4 pb-8 pt-4 flex flex-col gap-3 border-t border-outline-variant/20">
            <a
              href="tel:07240549293"
              className="flex items-center justify-center gap-2 py-4 rounded-full bg-primary text-white font-bold text-base shadow-[0_8px_24px_rgba(32,94,155,0.3)]"
            >
              <span className="material-symbols-outlined">call</span>
              07240549293
            </a>
            <a
              href="https://wa.me/917240549293?text=Hello%2C%20I%20need%20help%20with%20my%20pet."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-4 rounded-full bg-[#25D366] text-white font-bold text-base"
            >
              <span className="material-symbols-outlined">chat</span>
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
