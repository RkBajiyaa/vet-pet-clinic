'use client';

import { useState } from 'react';
import Link from 'next/link';

const REVIEWS = [
  {
    initial: 'R', name: 'Rahul Sharma', time: '2 weeks ago', color: 'bg-primary/10 text-primary',
    text: 'Excellent facility and very caring doctors. They handled my golden retriever\'s emergency with utmost professionalism. Highly recommend their 24/7 services.',
    stars: 5,
  },
  {
    initial: 'P', name: 'Priya Patel', time: '1 month ago', color: 'bg-secondary/10 text-secondary',
    text: 'The grooming services are top-notch! My Shih Tzu always comes back looking adorable and smelling great. The staff is so gentle with her.',
    stars: 5,
  },
  {
    initial: 'A', name: 'Amit Singh', time: '3 months ago', color: 'bg-tertiary/10 text-tertiary',
    text: 'Best pet boarding in Jaipur. I can leave my cat here without any worries when I travel. The daily video updates are a very nice touch.',
    stars: 5,
  },
];

const FAQS = [
  { q: 'What are your emergency hours?',       a: 'We provide 24/7 emergency veterinary care. Our dedicated team is always available for urgent cases — no appointment needed.' },
  { q: 'Do you offer doorstep services?',      a: 'Yes! We offer doorstep check-ups and vaccinations across Mahapura, Ajmer Road, and nearby Jaipur localities, 9 AM – 8 PM daily.' },
  { q: 'Do I need an appointment?',             a: 'Walk-ins are welcome, but booking ahead minimises wait time for routine care and grooming. Emergencies are always prioritised.' },
  { q: 'What types of pets do you treat?',     a: 'We primarily treat dogs and cats, offering full medical, surgical, grooming, boarding, and training services for both.' },
];

