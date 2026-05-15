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
              {/* Google "G" (inline SVG to avoid broken external image URLs) */}
              <svg
                className="w-5 h-5 mr-3"
                viewBox="0 0 48 48"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  fill="#FFC107"
                  d="M43.611 20.083H42V20H24v8h9.792c-1.678 4.657-6.12 8-11.792 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.962 3.037l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.649-.389-3.917z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.306 14.691l6.571 4.819C14.655 16.108 19.02 14 24 14c3.059 0 5.842 1.154 7.962 3.037l5.657-5.657C34.046 6.053 29.268 4 24 4c-7.514 0-14.131 3.69-17.694 10.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24 44c5.166 0 9.86-1.958 13.412-5.186l-6.194-4.823C29.898 36.28 27.103 37 24 37c-4.98 0-9.345-2.108-11.123-5.51l-6.52 5.007C9.861 40.77 16.477 44 24 44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611 20.083H42V20H24v8h9.792c-0.759 2.109-2.195 3.935-4.035 5.124l6.194 4.823C38.41 35.141 44 30.11 44 24c0-1.341-.138-2.649-.389-3.917z"
                />
              </svg>
              <span className="text-sm font-bold text-primary font-body">Google</span>
            </button>

            <button type="button" className="flex items-center justify-center px-4 py-4 bg-surface-container-lowest border border-outline-variant/30 rounded-lg hover:bg-surface-container-low transition-colors active:scale-95 shadow-sm">
              {/* Apple logo (inline SVG) */}
              <svg
                className="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  fill="currentColor"
                  d="M16.365 1.43c0.02 1.14-0.44 2.23-1.22 3.03c-0.78 0.81-1.99 1.43-3.09 1.34c-0.12-1.08 0.4-2.21 1.17-3.01c0.77-0.8 2-1.37 3.14-1.36zM20.56 17.07c-0.28 0.66-0.4 0.91-0.74 1.42c-0.63 0.96-1.36 1.93-2.34 2.61c-0.96 0.67-1.94 0.74-3.04 0.3c-0.78-0.3-1.57-0.3-2.34 0c-1.08 0.42-2.05 0.38-3.02-0.29c-1.01-0.71-1.79-1.73-2.43-2.78c-1.65-2.71-2.25-6.12-0.89-8.98c0.63-1.36 1.68-2.42 3.04-2.81c0.87-0.25 1.86-0.1 2.66 0.29c0.73 0.34 1.32 0.34 2.05 0.02c0.75-0.32 1.63-0.44 2.46-0.26c1.28 0.27 2.24 1.07 2.88 2.2c-0.02 0.03-1.34 0.79-1.33 2.42c0.01 1.98 1.77 2.72 1.78 2.72c-0.03 0.09-0.08 0.22-0.11 0.29c-0.05 0.12-0.09 0.23-0.14 0.35z"
                />
              </svg>
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