import Link from 'next/link';

const SERVICES = [
  { icon: 'health_and_safety', title: 'Health Checkup',    color: 'primary' },
  { icon: 'vaccines',          title: 'Vaccination',       color: 'primary' },
  { icon: 'pest_control',      title: 'Deworming',         color: 'primary' },
  { icon: 'medical_services',  title: 'Treatment',         color: 'primary' },
  { icon: 'radiology',         title: 'Digital X-Ray',     color: 'primary' },
  { icon: 'science',           title: 'Pathology Lab',     color: 'primary' },
  { icon: 'content_cut',       title: 'Pet Grooming',      color: 'secondary' },
  { icon: 'cut',               title: 'Nail Trimming',     color: 'secondary' },
  { icon: 'shower',            title: 'Medicated Bathing', color: 'secondary' },
  { icon: 'night_shelter',     title: 'Pet Boarding',      color: 'tertiary' },
  { icon: 'sports_handball',   title: 'Pet Training',      color: 'tertiary' },
  { icon: 'store',             title: 'Pet Shop',          color: 'primary' },
  { icon: 'memory',            title: 'Microchipping',     color: 'primary' },
  { icon: 'emergency',         title: '24/7 Emergency',    color: 'error' },
  { icon: 'local_shipping',    title: 'Doorstep Service',  color: 'primary' },
];

export default function HomeTop() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative w-full min-h-[88svh] flex items-center overflow-hidden bg-on-surface">
        <img
          alt="Veterinarian gently caring for a golden retriever"
          className="absolute inset-0 w-full h-full object-cover opacity-55"
          src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=1920&auto=format&fit=crop"
          fetchPriority="high"
        />
        {/* Gradient: stronger at bottom so stats card is readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/30 to-transparent" />

        <div className="relative z-10 w-full px-4 md:px-8 max-w-7xl mx-auto py-16 md:py-24">
          <div className="max-w-3xl">
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 text-white backdrop-blur-md border border-white/20 text-[10px] md:text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-sm">schedule</span> 24/7 Available
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-error/80 text-white border border-error/40 text-[10px] md:text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-sm">emergency</span> Emergency Services
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-5 tracking-tight leading-[1.1] drop-shadow-lg">
              Trusted Pet Care<br className="hidden sm:block" /> in Mahapura.
            </h1>
            <p className="text-base md:text-xl text-white/85 mb-8 max-w-xl leading-relaxed">
              Compassionate veterinary services, grooming & boarding.
              Serving Ajmer Road & Jaipur families with uncompromising care.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:07240549293"
                className="flex justify-center items-center gap-2 px-7 py-4 rounded-full bg-primary text-white font-bold text-base hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-[0_8px_30px_rgba(32,94,155,0.5)]"
              >
                <span className="material-symbols-outlined">call</span> Call Now
              </a>
              <Link
                href="/contact"
                className="flex justify-center items-center gap-2 px-7 py-4 rounded-full bg-white/95 text-on-surface font-bold text-base hover:bg-white transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <span className="material-symbols-outlined">calendar_month</span> Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto -mt-12 md:-mt-16 relative z-20">
        <div className="bg-white rounded-2xl md:rounded-3xl px-6 py-6 md:p-10 shadow-[0_20px_60px_rgba(11,28,48,0.10)] grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center border border-outline-variant/10">
          {[
            { num: '1000+', label: 'Pets Treated',    color: 'text-primary'   },
            { num: '24/7',  label: 'Emergency',       color: 'text-secondary' },
            { num: '750+',  label: 'Vaccinations',    color: 'text-tertiary'  },
            { num: '100s',  label: 'Happy Parents',   color: 'text-error'     },
          ].map((s) => (
            <div key={s.label} className="group hover:-translate-y-1 transition-transform duration-300 cursor-default">
              <div className={`text-3xl sm:text-4xl md:text-5xl font-extrabold ${s.color} mb-1.5 tabular-nums`}>{s.num}</div>
              <div className="text-[10px] md:text-xs font-bold text-on-surface-variant uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-14 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-on-surface mb-4 tracking-tight">
            Our Comprehensive Services
          </h2>
          <p className="text-sm md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            From routine checkups to specialised care — everything your pet needs, under one roof.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-5">
          {SERVICES.map((s) => (
            <Link
              key={s.title}
              href="/services"
              className={`bg-white p-3 md:p-6 rounded-2xl flex flex-col items-center text-center group
                hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(11,28,48,0.10)]
                transition-all duration-300 border border-outline-variant/10 shadow-[0_2px_10px_rgba(11,28,48,0.04)]`}
            >
              <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-2.5 md:mb-4
                bg-${s.color}/10 text-${s.color} group-hover:bg-${s.color} group-hover:text-white
                transition-all duration-300`}>
                <span className={`material-symbols-outlined icon-fill text-2xl md:text-3xl`}>{s.icon}</span>
              </div>
              <h3 className="text-[11px] md:text-sm font-bold text-on-surface leading-tight mb-1.5">{s.title}</h3>
              <span className={`text-${s.color} text-[10px] md:text-xs font-bold flex items-center gap-0.5 group-hover:gap-1.5 transition-all`}>
                Learn More <span className="material-symbols-outlined text-[10px] md:text-xs">arrow_forward</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
