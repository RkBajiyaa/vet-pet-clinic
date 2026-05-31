export default function HomeTop() {
  const services = [
    { icon: 'health_and_safety', title: 'Health Checkup', text: 'text-primary', bg: 'bg-primary/10', hoverBg: 'group-hover:bg-primary' },
    { icon: 'vaccines', title: 'Vaccination', text: 'text-primary', bg: 'bg-primary/10', hoverBg: 'group-hover:bg-primary' },
    { icon: 'pest_control', title: 'Deworming', text: 'text-primary', bg: 'bg-primary/10', hoverBg: 'group-hover:bg-primary' },
    { icon: 'medical_services', title: 'Treatment', text: 'text-primary', bg: 'bg-primary/10', hoverBg: 'group-hover:bg-primary' },
    { icon: 'radiology', title: 'Digital X-Ray', text: 'text-primary', bg: 'bg-primary/10', hoverBg: 'group-hover:bg-primary' },
    { icon: 'science', title: 'Pathology Lab', text: 'text-primary', bg: 'bg-primary/10', hoverBg: 'group-hover:bg-primary' },
    { icon: 'content_cut', title: 'Pet Grooming', text: 'text-secondary', bg: 'bg-secondary/10', hoverBg: 'group-hover:bg-secondary' },
    { icon: 'cut', title: 'Nail Trimming', text: 'text-secondary', bg: 'bg-secondary/10', hoverBg: 'group-hover:bg-secondary' },
    { icon: 'shower', title: 'Medicated Bathing', text: 'text-secondary', bg: 'bg-secondary/10', hoverBg: 'group-hover:bg-secondary' },
    { icon: 'night_shelter', title: 'Pet Boarding', text: 'text-tertiary', bg: 'bg-tertiary/10', hoverBg: 'group-hover:bg-tertiary' },
    { icon: 'sports_handball', title: 'Pet Training', text: 'text-tertiary', bg: 'bg-tertiary/10', hoverBg: 'group-hover:bg-tertiary' },
    { icon: 'store', title: 'Pet Shop', text: 'text-primary', bg: 'bg-primary/10', hoverBg: 'group-hover:bg-primary' },
    { icon: 'memory', title: 'Microchipping', text: 'text-primary', bg: 'bg-primary/10', hoverBg: 'group-hover:bg-primary' },
    { icon: 'emergency', title: '24/7 Emergency', text: 'text-error', bg: 'bg-error/10', hoverBg: 'group-hover:bg-error' },
    { icon: 'local_shipping', title: 'Doorstep Service', text: 'text-primary', bg: 'bg-primary/10', hoverBg: 'group-hover:bg-primary' },
  ];

  return (
    <>
      {/* Hero Section - Upgraded to Premium Dark Overlay */}
      <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden bg-on-surface">
        <img 
          alt="Premium veterinary clinic care" 
          className="absolute inset-0 w-full h-full object-cover opacity-60" 
          src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=1920&auto=format&fit=crop"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent"></div>
        <div className="relative z-10 w-full px-4 md:px-8 max-w-7xl mx-auto py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-surface/20 text-white backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider shadow-lg">
                <span className="material-symbols-outlined text-base">schedule</span> 24/7 Available
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-error/80 text-white backdrop-blur-md border border-error/50 text-xs font-bold uppercase tracking-wider shadow-lg">
                <span className="material-symbols-outlined text-base">emergency</span> Emergency Services
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight drop-shadow-lg">
              Trusted Pet Care in Mahapura.
            </h1>
            <p className="text-lg md:text-xl text-surface-container-low mb-10 max-w-xl leading-relaxed drop-shadow-md">
              Providing compassionate, expert veterinary services, grooming, and boarding. Serving Ajmer Road & Jaipur families with uncompromising luxury care.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white text-base font-bold hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 hover:scale-105 shadow-[0_8px_30px_rgba(32,94,155,0.4)]">
                <span className="material-symbols-outlined">call</span> Call Now
              </button>
              <button className="flex items-center gap-2 px-8 py-4 rounded-full bg-white text-on-surface text-base font-bold hover:bg-surface-container-low transition-all duration-300 hover:scale-105 shadow-lg">
                <span className="material-symbols-outlined">calendar_month</span> Book Appointment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* By The Numbers (Stats Bar) */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto -mt-20 relative z-20">
        <div className="bg-surface-container-lowest rounded-3xl p-8 md:p-12 shadow-[0_20px_40px_rgba(11,28,48,0.06)] grid grid-cols-2 md:grid-cols-4 gap-8 text-center border border-outline-variant/10 backdrop-blur-xl">
          {[
            { num: '1000+', label: 'Pets Treated', color: 'text-primary' },
            { num: '24/7', label: 'Emergency', color: 'text-secondary' },
            { num: '750+', label: 'Vaccinations', color: 'text-tertiary' },
            { num: '100s', label: 'Happy Parents', color: 'text-error' }
          ].map((stat, idx) => (
            <div key={idx} className="group hover:-translate-y-2 transition-transform duration-500 cursor-default">
              <div className={`text-4xl md:text-5xl font-extrabold ${stat.color} mb-3 group-hover:scale-110 transition-transform duration-500`}>{stat.num}</div>
              <div className="text-xs md:text-sm font-bold text-on-surface-variant uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-on-surface mb-6 tracking-tight">Our Comprehensive Services</h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">From routine checkups to specialized care, your local Vet Clinic Mahapura offers everything your pet needs under one roof.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-surface-container-lowest p-6 md:p-8 rounded-3xl shadow-[0_4px_20px_rgba(11,28,48,0.04)] flex flex-col items-center text-center group hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(11,28,48,0.08)] transition-all duration-500 cursor-pointer border border-outline-variant/10">
              <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mb-6 transition-all duration-500 ${service.bg} ${service.text} ${service.hoverBg} group-hover:text-white`}>
                <span className="material-symbols-outlined icon-fill text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-500">{service.icon}</span>
              </div>
              <h3 className="text-base md:text-lg font-bold text-on-surface mb-3">{service.title}</h3>
              <span className={`mt-auto ${service.text} text-sm font-bold group-hover:tracking-wider flex items-center gap-1 transition-all duration-300`}>
                Learn More <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}