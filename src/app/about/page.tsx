import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="bg-surface text-on-surface font-body min-h-screen flex flex-col">
      <Header />

      <main className="grow pt-20">
        {/* Hero Section */}
        <section className="relative h-200 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLFlJp8Wb6XTDDDOeTgBxjNKSBMF76WSlqlKD8eQuIboR991WtPybS3FN73_JXNSZccF9i0BQYCJDfq-iAJO79xjEt-VJixUX1Lylt_OPSQBOkIxt3JZI1yJ2WILPcw4e3oKtVtQsa-bOsFk80Ee_f3osxk7QxE-gRTB8gFEGWAchubiIWJmlpJUaOYSJvalwp3IUyWd2jB9UhqboPKxuv5E7pXGAaG7LnSG933mm_gF6v7aa4zXpgMP5PUY1_GyOjjBUWiSVOpot0" alt="Luxury Lagos Estate" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-b from-primary/40 to-primary/80"></div>
          </div>
          <div className="relative z-10 text-center px-4 max-w-5xl">
            <p className="text-tertiary-container font-label uppercase tracking-[0.3em] text-sm mb-6">Established Heritage</p>
            <h1 className="text-white font-headline text-6xl md:text-8xl font-bold tracking-tight mb-8">Our Legacy, Your Future.</h1>
            <div className="w-24 h-1 bg-tertiary-container mx-auto"></div>
          </div>
        </section>

        {/* The Digital Curator Section */}
        <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-5">
              <h2 className="font-headline text-4xl md:text-5xl text-primary leading-tight">The Digital Curator</h2>
              <div className="mt-8 space-y-2">
                <span className="block w-12 h-0.5 bg-tertiary"></span>
                <p className="text-tertiary font-label uppercase tracking-widest text-xs">A Bespoke Methodology</p>
              </div>
            </div>
            <div className="md:col-span-7 space-y-8">
              <p className="text-xl md:text-2xl font-light leading-relaxed text-on-surface-variant font-headline italic">
                "We do not merely list properties; we curate experiences that define the new standard of Nigerian luxury living."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-on-surface-variant leading-loose">
                <p>In the high-velocity world of Lagos real estate, clarity is the ultimate luxury. PrimeNest Lettings was founded on the principle that property acquisition should be as refined as the architecture itself. We act as your digital architect, filtering out the noise to present only the most exceptional holdings.</p>
                <p>Our approach combines data-driven precision with an editorial eye for detail. By focusing on exclusivity and long-term value, we ensure that every estate in our portfolio is a testament to quality, security, and prestige.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Split Section */}
        <section className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-primary-container p-16 md:p-24 flex flex-col justify-center">
            <div className="max-w-md mx-auto md:mx-0">
              <p className="text-tertiary-container font-label uppercase tracking-[0.2em] text-xs mb-4">Our Commitment</p>
              <h2 className="font-headline text-4xl text-white mb-8">Mission</h2>
              <p className="text-on-primary-container text-lg leading-relaxed font-light">
                To elevate the Nigerian real estate landscape by delivering a curated selection of properties that embody global standards of luxury, transparency, and architectural excellence.
              </p>
            </div>
          </div>
          <div className="bg-primary p-16 md:p-24 flex flex-col justify-center border-t md:border-t-0 md:border-l border-primary-container/20">
            <div className="max-w-md mx-auto md:mx-0">
              <p className="text-tertiary-container font-label uppercase tracking-[0.2em] text-xs mb-4">Our Aspiration</p>
              <h2 className="font-headline text-4xl text-white mb-8">Vision</h2>
              <p className="text-on-primary-container text-lg leading-relaxed font-light">
                To be the definitive authority for premium estates in West Africa, transforming the way the world perceives and interacts with high-end African property.
              </p>
            </div>
          </div>
        </section>

        {/* Curation Council (Team Grid) */}
        <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-headline text-4xl md:text-5xl text-primary mb-6">Curation Council</h2>
              <p className="text-on-surface-variant text-lg">The minds behind the portfolio. A collective of architects, investment analysts, and luxury connoisseurs.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1">
            {/* Team Member 1 */}
            <div className="group relative aspect-4/5 overflow-hidden bg-slate-200">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjdANd_qjR7fxhzlEm16ysF7fJyQoz3q7AyP0WBk9eIknvcHA3lsd-WuloB5XRLY1GlrFScoJJkLJ4ug_kE-a-xeD8RxU_gmmPbCA-IlY8grKfQ31dSvCu0a7IwZnHtpV5KMVQPdeAIQ6w22Ubwf5EJrS4NxbY5Bh69SKVj73L27SXhAg5xLZzZ_psGVZNiI_m4o3yVn781PjRp80nIizacHZ17ZJw9-iWdWb3H4-QdaR-QLlDXj_18A-dBeqQ-5hD3Zo4Bf6rmzad" alt="Chidi Nwosu" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-headline text-xl font-bold">Chidi Nwosu</p>
                <p className="font-label text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 text-tertiary-container">Principal Curator</p>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="group relative aspect-4/5 overflow-hidden bg-slate-200">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfOPA3p_jZZ71YxKIpMzRLZSNm3WKFEFeRLvdnXj9eky9bMsPt5krJjKjfDzwaroVrMrWErlBVhvduuVTJJGFxUCldIU9mQNu_dEP9GynoN1ErENK9xPs-QPRiq-NImfiB5HWCOLNYAl0KnJDgK5Xz9MQXBFHLUHwBgLiccVz-i5279lxM3hdCVYXkWhCN7bWhShXlxphrUlTiAsitqbh3jJ-pVLVUGKs0H_JBs57MRhHrbl8gnxk9wJ3OFLMeoYqs6XzAaF58k2EN" alt="Amara Okafor" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-headline text-xl font-bold">Amara Okafor</p>
                <p className="font-label text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 text-tertiary-container">Design Consultant</p>
              </div>
            </div>
            {/* Additional members can follow this exact structure */}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}