import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row bg-surface text-on-surface selection:bg-tertiary-container/30">
      
      {/* Left Column: Visual Anchor (Luxury Villa Imagery) */}
      <section className="hidden md:flex md:w-1/2 lg:w-3/5 relative overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Luxury Villa" 
            className="w-full h-full object-cover opacity-80 scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTaL5d18a3smODE9AB5OkaQKVmBTDX84-2sSP0pqC8ZYjGrp1FE83mP2MvL1_Mi4SCY2kDnFhb754eJ6BHtTFOqmgBH-KVKLjmpZPziCuVvit7qPdZUwB3sJq3adJBbgoBPsS8H4vVMPp6neZNFsmyIJnauHDoWjfsA36N0WhLOE--Kxv15lDz7DRo8W7JSye5MVqhU_-XMYUULPRVkAHS-irc7BUKJCC4HXPUzHNlS3NiwjBHoqFKo9rRQlssn94Uos4dLtvnAaY7" 
          />
        </div>
        
        {/* Branding Overlay */}
        <div className="relative z-10 w-full h-full p-16 flex flex-col justify-between bg-linear-to-b from-primary/60 to-primary/95">
          <div>
            <Link href="/" className="text-3xl lg:text-4xl font-headline font-bold text-tertiary-container tracking-tight block">
              The Curated Estate
            </Link>
            <p className="text-white/70 mt-4 font-body tracking-[0.2em] uppercase text-xs font-bold">Excellence in Nigerian Realty</p>
          </div>
          <div className="max-w-xl">
            <h1 className="text-5xl lg:text-7xl font-headline font-bold text-white leading-[1.1] mb-8">
              Securing your legacy, one foundation at a time.
            </h1>
            <div className="w-24 h-1.5 bg-tertiary-container"></div>
          </div>
          <div className="text-white/50 font-body text-xs tracking-widest uppercase">
            © 2026 The Curated Estate. High-End Editorial Real Estate.
          </div>
        </div>
      </section>

      {/* Right Column: Login Form Content */}
      <section className="flex-1 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-surface relative">
        <div className="w-full max-w-md">
          
          {/* Mobile Branding (Hidden on MD) */}
          <div className="md:hidden mb-12 text-center">
            <Link href="/" className="text-3xl font-headline font-bold text-tertiary-container">
              The Curated Estate
            </Link>
          </div>
          
          <div className="mb-12 text-center md:text-left">
            <h3 className="text-4xl font-headline font-bold text-primary mb-3 tracking-tight">Welcome Back</h3>
            <p className="text-secondary font-medium font-body text-lg">Access your curated portfolio and exclusive listings.</p>
          </div>

          {/* Form Section */}
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="block text-xs font-label font-bold uppercase tracking-widest text-secondary" htmlFor="email">Email Address</label>
              <input 
                id="email" 
                type="email" 
                placeholder="e.g. name@curatedestate.com" 
                className="w-full px-5 py-4 bg-surface-container-highest border-none rounded-lg focus:ring-2 focus:ring-tertiary-container transition-all text-primary font-body placeholder:text-outline-variant" 
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="block text-xs font-label font-bold uppercase tracking-widest text-secondary" htmlFor="password">Password</label>
                <a href="#" className="text-[10px] font-label font-bold uppercase tracking-widest text-tertiary hover:text-tertiary-container transition-colors">Forgot Password?</a>
              </div>
              <input 
                id="password" 
                type="password" 
                placeholder="••••••••" 
                className="w-full px-5 py-4 bg-surface-container-highest border-none rounded-lg focus:ring-2 focus:ring-tertiary-container transition-all text-primary font-body placeholder:text-outline-variant tracking-widest" 
              />
            </div>
            
            <div className="flex items-center pt-2">
              <input 
                id="remember-me" 
                type="checkbox" 
                className="h-5 w-5 text-tertiary focus:ring-tertiary-container border-outline-variant rounded bg-surface-container-highest" 
              />
              <label htmlFor="remember-me" className="ml-3 block text-sm text-secondary font-medium font-body">Remember my credentials</label>
            </div>
            
            <button type="button" className="w-full py-5 mt-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-container active:scale-[0.98] transition-all flex justify-center items-center gap-3 group shadow-xl">
              <span className="text-lg">Sign In</span>
              <span className="material-symbols-outlined text-xl group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </button>
          </form>

          {/* Social Login Separator */}
          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-outline-variant/30"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase tracking-[0.2em]">
              <span className="bg-surface px-4 text-secondary font-bold font-label">Or continue with</span>
            </div>
          </div>

          {/* Social Actions */}
          <div className="grid grid-cols-2 gap-4">
            <button type="button" className="flex items-center justify-center px-4 py-4 bg-surface-container-lowest border border-outline-variant/30 rounded-lg hover:bg-surface-container-low transition-colors active:scale-95 shadow-sm">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDamOib4BSCGTvobgmUSkU7LeonWCMm0S7kIlR3o9EY85Q22s4USqyQGHtehMm0YdU0GcOf_crU-DOKBcDxYhD8P72acPCfY_f5RF_ewKRx4Axd6gVwgzzx_H07B8xU6M7ksu--aRfZdrtZOSVlMNcaa52HY6_oGK_X8hLOl1kFad5o3DaJhYnJCyhzgE8PQSuzPjfFNku0n6768CfFJgTmTI2tmg5kXvN5gkgX4kgK39VZK1t5BPWhnFBUyy4XkAVLvk3oCRFaXR3p" alt="Google" className="w-5 h-5 mr-3" />
              <span className="text-sm font-bold text-primary font-body">Google</span>
            </button>
            <button type="button" className="flex items-center justify-center px-4 py-4 bg-surface-container-lowest border border-outline-variant/30 rounded-lg hover:bg-surface-container-low transition-colors active:scale-95 shadow-sm">
              <span className="material-symbols-outlined text-primary mr-3" style={{ fontVariationSettings: "'FILL' 1" }}>apple</span>
              <span className="text-sm font-bold text-primary font-body">Apple</span>
            </button>
          </div>

          {/* Footer Text */}
          <p className="mt-12 text-center text-secondary font-body">
            Don't have an account yet? 
            <Link href="/signup" className="text-tertiary font-bold hover:text-tertiary-container ml-2 transition-all">Request Access</Link>
          </p>
        </div>

        {/* Contextual Information Bar (Subtle Legal) */}
        <footer className="absolute bottom-8 right-8 hidden lg:block">
          <div className="flex gap-8 text-[10px] font-label font-bold uppercase tracking-[0.2em] text-outline">
            <a href="#" className="hover:text-tertiary transition-colors">Privacy</a>
            <a href="#" className="hover:text-tertiary transition-colors">Terms</a>
            <a href="#" className="hover:text-tertiary transition-colors">Legal</a>
          </div>
        </footer>
      </section>

    </main>
  );
}