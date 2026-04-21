import Link from "next/link";

export default function SignUpPage() {
  return (
    <main className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-surface text-on-surface selection:bg-tertiary-container/30">
      
      {/* Left Column: Branding and Form */}
      <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16">
        
        {/* Header Identity */}
        <div className="mb-16">
          <Link href="/" className="text-2xl lg:text-3xl font-headline font-bold text-primary">
            The Curated Estate
          </Link>
        </div>
        
        {/* Content Container */}
        <div className="max-w-md w-full">
          <h1 className="text-5xl lg:text-6xl font-headline font-bold text-primary tracking-tight leading-[1.1] mb-6">
            Begin Your Legacy.
          </h1>
          <p className="text-secondary font-body mb-12 text-lg">
            Join the exclusive circle of Nigeria’s most prestigious property holders.
          </p>
          
          {/* Form */}
          <form className="space-y-6">
            
            {/* User Type Selection (Editorial Toggle Style) */}
            <div className="flex p-1.5 bg-surface-container-high rounded-xl mb-10 shadow-inner">
              <button type="button" className="flex-1 py-3.5 px-4 text-sm font-bold font-body rounded-lg bg-surface-container-lowest text-primary shadow-sm transition-all duration-300">
                I am a Tenant / Guest
              </button>
              <button type="button" className="flex-1 py-3.5 px-4 text-sm font-semibold font-body text-secondary hover:text-primary transition-all duration-300">
                I am a Landlord
              </button>
            </div>
            
            {/* Fields */}
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="block text-[10px] uppercase tracking-widest font-bold text-secondary font-label">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Adewale Okonjo" 
                  className="w-full bg-surface-container-highest border-none rounded-lg px-5 py-4 text-primary font-body placeholder:text-outline-variant focus:ring-2 focus:ring-tertiary-container transition-all" 
                />
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] uppercase tracking-widest font-bold text-secondary font-label">Email Address</label>
                <input 
                  type="email" 
                  placeholder="wale@example.com" 
                  className="w-full bg-surface-container-highest border-none rounded-lg px-5 py-4 text-primary font-body placeholder:text-outline-variant focus:ring-2 focus:ring-tertiary-container transition-all" 
                />
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] uppercase tracking-widest font-bold text-secondary font-label">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+234 800 000 0000" 
                  className="w-full bg-surface-container-highest border-none rounded-lg px-5 py-4 text-primary font-body placeholder:text-outline-variant focus:ring-2 focus:ring-tertiary-container transition-all" 
                />
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] uppercase tracking-widest font-bold text-secondary font-label">Password</label>
                <input 
                  type="password" 
                  placeholder="••••••••••••" 
                  className="w-full bg-surface-container-highest border-none rounded-lg px-5 py-4 text-primary font-body placeholder:text-outline-variant focus:ring-2 focus:ring-tertiary-container transition-all tracking-widest" 
                />
              </div>
            </div>
            
            {/* Terms */}
            <div className="flex items-start gap-4 pt-4">
              <input 
                id="terms" 
                type="checkbox" 
                className="mt-1 w-5 h-5 rounded border-none bg-surface-container-highest text-tertiary focus:ring-tertiary-container" 
              />
              <label htmlFor="terms" className="text-sm text-secondary font-body leading-relaxed">
                I agree to the <a href="#" className="text-primary font-bold hover:text-tertiary underline underline-offset-4 decoration-2">Terms of Service</a> and <a href="#" className="text-primary font-bold hover:text-tertiary underline underline-offset-4 decoration-2">Privacy Policy</a>.
              </label>
            </div>
            
            {/* Action */}
            <div className="pt-6">
              <button type="button" className="w-full bg-tertiary-container text-on-tertiary-container font-bold text-lg py-5 rounded-lg shadow-xl hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-3 font-headline">
                Create Account
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </button>
            </div>
          </form>
          
          <p className="mt-10 text-center text-secondary font-body">
            Already part of the estate? 
            <Link href="/login" className="text-primary font-extrabold hover:text-tertiary ml-2 transition-colors">Sign In</Link>
          </p>
        </div>

        {/* Subtle Footer */}
        <footer className="mt-auto pt-16">
          <p className="text-[10px] uppercase tracking-[0.2em] text-outline font-bold font-label">
            © 2026 The Curated Estate. Excellence in Nigerian Realty.
          </p>
        </footer>
      </div>

      {/* Right Column: Visual Anchor */}
      <div className="hidden md:block relative overflow-hidden bg-primary-container">
        {/* Architectural Image */}
        <img 
          alt="Luxury Villa at dusk" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-90 scale-105" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQoB0mg6iGILRcltiCRpTGKyH2crl0we-Jmu3r7fzgNvdxVHCVgmIz1LjudSk6XslpQIbpda7q0nKYJR5DLGmf3iqyhRQK6cbBcuA41F4wLiSRT62FbLj1OQd9YsWWpWfmfcG6RSQm5MIACsJJ7UoawSFvaabUrioPPhRlWS76DHxZA5ibOMWqe0vE14uKHLQq4DOGTFRcNfq_Dcg2i6MKkwerVOxLw0VtBTv-EzR_9HqaXXk-t53rXfYiSGeg6Uab0wvFjndMF2tj" 
        />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 bg-linear-to-t from-primary/95 via-primary/40 to-transparent"></div>
        <div className="absolute bottom-20 left-16 right-16 z-10">
          
          <div className="inline-block px-4 py-1.5 bg-tertiary-container/90 backdrop-blur-md text-on-tertiary-container text-[10px] font-bold uppercase tracking-[0.3em] mb-8 rounded font-label shadow-sm">
            Featured Asset: The Azure Ikoyi
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-headline font-bold text-white leading-tight mb-12">
            Curated for the <br/><span className="italic text-tertiary-container font-medium">Visionary.</span>
          </h2>
          
          <div className="flex gap-16 border-t border-white/20 pt-8">
            <div>
              <div className="text-3xl font-headline font-bold text-white mb-2">01.</div>
              <div className="text-xs uppercase tracking-widest text-white/60 font-bold font-label">Privacy</div>
            </div>
            <div>
              <div className="text-3xl font-headline font-bold text-white mb-2">02.</div>
              <div className="text-xs uppercase tracking-widest text-white/60 font-bold font-label">Prestige</div>
            </div>
            <div>
              <div className="text-3xl font-headline font-bold text-white mb-2">03.</div>
              <div className="text-xs uppercase tracking-widest text-white/60 font-bold font-label">Proximity</div>
            </div>
          </div>
        </div>

        {/* Floating Accents (Editorial Aesthetics) */}
        <div className="absolute top-16 right-16 w-40 h-40 border-r border-t border-tertiary-container/30"></div>
        <div className="absolute bottom-16 left-16 w-40 h-40 border-l border-b border-tertiary-container/30"></div>
      </div>

    </main>
  );
}