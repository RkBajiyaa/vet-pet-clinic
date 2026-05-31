import './globals.css';

export const metadata = {
  title: 'VET PET CLINIC - Mahapura, Jaipur',
  description: '24/7 Trusted Pet Care in Jaipur. Providing compassionate, expert veterinary services.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      
      <body className="antialiased selection:bg-primary-container selection:text-on-primary-container bg-surface text-on-surface font-sans">
        
        {/* TopNavBar Component */}
        <header className="docked full-width top-0 sticky bg-surface/90 backdrop-blur-md shadow-sm z-50 flex justify-between items-center w-full px-4 md:px-8 py-4 max-w-7xl mx-auto">
          <div className="text-xl md:text-2xl font-extrabold text-primary tracking-tight">VET PET CLINIC</div>
          <nav className="hidden md:flex gap-8">
            <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="/">Home</a>
            <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="/services">Services</a>
            <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="/contact">Contact</a>
            <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="/about">About Us</a>
          </nav>
          <div className="flex gap-4">
            <button className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full bg-tertiary-container text-on-tertiary-container text-sm font-bold hover:opacity-90 transition-opacity">
              <span className="material-symbols-outlined icon-fill">emergency</span>
              Emergency 24/7
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-on-primary text-sm font-bold hover:bg-primary/90 transition-colors">
              <span className="material-symbols-outlined">call</span>
              Call Now
            </button>
          </div>
        </header>

        {/* Page Content injected here */}
        {children}

        {/* Sticky Emergency Banner */}
        <div className="sticky bottom-0 left-0 w-full bg-error text-on-error py-4 px-4 md:px-8 z-40 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined icon-fill text-3xl animate-pulse">emergency</span>
            <span className="text-lg md:text-xl font-bold">Need Immediate Pet Assistance?</span>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-2.5 bg-on-error text-error rounded-full font-bold hover:bg-surface transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined">call</span> Call Now
            </button>
            <button className="px-6 py-2.5 bg-transparent border-2 border-on-error text-on-error rounded-full font-bold hover:bg-on-error/10 transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined">chat</span> WhatsApp
            </button>
          </div>
        </div>

        {/* Footer Component */}
        <footer className="bg-surface-container-highest mt-24 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-4 md:px-8 max-w-7xl mx-auto mb-12">
            <div>
              <div className="text-2xl font-bold text-primary mb-4">VET PET CLINIC</div>
              <p className="text-base text-on-surface-variant mb-6 leading-relaxed">Your trusted partner in pet health and happiness. Providing compassionate care 24/7.</p>
              <div className="flex gap-4">
                <a className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-primary-container transition-colors" href="#">
                  <span className="material-symbols-outlined">share</span>
                </a>
                <a className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-primary-container transition-colors" href="#">
                  <span className="material-symbols-outlined">photo_camera</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-on-surface mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li><a className="text-on-surface-variant hover:text-primary transition-colors text-base flex items-center gap-2" href="#"><span className="material-symbols-outlined text-base">chevron_right</span> Home</a></li>
                <li><a className="text-on-surface-variant hover:text-primary transition-colors text-base flex items-center gap-2" href="#"><span className="material-symbols-outlined text-base">chevron_right</span> About Us</a></li>
                <li><a className="text-on-surface-variant hover:text-primary transition-colors text-base flex items-center gap-2" href="#"><span className="material-symbols-outlined text-base">chevron_right</span> Services</a></li>
                <li><a className="text-on-surface-variant hover:text-primary transition-colors text-base flex items-center gap-2" href="#"><span className="material-symbols-outlined text-base">chevron_right</span> Gallery</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-on-surface mb-6">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">location_on</span>
                  <span className="text-on-surface-variant text-base">123 Pet Care Avenue,<br/>Mahapura, Jaipur, Rajasthan 302026</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary shrink-0">call</span>
                  <a className="text-on-surface-variant text-base hover:text-primary" href="tel:+91XXXXXXXXXX">+91 XXXXXXXXXX</a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary shrink-0">mail</span>
                  <a className="text-on-surface-variant text-base hover:text-primary" href="mailto:info@vetpetclinic.com">info@vetpetclinic.com</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-on-surface mb-6">Working Hours</h3>
              <div className="bg-surface-container p-6 rounded-2xl space-y-4">
                <div className="flex justify-between items-center text-base text-on-surface-variant border-b border-outline-variant/30 pb-3">
                  <span>Mon - Sun</span>
                  <span className="font-bold text-primary">24 Hours Open</span>
                </div>
                <div className="flex justify-between items-center text-base text-on-surface-variant border-b border-outline-variant/30 pb-3">
                  <span>Emergency</span>
                  <span className="font-bold text-error">Available 24/7</span>
                </div>
                <div className="flex justify-between items-center text-base text-on-surface-variant">
                  <span>Doorstep Service</span>
                  <span className="font-bold">9 AM - 8 PM</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-outline-variant/30 pt-8 px-4 md:px-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-on-surface-variant">© 2026 VET PET CLINIC Mahapura. All rights reserved.</p>
            <div className="flex gap-6">
              <a className="text-sm text-on-surface-variant hover:text-primary" href="#">Privacy Policy</a>
              <a className="text-sm text-on-surface-variant hover:text-primary" href="#">Terms of Service</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}