export const metadata = {
  title: 'About Us | VET PET CLINIC Mahapura',
  description: 'Learn about our mission, vision, and the dedicated team of veterinary professionals at VET PET CLINIC.',
};

export default function AboutPage() {
  return (
    <main className="flex-grow w-full">
      
      {/* Hero Section / Our Story */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-surface-container-high rounded-full text-primary font-bold text-xs uppercase tracking-widest shadow-sm">
            <span className="material-symbols-outlined text-[18px] icon-fill">pets</span>
            Our Story
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-on-surface tracking-tight leading-tight">
            Where Clinical Excellence Meets <span className="text-primary">Compassion.</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            VET PET CLINIC began with a simple belief: pets are family, and they deserve healthcare that reflects that bond. We are a dedicated team of animal lovers committed to providing premium, stress-free healthcare for your furry family members. Every wagging tail and gentle purr reminds us why we do what we do.
          </p>
        </div>
        <div className="flex-1 w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-[0_20px_40px_rgba(11,28,48,0.08)] relative border border-outline-variant/10 group">
          <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
          <img 
            alt="Golden retriever with a caring veterinarian" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=1200&auto=format&fit=crop"
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-surface-container-low py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-on-surface tracking-tight">Mission & Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* Mission */}
            <div className="bg-surface-container-lowest rounded-[2.5rem] p-10 md:p-12 shadow-[0_12px_32px_rgba(11,28,48,0.06)] border border-outline-variant/10 flex flex-col justify-center relative overflow-hidden group hover:-translate-y-2 transition-all duration-500">
              <div className="absolute -right-12 -top-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500 pointer-events-none"></div>
              <span className="material-symbols-outlined text-primary text-5xl mb-6 icon-fill relative z-10 group-hover:scale-110 transition-transform duration-500">favorite</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-on-surface mb-4 relative z-10">Our Mission</h3>
              <p className="text-lg text-on-surface-variant leading-relaxed relative z-10">
                To deliver compassionate, state-of-the-art veterinary care that enhances the lives of pets and provides peace of mind to the families who love them. We treat every patient as our own.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-secondary/5 rounded-[2.5rem] p-10 md:p-12 shadow-[0_12px_32px_rgba(11,28,48,0.06)] border border-secondary/20 flex flex-col justify-center relative overflow-hidden group hover:-translate-y-2 transition-all duration-500">
              <div className="absolute -left-12 -bottom-12 w-64 h-64 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-colors duration-500 pointer-events-none"></div>
              <span className="material-symbols-outlined text-secondary text-5xl mb-6 icon-fill relative z-10 group-hover:scale-110 transition-transform duration-500">visibility</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-on-surface mb-4 relative z-10">Our Vision</h3>
              <p className="text-lg text-on-surface-variant leading-relaxed relative z-10">
                To be the most trusted and advanced pet healthcare destination, setting the gold standard for clinical excellence and client experience, fostering a community of healthy, happy pets.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold text-on-surface mb-6 tracking-tight">What Makes Us Different</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Beyond standard care, we provide unmatched accessibility, advanced technology, and convenience to ensure your pet is always protected and comfortable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: 'acute', title: '24/7 Emergency Care', desc: "Medical emergencies don't wait for office hours. Our fully equipped facility and critical care staff are available around the clock.", color: 'tertiary' },
              { icon: 'local_shipping', title: 'Doorstep Support', desc: "For routine checkups or anxious pets, we bring our expertise to your living room. Minimizing stress while maximizing convenience.", color: 'primary' },
              { icon: 'biotech', title: 'Advanced Diagnostics', desc: "Our in-house laboratory and state-of-the-art imaging equipment allow for rapid, accurate diagnoses to start treatment sooner.", color: 'secondary' },
              { icon: 'mood', title: 'Fear-Free Certified', desc: "We utilize gentle handling techniques and a calming environment to reduce fear, anxiety, and stress for your pet during every visit.", color: 'primary' },
              { icon: 'medical_services', title: 'Specialized Surgery', desc: "From routine spays to complex soft-tissue surgeries, our experienced surgeons provide the highest standard of surgical care.", color: 'tertiary' },
              { icon: 'monitor_heart', title: 'Comprehensive Wellness', desc: "Preventative care is key. We offer customized vaccination plans, nutritional counseling, and regular health screenings.", color: 'secondary' }
            ].map((item, idx) => (
              <div key={idx} className="group relative bg-surface-container-lowest p-8 rounded-[2rem] overflow-hidden shadow-[0_4px_20px_rgba(11,28,48,0.04)] hover:shadow-[0_12px_32px_rgba(11,28,48,0.08)] hover:-translate-y-2 transition-all duration-300 border border-outline-variant/10">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-${item.color}/5 rounded-bl-full -z-10 group-hover:scale-125 transition-transform duration-500`}></div>
                <div className={`w-16 h-16 rounded-2xl bg-${item.color}/10 text-${item.color} flex items-center justify-center mb-6`}>
                  <span className="material-symbols-outlined text-3xl icon-fill">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-on-surface mb-3">{item.title}</h3>
                <p className="text-base text-on-surface-variant leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="bg-surface-container-highest py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-on-surface mb-4 tracking-tight">Our Core Values</h2>
            <p className="text-lg text-on-surface-variant">The principles guiding every interaction.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { icon: 'volunteer_activism', title: 'Compassion', desc: 'Empathy in every touch.', color: 'tertiary' },
              { icon: 'verified_user', title: 'Trust', desc: 'Building lasting bonds.', color: 'primary' },
              { icon: 'favorite_border', title: 'Care', desc: 'Excellence in treatment.', color: 'secondary' },
              { icon: 'balance', title: 'Responsibility', desc: 'Accountable to our community.', color: 'on-surface-variant' }
            ].map((value, idx) => (
              <div key={idx} className="bg-surface-container-lowest p-6 md:p-8 rounded-[2rem] text-center border border-outline-variant/10 shadow-[0_4px_20px_rgba(11,28,48,0.04)] hover:-translate-y-2 transition-transform duration-300">
                <span className={`material-symbols-outlined text-5xl text-${value.color} mb-4 icon-fill`}>{value.icon}</span>
                <h4 className="text-xl font-bold text-on-surface mb-2">{value.title}</h4>
                <p className="text-sm md:text-base text-on-surface-variant">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-on-surface mb-6 tracking-tight">Meet Our Dedicated Team</h2>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Experienced professionals who treat your pets like their own.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Team Member 1 */}
            <div className="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-[0_12px_32px_rgba(11,28,48,0.06)] border border-outline-variant/10 group hover:-translate-y-2 transition-all duration-300">
              <div className="w-full aspect-[4/5] relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop" alt="Dr. Jane Doe" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 text-center bg-surface-container-lowest relative z-10">
                <h3 className="text-xl font-extrabold text-on-surface mb-1">Dr. Jane Doe</h3>
                <p className="text-sm font-bold text-primary mb-4 uppercase tracking-wider">Lead Veterinarian</p>
                <p className="text-sm text-on-surface-variant leading-relaxed">15+ years experience in small animal medicine and surgery.</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-[0_12px_32px_rgba(11,28,48,0.06)] border border-outline-variant/10 group hover:-translate-y-2 transition-all duration-300">
              <div className="w-full aspect-[4/5] relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop" alt="Dr. John Smith" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 text-center bg-surface-container-lowest relative z-10">
                <h3 className="text-xl font-extrabold text-on-surface mb-1">Dr. John Smith</h3>
                <p className="text-sm font-bold text-primary mb-4 uppercase tracking-wider">Surgeon</p>
                <p className="text-sm text-on-surface-variant leading-relaxed">Specializes in orthopedic and soft tissue surgical procedures.</p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-[0_12px_32px_rgba(11,28,48,0.06)] border border-outline-variant/10 group hover:-translate-y-2 transition-all duration-300">
              <div className="w-full aspect-[4/5] relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1594824432258-0044682054fb?q=80&w=600&auto=format&fit=crop" alt="Sarah Lee" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 text-center bg-surface-container-lowest relative z-10">
                <h3 className="text-xl font-extrabold text-on-surface mb-1">Sarah Lee</h3>
                <p className="text-sm font-bold text-primary mb-4 uppercase tracking-wider">Head Vet Tech</p>
                <p className="text-sm text-on-surface-variant leading-relaxed">Passionate about patient care and fear-free handling techniques.</p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-[0_12px_32px_rgba(11,28,48,0.06)] border border-outline-variant/10 group hover:-translate-y-2 transition-all duration-300">
              <div className="w-full aspect-[4/5] relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop" alt="Mike Brown" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 text-center bg-surface-container-lowest relative z-10">
                <h3 className="text-xl font-extrabold text-on-surface mb-1">Mike Brown</h3>
                <p className="text-sm font-bold text-primary mb-4 uppercase tracking-wider">Clinic Manager</p>
                <p className="text-sm text-on-surface-variant leading-relaxed">Ensuring smooth operations and excellent client experiences daily.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Clinic Walkthrough */}
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-on-surface mb-6 tracking-tight">Take a Look Inside</h2>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Our modern facility is designed for comfort, safety, and advanced medical care.
            </p>
          </div>
          <div className="w-full h-[400px] md:h-[600px] rounded-[2.5rem] overflow-hidden shadow-[0_20px_40px_rgba(11,28,48,0.1)]">
            <img 
              alt="Clean, modern veterinary examination room" 
              className="w-full h-full object-cover" 
              src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=1920&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center bg-primary/5 rounded-[3rem] p-10 md:p-16 border border-primary/10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-on-surface mb-6 tracking-tight">Ready to Experience the Difference?</h2>
          <p className="text-lg md:text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto leading-relaxed">
            Schedule a visit today and let us welcome you to the VET PET CLINIC family.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button className="w-full sm:w-auto bg-primary text-white px-10 py-5 rounded-full font-bold hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 shadow-[0_8px_30px_rgba(32,94,155,0.3)] hover:scale-105 flex items-center justify-center gap-3 text-lg">
              <span className="material-symbols-outlined icon-fill">calendar_month</span>
              Book Appointment
            </button>
            <button className="w-full sm:w-auto bg-white border-2 border-primary text-primary px-10 py-5 rounded-full font-bold hover:bg-surface-container-low transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 text-lg shadow-sm">
              <span className="material-symbols-outlined icon-fill">call</span>
              Contact Clinic
            </button>
          </div>
        </div>
      </section>
      
    </main>
  );
}