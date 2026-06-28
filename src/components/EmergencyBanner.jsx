'use client';

import { useState, useEffect } from 'react';

const PHONE_HREF = 'tel:07240549293';
const WHATSAPP   = 'https://wa.me/917240549293?text=Hello%2C%20I%20need%20help%20with%20my%20pet.';

// Banner slides up after user scrolls past ~80% of viewport height (past the hero)
const SCROLL_THRESHOLD = typeof window !== 'undefined' ? window.innerHeight * 0.8 : 600;

export default function EmergencyBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const threshold = window.innerHeight * 0.8;

    const onScroll = () => {
      setVisible(window.scrollY > threshold);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // Check immediately in case page is already scrolled (e.g. after navigation)
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 w-full bg-error text-white z-40
        shadow-[0_-4px_24px_rgba(0,0,0,0.18)]
        transition-transform duration-500 ease-in-out
        ${visible ? 'translate-y-0' : 'translate-y-full'}`}
      aria-hidden={!visible}
    >
      {/* ── Mobile: compact single row ── */}
      <div className="flex md:hidden items-center justify-between px-4 py-3 gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <span className="material-symbols-outlined icon-fill text-xl shrink-0 animate-pulse">emergency</span>
          <span className="text-sm font-bold leading-tight">Need Immediate Help?</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={PHONE_HREF}
            className="flex items-center gap-1 px-3 py-2 bg-white text-error rounded-full font-bold text-xs shadow-sm"
          >
            <span className="material-symbols-outlined text-sm">call</span> Call
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-2 border border-white text-white rounded-full font-bold text-xs"
          >
            <span className="material-symbols-outlined text-sm">chat</span> WA
          </a>
        </div>
      </div>

      {/* ── Desktop: full row ── */}
      <div className="hidden md:flex justify-center items-center gap-8 py-4 px-8">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined icon-fill text-3xl animate-pulse">emergency</span>
          <span className="text-xl font-bold">Need Immediate Pet Assistance?</span>
        </div>
        <div className="flex gap-4">
          <a
            href={PHONE_HREF}
            className="px-6 py-2.5 bg-white text-error rounded-full font-bold hover:bg-surface-container-low transition-colors flex items-center gap-2 text-sm shadow-sm"
          >
            <span className="material-symbols-outlined text-base">call</span> Call Now
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-colors flex items-center gap-2 text-sm"
          >
            <span className="material-symbols-outlined text-base">chat</span> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
