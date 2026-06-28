'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ ownerName: '', petName: '', phone: '', email: '', service: '', message: '' });
  const [errors, setErrors]   = useState({});
  const [sending, setSending] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.ownerName.trim()) e.ownerName = 'Please enter your name.';
    if (!form.petName.trim())   e.petName   = 'Please enter your pet\'s name.';
    if (!form.phone.trim())     e.phone     = 'Please enter your phone number.';
    if (!form.service)          e.service   = 'Please select a service.';
    return e;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSending(true);
    const text =
      `Hello VET PET CLINIC!%0A%0AI would like to book an appointment.%0A%0A` +
      `*Owner Name:* ${form.ownerName}%0A` +
      `*Pet Name:* ${form.petName}%0A` +
      `*Phone:* ${form.phone}%0A` +
      `*Email:* ${form.email || 'N/A'}%0A` +
      `*Service:* ${form.service}%0A` +
      `*Message:* ${form.message || 'N/A'}`;
    window.open(`https://wa.me/917240549293?text=${text}`, '_blank');
    setTimeout(() => setSending(false), 2000);
  };

  const inputCls = (field) =>
    `w-full bg-surface border rounded-xl md:rounded-2xl px-4 py-3 md:py-3.5 text-sm md:text-base text-on-surface
    focus:ring-2 focus:ring-primary/40 focus:border-primary focus:outline-none transition-all placeholder:text-outline-variant
    ${errors[field] ? 'border-error ring-1 ring-error/30' : 'border-outline-variant/50'}`;

  return (
    <main className="flex-grow w-full">

      {/* ── PAGE HEADER ── */}
      <section className="text-center max-w-3xl mx-auto px-4 md:px-8 py-10 md:py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight mb-4">
          Let&apos;s Connect
        </h1>
        <p className="text-sm md:text-xl text-on-surface-variant leading-relaxed">
          Expert care is just a message away. Reach out for appointments, inquiries, or emergency assistance.
        </p>
      </section>

      {/* ── BENTO GRID ── */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-12 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">

          {/* ── LEFT: Clinic Info ── */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl md:rounded-[2rem] p-6 md:p-10 shadow-[0_12px_40px_rgba(11,28,48,0.07)] border border-outline-variant/10 relative overflow-hidden group h-full flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />

              <h2 className="text-xl md:text-2xl font-extrabold text-on-surface mb-6">Clinic Details</h2>

              <ul className="space-y-6 flex-grow">
                {/* Location */}
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-lg">location_on</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">Location</p>
                    <p className="text-sm md:text-base text-on-surface font-medium leading-relaxed">
                      VET PET CLINIC, Mahapura<br />Jaipur, Rajasthan 302026
                    </p>
                  </div>
                </li>

                {/* Phone */}
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-lg">phone_in_talk</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">Direct Lines</p>
                    <a href="tel:07240549293" className="block text-sm md:text-base text-primary font-extrabold hover:underline">07240549293</a>
                    <a href="tel:08764002844" className="block text-sm md:text-base text-primary font-extrabold hover:underline">08764002844</a>
                  </div>
                </li>

                {/* Hours */}
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-tertiary/10 rounded-full text-tertiary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined icon-fill text-lg">schedule</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">Operating Hours</p>
                    <p className="text-sm md:text-base text-tertiary font-extrabold">Open 24/7 for Emergencies</p>
                    <p className="text-xs text-on-surface-variant mt-0.5">Routine care: 9 AM – 8 PM</p>
                  </div>
                </li>
              </ul>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/917240549293"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#25D366] text-white py-3 rounded-full font-bold flex justify-center items-center gap-2 hover:bg-[#20bd5a] transition-all hover:scale-105 shadow-[0_6px_20px_rgba(37,211,102,0.3)] text-sm"
                >
                  <span className="material-symbols-outlined text-base">forum</span> WhatsApp Us
                </a>
                <a
                  href="https://maps.app.goo.gl/oRmsU7r9UwrfwAWQ9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-surface-container text-on-surface py-3 rounded-full font-bold flex justify-center items-center gap-2 hover:bg-surface-container-high transition-all hover:scale-105 text-sm"
                >
                  <span className="material-symbols-outlined text-base">directions</span> Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Booking Form ── */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl md:rounded-[2rem] p-6 md:p-10 shadow-[0_20px_60px_rgba(11,28,48,0.08)] border border-outline-variant/10">
              <h2 className="text-xl md:text-3xl font-extrabold text-on-surface mb-1 tracking-tight">Book an Appointment</h2>
              <p className="text-xs md:text-sm text-on-surface-variant mb-7">Fill out the form — we'll confirm via WhatsApp shortly.</p>

              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-on-surface mb-1.5 block" htmlFor="ownerName">Owner Name <span className="text-error">*</span></label>
                    <input id="ownerName" name="ownerName" type="text" placeholder="Jane Doe" className={inputCls('ownerName')} value={form.ownerName} onChange={handleChange} />
                    {errors.ownerName && <p className="text-error text-xs mt-1">{errors.ownerName}</p>}
                  </div>
                  <div>
                    <label className="text-xs font-bold text-on-surface mb-1.5 block" htmlFor="petName">Pet Name <span className="text-error">*</span></label>
                    <input id="petName" name="petName" type="text" placeholder="Buddy" className={inputCls('petName')} value={form.petName} onChange={handleChange} />
                    {errors.petName && <p className="text-error text-xs mt-1">{errors.petName}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-on-surface mb-1.5 block" htmlFor="phone">Phone Number <span className="text-error">*</span></label>
                    <input id="phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" className={inputCls('phone')} value={form.phone} onChange={handleChange} />
                    {errors.phone && <p className="text-error text-xs mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="text-xs font-bold text-on-surface mb-1.5 block" htmlFor="email">Email <span className="text-on-surface-variant font-normal">(optional)</span></label>
                    <input id="email" name="email" type="email" placeholder="jane@example.com" className={inputCls('email')} value={form.email} onChange={handleChange} />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-on-surface mb-1.5 block" htmlFor="service">Service Required <span className="text-error">*</span></label>
                  <div className="relative">
                    <select id="service" name="service" className={`${inputCls('service')} appearance-none cursor-pointer`} value={form.service} onChange={handleChange} defaultValue="">
                      <option value="" disabled>Select a service…</option>
                      <option>General Consultation</option>
                      <option>Vaccination</option>
                      <option>Grooming</option>
                      <option>Surgery / Specialist</option>
                      <option>Emergency Care</option>
                      <option>Pet Boarding</option>
                      <option>Doorstep Service</option>
                      <option>Pet Training</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-lg">expand_more</span>
                  </div>
                  {errors.service && <p className="text-error text-xs mt-1">{errors.service}</p>}
                </div>

                <div>
                  <label className="text-xs font-bold text-on-surface mb-1.5 block" htmlFor="message">Message <span className="text-on-surface-variant font-normal">(optional)</span></label>
                  <textarea id="message" name="message" rows={3} placeholder="Describe your pet's symptoms or any special requirements…" className={inputCls('message')} value={form.message} onChange={handleChange} />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="mt-2 w-full py-4 rounded-full bg-tertiary text-white font-bold flex justify-center items-center gap-2
                    hover:bg-tertiary-container hover:text-on-tertiary-container transition-all duration-300
                    shadow-[0_8px_28px_rgba(130,81,0,0.3)] hover:scale-[1.02] text-sm md:text-base
                    disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                >
                  {sending
                    ? <><span className="material-symbols-outlined animate-spin text-base">progress_activity</span> Opening WhatsApp…</>
                    : <><span className="material-symbols-outlined text-base">chat</span> Request Appointment via WhatsApp</>
                  }
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── GOOGLE MAP ── */}
      <div className="w-full h-[280px] md:h-[480px] relative">
        <iframe
          title="VET PET CLINIC – Mahapura, Jaipur"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.3431602715!2d75.6983755!3d26.874495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4d4452093f1d%3A0x868b44edb7245d81!2sMahapura%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        {/* Floating Open-in-Maps button */}
        <a
          href="https://maps.app.goo.gl/oRmsU7r9UwrfwAWQ9"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white px-5 py-2.5 rounded-full shadow-[0_8px_30px_rgba(11,28,48,0.18)] flex items-center gap-2 font-bold text-primary hover:bg-primary hover:text-white transition-all text-sm"
        >
          <span className="material-symbols-outlined icon-fill text-error text-base">location_on</span>
          Open in Google Maps
        </a>
      </div>

    </main>
  );
}
