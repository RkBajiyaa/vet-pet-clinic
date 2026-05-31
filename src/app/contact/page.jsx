export const metadata = {
  title: 'Contact Us | VET PET CLINIC Mahapura',
  description: 'Expert veterinary care is just a message away. Reach out for appointments, inquiries, or 24/7 emergency assistance in Jaipur.',
};

export default function ContactPage() {
  return (
    <main className="flex-grow w-full">
      
      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto flex flex-col gap-4 px-4 md:px-8 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight">Let's Connect</h1>
        <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed">
          Expert care is just a message away. Reach out for appointments, inquiries, or emergency assistance.
        </p>
      </section>

      {/* Bento Layout Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Contact Info Card */}
          <div className="lg:col-span-5 flex flex-col h-full">
            <div className="bg-surface-container-lowest rounded-[2.5rem] p-8 md:p-12 shadow-[0_12px_32px_rgba(11,28,48,0.06)] border border-outline-variant/10 relative overflow-hidden h-full flex flex-col transition-all duration-500 hover:shadow-[0_20px_40px_rgba(11,28,48,0.1)] group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-700"></div>
              
              <h2 className="text-3xl font-extrabold text-on-surface mb-8">Clinic Details</h2>
              
              <ul className="space-y-8 flex-grow">
                <li className="flex items-start gap-5 group/item">
                  <div className="w-12 h-12 bg-primary/10 rounded-full text-primary flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-1">Location</p>
                    <p className="text-base md:text-lg text-on-surface font-medium leading-relaxed">
                      VET PET CLINIC, Mahapura<br/>
                      Jaipur, Rajasthan 302026
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start gap-5 group/item">
                  <div className="w-12 h-12 bg-primary/10 rounded-full text-primary flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined">phone_in_talk</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-1">Direct Lines</p>
                    <p className="text-base md:text-lg text-primary font-extrabold hover:underline cursor-pointer">7240549293</p>
                    <p className="text-base md:text-lg text-primary font-extrabold hover:underline cursor-pointer">8764002844</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-5 group/item">
                  <div className="w-12 h-12 bg-tertiary/10 rounded-full text-tertiary flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined icon-fill">schedule</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-1">Operating Hours</p>
                    <p className="text-base md:text-lg text-tertiary font-extrabold">Open 24/7 for Emergencies</p>
                    <p className="text-sm text-on-surface-variant font-medium mt-1">Routine care: 9 AM - 8 PM</p>
                  </div>
                </li>
              </ul>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full">
                <button className="flex-1 bg-[#25D366] text-white py-4 px-6 rounded-full font-bold flex justify-center items-center gap-2 hover:bg-[#20bd5a] transition-all duration-300 shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:scale-105">
                  <span className="material-symbols-outlined">forum</span>
                  WhatsApp Us
                </button>
                <button className="flex-1 bg-surface-container text-on-surface py-4 px-6 rounded-full font-bold flex justify-center items-center gap-2 hover:bg-surface-container-high transition-all duration-300 shadow-sm hover:scale-105">
                  <span className="material-symbols-outlined">directions</span>
                  Get Directions
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Conversion Form */}
          <div className="lg:col-span-7">
            <div className="bg-surface-container-lowest rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_40px_rgba(11,28,48,0.08)] border border-outline-variant/10">
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface mb-3 tracking-tight">Book an Appointment</h2>
                <p className="text-lg text-on-surface-variant">Fill out the form below and our team will confirm your visit shortly.</p>
              </div>

              <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-on-surface ml-1" htmlFor="ownerName">Owner Name</label>
                    <input 
                      className="w-full bg-surface border border-outline-variant/50 rounded-2xl px-5 py-4 text-base text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary focus:outline-none transition-shadow placeholder:text-outline" 
                      id="ownerName" 
                      name="ownerName" 
                      placeholder="Jane Doe" 
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-on-surface ml-1" htmlFor="petName">Pet Name</label>
                    <input 
                      className="w-full bg-surface border border-outline-variant/50 rounded-2xl px-5 py-4 text-base text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary focus:outline-none transition-shadow placeholder:text-outline" 
                      id="petName" 
                      name="petName" 
                      placeholder="Buddy" 
                      type="text"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-on-surface ml-1" htmlFor="phone">Phone Number</label>
                    <input 
                      className="w-full bg-surface border border-outline-variant/50 rounded-2xl px-5 py-4 text-base text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary focus:outline-none transition-shadow placeholder:text-outline" 
                      id="phone" 
                      name="phone" 
                      placeholder="+91 XXXXX XXXXX" 
                      type="tel"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-on-surface ml-1" htmlFor="email">Email Address</label>
                    <input 
                      className="w-full bg-surface border border-outline-variant/50 rounded-2xl px-5 py-4 text-base text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary focus:outline-none transition-shadow placeholder:text-outline" 
                      id="email" 
                      name="email" 
                      placeholder="jane@example.com" 
                      type="email"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-on-surface ml-1" htmlFor="service">Service Required</label>
                  <div className="relative">
                    <select 
                      className="w-full bg-surface border border-outline-variant/50 rounded-2xl px-5 py-4 text-base text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary focus:outline-none transition-shadow appearance-none cursor-pointer" 
                      id="service" 
                      name="service"
                      defaultValue=""
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="consultation">General Consultation</option>
                      <option value="vaccination">Vaccination</option>
                      <option value="grooming">Grooming</option>
                      <option value="surgery">Surgery / Specialist</option>
                      <option value="emergency">Emergency Care</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">
                      expand_more
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-on-surface ml-1" htmlFor="message">Message (Optional)</label>
                  <textarea 
                    className="w-full bg-surface border border-outline-variant/50 rounded-2xl px-5 py-4 text-base text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary focus:outline-none transition-shadow resize-none placeholder:text-outline" 
                    id="message" 
                    name="message" 
                    placeholder="Briefly describe your pet's symptoms or requirements..." 
                    rows="4"
                  ></textarea>
                </div>

                <button 
                  className="w-full mt-6 bg-tertiary text-white py-4 rounded-full font-bold flex justify-center items-center gap-3 hover:bg-tertiary-container hover:text-on-tertiary-container transition-all duration-300 shadow-[0_8px_30px_rgba(130,81,0,0.3)] hover:scale-[1.02] text-lg" 
                  type="button"
                >
                  Request Appointment
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width Map */}
      <div className="w-full h-[400px] md:h-[500px] relative">
        <img 
          alt="Location Map Placeholder" 
          className="w-full h-full object-cover" 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1920&auto=format&fit=crop"
        />
        <div className="absolute inset-0 bg-primary/20 pointer-events-none mix-blend-multiply"></div>
        {/* Floating Map Pin Box */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface-container-lowest p-6 rounded-3xl shadow-[0_20px_40px_rgba(11,28,48,0.15)] flex flex-col items-center text-center animate-bounce duration-1000">
            <span className="material-symbols-outlined icon-fill text-error text-5xl mb-2">location_on</span>
            <h3 className="font-extrabold text-on-surface">VET PET CLINIC</h3>
            <p className="text-sm font-medium text-on-surface-variant">Mahapura, Jaipur</p>
        </div>
      </div>
    </main>
  );
}