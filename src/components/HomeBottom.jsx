export default function HomeBottom() {
  return (
    <>
      {/* Meet Our Veterinarian */}
      <section className="bg-surface py-16 md:py-24">
        <div className="px-4 md:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20 bg-surface-container-lowest rounded-[2.5rem] p-8 md:p-16 shadow-[0_20px_40px_rgba(11,28,48,0.06)] border border-outline-variant/10 group">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-full scale-105 group-hover:scale-110 transition-transform duration-700"></div>
                <img 
                  alt="Dr. Vikram Sharma" 
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-8 border-white shadow-2xl z-10" 
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <div className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary text-xs font-extrabold mb-6 uppercase tracking-widest">
                Meet Our Veterinarian
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface mb-4 tracking-tight">Dr. Vikram Sharma</h2>
              <h3 className="text-xl md:text-2xl font-semibold text-on-surface-variant mb-8">Senior Veterinarian</h3>
              <ul className="space-y-5 mb-10">
                <li className="flex items-center gap-4 text-lg text-on-surface font-medium group-hover:translate-x-2 transition-transform duration-500">
                  <span className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined icon-fill">workspace_premium</span>
                  </span>
                  15+ Years Experience
                </li>
                <li className="flex items-center gap-4 text-lg text-on-surface font-medium group-hover:translate-x-2 transition-transform duration-500 delay-75">
                  <span className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined icon-fill">medical_services</span>
                  </span>
                  Specialized in Surgery & Diagnostics
                </li>
              </ul>
              <p className="text-lg text-on-surface-variant mb-10 italic leading-relaxed border-l-4 border-primary/30 pl-6 py-2">
                "My mission is to provide the highest standard of veterinary care with a gentle touch. Every pet that comes through our doors is treated like family."
              </p>
              <button className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-3">
                Book Consultation <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-surface-container-low py-16 md:py-24">
        <div className="px-4 md:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-on-surface mb-6 tracking-tight">Why Choose Us</h2>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Dedicated to providing the highest standard of veterinary care with a gentle touch.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: 'support_agent', title: '24/7 Support' },
              { icon: 'workspace_premium', title: 'Experienced Care' },
              { icon: 'biotech', title: 'Modern Equipment' },
              { icon: 'favorite', title: 'Compassionate Staff' },
              { icon: 'local_hospital', title: 'All-in-One Facility' },
              { icon: 'cleaning_services', title: 'Hygienic Environment' },
              { icon: 'payments', title: 'Affordable Pricing' },
              { icon: 'home_pin', title: 'Convenient Location' },
            ].map((item, idx) => (
              <div key={idx} className="bg-surface-container-lowest p-6 rounded-3xl flex items-center gap-5 shadow-[0_4px_20px_rgba(11,28,48,0.04)] border border-outline-variant/10 hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(11,28,48,0.08)] transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined icon-fill text-2xl">{item.icon}</span>
                </div>
                <span className="text-base font-bold text-on-surface">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Happy Tails Gallery */}
      <section className="bg-surface-container py-16 md:py-24">
        <div className="px-4 md:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-on-surface mb-6 tracking-tight">Happy Tails Gallery</h2>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Smiles, wags, and purrs from our wonderful patients. We treat every pet like our own.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px]">
            <div className="col-span-2 row-span-2 rounded-[2rem] overflow-hidden shadow-lg group relative">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img alt="Happy Golden Retriever" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1000&auto=format&fit=crop" />
            </div>
            <div className="col-span-1 row-span-1 rounded-[2rem] overflow-hidden shadow-lg group relative">
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img alt="Curious Orange Cat" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800&auto=format&fit=crop" />
            </div>
            <div className="col-span-1 row-span-1 rounded-[2rem] overflow-hidden shadow-lg group relative">
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img alt="Playful Pug" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1537151608804-ea2f141471a9?q=80&w=800&auto=format&fit=crop" />
            </div>
            <div className="col-span-2 md:col-span-2 row-span-1 rounded-[2rem] overflow-hidden shadow-lg group relative">
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img alt="Dog and Cat resting together" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=1000&auto=format&fit=crop" />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Slider */}
      <section className="py-16 md:py-24 overflow-hidden">
        <div className="px-4 md:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-on-surface mb-4 tracking-tight">What Pet Parents Say</h2>
            <div className="flex justify-center items-center gap-2 mb-3">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-[#fbbc04] icon-fill text-2xl">star</span>
              ))}
            </div>
            <p className="text-lg text-on-surface-variant">4.9/5 Average on Google Reviews</p>
          </div>
          
          <div className="flex gap-6 md:gap-8 overflow-x-auto pb-10 snap-x snap-mandatory hide-scrollbar">
            
            <div className="w-[85vw] sm:w-[350px] md:w-[450px] flex-none bg-surface-container-lowest p-8 md:p-10 rounded-3xl shadow-[0_12px_32px_rgba(11,28,48,0.06)] snap-center border border-outline-variant/10 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(11,28,48,0.1)] transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-xl">R</div>
                <div>
                  <h4 className="text-lg font-bold text-on-surface flex items-center gap-1">
                    Rahul Sharma <span className="material-symbols-outlined text-blue-500 text-lg icon-fill">verified</span>
                  </h4>
                  <span className="text-sm text-on-surface-variant font-medium">2 weeks ago</span>
                </div>
              </div>
              <p className="text-base md:text-lg text-on-surface-variant leading-relaxed">
                "Excellent facility and very caring doctors. They handled my golden retriever's emergency with utmost professionalism. Highly recommend their 24/7 services."
              </p>
            </div>

            <div className="w-[85vw] sm:w-[350px] md:w-[450px] flex-none bg-surface-container-lowest p-8 md:p-10 rounded-3xl shadow-[0_12px_32px_rgba(11,28,48,0.06)] snap-center border border-outline-variant/10 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(11,28,48,0.1)] transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold text-xl">P</div>
                <div>
                  <h4 className="text-lg font-bold text-on-surface flex items-center gap-1">
                    Priya Patel <span className="material-symbols-outlined text-blue-500 text-lg icon-fill">verified</span>
                  </h4>
                  <span className="text-sm text-on-surface-variant font-medium">1 month ago</span>
                </div>
              </div>
              <p className="text-base md:text-lg text-on-surface-variant leading-relaxed">
                "The grooming services are top-notch! My Shih Tzu always comes back looking adorable and smelling great. The staff is so gentle with her."
              </p>
            </div>

            <div className="w-[85vw] sm:w-[350px] md:w-[450px] flex-none bg-surface-container-lowest p-8 md:p-10 rounded-3xl shadow-[0_12px_32px_rgba(11,28,48,0.06)] snap-center border border-outline-variant/10 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(11,28,48,0.1)] transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center font-bold text-xl">A</div>
                <div>
                  <h4 className="text-lg font-bold text-on-surface flex items-center gap-1">
                    Amit Singh <span className="material-symbols-outlined text-blue-500 text-lg icon-fill">verified</span>
                  </h4>
                  <span className="text-sm text-on-surface-variant font-medium">3 months ago</span>
                </div>
              </div>
              <p className="text-base md:text-lg text-on-surface-variant leading-relaxed">
                "Best pet boarding in Jaipur. I can leave my cat here without any worries when I travel. The daily video updates are a very nice touch."
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-surface-container-low py-16 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-on-surface mb-6 tracking-tight">Frequently Asked Questions</h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Common questions from our Mahapura and Ajmer Road pet parents.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { q: 'What are your emergency hours?', a: 'We are a 24/7 Emergency Vet on Ajmer Road. Our dedicated team is available around the clock for any urgent care your pet might need.' },
            { q: 'Do you offer doorstep services?', a: 'Yes, we provide doorstep veterinary services for routine check-ups and vaccinations in Mahapura, Ajmer Road, and surrounding Jaipur areas between 9 AM and 8 PM.' },
            { q: 'Do I need an appointment?', a: 'While we accept walk-ins, we highly recommend booking an appointment for regular consultations and grooming to minimize wait times. Emergency cases are prioritized immediately.' },
            { q: 'What types of pets do you treat?', a: 'We primarily treat dogs and cats, offering comprehensive medical care, surgery, boarding, and grooming for them.' }
          ].map((faq, idx) => (
            <details key={idx} className="group bg-surface-container-lowest rounded-3xl p-6 md:p-8 shadow-[0_4px_20px_rgba(11,28,48,0.04)] border border-outline-variant/10 cursor-pointer hover:shadow-md transition-all duration-300">
              <summary className="flex justify-between items-center text-lg font-bold text-on-surface list-none">
                {faq.q}
                <span className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary group-open:rotate-180 transition-transform duration-500">
                  <span className="material-symbols-outlined">expand_more</span>
                </span>
              </summary>
              <p className="mt-6 text-base text-on-surface-variant leading-relaxed pl-2 border-l-2 border-outline-variant/30">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Local SEO / Service Areas Block */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto mb-16">
        <div className="bg-primary/5 rounded-[2rem] p-8 md:p-12 text-center border border-primary/10">
          <h3 className="text-2xl font-bold text-primary mb-4">Serving Pet Families Across Jaipur</h3>
          <p className="text-on-surface-variant text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
            Proudly providing expert veterinary care, grooming, and boarding to pets in <span className="font-bold text-on-surface">Mahapura, Ajmer Road, Bhankrota, Mansarovar, Vaishali Nagar</span>, and the surrounding local communities.
          </p>
        </div>
      </section>
    </>
  );
}