'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Navbar shrink on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const navLinks = [
    { label: 'Home',     href: '/',         icon: 'home' },
    { label: 'Services', href: '/services', icon: 'medical_services' },
    { label: 'About Us', href: '/about',    icon: 'info' },
    { label: 'Contact',  href: '/contact',  icon: 'call' },
  ];

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      {/* ── HEADER BAR ── */}
      <header
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-[0_2px_20px_rgba(11,28,48,0.08)]'
            : 'bg-surface/90 backdrop-blur-md shadow-sm'
        }`}
      >
        <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20">

          {/* Logo */}
          <Link
            href="/"
            className="text-xl md:text-2xl font-extrabold text-primary tracking-tight hover:opacity-80 transition-opacity"
          >
            VET PET CLINIC
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  isActive(link.href)
                    ? 'bg-primary/10 text-primary'
                    : 'text-on-surface-variant hover:text-primary hover:bg-primary/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex gap-3 items-center">
            <a
              href="tel:07240549293"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors shadow-[0_4px_14px_rgba(32,94,155,0.3)]"
            >
              <span className="material-symbols-outlined text-base">call</span>
              Call Now
            </a>
          </div>

          {/* Mobile: hamburger ONLY — no call button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex md:hidden w-10 h-10 items-center justify-center rounded-full text-on-surface hover:bg-surface-container transition-colors"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="material-symbols-outlined text-2xl">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </header>

      {/* ── MOBILE FULL-SCREEN OVERLAY ──
          Rendered as a sibling OUTSIDE the <header> so z-index stacking
          is clean and the header close button stays visible on top. ── */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 z-[60] flex flex-col bg-white"
          // Prevent scroll on the overlay itself from leaking to page
          onTouchMove={(e) => e.stopPropagation()}
        >
          {/* Top bar inside overlay — mirrors header height */}
          <div className="flex items-center justify-between px-4 h-16 border-b border-outline-variant/20 shrink-0">
            <span className="text-xl font-extrabold text-primary tracking-tight">VET PET CLINIC</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container transition-colors"
              aria-label="Close menu"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-1 px-4 pt-4 pb-4 overflow-y-auto flex-grow">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-4 px-4 py-4 rounded-2xl font-semibold text-base transition-colors ${
                  isActive(link.href)
                    ? 'bg-primary/10 text-primary'
                    : 'text-on-surface hover:bg-surface-container'
                }`}
              >
                <span
                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                    isActive(link.href) ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                  }`}
                >
                  <span className="material-symbols-outlined icon-fill text-xl">{link.icon}</span>
                </span>
                {link.label}
                {isActive(link.href) && (
                  <span className="ml-auto material-symbols-outlined text-primary text-lg">check</span>
                )}
              </Link>
            ))}
          </nav>

          {/* CTA buttons at the bottom */}
          <div className="px-4 pb-10 pt-4 flex flex-col gap-3 border-t border-outline-variant/20 shrink-0">
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
    </>
  );
}
