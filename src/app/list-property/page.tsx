import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ListPropertyPage() {
  return (
    <div className="bg-surface text-on-surface font-body min-h-screen flex flex-col">
      <Header />

      <main className="grow pt-32">
        {/* Hero Section */}
        <section className="relative pb-20 md:pb-40 overflow-hidden">
          <div className="max-w-480 mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-12">
            <div className="z-10">
              <span className="inline-block py-1 px-3 bg-tertiary-container/10 text-tertiary font-bold text-xs tracking-[0.2em] mb-6 rounded-lg">FOR DISCERNING LANDLORDS</span>
              <h1 className="font-headline text-5xl md:text-7xl text-primary leading-[1.1] mb-8 tracking-tighter">Maximise Your Property's Potential</h1>
              <p className="text-xl text-secondary max-w-xl mb-12 leading-relaxed">We curate prestige living experiences. Partner with the digital curator of Nigeria's finest real estate and unlock the true value of your investment through professional, bespoke management.</p>
              <div className="flex flex-wrap gap-6">
                <a href="#listing-form" className="bg-tertiary-container text-on-tertiary-container px-8 py-4 font-semibold rounded-md transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-tertiary-container/20">List Your Property Now</a>
                <a href="#services" className="border-b-2 border-tertiary text-tertiary font-bold px-4 py-4 hover:bg-tertiary/5 transition-all">Explore Services</a>
              </div>
            </div>
            
            <div className="relative h-125 md:h-175 w-full">
              <div className="absolute inset-0 bg-surface-container-low rounded-xl overflow-hidden">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5jSh6Kl458nvLXCWi38OtlfwX6nX_JHQQZtAb1Jwz9wNbZQlHSNdBLdL3Cp65--TSXPKw-M_KcNF1hCQefy-Umg8vaqs39VULF2NqYrIJ_ZIPGSjJB6LyvG9fbeu7xbmSnRGK0hbRhwfRtCKHsSOCTMv5lK6J7VmnH7GWn5ntOgL5B6Xx6eYpCBmDoWwF3lRjofdhdIapfaIZ8iH_oGD3263k7ZflkbK-vGe-d2ajoDWD9PEL9ryuSUow_WtRCO7Wmlodjfd0ki9Z" alt="Luxury contemporary apartment" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-xl p-8 rounded-xl shadow-[0_32px_64px_-15px_rgba(0,0,0,0.12)] max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-4">
                  <span className="material-symbols-outlined text-tertiary scale-125">trending_up</span>
                  <span className="font-bold text-primary font-headline">Yield Optimized</span>
                </div>
                <p className="text-sm text-secondary">Our landlords see an average of 18% higher annual returns compared to local market benchmarks.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 bg-surface-container-low">
          <div className="max-w-480 mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <h2 className="font-headline text-4xl md:text-5xl text-primary mb-6">Our Digital Curator Services</h2>
                <p className="text-secondary text-lg">From long-term stability to high-yield short-term rentals, we provide the architectural precision your investment deserves.</p>
              </div>
              <div className="h-0.5 bg-outline-variant/30 grow mx-12 hidden md:block mb-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Property Management */}
              <div className="bg-surface-container-lowest p-10 rounded-xl group hover:bg-surface-bright transition-all duration-500">
                <div className="w-16 h-16 bg-primary-container rounded-lg flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-tertiary-fixed scale-150" style={{ fontVariationSettings: "'FILL' 1" }}>apartment</span>
                </div>
                <h3 className="font-headline text-2xl text-primary mb-4">Property Management</h3>
                <p className="text-secondary mb-8 leading-relaxed">Full-cycle maintenance, tenant relations, and financial reporting. We treat your property as our own masterpiece.</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-tertiary">check_circle</span> 24/7 Facility Response</li>
                  <li className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-tertiary">check_circle</span> Legal & Tax Compliance</li>
                  <li className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-tertiary">check_circle</span> Quarterly Value Audits</li>
                </ul>
              </div>

              {/* Shortlet Management */}
              <div className="bg-surface-container-lowest p-10 rounded-xl group hover:bg-surface-bright transition-all duration-500">
                <div className="w-16 h-16 bg-primary-container rounded-lg flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-tertiary-fixed scale-150" style={{ fontVariationSettings: "'FILL' 1" }}>hotel</span>
                </div>
                <h3 className="font-headline text-2xl text-primary mb-4">Shortlet Management</h3>
                <p className="text-secondary mb-8 leading-relaxed">Maximise revenue with luxury short-term rentals. We manage the experience from guest vetting to bespoke concierge.</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-tertiary">check_circle</span> Professional Photography</li>
                  <li className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-tertiary">check_circle</span> Dynamic Pricing Engine</li>
                  <li className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-tertiary">check_circle</span> Luxury Linen & Housekeeping</li>
                </ul>
              </div>

              {/* Professional Letting */}
              <div className="bg-surface-container-lowest p-10 rounded-xl group hover:bg-surface-bright transition-all duration-500">
                <div className="w-16 h-16 bg-primary-container rounded-lg flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-tertiary-fixed scale-150" style={{ fontVariationSettings: "'FILL' 1" }}>handshake</span>
                </div>
                <h3 className="font-headline text-2xl text-primary mb-4">Professional Letting</h3>
                <p className="text-secondary mb-8 leading-relaxed">Precision tenant matching. We find reliable occupants who respect the architectural integrity of your property.</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-tertiary">check_circle</span> Ultra-Strict Guest Vetting</li>
                  <li className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-tertiary">check_circle</span> Premium Marketing Access</li>
                  <li className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-tertiary">check_circle</span> Lease Optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Capture Form Section */}
        <section id="listing-form" className="py-32">
          <div className="max-w-480 mx-auto px-6 md:px-12">
            <div className="bg-primary text-white rounded-xl overflow-hidden flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center">
                <h2 className="font-headline text-4xl md:text-5xl mb-8 leading-tight">Ready to elevate your property's performance?</h2>
                <p className="text-secondary-fixed-dim text-lg mb-12">Our specialists are ready to provide a complimentary valuation and management proposal tailored to your property's unique DNA.</p>
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <span className="material-symbols-outlined text-tertiary scale-125">verified_user</span>
                    <div>
                      <h4 className="font-bold text-white">Secure & Confidential</h4>
                      <p className="text-sm text-secondary-fixed-dim/70">Your property details are handled with absolute discretion by our B2B team.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <span className="material-symbols-outlined text-tertiary scale-125">speed</span>
                    <div>
                      <h4 className="font-bold text-white">48-Hour Response</h4>
                      <p className="text-sm text-secondary-fixed-dim/70">Our curation team reviews all listings within two business days.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 bg-surface-container-highest p-12 md:p-20 text-primary">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold tracking-widest text-primary/60 uppercase">Full Name</label>
                      <input type="text" placeholder="e.g. Adebayo Smith" className="w-full bg-white border-none rounded-md px-4 py-4 focus:ring-2 focus:ring-tertiary-container placeholder:text-outline-variant" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold tracking-widest text-primary/60 uppercase">Phone Number</label>
                      <input type="tel" placeholder="+234..." className="w-full bg-white border-none rounded-md px-4 py-4 focus:ring-2 focus:ring-tertiary-container placeholder:text-outline-variant" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-widest text-primary/60 uppercase">Property Type</label>
                    <select className="w-full bg-white border-none rounded-md px-4 py-4 focus:ring-2 focus:ring-tertiary-container">
                      <option>Luxury Apartment</option>
                      <option>Detached Villa</option>
                      <option>Penthouse Suite</option>
                      <option>Commercial Space</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-widest text-primary/60 uppercase">Property Location</label>
                    <input type="text" placeholder="e.g. Ikoyi, Lagos" className="w-full bg-white border-none rounded-md px-4 py-4 focus:ring-2 focus:ring-tertiary-container placeholder:text-outline-variant" />
                  </div>
                  <button type="button" className="w-full bg-tertiary text-white py-5 font-bold rounded-md hover:bg-tertiary-container transition-all text-lg mt-4">
                    Submit Property Inquiry
                  </button>
                  <p className="text-center text-xs text-on-surface-variant/50 pt-4 italic">By clicking submit, you agree to our Terms of Service and Privacy Policy.</p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}