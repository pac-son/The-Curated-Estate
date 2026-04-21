import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ShortletsPage() {
  return (
    <div className="bg-surface text-on-surface font-body min-h-screen flex flex-col selection:bg-tertiary-container selection:text-on-tertiary-container">
      <Header />

      <main className="flex-grow pt-20">
        
        {/* Hero Section */}
        <section className="relative h-[700px] md:h-[921px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Luxury Villa" 
              className="w-full h-full object-cover brightness-75 scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfOvFOhsSdqwI_Htzn5pOcfUwshRLaFw7wzJ9zqpYRTvjs_UrFPjjiwU3LpQ9CH4P33wiG3ZGn2Fm_D0gHwomCFFc4rgi6JC9_akpzjxtBWakyIvWCEro0H5N1hCUjzwhY5escme15g8sKRY3ShCBgWC3WiPX1iGM49efP4Sn9cF0u-SsrifaiMFDE8moebIYARkUSWkSuo93meqOg6bkL3VksvXU8jIHNUvS0COBxoTq9_feOCSZkAxXyOyeMhHIlh04I4kl5vsqW" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-primary/60"></div>
          </div>
          <div className="relative z-10 w-full max-w-6xl px-6 flex flex-col items-center text-center mt-12">
            <h1 className="text-5xl md:text-6xl lg:text-8xl text-white font-bold mb-8 tracking-tighter leading-tight font-headline">
              Beyond Lodging.<br/>
              <span className="italic font-light">Curated Living.</span>
            </h1>
            
            {/* Search Widget */}
            <div className="w-full max-w-4xl bg-surface-container-lowest/90 backdrop-blur-2xl p-2 rounded-xl shadow-2xl flex flex-col md:flex-row items-stretch gap-1">
              <div className="flex-1 flex flex-col px-6 py-4 text-left border-b md:border-b-0 md:border-r border-outline-variant/30">
                <label className="text-[10px] uppercase tracking-widest font-bold text-tertiary mb-1 font-label">Destination</label>
                <input 
                  className="bg-transparent border-none p-0 focus:ring-0 text-on-surface font-semibold placeholder:text-outline/50 font-body" 
                  placeholder="Where in Nigeria?" 
                  type="text"
                />
              </div>
              <div className="flex-1 flex flex-col px-6 py-4 text-left border-b md:border-b-0 md:border-r border-outline-variant/30">
                <label className="text-[10px] uppercase tracking-widest font-bold text-tertiary mb-1 font-label">Check In - Out</label>
                <input 
                  className="bg-transparent border-none p-0 focus:ring-0 text-on-surface font-semibold placeholder:text-outline/50 font-body" 
                  placeholder="Select dates" 
                  type="text"
                />
              </div>
              <div className="flex-1 flex flex-col px-6 py-4 text-left border-b md:border-b-0 md:border-r border-outline-variant/30">
                <label className="text-[10px] uppercase tracking-widest font-bold text-tertiary mb-1 font-label">Guests</label>
                <select className="bg-transparent border-none p-0 focus:ring-0 text-on-surface font-semibold appearance-none font-body">
                  <option>2 Adults, 1 Room</option>
                  <option>4 Adults, 2 Rooms</option>
                  <option>Family (4+ Guests)</option>
                </select>
              </div>
              <button className="bg-primary m-2 px-10 py-4 text-white font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-primary-container transition-colors shadow-md active:scale-95">
                <span className="material-symbols-outlined text-xl">search</span>
                Search
              </button>
            </div>
          </div>
        </section>

        {/* Featured Collections */}
        <section className="py-24 px-6 md:px-12 bg-surface">
          <div className="max-w-[1920px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4 font-headline">Curated Collections</h2>
                <p className="text-secondary max-w-md font-medium font-body leading-relaxed">Bespoke stays tailored to the purpose of your journey.</p>
              </div>
              <div className="flex gap-4">
                <button className="p-4 rounded-full border border-outline-variant text-primary hover:bg-primary hover:text-white transition-all active:scale-90">
                  <span className="material-symbols-outlined">west</span>
                </button>
                <button className="p-4 rounded-full border border-outline-variant text-primary hover:bg-primary hover:text-white transition-all active:scale-90">
                  <span className="material-symbols-outlined">east</span>
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Collection 1 */}
              <Link href="/shortlets/business" className="group relative aspect-[4/5] overflow-hidden rounded-xl block">
                <img 
                  alt="Business Suites" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCV9LzfB-X4DRriMoRpHGTBREt5b3oVKZJwd-a0d9Ag3FEptmW83RxaPragFHcDx9nt6mbOln8qCybf4oHqoplxg1Whty2F998YEcpbIuVegubaY8n2nS7uhDXHPMN-FRes5jkezTXUZrhE0AnWDMNII-RvZybWhaM2FFzXwHuc5fFTGHVvC-tylS85ufnLSYQEEXw28WrfCwZKAdoFwtYY6Ris35eOe_AHREUZuEVGfKF2QZbGs0JmM5zJj91KxLttw-T0Pv85AzVg" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl text-white font-bold mb-2 font-headline">Business Suites</h3>
                  <p className="text-white/70 text-xs tracking-[0.2em] uppercase font-bold font-label">Precision & Comfort</p>
                </div>
              </Link>
              
              {/* Collection 2 */}
              <Link href="/shortlets/penthouses" className="group relative aspect-[4/5] overflow-hidden rounded-xl block">
                <img 
                  alt="Lagos Penthouses" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuArJCIiFjFBapKgb5-C_KCQ2OrzAgaULGsaH_UmvS8TQxqbzhOKytXOGfVrwXpATMCn2Sd7bVbq6HFQpEqdoUYYcoMC3AoHzn0ygGRNk54RZTKasjPAQrYFs_XiOogMEwQVaYtvBU0-cDO_TOnnfpvFeOM9WV7yfwLLbJ8wN75P-TYb8mkqZEMIh2xqLDg3xTCTis2WVS0NohlSXoGoa_4I-_5K5U55dSXSZYIqbuewW5rxu48JBwdDqQ-V9jZJdLa2tpL9b_4n-SR0" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl text-white font-bold mb-2 font-headline">Lagos Penthouses</h3>
                  <p className="text-white/70 text-xs tracking-[0.2em] uppercase font-bold font-label">Skyline Serenity</p>
                </div>
              </Link>
              
              {/* Collection 3 */}
              <Link href="/shortlets/getaways" className="group relative aspect-[4/5] overflow-hidden rounded-xl block">
                <img 
                  alt="Weekend Getaways" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD381ktn0SSq9Wb6CrgTh-p4cx0UXQyXfyscjB4Yr-L065WxiBsUYiqVhGd39s3AaCPBigOZym5r94KVJ9hQBNUJ8YjAVOMqE9qAi63BV0EDGkAZ0bbWtHTaSa_Uxr_btFyi9Blaxj0nnLQ5-lx1ze_SGIPN2jEbkSzydnfZYPmiq8kj6uq4VUpyHNwLo97yJGBAT1eInvYwIMWVCrhTeJRW25h7PkNpm4gBaYds-MVBg6Ax_gw0PdlRnC6gjzEHQH8p5o9KWo9RED2" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl text-white font-bold mb-2 font-headline">Weekend Getaways</h3>
                  <p className="text-white/70 text-xs tracking-[0.2em] uppercase font-bold font-label">Private Sanctuaries</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Listings Grid */}
        <section className="py-24 px-6 md:px-12 bg-surface-container-low">
          <div className="max-w-[1920px] mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-6 font-headline">Available Estates</h2>
              <div className="w-24 h-1 bg-tertiary-container mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              
              {/* Listing Card 1 */}
              <Link href="/property/zenith-atoll" className="group block">
                <div className="relative overflow-hidden rounded-xl mb-6 shadow-md bg-surface">
                  <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm">
                    <span className="material-symbols-outlined text-tertiary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-xs font-bold text-primary font-body">4.9</span>
                  </div>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      alt="Banana Island Estate" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqOZilaUG-fovklBq1Al1jZn_7G3GrggeJrCtzZAxI7PUKxWn6jhQ2-1aj-L22cFUssvEgU0Pt1qepP2usdGw4uZJ4q4E_R4t3mfzvObFNQ1I8BB_o3MIjwZ9jcd-9MQnbhKQe4TKvMvMgxyTDUEQFXEc7KVFX56r927FLrfUWnBnt6b6oDQUy5ShQ0Upu1rsB8V3FlKxuunyhSCoZk7pt0TDfCns4IHVUipwqgxZP7up7kkqLE9ysxXVhhksSSZ3SrVPPaXbkhsYe" 
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <div className="bg-primary/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded tracking-wider font-label">WIFI</div>
                    <div className="bg-primary/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded tracking-wider font-label">POOL</div>
                    <div className="bg-primary/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded tracking-wider font-label">CHEF</div>
                  </div>
                </div>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2 font-headline tracking-tight">The Zenith Atoll</h3>
                    <p className="text-secondary flex items-center gap-1 text-sm font-medium font-body">
                      <span className="material-symbols-outlined text-[16px]">location_on</span>
                      Banana Island, Lagos
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-headline font-bold text-primary">₦450k</p>
                    <p className="text-[10px] font-bold uppercase text-outline tracking-widest font-label mt-1">Per Night</p>
                  </div>
                </div>
              </Link>

              {/* Listing Card 2 */}
              <Link href="/property/obsidian-loft" className="group block">
                <div className="relative overflow-hidden rounded-xl mb-6 shadow-md bg-surface">
                  <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm">
                    <span className="material-symbols-outlined text-tertiary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-xs font-bold text-primary font-body">4.8</span>
                  </div>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      alt="Ikoyi Penthouse" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwZ_T8fu4yVeFewjR3P21yeDHXH3xZ6sPzn4CP7PVj53nlM9fCPNcaqoAlAa8TMZAFgn_znxkI7CVfjWnk22rp2UwMp91AH7_g4ySsOfVBwZvkXS1XMVsL6NDc_epAOkol1L4zu8kL2Sy2BhaUFCVRwkC2543nV7pwhFL4FDqxnxVZldsRSJeOKPEYn6m_gLHt29l_5z1D7ia3kVtkWRzAHmnYk1WSYvGRp0HQ1XRkVGyDi7lQw4PQDZ1lulvZ1-NOJl9AQg3QnhkW" 
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <div className="bg-primary/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded tracking-wider font-label">GYM</div>
                    <div className="bg-primary/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded tracking-wider font-label">POOL</div>
                    <div className="bg-primary/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded tracking-wider font-label">SECURITY</div>
                  </div>
                </div>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2 font-headline tracking-tight">Obsidian Loft</h3>
                    <p className="text-secondary flex items-center gap-1 text-sm font-medium font-body">
                      <span className="material-symbols-outlined text-[16px]">location_on</span>
                      Ikoyi, Lagos
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-headline font-bold text-primary">₦280k</p>
                    <p className="text-[10px] font-bold uppercase text-outline tracking-widest font-label mt-1">Per Night</p>
                  </div>
                </div>
              </Link>

              {/* Listing Card 3 */}
              <Link href="/property/heritage-manor" className="group block">
                <div className="relative overflow-hidden rounded-xl mb-6 shadow-md bg-surface">
                  <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm">
                    <span className="material-symbols-outlined text-tertiary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-xs font-bold text-primary font-body">5.0</span>
                  </div>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      alt="Maitama Manor" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuABXwQik6J7WFGugy65VKaVTyr7yZk-lJVUMaCcLGJIXyCNaUhCmnKqtNQyc6ZjcEVVoBXsgzjd4bgrwCIOtn_J-4tG5XP9T-xtHVGZQ2HFxLh1hnEh8JCeB85HF6O4yNnENTfGDxkGmaTKRs2QvIDidpn7YruLrClc5_RGSzpkoWML_sgAh-sBk7AV04Zi6WzeIYl9FHgx-_ZrKXfa48VfgDrmDgqoQys8eNus4FQ-28lFKkKLCPPON7ot_kTgx_6jHQ7pT2X0NKWI" 
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <div className="bg-primary/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded tracking-wider font-label">CINEMA</div>
                    <div className="bg-primary/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded tracking-wider font-label">POOL</div>
                    <div className="bg-primary/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded tracking-wider font-label">CONCIERGE</div>
                  </div>
                </div>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2 font-headline tracking-tight">The Heritage Manor</h3>
                    <p className="text-secondary flex items-center gap-1 text-sm font-medium font-body">
                      <span className="material-symbols-outlined text-[16px]">location_on</span>
                      Maitama, Abuja
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-headline font-bold text-primary">₦600k</p>
                    <p className="text-[10px] font-bold uppercase text-outline tracking-widest font-label mt-1">Per Night</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="mt-24 text-center">
              <button className="px-12 py-5 border-2 border-primary text-primary font-bold uppercase tracking-[0.2em] text-xs hover:bg-primary hover:text-white transition-all font-label">
                Discover More Properties
              </button>
            </div>
          </div>
        </section>

        {/* PrimeNest Standard */}
        <section className="py-32 px-6 md:px-12 bg-primary overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none flex justify-end">
            <span className="material-symbols-outlined text-[40rem] text-white select-none -mr-32" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
          </div>
          
          <div className="max-w-[1920px] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 leading-tight font-headline">
                  The <span className="text-tertiary-container italic font-medium">PrimeNest</span> Standard
                </h2>
                
                <div className="space-y-12">
                  <div className="flex gap-6">
                    <div className="w-14 h-14 rounded-full bg-tertiary-container flex items-center justify-center shrink-0 shadow-lg">
                      <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    </div>
                    <div>
                      <h4 className="text-white text-xl font-bold mb-3 font-headline">Uncompromising Quality</h4>
                      <p className="text-white/70 font-medium font-body leading-relaxed">Every estate in our collection undergoes a 200-point inspection to ensure global hospitality standards.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-14 h-14 rounded-full bg-tertiary-container flex items-center justify-center shrink-0 shadow-lg">
                      <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>concierge</span>
                    </div>
                    <div>
                      <h4 className="text-white text-xl font-bold mb-3 font-headline">24/7 Digital Concierge</h4>
                      <p className="text-white/70 font-medium font-body leading-relaxed">From private chefs to airport clearance, our on-call concierge manages every detail of your stay.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-14 h-14 rounded-full bg-tertiary-container flex items-center justify-center shrink-0 shadow-lg">
                      <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>shield_person</span>
                    </div>
                    <div>
                      <h4 className="text-white text-xl font-bold mb-3 font-headline">Elite Security Protocols</h4>
                      <p className="text-white/70 font-medium font-body leading-relaxed">State-of-the-art surveillance and rapid response teams integrated into every residence.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative mt-12 lg:mt-0 px-4 md:px-0">
                <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
                  <img 
                    alt="Concierge Standard" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP2P4D4IfQYjIXO2DRsVaYdSxwAAa2XGfXA_zjn3piQVTbG70E4VcvZMGcDCdCd1WLTs74mxc3S4Dbe5Dgq12ngskPcoioWKRjnTEJA7lSEWfvvdRhJQjUxynbBOzovwodXEeRolpn42CSKBHAY7aas3TtSAud7vuYr2vAL0DPZdLKvZc9j-NwQ69cxWdXcbJ7KHgCpKVb-fYzaMN7TFvSCxHlG04lIYPHjtERSE8INXeJD-s8UZE6IuTE42djbxgtwkjcJqwwgrDK" 
                  />
                </div>
                <div className="absolute -bottom-8 -left-4 md:-left-12 bg-tertiary-container p-8 md:p-10 rounded-2xl max-w-sm shadow-2xl border-4 border-primary">
                  <p className="text-primary font-black text-2xl md:text-3xl italic mb-4 font-headline leading-tight">"Nigeria's benchmark for short-term luxury."</p>
                  <p className="text-primary/80 text-xs uppercase font-bold tracking-widest font-label">— Estate Digest</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Host CTA */}
        <section className="py-24 px-6 md:px-12 bg-surface">
          <div className="max-w-[1920px] mx-auto rounded-[2.5rem] bg-surface-container-low overflow-hidden flex flex-col lg:flex-row shadow-sm">
            <div className="lg:w-1/2 aspect-square lg:aspect-auto relative">
              <img 
                alt="Property Owner" 
                className="absolute inset-0 w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3UQMu0kY-76Tp_mzCbNeCmYK0Lcl4YWUJyZZUUCBe9j90iuzyQ17zsAoptWb0zGzPWBZ9Tp8T2eVIOfI4Y1F0UwOjXj99jGekyujfL7hHv4txyayL_mAhicVfqn-SotVILmx1JFxd9AUxRBiy72ph89IyM2kbly5gZE6hd5jM1q8z1yARO0DvG01xS9xrUVjQihgINJhFeP1x9l1fh_gnKDq_CTVptPwavSo9hOM7YsycjBiYNuWyHefOhqZ1u5NS3fsuOd9kAJTr" 
              />
            </div>
            <div className="lg:w-1/2 p-12 md:p-20 lg:p-24 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 font-headline leading-tight">Monetize Your Masterpiece</h2>
              <p className="text-secondary text-lg mb-12 leading-relaxed font-body">
                Join an exclusive network of high-net-worth property owners. We handle marketing, guest vetting, and full property management.
              </p>
              <Link href="/list-property" className="bg-primary text-white px-10 py-5 rounded-lg font-bold text-lg w-fit hover:bg-primary-container transition-all shadow-xl shadow-primary/20 active:scale-95 font-headline">
                Turn your property into a PrimeNest Shortlet
              </Link>
              
              <div className="mt-16 flex gap-12 border-t border-outline-variant/30 pt-12">
                <div>
                  <p className="text-4xl font-black text-tertiary font-headline mb-2">35%</p>
                  <p className="text-[10px] font-bold uppercase text-secondary tracking-widest font-label">Higher Yield</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-tertiary font-headline mb-2">100%</p>
                  <p className="text-[10px] font-bold uppercase text-secondary tracking-widest font-label">Hands-Free</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}