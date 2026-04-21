import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PropertyDetailsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface selection:bg-tertiary-fixed selection:text-on-tertiary-fixed">
      <Header />

      {/* Main Content Area */}
      <main className="grow pt-32 px-6 md:px-12 max-w-400 mx-auto w-full">
        
        {/* Hero Gallery Section */}
        <section className="grid grid-cols-4 grid-rows-2 gap-4 h-100 md:h-600px mb-16 overflow-hidden">
          <div className="col-span-4 md:col-span-2 row-span-2 relative group overflow-hidden rounded-xl">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuARaEH6_E7yw4egUBOTdhrJo_hhabLZXWftZC8n4g3puwn-phCSsARrrLbPNFa_VUnAHoNwXDe3PwOehrRoDPgm3A-GxRaaL2s6tjwIZcXwDu5cY_HS1UbBGOJFBZpw1xOs-C-ZOOujcOuvEFhQrf273A8gTKwIVGi2JfjQBZpwsDyLIsI7-RS4a0Ci7ij5x5UMrWSX8eEKae3ohZpzV_fmE31oRgRerKmzw-d67GrcIh1JZRXprLD_TiyrHtbefXmT4_wrMMDXZRYk" 
              alt="Penthouse living room" 
            />
            <div className="absolute top-6 right-6 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-label">LUXURY COLLECTION</span>
            </div>
          </div>
          <div className="hidden md:block col-span-1 row-span-1 overflow-hidden rounded-xl">
            <img 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuByUhLj-sek5M_GIxyGGFMED8_in0aFxSQTfnh9uwV94xM3EkppO07eOhODscONhaE_xxzKan0JuRW4j3zdz-y6hoegcstZeSQ_q9QMwNbazxChakFDBzBzrp2km926ImZymELJPQbb11vAwF9GmKnaK_ZFiSrp3KGegVwAzen7_uRiCayXQficdBTa1JWhTFW5I2QG0jCBk-3Ovjeut6RkVJrn2wdhXTLBpl4vJbUBrySWjKOpAvhNQisA7RwltqKH9LGouCb4uQQq" 
              alt="Gourmet kitchen" 
            />
          </div>
          <div className="hidden md:block col-span-1 row-span-1 overflow-hidden rounded-xl">
            <img 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkJnAt56HbNYj7tVdf3jpG6JGtDSz3SWemhAXof5-tldiMNnbOejeCO65QLM7MeN99pfkOCkcXA7GF9ydxUV8yhieTDSdv0Y3poQK6Chcu8cMgrlnw9msWxA6GlYEEXg1D5yUyXXOkEE85OR77sfbXwBaBLV0_I0-VQi5RZxujLtyP5xwE6elL8mw1MCqTWmnr5Q6In2gSqE0Y9ZhNbz5A39z3RzlsC0Pn4YwT12wQf4NQHvidWLHwWfJzhd3_wFwkvwaX47rra3_I" 
              alt="Master bedroom" 
            />
          </div>
          <div className="hidden md:block col-span-2 row-span-1 overflow-hidden rounded-xl">
            <img 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBISHx9XilET_NsE-qq0CBka2wvZOwWyHnlRAQeD2O12LuDyGsWsikz9fayqfbJB6U11gU1iuUmu8Ijy1AYmoFmKp3-dqApWK1SgRTOtj_vuNN_cgW65s8PMhZha59P6s7lQdtflB4a0t1caR2Jmvaz8XpNlXnaZ48hF08XobbTCm3qG8ycccpYxAKw5Yi4zBHseBzkGlQhVUCqpOFHL0Z23pAjfBTJLeo5pvei0wZ69D_j7RWSYN4NGYlvfF-404pQYmF3CGfCe8BR" 
              alt="Infinity pool" 
            />
          </div>
        </section>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Title & Basic Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-tertiary font-semibold tracking-widest text-xs uppercase">
                <span className="material-symbols-outlined text-sm">location_on</span>
                Banana Island, Ikoyi, Lagos
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline text-primary tracking-tight leading-tight">
                The Azure Penthouse & Spa
              </h1>
              <div className="flex flex-wrap gap-6 md:gap-8 text-on-surface-variant font-medium border-y border-outline-variant/15 py-6 font-body">
                <div className="flex items-center gap-2"><span className="material-symbols-outlined">king_bed</span> 3 Bedrooms</div>
                <div className="flex items-center gap-2"><span className="material-symbols-outlined">bathtub</span> 4 Bathrooms</div>
                <div className="flex items-center gap-2"><span className="material-symbols-outlined">square_foot</span> 450 sqm</div>
                <div className="flex items-center gap-2"><span className="material-symbols-outlined">group</span> 6 Guests</div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-headline text-primary">About this residence</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed max-w-3xl font-body">
                A masterclass in modern tropical architecture, The Azure Penthouse offers unparalleled views of the Lagos shoreline. Curated for the discerning traveler, every corner of this residence speaks of quiet luxury—from the Italian marble floors to the custom-designed oak cabinetry.
              </p>
              <p className="text-lg text-on-surface-variant leading-relaxed max-w-3xl font-body">
                Experience a sanctuary that blends the comforts of a private home with the services of a five-star hotel. Our dedicated concierge is available around the clock to ensure your stay is nothing short of exceptional.
              </p>
            </div>

            {/* Amenities */}
            <div className="space-y-8 bg-surface-container-low p-8 md:p-10 rounded-xl">
              <h2 className="text-2xl font-bold font-headline text-primary">Signature Amenities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 font-body">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white flex items-center justify-center rounded-lg shadow-sm">
                    <span className="material-symbols-outlined text-tertiary">wifi</span>
                  </div>
                  <span className="font-medium">Ultra-fast Wi-Fi</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white flex items-center justify-center rounded-lg shadow-sm">
                    <span className="material-symbols-outlined text-tertiary">security</span>
                  </div>
                  <span className="font-medium">24/7 Elite Security</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white flex items-center justify-center rounded-lg shadow-sm">
                    <span className="material-symbols-outlined text-tertiary">bolt</span>
                  </div>
                  <span className="font-medium">Uninterrupted Power</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white flex items-center justify-center rounded-lg shadow-sm">
                    <span className="material-symbols-outlined text-tertiary">local_parking</span>
                  </div>
                  <span className="font-medium">Private Garage</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white flex items-center justify-center rounded-lg shadow-sm">
                    <span className="material-symbols-outlined text-tertiary">pool</span>
                  </div>
                  <span className="font-medium">Private Pool</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white flex items-center justify-center rounded-lg shadow-sm">
                    <span className="material-symbols-outlined text-tertiary">fitness_center</span>
                  </div>
                  <span className="font-medium">In-house Gym</span>
                </div>
              </div>
            </div>

            {/* Location Map Placeholder */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-headline text-primary">The Neighborhood</h2>
              <div className="w-full h-96 rounded-xl overflow-hidden grayscale bg-surface-container-highest flex items-center justify-center relative">
                <img 
                  className="absolute inset-0 w-full h-full object-cover opacity-50" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9ZDo1JY0n8rGMnB23s12tyQEkJWiYVnyKlaQp-hWlGYbHd4HC8GSPaZArE--33BtYGyhsgQblK8TX2DZ2D7NqjwPFTQ1Trj-l_j8ETbWhr_-cPS7Za6nw6cUevCH2Sgh3QXlWSuQ4vTgrwoz1xh6SQjvq853PsQNmF1uvfUK63LCRIpSWP1jdX2wjUABPJDNyLwQMpY-0ES5E2W6aQQiQZcZrqsi2zzrLHo4F-i50eKCkHoYz4cqsIWb_8yzLRxEshfjCMQFQn_hX" 
                  alt="Banana Island Map" 
                />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                    <span className="material-symbols-outlined text-3xl">location_on</span>
                  </div>
                  <span className="mt-4 bg-white px-4 py-2 rounded-full font-bold text-sm shadow-md font-body">Azure Penthouse Location</span>
                </div>
              </div>
            </div>

            {/* Reviews Section */}
            <div className="space-y-10 font-body">
              <div className="flex justify-between items-end">
                <h2 className="text-3xl font-bold font-headline text-primary">Guest Experiences</h2>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-bold text-lg">4.96</span>
                  <span className="text-on-surface-variant">(128 Reviews)</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-sm space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-surface-container-highest overflow-hidden">
                      <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUiL7_o74aYSz4pMYToNMA3LpH5dtrDA8MYMguGbubifaVglk5fERJNrbnUl0HOrVu32LqePPrjimSMevs0AM8J6Ltb_xSGq1_foU4Olnmzg51ZOQKHsDsUcMTixLGe-kzWQWzk20MmvtoMUYJI3s5utM-JMEbBly3lAB5-ekVjhsNfdwMk4fULTMldNMfcbUjdWpJGZUka8u44dLnBLb-gbO9jQknGNGIZv5xMlb9sSHKAMWdMwwEvikSRx-7fSXlKcv5SDPUCu2B" alt="Oluwatobi A." />
                    </div>
                    <div>
                      <div className="font-bold">Oluwatobi A.</div>
                      <div className="text-xs text-on-surface-variant">October 2023</div>
                    </div>
                  </div>
                  <p className="text-on-surface-variant italic leading-relaxed">"The most spectacular view in all of Lagos. The staff were professional, and the attention to detail in the penthouse design is world-class."</p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-sm space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-surface-container-highest overflow-hidden">
                      <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiP1h1risNVmyPBN5U0QjI3-F4PMGTHA5hbNvJWHcmBJkeVP7wQ0fhqbxVrCaLFc2o5qh4NGSaFjOR-lOwkROrmVotxMUruyXslCrn35iNcTvQSrab4rxN_yPRIEEyLviWaI0HHVCyPvvRUIwizDv6_-2oJfSt6gJ-Z4JGEaJDN_m8lQ02qknF8O0G0mImRCYrb_JRuPjFGBl-ijQAvhKdSTMtRYxjg0KwZ0_hAF_1WjAfXj5W8mLexKlA23u1tn8eKZUd9hfnPn3w" alt="Sarah Williams" />
                    </div>
                    <div>
                      <div className="font-bold">Sarah Williams</div>
                      <div className="text-xs text-on-surface-variant">December 2023</div>
                    </div>
                  </div>
                  <p className="text-on-surface-variant italic leading-relaxed">"Perfect for a corporate retreat. The Wi-Fi was stable and the power backup was seamless. Highly recommended for business travelers."</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Booking Widget (Sticky) */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-6">
              
              <div className="bg-white rounded-xl shadow-[0_32px_64px_-15px_rgba(0,0,0,0.06)] overflow-hidden border border-outline-variant/10">
                <div className="p-8 border-b border-outline-variant/15 flex justify-between items-center">
                  <div>
                    <span className="text-3xl font-headline font-bold text-primary">₦250,000</span>
                    <span className="text-on-surface-variant font-medium font-body"> / night</span>
                  </div>
                  <div className="bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded text-xs font-bold font-body">5.0 ★</div>
                </div>
                
                <div className="p-8 space-y-6 font-body">
                  {/* Booking Inputs */}
                  <div className="grid grid-cols-2 border border-outline-variant rounded-lg overflow-hidden">
                    <div className="p-4 border-r border-outline-variant hover:bg-surface-container-low transition-colors cursor-pointer">
                      <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Check In</label>
                      <div className="mt-1 font-semibold text-sm text-primary">Add date</div>
                    </div>
                    <div className="p-4 hover:bg-surface-container-low transition-colors cursor-pointer">
                      <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Check Out</label>
                      <div className="mt-1 font-semibold text-sm text-primary">Add date</div>
                    </div>
                    <div className="col-span-2 p-4 border-t border-outline-variant hover:bg-surface-container-low transition-colors cursor-pointer">
                      <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Guests</label>
                      <div className="mt-1 font-semibold text-sm text-primary">2 Guests</div>
                    </div>
                  </div>

                  {/* Pricing Calculation */}
                  <div className="space-y-3 pt-2">
                    <div className="flex justify-between text-on-surface-variant">
                      <span>₦250,000 x 5 nights</span>
                      <span>₦1,250,000</span>
                    </div>
                    <div className="flex justify-between text-on-surface-variant">
                      <span>Cleaning fee</span>
                      <span>₦45,000</span>
                    </div>
                    <div className="flex justify-between text-on-surface-variant">
                      <span>PrimeNest Service Fee</span>
                      <span>₦85,000</span>
                    </div>
                    <div className="pt-4 border-t border-outline-variant/20 flex justify-between text-primary">
                      <span className="text-xl font-bold">Total</span>
                      <span className="text-xl font-bold font-headline">₦1,380,000</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="w-full bg-tertiary-container hover:bg-tertiary transition-all py-5 rounded-lg text-on-tertiary-container font-bold text-lg shadow-lg active:scale-95">
                    Book Now
                  </button>
                  <p className="text-center text-xs text-on-surface-variant">You won't be charged yet</p>
                </div>
              </div>

              {/* Host Info Card */}
              <div className="bg-primary-container text-white p-8 rounded-xl font-body">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full border-2 border-tertiary-fixed overflow-hidden">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMBz2_TGQGFxbmf6slsOC6gOOluQUIT-qxnFafzHF4z_5fkgfnnZu2l9VecXcc3Z5KcXiLE3VKNm0KiZSsjoqpVBi-rRYvxYTPZPqEhEIcyXaoAZ1lXeGvEljiurQ75_NuWZHwZ82G0jPhBYgSfAdNzd55iERdumBrO628j7VPyWl7-XBepgGHb0FB2RqrZYgkT71i1KP8VlP9Oae-f1_Y_Lhan5pcaow-QHKQqXo_dUYmk8RDFvd1u8N5nVq41beTL_tP184Hchmx" alt="Host Segun" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Hosted by Segun</h3>
                    <p className="text-white/60 text-sm">Superhost · Joined 2021</p>
                  </div>
                </div>
                <button className="w-full border border-white/30 hover:bg-white/10 transition-colors py-3 rounded-lg text-sm font-semibold">
                  Message Host
                </button>
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}