export default function HomeBottom() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      {/* ── MEET THE VET ── */}
      <section className="bg-surface py-12 md:py-24">
        <div className="px-4 md:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-20
            bg-white rounded-3xl md:rounded-[2.5rem] p-6 md:p-12 lg:p-16
            shadow-[0_20px_60px_rgba(11,28,48,0.07)] border border-outline-variant/10 group">

            {/* Portrait */}
            <div className="flex-shrink-0 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-full scale-110 group-hover:scale-125 transition-transform duration-700" />
                <img
                  alt="Dr. Vikram Sharma – Senior Veterinarian"
                  className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full object-cover border-[6px] border-white shadow-2xl z-10"
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop"
                />
              </div>
            </div>

            {/* Info */}
            <div className="w-full">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] md:text-xs font-extrabold mb-4 uppercase tracking-widest">
                Meet Our Veterinarian
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-on-surface mb-1 tracking-tight">
                Dr. Vikram Sharma
              </h2>
              <p className="text-base md:text-xl font-semibold text-on-surface-variant mb-6">Senior Veterinarian</p>
              <ul className="space-y-3 mb-7">
                {[
                  { icon: 'workspace_premium', label: '15+ Years Experience' },
                  { icon: 'medical_services',  label: 'Specialised in Surgery & Diagnostics' },
                ].map((item) => (
                  <li key={item.label} className="flex items-center gap-3 text-sm md:text-base font-medium text-on-surface">
                    <span className="w-9 h-9 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined icon-fill text-base">{item.icon}</span>
                    </span>
                    {item.label}
                  </li>
                ))}
              </ul>
              <blockquote className="text-sm md:text-base text-on-surface-variant italic leading-relaxed border-l-4 border-primary/30 pl-5 py-1 mb-7">
                "My mission is to provide the highest standard of veterinary care with a gentle touch.
                Every pet that comes through our doors is treated like family."
              </blockquote>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all hover:scale-105 shadow-[0_6px_24px_rgba(32,94,155,0.35)] text-sm md:text-base"
              >
                Book Consultation <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="bg-surface-container-low py-12 md:py-24">
        <div className="px-4 md:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-on-surface mb-3 tracking-tight">Why Choose Us</h2>
            <p className="text-sm md:text-lg text-on-surface-variant max-w-2xl mx-auto">
              Dedicated to providing the highest standard of veterinary care with a gentle touch.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {[
              { icon: 'support_agent',    title: '24/7 Support' },
              { icon: 'workspace_premium',title: 'Experienced Care' },
              { icon: 'biotech',          title: 'Modern Equipment' },
              { icon: 'favorite',         title: 'Compassionate Staff' },
              { icon: 'local_hospital',   title: 'All-in-One Facility' },
              { icon: 'cleaning_services',title: 'Hygienic Environment' },
              { icon: 'payments',         title: 'Affordable Pricing' },
              { icon: 'home_pin',         title: 'Convenient Location' },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-4 md:p-5 rounded-2xl flex items-center gap-3 md:gap-4
                  border border-outline-variant/10 shadow-[0_2px_10px_rgba(11,28,48,0.04)]
                  hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(11,28,48,0.08)] transition-all duration-300"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined icon-fill text-lg md:text-xl">{item.icon}</span>
                </div>
                <span className="text-xs md:text-sm font-bold text-on-surface leading-tight">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HAPPY TAILS GALLERY ── */}
      <section className="bg-surface-container py-12 md:py-24">
        <div className="px-4 md:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-on-surface mb-3 tracking-tight">Happy Tails Gallery</h2>
            <p className="text-sm md:text-lg text-on-surface-variant max-w-2xl mx-auto">
              Smiles, wags, and purrs from our wonderful patients.
            </p>
          </div>

          {/* Unified responsive grid that works on all screen sizes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {/* Big featured image — full width on mobile, 2×2 on desktop */}
            <div className="col-span-2 md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden h-48 md:h-[360px] relative group">
              <img alt="Happy Golden Retriever" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1000&auto=format&fit=crop" />
            </div>
            <div className="col-span-1 rounded-2xl overflow-hidden h-48 md:h-[170px] relative group">
              <img alt="Curious Orange Cat" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800&auto=format&fit=crop" />
            </div>
            <div className="col-span-1 rounded-2xl overflow-hidden h-48 md:h-[170px] relative group">
              <img alt="Playful Pug" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://images.unsplash.com/photo-1537151608804-ea2f141471a9?q=80&w=800&auto=format&fit=crop" />
            </div>
            <div className="col-span-2 rounded-2xl overflow-hidden h-36 md:h-[170px] relative group">
              <img alt="Dog and Cat resting together" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=1000&auto=format&fit=crop" />
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-12 md:py-24 overflow-hidden">
        <div className="px-4 md:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-on-surface mb-3 tracking-tight">What Pet Parents Say</h2>
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined icon-fill text-[#fbbc04] text-xl">star</span>
              ))}
            </div>
            <p className="text-sm md:text-base text-on-surface-variant">4.9 / 5 Average on Google Reviews</p>
          </div>

          {/* Scroll snapping carousel */}
          <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
            {REVIEWS.map((r) => (
              <div
                key={r.name}
                className="w-[82vw] sm:w-80 md:w-[400px] flex-none snap-center bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl
                  shadow-[0_8px_30px_rgba(11,28,48,0.07)] border border-outline-variant/10
                  hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(11,28,48,0.10)] transition-all duration-300"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(r.stars)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined icon-fill text-[#fbbc04] text-base">star</span>
                  ))}
                </div>
                <p className="text-sm md:text-base text-on-surface-variant leading-relaxed mb-5">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${r.color} flex items-center justify-center font-bold text-base shrink-0`}>{r.initial}</div>
                  <div>
                    <p className="text-sm font-bold text-on-surface flex items-center gap-1">
                      {r.name}
                      <span className="material-symbols-outlined text-blue-500 text-sm icon-fill">verified</span>
                    </p>
                    <p className="text-xs text-on-surface-variant">{r.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll hint dots */}
          <div className="flex justify-center gap-2 mt-4 md:hidden" aria-hidden="true">
            {REVIEWS.map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-primary w-5' : 'bg-outline-variant'} transition-all`} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-surface-container-low py-12 md:py-24">
        <div className="px-4 md:px-8 max-w-3xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-on-surface mb-3 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-sm md:text-lg text-on-surface-variant">Common questions from pet parents in Mahapura & Ajmer Road.</p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl border transition-all duration-300
                  ${openFaq === idx ? 'border-primary/30 shadow-[0_4px_20px_rgba(32,94,155,0.10)]' : 'border-outline-variant/10 shadow-[0_2px_10px_rgba(11,28,48,0.04)]'}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex justify-between items-center px-5 py-4 md:px-6 md:py-5 text-left gap-4"
                  aria-expanded={openFaq === idx}
                >
                  <span className="text-sm md:text-base font-bold text-on-surface">{faq.q}</span>
                  <span className={`w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}>
                    <span className="material-symbols-outlined text-lg">expand_more</span>
                  </span>
                </button>
                {openFaq === idx && (
                  <p className="px-5 pb-5 md:px-6 md:pb-6 text-sm md:text-base text-on-surface-variant leading-relaxed border-t border-outline-variant/10 pt-3">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto py-10 md:py-16">
        <div className="bg-primary/5 rounded-2xl md:rounded-3xl p-6 md:p-12 text-center border border-primary/10">
          <h3 className="text-lg md:text-2xl font-bold text-primary mb-3">Serving Pet Families Across Jaipur</h3>
          <p className="text-sm md:text-base text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
            Expert veterinary care, grooming & boarding in{' '}
            <strong className="text-on-surface">Mahapura, Ajmer Road, Bhankrota, Mansarovar</strong> and{' '}
            <strong className="text-on-surface">Vaishali Nagar</strong>.
          </p>
        </div>
      </section>
    </>
  );
}
