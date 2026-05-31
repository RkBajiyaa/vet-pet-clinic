export const metadata = {
  title: 'Our Services | VET PET CLINIC Mahapura',
  description: 'Explore our comprehensive range of veterinary healthcare, grooming, boarding, and training services in Jaipur.',
};

export default function ServicesPage() {
  return (
    <main className="flex-grow w-full">
      {/* Page Header */}
      <section className="text-center max-w-4xl mx-auto flex flex-col gap-6 px-4 md:px-8 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight">Our Directory of Services</h1>
        <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed">
          Explore our comprehensive range of services designed to keep your furry family members healthy, happy, and well-cared for. From routine healthcare to premium boarding, we offer everything your pet needs.
        </p>
      </section>

      {/* 1. Veterinary Healthcare */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 border-t border-outline-variant/20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center group">
          <div className="w-full lg:w-1/2 h-[400px] lg:h-[500px] rounded-[2.5rem] overflow-hidden shadow-[0_20px_40px_rgba(11,28,48,0.06)] relative border border-outline-variant/10">
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
            <img 
              alt="Veterinary Healthcare" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1000&auto=format&fit=crop"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div className="flex items-center gap-4 text-primary">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined icon-fill text-4xl">stethoscope</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight">Veterinary Healthcare</h2>
            </div>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              State-of-the-art medical care, from routine checkups to advanced diagnostics and surgery. Our experienced team ensures your pet's lifelong health.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              {[
                { title: 'Vaccination', desc: 'Protect your pet against common and severe diseases with tailored protocols.' },
                { title: 'X-Ray & Diagnostics', desc: 'Advanced imaging and lab services for accurate diagnosis of internal issues.' },
                { title: 'General Consultations', desc: 'Routine check-ups, dietary advice, and preventative care for optimal health.' },
                { title: 'Surgery', desc: 'Safe surgical procedures ranging from spay/neuter to soft tissue surgeries.' }
              ].map((card, idx) => (
                <div key={idx} className="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant/10 shadow-[0_4px_20px_rgba(11,28,48,0.04)] hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(11,28,48,0.08)] transition-all duration-300">
                  <h3 className="text-xl font-bold text-on-surface mb-2">{card.title}</h3>
                  <p className="text-base text-on-surface-variant leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <button className="px-8 py-4 rounded-full bg-primary text-white font-bold hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 shadow-[0_8px_30px_rgba(32,94,155,0.3)] hover:scale-105 text-lg">
                Book Healthcare Appointment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Pet Grooming */}
      <section className="bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center group">
            <div className="w-full lg:w-1/2 h-[400px] lg:h-[500px] rounded-[2.5rem] overflow-hidden shadow-[0_20px_40px_rgba(11,28,48,0.06)] relative border border-outline-variant/10">
              <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
              <img 
                alt="Pet Grooming" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=1000&auto=format&fit=crop"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-8">
              <div className="flex items-center gap-4 text-secondary">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined icon-fill text-4xl">content_cut</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight">Pet Grooming</h2>
              </div>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                Premium spa treatments, professional styling, and hygiene services to keep your pet looking and feeling their absolute best.
              </p>
              <ul className="flex flex-col gap-6 text-lg text-on-surface mt-2">
                {[
                  { title: 'Bathing & Blow Dry:', desc: 'Gentle, deep-cleansing baths using premium, hypoallergenic shampoos.' },
                  { title: 'Coat Care & Styling:', desc: 'Breed-specific haircuts, deshedding treatments, and creative styling.' },
                  { title: 'Nail Trimming & Filing:', desc: 'Safe and comfortable paw care to prevent injuries and discomfort.' },
                  { title: 'Ear & Eye Cleaning:', desc: 'Essential hygiene maintenance to prevent infections and keep eyes bright.' }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 group/item">
                    <span className="material-symbols-outlined text-secondary text-2xl mt-1 group-hover/item:scale-125 transition-transform duration-300">check_circle</span> 
                    <div><strong className="text-on-surface">{item.title}</strong> <span className="text-on-surface-variant">{item.desc}</span></div>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <button className="px-8 py-4 rounded-full bg-secondary text-white font-bold hover:bg-secondary-container hover:text-on-secondary-container transition-all duration-300 shadow-[0_8px_30px_rgba(21,107,77,0.3)] hover:scale-105 text-lg">
                  View Grooming Packages
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Pet Boarding & Hostel */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center group">
          <div className="w-full lg:w-1/2 h-[400px] lg:h-[500px] rounded-[2.5rem] overflow-hidden shadow-[0_20px_40px_rgba(11,28,48,0.06)] relative border border-outline-variant/10">
            <div className="absolute inset-0 bg-tertiary/10 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
            <img 
              alt="Pet Boarding" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1000&auto=format&fit=crop"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div className="flex items-center gap-4 text-tertiary">
              <div className="w-16 h-16 rounded-full bg-tertiary/10 flex items-center justify-center">
                <span className="material-symbols-outlined icon-fill text-4xl">bed</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight">Pet Boarding & Hostel</h2>
            </div>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              A luxury resort experience for your pets while you're away. Spacious accommodations, playtime, and round-the-clock care in a safe, loving environment.
            </p>
            <div className="flex flex-wrap gap-3 mt-2 mb-4">
              <span className="px-5 py-2.5 bg-secondary/10 text-secondary rounded-full text-sm font-bold border border-secondary/20">Premium Suites</span>
              <span className="px-5 py-2.5 bg-primary/10 text-primary rounded-full text-sm font-bold border border-primary/20">Outdoor Play Yards</span>
              <span className="px-5 py-2.5 bg-tertiary/10 text-tertiary rounded-full text-sm font-bold border border-tertiary/20">24/7 Monitoring</span>
              <span className="px-5 py-2.5 bg-surface-container-high text-on-surface rounded-full text-sm font-bold border border-outline-variant/20">Climate Controlled</span>
              <span className="px-5 py-2.5 bg-error/10 text-error rounded-full text-sm font-bold border border-error/20">Gourmet Meals</span>
            </div>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Our facility is designed to reduce stress and maximize comfort, with separated zones for cats and dogs, and highly trained staff on-site at all times.
            </p>
            <div className="mt-4">
              <button className="px-8 py-4 rounded-full bg-tertiary text-white font-bold hover:bg-tertiary-container hover:text-on-tertiary-container transition-all duration-300 shadow-[0_8px_30px_rgba(130,81,0,0.3)] hover:scale-105 text-lg">
                Reserve a Suite
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Pet Training */}
      <section className="bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center group">
            <div className="w-full lg:w-1/2 h-[400px] lg:h-[500px] rounded-[2.5rem] overflow-hidden shadow-[0_20px_40px_rgba(11,28,48,0.06)] relative bg-primary/10 flex items-center justify-center border border-primary/20">
              <img 
                alt="Pet Training" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-80 group-hover:scale-105 transition-transform duration-700" 
                src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=1000&auto=format&fit=crop"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent"></div>
              <span className="material-symbols-outlined text-[120px] text-white/50 relative z-10 drop-shadow-lg">school</span>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-8">
              <div className="flex items-center gap-4 text-primary">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined icon-fill text-4xl">school</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight">Pet Training</h2>
              </div>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                Build a stronger bond with your pet through our positive reinforcement training programs, designed for all ages and behavioral needs.
              </p>
              <div className="grid gap-6 mt-2">
                {[
                  { title: 'Basic Obedience', desc: 'Essential commands like sit, stay, come, and leash walking for a well-mannered companion.' },
                  { title: 'Behavior Modification', desc: 'Targeted solutions for separation anxiety, aggression, excessive barking, and other behaviors.' },
                  { title: 'Puppy Socialization', desc: 'Early exposure to new experiences, dogs, and people in a safe, controlled environment.' }
                ].map((course, idx) => (
                  <div key={idx} className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/10 shadow-[0_4px_20px_rgba(11,28,48,0.04)] hover:-translate-y-2 transition-all duration-300">
                    <h3 className="text-xl font-bold text-primary mb-2">{course.title}</h3>
                    <p className="text-base text-on-surface-variant leading-relaxed">{course.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <button className="px-8 py-4 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 text-lg">
                  Explore Training Programs
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Pet Shop & 6. Special Services */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Pet Shop */}
        <div className="bg-surface-container-lowest rounded-[2.5rem] border border-outline-variant/10 shadow-[0_12px_32px_rgba(11,28,48,0.06)] p-10 md:p-12 flex flex-col gap-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(11,28,48,0.1)] group">
          <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform duration-500">
            <span className="material-symbols-outlined text-4xl">storefront</span>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface mb-4">Pet Shop</h2>
            <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">Curated selection of premium pet foods, specialized diets, accessories, and wellness products recommended by our vets.</p>
            <ul className="flex flex-col gap-4 text-base md:text-lg text-on-surface font-medium">
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary">done</span> Premium & Prescription Diets</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary">done</span> High-Quality Toys & Accessories</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary">done</span> Supplements & Wellness Essentials</li>
            </ul>
          </div>
          <div className="mt-auto pt-8">
            <button className="px-8 py-4 rounded-full bg-secondary text-white font-bold hover:bg-secondary-container hover:text-on-secondary-container transition-all duration-300 hover:scale-105 w-full sm:w-auto text-lg shadow-[0_8px_30px_rgba(21,107,77,0.3)]">
              Browse Store
            </button>
          </div>
        </div>

        {/* Special Services */}
        <div className="bg-surface-container-highest rounded-[2.5rem] border border-outline-variant/10 shadow-[0_12px_32px_rgba(11,28,48,0.06)] p-10 md:p-12 flex flex-col gap-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(11,28,48,0.1)] relative overflow-hidden group">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-tertiary/10 rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>
          <div className="w-20 h-20 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary relative z-10 group-hover:scale-110 transition-transform duration-500">
            <span className="material-symbols-outlined text-4xl">local_taxi</span>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface mb-4">Special Services</h2>
            <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">For situations that require extra care and convenience, we bring our expertise directly to you.</p>
            <ul className="flex flex-col gap-4 text-base md:text-lg text-on-surface font-medium">
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-tertiary">done</span> Doorstep Consultations</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-tertiary">done</span> Emergency Home Visits</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-tertiary">done</span> Pet Transport & Ambulance</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-tertiary">done</span> At-Home Sample Collection</li>
            </ul>
          </div>
          <div className="mt-auto pt-8 relative z-10">
            <button className="px-8 py-4 rounded-full bg-tertiary text-white font-bold hover:bg-tertiary-container hover:text-on-tertiary-container transition-all duration-300 hover:scale-105 w-full sm:w-auto text-lg shadow-[0_8px_30px_rgba(130,81,0,0.3)]">
              Request Service
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}