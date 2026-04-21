import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="bg-surface text-on-surface font-body min-h-screen flex flex-col selection:bg-tertiary-container selection:text-on-tertiary-container">
      <Header />

      <main className="grow pt-20">
        {/* Hero Section */}
        <section className="relative h-125 md:h-153.5 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Modern Architecture" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD42BoWA9JKWqRBT09zODylwFAVRtmqhqhsTqaLlLkp9hO9oF2nHS0IzBDor8zjd_2xAehBqqRFTJP7UBo-Jk9_lmF-zBXTwzCmnzASUH3kCot7x0_OJ2Hr23ebxWDC1AeNVqTggiifNVqZcWnArWG2caoKvUKS8123gDvTBainEcFpzlxPoRlmK5UebSb-rEcxRVA-OVpdvqoiZrOWHDEc-MeS-aYKwX_PvGrGeVTwPuiZOwZOLji1i8DPE6Noqd4A7RWy4nh0i3r6" 
            />
            <div className="absolute inset-0 bg-primary/60 md:bg-primary/40"></div>
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 font-headline">Get in Touch</h1>
            <p className="text-sm md:text-xl font-body max-w-2xl mx-auto opacity-90 uppercase tracking-[0.2em] text-tertiary-fixed font-bold">Excellence in every interaction</p>
          </div>
        </section>

        {/* Direct Channels */}
        <section className="max-w-480 mx-auto px-6 md:px-12 -mt-16 md:-mt-24 relative z-20 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* WhatsApp */}
            <div className="bg-surface-container-lowest p-10 shadow-lg md:shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group rounded-xl">
              <div className="text-tertiary mb-6">
                <span className="material-symbols-outlined text-4xl">chat_bubble</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-headline text-primary">Priority WhatsApp</h3>
              <p className="text-secondary mb-8 font-body leading-relaxed">Direct concierge access for immediate listing inquiries and property viewings.</p>
              <a href="#" className="inline-flex items-center text-tertiary font-bold tracking-wider uppercase text-sm group-hover:gap-3 transition-all font-label">
                Chat Now <span className="material-symbols-outlined ml-2 text-lg">arrow_forward</span>
              </a>
            </div>

            {/* Locations */}
            <div className="bg-surface-container-lowest p-10 shadow-lg md:shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group rounded-xl">
              <div className="text-tertiary mb-6">
                <span className="material-symbols-outlined text-4xl">location_on</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-headline text-primary">Office Locations</h3>
              <p className="text-secondary mb-8 font-body leading-relaxed">Strategically located in Ikoyi, Lagos and Maitama, Abuja for your convenience.</p>
              <span className="inline-flex items-center text-tertiary font-bold tracking-wider uppercase text-sm font-label">
                Lagos & Abuja
              </span>
            </div>

            {/* Correspondence */}
            <div className="bg-surface-container-lowest p-10 shadow-lg md:shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group rounded-xl">
              <div className="text-tertiary mb-6">
                <span className="material-symbols-outlined text-4xl">mail</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-headline text-primary">Correspondence</h3>
              <p className="text-secondary mb-8 font-body leading-relaxed">For detailed proposals, investment inquiries, and official documentation.</p>
              <a href="mailto:concierge@curatedestate.com" className="inline-flex items-center text-tertiary font-bold tracking-wider uppercase text-sm group-hover:gap-3 transition-all font-label">
                Email Us <span className="material-symbols-outlined ml-2 text-lg">arrow_forward</span>
              </a>
            </div>
          </div>
        </section>

        {/* Digital Inquiry Form */}
        <section className="max-w-480 mx-auto px-6 md:px-12 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight font-headline">Begin Your Bespoke Journey</h2>
              <p className="text-lg text-secondary font-body max-w-lg leading-relaxed">Whether you are seeking a generational estate or a strategic commercial asset, our advisors are here to facilitate your acquisition with absolute discretion.</p>
              
              <div className="pt-8 space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 shrink-0 rounded-full bg-surface-container-high flex items-center justify-center text-tertiary">
                    <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg font-headline">Certified Advisors</h4>
                    <p className="text-secondary mt-1 font-body">Expert guidance from Nigeria's top-tier consultants.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 shrink-0 rounded-full bg-surface-container-high flex items-center justify-center text-tertiary">
                    <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg font-headline">Confidential Handling</h4>
                    <p className="text-secondary mt-1 font-body">Your data is secured with banking-grade encryption.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low p-8 md:p-12 rounded-2xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-secondary font-label">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-surface-container-lowest border-none py-4 px-5 focus:ring-2 focus:ring-tertiary-container rounded-lg font-body shadow-sm placeholder:text-outline-variant" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-secondary font-label">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full bg-surface-container-lowest border-none py-4 px-5 focus:ring-2 focus:ring-tertiary-container rounded-lg font-body shadow-sm placeholder:text-outline-variant" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-secondary font-label">Phone Number</label>
                    <input type="tel" placeholder="+234 ..." className="w-full bg-surface-container-lowest border-none py-4 px-5 focus:ring-2 focus:ring-tertiary-container rounded-lg font-body shadow-sm placeholder:text-outline-variant" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-secondary font-label">Inquiry Type</label>
                    <select className="w-full bg-surface-container-lowest border-none py-4 px-5 focus:ring-2 focus:ring-tertiary-container rounded-lg appearance-none font-body shadow-sm text-primary">
                      <option>Residential Acquisition</option>
                      <option>Commercial Leasing</option>
                      <option>Investment Portfolio</option>
                      <option>Property Management</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-secondary font-label">Message</label>
                  <textarea rows={5} placeholder="Tell us about your requirements..." className="w-full bg-surface-container-lowest border-none py-4 px-5 focus:ring-2 focus:ring-tertiary-container rounded-lg font-body shadow-sm placeholder:text-outline-variant resize-none"></textarea>
                </div>
                <button type="button" className="w-full bg-tertiary-container text-on-tertiary-container font-bold py-5 px-8 rounded-lg uppercase tracking-widest hover:brightness-105 transition-all active:scale-[0.98] mt-4 shadow-lg">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="w-full h-100 md:h-125 grayscale brightness-90 relative">
          <div className="absolute inset-0 bg-surface-container-highest">
            <img 
              alt="Map background" 
              className="w-full h-full object-cover opacity-60" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvDh--fGhEFdiZLyusUKspMb5Vdbmi_RXZjb85_nCP6cU0CzQ8PWqCwd39WU34_SIXBwudGZOU214A2e7aETQprb6XkaSM_RsLWLBAbIPRYjdJLgmxxjLb_gwxSugZbder4QMIFz16OmoWsgJO8_ZAUcikp6nV82c0S0y5T8TrjE8sW9QhOlIisUChYhbumqxVZ7yO6iYKf2P_X4SJUVEHCcfQ2-zsn1x1KRliZILWImUbzgw7C2lixiS8Vl-iAGgCtcfQpaOtyDyD" 
            />
          </div>
          {/* Interactive Map Pin Decor */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="bg-primary text-white p-4 rounded-full shadow-2xl">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
            </div>
            <div className="bg-white px-4 py-2 mt-3 rounded-lg shadow-xl text-xs font-bold uppercase tracking-widest whitespace-nowrap text-primary font-label">
              The Curated Estate HQ
            </div>
          </div>
        </section>

        {/* Office Details Grid */}
        <section className="max-w-480 mx-auto px-6 md:px-12 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <div className="space-y-6">
              <h4 className="text-tertiary font-bold tracking-widest uppercase text-xs font-label">Lagos Headquarters</h4>
              <p className="text-3xl md:text-4xl font-headline text-primary leading-tight">12 Glover Road, Ikoyi<br/>Lagos, Nigeria</p>
              <div className="flex flex-col gap-3 pt-6 font-body text-secondary font-medium">
                <span className="flex items-center gap-4"><span className="material-symbols-outlined text-tertiary">call</span> +234 (0) 800 CURATED</span>
                <span className="flex items-center gap-4"><span className="material-symbols-outlined text-tertiary">schedule</span> Mon - Fri: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
            <div className="space-y-6">
              <h4 className="text-tertiary font-bold tracking-widest uppercase text-xs font-label">Abuja Regional Office</h4>
              <p className="text-3xl md:text-4xl font-headline text-primary leading-tight">Plot 452, Gana Street, Maitama<br/>Abuja, FCT</p>
              <div className="flex flex-col gap-3 pt-6 font-body text-secondary font-medium">
                <span className="flex items-center gap-4"><span className="material-symbols-outlined text-tertiary">call</span> +234 (0) 900 CURATED</span>
                <span className="flex items-center gap-4"><span className="material-symbols-outlined text-tertiary">schedule</span> Mon - Fri: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}