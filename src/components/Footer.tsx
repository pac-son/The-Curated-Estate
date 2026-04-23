import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full mt-20 bg-primary-container text-white border-t border-outline/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-6 md:px-12 py-20 w-full max-w-480 mx-auto">
        
        {/* Brand & Mission */}
        <div className="space-y-6">
          <div className="font-headline text-xl font-bold text-tertiary-container">
            The Curated Estate
          </div>
          <p className="text-gray-400 font-body text-sm tracking-wide leading-loose pr-4">
            The digital curator for Nigeria's most prestigious addresses. Redefining the art of living through architectural excellence.
          </p>
        </div>

        {/* Company Links */}
        <div className="space-y-4">
          <h4 className="font-bold text-sm tracking-widest uppercase text-tertiary-container">Company Info</h4>
          <ul className="space-y-2 text-gray-400 font-body text-sm tracking-wide">
            <li><Link href="/about" className="hover:text-tertiary-container transition-all">About Our Curation</Link></li>
            <li><Link href="#" className="hover:text-tertiary-container transition-all">Investment Advisory</Link></li>
            <li><Link href="#" className="hover:text-tertiary-container transition-all">Careers</Link></li>
            <li><Link href="#" className="hover:text-tertiary-container transition-all">Legal Terms</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="font-bold text-sm tracking-widest uppercase text-tertiary-container">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 font-body text-sm tracking-wide">
            <li><Link href="/" className="hover:text-tertiary-container transition-all">Luxury Rentals</Link></li>
            <li><Link href="/shortlets" className="hover:text-tertiary-container transition-all">Executive Shortlets</Link></li>
            <li><Link href="/list-property" className="hover:text-tertiary-container transition-all">List a Masterpiece</Link></li>
            <li><Link href="/login" className="hover:text-tertiary-container transition-all">Owner Portal</Link></li>
          </ul>
        </div>

        {/* Newsletter & Contact */}
        <div className="space-y-4">
          <h4 className="font-bold text-sm tracking-widest uppercase text-tertiary-container">Newsletter</h4>
          <p className="text-gray-400 text-xs leading-relaxed">Curated real estate insights delivered bi-weekly.</p>
          <div className="flex gap-2 mt-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-white/10 border-none rounded px-4 py-2 text-sm w-full focus:ring-1 focus:ring-tertiary-container text-white placeholder:text-gray-500"
            />
            <button className="bg-tertiary-container text-primary-container px-4 py-2 rounded font-bold text-sm hover:brightness-110 transition-all">
              Join
            </button>
          </div>
          <div className="flex gap-4 pt-6">
            <a href="#" className="text-gray-400 hover:text-tertiary-container transition-all"><span className="material-symbols-outlined">mail</span></a>
            <a href="#" className="text-gray-400 hover:text-tertiary-container transition-all"><span className="material-symbols-outlined">public</span></a>
            <a href="#" className="text-gray-400 hover:text-tertiary-container transition-all"><span className="material-symbols-outlined">camera</span></a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="px-6 md:px-12 py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-500 font-body text-xs tracking-widest uppercase max-w-480 mx-auto gap-4">
        <div>© 2026 The Curated Estate. The Digital Curator.</div>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-white transition-colors">WhatsApp</Link>
          <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
          <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
}