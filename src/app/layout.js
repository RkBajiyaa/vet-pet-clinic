import './globals.css';
import Navbar from '@/components/NavBar';
import Link from 'next/link';

export const metadata = {
  title: 'VET PET CLINIC – Trusted Pet Care in Mahapura, Jaipur',
  description: '24/7 veterinary care, grooming, boarding & doorstep services in Mahapura, Jaipur. Call 07240549293.',
};

const PHONE      = '07240549293';
const PHONE2     = '08764002844';
const PHONE_HREF = 'tel:07240549293';
const WHATSAPP   = 'https://wa.me/917240549293?text=Hello%2C%20I%20need%20help%20with%20my%20pet.';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>

      {/* pb-[88px] on mobile = exact height of fixed banner so nothing is hidden */}
      <body className="antialiased selection:bg-primary-container selection:text-on-primary-container bg-surface text-on-surface font-sans pb-[88px] md:pb-[72px]">

        <Navbar />

        {children}

        {/* ── Fixed Emergency Banner ── */}
        <div className="fixed bottom-0 left-0 w-full bg-error text-white z-40 shadow-[0_-4px_24px_rgba(0,0,0,0.18)]">

          {/* Mobile: single compact row */}
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

          {/* Desktop: full row */}
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

        {/* ── Footer ── */}
        <footer className="bg-surface-container-highest pt-12 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-4 md:px-8 max-w-7xl mx-auto mb-10">

            {/* Brand */}
            <div>
              <div className="text-2xl font-bold text-primary mb-3">VET PET CLINIC</div>
              <p className="text-sm text-on-surface-variant mb-5 leading-relaxed">
                Your trusted partner in pet health and happiness in Mahapura, Jaipur. Providing compassionate care 24/7.
              </p>
              <div className="flex gap-3">
                {/* WhatsApp */}
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-on-surface-variant hover:bg-[#25D366] hover:text-white transition-colors shadow-sm"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-on-surface-variant hover:bg-[#1877F2] hover:text-white transition-colors shadow-sm"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-on-surface-variant hover:bg-[#E1306C] hover:text-white transition-colors shadow-sm"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-base font-bold text-on-surface mb-5">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { href: '/',         label: 'Home' },
                  { href: '/about',    label: 'About Us' },
                  { href: '/services', label: 'Services' },
                  { href: '/contact',  label: 'Contact Us' },
                ].map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-on-surface-variant hover:text-primary transition-colors text-sm flex items-center gap-2"
                    >
                      <span className="material-symbols-outlined text-sm">chevron_right</span>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-base font-bold text-on-surface mb-5">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-0.5 text-lg">location_on</span>
                  <span className="text-on-surface-variant text-sm leading-relaxed">
                    VET PET CLINIC, Mahapura<br/>Jaipur, Rajasthan 302026
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary shrink-0 text-lg">call</span>
                  <div className="flex flex-col gap-0.5">
                    <a className="text-on-surface-variant text-sm hover:text-primary font-semibold" href={PHONE_HREF}>{PHONE}</a>
                    <a className="text-on-surface-variant text-sm hover:text-primary font-semibold" href="tel:08764002844">{PHONE2}</a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary shrink-0 text-lg">mail</span>
                  <a className="text-on-surface-variant text-sm hover:text-primary break-all" href="mailto:info@vetpetclinic.com">info@vetpetclinic.com</a>
                </li>
              </ul>
            </div>

            {/* Working Hours */}
            <div>
              <h3 className="text-base font-bold text-on-surface mb-5">Working Hours</h3>
              <div className="bg-surface-container p-5 rounded-2xl space-y-3 border border-outline-variant/10">
                <div className="flex justify-between items-center text-sm text-on-surface-variant border-b border-outline-variant/30 pb-3">
                  <span>Mon – Sun</span>
                  <span className="font-bold text-primary">24 Hours Open</span>
                </div>
                <div className="flex justify-between items-center text-sm text-on-surface-variant border-b border-outline-variant/30 pb-3">
                  <span>Emergency</span>
                  <span className="font-bold text-error">Available 24/7</span>
                </div>
                <div className="flex justify-between items-center text-sm text-on-surface-variant">
                  <span>Doorstep Service</span>
                  <span className="font-bold">9 AM – 8 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-outline-variant/30 pt-6 px-4 md:px-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-xs text-on-surface-variant">© 2026 VET PET CLINIC Mahapura. All rights reserved.</p>
            <div className="flex gap-5">
              <a className="text-xs text-on-surface-variant hover:text-primary" href="#">Privacy Policy</a>
              <a className="text-xs text-on-surface-variant hover:text-primary" href="#">Terms of Service</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
