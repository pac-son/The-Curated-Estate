import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface text-on-surface selection:bg-tertiary/30">
      <Header />
      
      <main className="grow pt-20"> {/* pt-20 to account for fixed header */}
        
        {/* Hero Section */}
        <section className="relative h-230.25 min-h-175 w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Luxury Lagos Waterfront Mansion" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuChKbNymEBHE41F4xeGZok_i-tYmL7ntKU9JIvFKy4yr85gNOz50Tul-u0mbrbe38r9mJ20z8L4sEIKVe40ktJoX3WMj1sCNQ_XLbRxT8vTuG3SltIcKUcA8d63D5YfsJ9U2XvZWv3El2QtQEubVX0d_SMX6HLEvmWvz71tjDjn489gDCkkYhSN9U3SCfw2k7tfz-6-xoZwGZJt2RKbsWl1R_XkEECVeWwynjA5ys6ZjHSGCCCJzLQ-x0BCstXrPvQcElOMnNUkYcLs" 
            />
            <div className="absolute inset-0 bg-linear-to-b from-primary/40 via-transparent to-primary/60"></div>
          </div>
          
          <div className="relative z-10 w-full max-w-7xl px-6 text-center mt-12">
            <span className="inline-block py-2 px-4 bg-tertiary-container/90 text-on-tertiary-container text-xs font-bold tracking-[0.2em] mb-6 backdrop-blur-md rounded-sm uppercase">
              Curating Nigerian Excellence
            </span>
            <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight mb-12 max-w-4xl mx-auto leading-[1.1] font-headline">
              The Art of <span className="italic font-normal">Exceptional</span> Living.
            </h1>
            
            {/* Search Bar Widget */}
            <div className="max-w-5xl mx-auto bg-surface-container-lowest/90 backdrop-blur-2xl p-2 rounded-xl shadow-2xl flex flex-col md:flex-row items-stretch md:items-center">
              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-outline-variant/30">
                {/* Location */}
                <div className="p-4 flex flex-col items-start px-8">
                  <label className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-1 font-label">Location</label>
                  <select className="w-full bg-transparent border-none p-0 focus:ring-0 text-primary font-semibold text-lg cursor-pointer appearance-none font-headline">
                    <option>Lagos, Nigeria</option>
                    <option>Abuja, FCT</option>
                    <option>Port Harcourt, Rivers</option>
                  </select>
                </div>
                {/* Property Type */}
                <div className="p-4 flex flex-col items-start px-8">
                  <label className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-1 font-label">Property Type</label>
                  <select className="w-full bg-transparent border-none p-0 focus:ring-0 text-primary font-semibold text-lg cursor-pointer appearance-none font-headline">
                    <option>Contemporary Mansion</option>
                    <option>Penthouse Suite</option>
                    <option>Luxury Apartment</option>
                    <option>Office Space</option>
                  </select>
                </div>
                {/* Rental Type */}
                <div className="p-4 flex flex-col items-start px-8">
                  <label className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-1 font-label">Rental Type</label>
                  <select className="w-full bg-transparent border-none p-0 focus:ring-0 text-primary font-semibold text-lg cursor-pointer appearance-none font-headline">
                    <option>Long-term Lease</option>
                    <option>Premium Shortlet</option>
                  </select>
                </div>
              </div>
              <button className="m-2 bg-tertiary-container text-on-tertiary-container h-16 w-16 md:w-24 flex items-center justify-center rounded-lg hover:brightness-105 transition-all group shadow-lg">
                <span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform">search</span>
              </button>
            </div>
          </div>
        </section>

        {/* Featured Section: Long-term */}
        <section className="py-24 px-6 md:px-12 bg-surface">
          <div className="max-w-480 mx-auto">
            <div className="flex justify-between items-end mb-16">
              <div className="max-w-xl">
                <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tighter mb-4 font-headline">Premium Long-term Rentals</h2>
                <p className="text-secondary font-medium leading-relaxed font-body">Exclusive multi-year leases for those seeking a permanent sanctuary in Africa's most prestigious districts.</p>
              </div>
              <Link href="/rentals" className="hidden md:flex items-center text-tertiary font-bold tracking-widest text-xs uppercase hover:gap-3 transition-all font-body">
                View All Collections <span className="material-symbols-outlined ml-2 text-sm">arrow_forward_ios</span>
              </Link>
            </div>
            
            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto">
              {/* Major Card */}
              <Link href="/property/obsidian" className="md:col-span-7 group relative overflow-hidden bg-surface-container-lowest rounded-xl block cursor-pointer">
                <div className="aspect-16/10 overflow-hidden">
                  <img 
                    alt="Modern Mansion Interior" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiteFEO5Jcj6qVboB0tMhD1U2GeC940D6DHOAGekNIdal9y94npirlnP2-Upp4hILdTfQWtxqzqa7Rkjrh0nkzhh6QH_duLGaYlDOD2uOdA6ZhwI_gQ9zfU53jSIyiR1XhmZ28gWV56Z2KoAsI06Jl6kWCTaM9TmECIeIJG_0D6Xs0vV2rrgAmQiAF12p_bD-MiAuEbnyPIZFxZp3MayMXGtrQo9g2dwft2qbU21sgDv5dT4CrZH3uKqSIqQjVGM1r_XWho1NPqUFp" 
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-[10px] font-extrabold text-tertiary tracking-widest uppercase font-label">Ikoyi, Lagos</span>
                      <h3 className="text-2xl font-bold text-primary mt-1 font-headline">The Obsidian Residence</h3>
                    </div>
                    <span className="text-2xl font-headline font-bold text-primary">₦45,000,000<span className="text-sm font-medium text-secondary font-body">/yr</span></span>
                  </div>
                  <div className="flex gap-6 text-secondary text-sm font-semibold font-body">
                    <span className="flex items-center gap-2"><span className="material-symbols-outlined text-lg">bed</span> 5 Beds</span>
                    <span className="flex items-center gap-2"><span className="material-symbols-outlined text-lg">bathtub</span> 6 Baths</span>
                    <span className="flex items-center gap-2"><span className="material-symbols-outlined text-lg">square_foot</span> 850 sqm</span>
                  </div>
                </div>
              </Link>
              
              {/* Stacked Cards */}
              <div className="md:col-span-5 flex flex-col gap-8">
                <Link href="/property/acacia" className="flex-1 group bg-surface-container-lowest rounded-xl overflow-hidden flex flex-col sm:flex-row cursor-pointer">
                  <div className="w-full sm:w-1/2 overflow-hidden">
                    <img 
                      alt="Suburban Luxury" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6duFuVaRwvt4MV7C5BFjuVwchSm5nF7qc8aqPjI0IjL3naVhcdaLt0oHUL2kN9O5FTdSOIOIHUvFucZV5HpWr_W1-rA3zzOmfEEjAI8U2by7O6Dwlf7HshDUoAGt9B7-5dljFPIIJlMC0nMOW_LoG6WK__OG8Ca7lI1LL0XlL3uxrjgdgihV3NII8Jt_E7G1vH796mo4edg5pbjy16hSWqkQ-74mU-uywgq5zota69mEXkYY-K6c9jpKD8sbdGlvCiWkf2G83h1S_" 
                    />
                  </div>
                  <div className="w-full sm:w-1/2 p-6 flex flex-col justify-center">
                    <span className="text-[10px] font-extrabold text-tertiary tracking-widest uppercase font-label">Maitama, Abuja</span>
                    <h3 className="text-lg font-bold text-primary mt-1 font-headline">Acacia Manor</h3>
                    <p className="text-xl font-headline font-bold text-primary mt-2">₦32,000,000<span className="text-xs font-medium text-secondary font-body">/yr</span></p>
                    <div className="mt-4 pt-4 border-t border-outline-variant/20 flex gap-4 text-secondary text-[10px] font-bold font-body">
                      <span>4 BEDS</span>
                      <span>4 BATHS</span>
                    </div>
                  </div>
                </Link>
                
                <Link href="/property/eko" className="flex-1 group bg-surface-container-lowest rounded-xl overflow-hidden flex flex-col sm:flex-row cursor-pointer">
                  <div className="w-full sm:w-1/2 overflow-hidden">
                    <img 
                      alt="High Rise Penthouse" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvpz5ze9Tinfaq497dj0QFDQjInNTrXAw1Fbm-YO4aM8CbNyh_2xW5YFdJBIphDS5PQMHhhc7MPweYoAaSnR6hpftRFDYxzylVTPa0kUCv1_0OV01VZurKfzRcHeKVSc1RC0qWrorv7kPCoLgKB8wcmnibdLq_6Sa3ZW-7Y6_X_9_BXfza2K-QFTW8VOdk8oLl2A7U_Q6d4HmWbIi9AItgPYZo6ceVCnQvTm2KsdYHYEcs_EsQ_kV2kjFimTZ8pnFeHI_o0jianv0t" 
                    />
                  </div>
                  <div className="w-full sm:w-1/2 p-6 flex flex-col justify-center">
                    <span className="text-[10px] font-extrabold text-tertiary tracking-widest uppercase font-label">Victoria Island</span>
                    <h3 className="text-lg font-bold text-primary mt-1 font-headline">Eko Sky Loft</h3>
                    <p className="text-xl font-headline font-bold text-primary mt-2">₦55,000,000<span className="text-xs font-medium text-secondary font-body">/yr</span></p>
                    <div className="mt-4 pt-4 border-t border-outline-variant/20 flex gap-4 text-secondary text-[10px] font-bold font-body">
                      <span>3 BEDS</span>
                      <span>3 BATHS</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Section: Luxury Shortlets */}
        <section className="py-24 px-6 md:px-12 bg-primary-container text-on-primary">
          <div className="max-w-480 mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4 font-headline">Luxury Shortlets</h2>
              <p className="text-on-primary-container font-medium max-w-lg font-body">The perfect fusion of hotel hospitality and the privacy of a designer home.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {/* Shortlet Card 1 */}
              <Link href="/shortlets/minimalist" className="group relative aspect-3/4 overflow-hidden rounded-xl block">
                <img 
                  alt="Luxury Studio" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5-DJ9QiefNWUauLdqaClpflYZk7O_01PtcYqhF_Gkz8-KIkPhcS6Kbfjjg86Dtft4KE69nYf3NllDFO1uv9-VxuK1QQPxVT-81sy816H9wU0uvhkXonidnFBfv67HF_GZmkKONOfqqG83TTeWBuqskb9Z5n9cWgaM-4TJsZSYlJwVVsLed7ioNB_7dYt9smDF6MxBXy2ZLrvPI7s_nzVGy8WemoC1ihQThyJIgtZ4ftL2ZKEHs1E-x3SU16ZMLyy2RPNobKf1bWMS" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 p-6 w-full">
                  <span className="inline-block px-3 py-1 bg-tertiary-container/20 backdrop-blur-md border border-tertiary-container/30 rounded text-[10px] font-bold text-tertiary-fixed tracking-widest uppercase mb-2 font-label">Available Now</span>
                  <h3 className="text-xl font-bold text-white font-headline">The Minimalist Suite</h3>
                  <div className="flex justify-between items-center mt-4">
                    <p className="font-headline text-lg font-bold text-tertiary-fixed">₦150k <span className="text-xs font-normal text-white/70 font-body">/ night</span></p>
                    <span className="material-symbols-outlined text-white/50 group-hover:text-tertiary-fixed transition-colors" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                  </div>
                </div>
              </Link>
              
              {/* Shortlet Card 2 */}
              <Link href="/shortlets/indigo" className="group relative aspect-3/4 overflow-hidden rounded-xl block">
                <img 
                  alt="Cozy Loft" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjSm0V6iQm6KUe8b62vxi-APbAB5zx5JN-ThWC0vBWMf5qGwCXYMfpzkvIl8tz8p6tmhX4tYhpCLUAH3m5NvLlfO9drmobisH5uQj5IpFzfd5RifB3Gv7gDJzYcP3lk-9K_BtGf7GTY0pttcRqKuGNz_Z4Ui4fN9xG3LffdMZl24JPpi8Hd_3sq99OmA0sEJaQg3SyG4SXSKLmsoOy9vVv9sLd_JlzDB0qXeTOr8_KmSel1N4GzX1UbJNEFLiqFxagd1NtIN7ya7cl" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 p-6 w-full">
                  <span className="inline-block px-3 py-1 bg-tertiary-container/20 backdrop-blur-md border border-tertiary-container/30 rounded text-[10px] font-bold text-tertiary-fixed tracking-widest uppercase mb-2 font-label">Popular Choice</span>
                  <h3 className="text-xl font-bold text-white font-headline">The Indigo Terrace</h3>
                  <div className="flex justify-between items-center mt-4">
                    <p className="font-headline text-lg font-bold text-tertiary-fixed">₦220k <span className="text-xs font-normal text-white/70 font-body">/ night</span></p>
                    <span className="material-symbols-outlined text-white/50 group-hover:text-tertiary-fixed transition-colors" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                  </div>
                </div>
              </Link>
              
              {/* Shortlet Card 3 */}
              <Link href="/shortlets/atelier" className="group relative aspect-3/4 overflow-hidden rounded-xl block">
                <img 
                  alt="Bohemian Apartment" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBTzria0ZBbYeLYpCYg55dZJqtXMJRyOyNB8yERTWEte09cdm579FCz6jbe8gSdrXEIPSrGGXmB_VvUj7CNdUVitfGjHqUDwECB97xpYiG9LLnlzx4R7kKnl3nWmyVWFIE2adxLt2E9-LqLvGf8hPTZwUE7nMp2-qImZGcjAshwyfXYkfYyUEtmb_AqMNiwEAep1kwQbX2kNKNFXhVLWqMwUvMywT1z85UTv15DifUk6RRQEzAdkqgrlO4RHmyX0sOSgjFyab99Rx-" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 p-6 w-full">
                  <span className="inline-block px-3 py-1 bg-tertiary-container/20 backdrop-blur-md border border-tertiary-container/30 rounded text-[10px] font-bold text-tertiary-fixed tracking-widest uppercase mb-2 font-label">Designer Collection</span>
                  <h3 className="text-xl font-bold text-white font-headline">L'Atelier Villa</h3>
                  <div className="flex justify-between items-center mt-4">
                    <p className="font-headline text-lg font-bold text-tertiary-fixed">₦185k <span className="text-xs font-normal text-white/70 font-body">/ night</span></p>
                    <span className="material-symbols-outlined text-white/50 group-hover:text-tertiary-fixed transition-colors" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                  </div>
                </div>
              </Link>
              
              {/* Shortlet Card 4 */}
              <Link href="/shortlets/aqua" className="group relative aspect-3/4 overflow-hidden rounded-xl block">
                <img 
                  alt="Luxury Poolside" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9HIb79sXXLelLJKywwnBExnReWMtmdmm9x6yRccFpGAtTqUj8HGlnaIq91xLpA7TLAxS_FCP9rTuhxqc_fjqnr2NgDI8_OXC-UOo2QWuqf9b0Ddxr7uurOS8mFUU3GxUaTTkOBHNCZFc9GiK8F8lnj_PL5iVk9Qxo6qdjEyuiD6a9pJHd9NOvXudV89Q4mlfIT_WcEpoFI2UHy4ieh-5xGzVLcdQmxcL6sR-pjKsyL9oszMiIsu8ViYr8GLP_SEZ0hetc_DipxOcz" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 p-6 w-full">
                  <span className="inline-block px-3 py-1 bg-tertiary-container/20 backdrop-blur-md border border-tertiary-container/30 rounded text-[10px] font-bold text-tertiary-fixed tracking-widest uppercase mb-2 font-label">Waterfront</span>
                  <h3 className="text-xl font-bold text-white font-headline">Aqua Marine Cove</h3>
                  <div className="flex justify-between items-center mt-4">
                    <p className="font-headline text-lg font-bold text-tertiary-fixed">₦310k <span className="text-xs font-normal text-white/70 font-body">/ night</span></p>
                    <span className="material-symbols-outlined text-white/50 group-hover:text-tertiary-fixed transition-colors" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-24 px-6 md:px-12 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
            <div className="w-full md:w-1/2">
              <span className="text-xs font-bold text-tertiary-container tracking-[0.3em] uppercase mb-4 block font-label">Distinguished Opinions</span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 leading-tight font-headline">Trusted by the most discerning individuals.</h2>
              
              <div className="space-y-12 font-body">
                <div className="relative pl-12">
                  <span className="absolute left-0 top-0 text-6xl font-headline text-tertiary-container/20">“</span>
                  <p className="text-xl text-secondary font-medium leading-relaxed italic mb-4">"PrimeNest doesn't just list properties; they curate experiences. Their attention to detail in the Lagos market is unparalleled."</p>
                  <div>
                    <h4 className="font-bold text-primary">Dr. Olumide Balogun</h4>
                    <p className="text-sm text-secondary">Tech Executive, Lagos</p>
                  </div>
                </div>
                
                <div className="relative pl-12">
                  <span className="absolute left-0 top-0 text-6xl font-headline text-tertiary-container/20">“</span>
                  <p className="text-xl text-secondary font-medium leading-relaxed italic mb-4">"The shortlet service was seamless. From booking to checkout, the quality of the penthouse exceeded our expectations."</p>
                  <div>
                    <h4 className="font-bold text-primary">Samantha Reed</h4>
                    <p className="text-sm text-secondary">Global Investor</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl scale-105">
                <img 
                  alt="Satisfied Client" 
                  className="w-full h-125 object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh_NmkdD5Raoq2OlTO41wnVcZb8N74W94CfNTgYhbaVNw-FpuysPw6rBiAlEoJmPqc3eJK6ITO6LwOmfWygXoH5wAOX5hhR-Vi6VquxrFjs1JDVffjfHTX9QmnClA376LfKxryirTNJVirsFrXvgl0UgurTYX16f3TEAapdWV3AokObuAbdppX-oz5Q6imKCXpKdr6EhzvB8doXyQ2RvW4m3oj7DsDeths4rpPCxLFrmqV2vLU3M44TyznCZL633FyTSBZ0mvoPbPi" 
                />
              </div>
              {/* Decorative Accent Blocks */}
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-tertiary-container rounded-xl -z-10"></div>
              <div className="absolute -top-8 -right-8 w-48 h-48 bg-primary-container rounded-xl -z-10"></div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      
      {/* Floating WhatsApp Action */}
      <a 
        href="https://wa.me/2348000000000" 
        className="fixed bottom-10 right-10 z-60 bg-[#25D366] text-white p-4 rounded-full shadow-[0_20px_40px_rgba(37,211,102,0.3)] hover:scale-110 transition-transform active:scale-95 group flex items-center justify-center"
      >
        <span className="material-symbols-outlined text-3xl">chat</span>
        <span className="absolute right-full mr-4 bg-white text-primary px-4 py-2 rounded-lg text-xs font-bold shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-body">
          Chat with a Curator
        </span>
      </a>
      
    </div>
  );
}