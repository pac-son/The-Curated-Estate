"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Rent', href: '/' },
    { name: 'Shortlets', href: '/shortlets' },
    { name: 'List Your Property', href: '/list-property' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-primary/80 backdrop-blur-xl shadow-[0_32px_64px_-15px_rgba(0,0,0,0.06)] border-b border-outline-variant/10">
      <div className="flex justify-between items-center px-6 md:px-12 py-6 max-w-[1920px] mx-auto">
        
        {/* Brand Logo */}
        <Link href="/" className="font-headline text-2xl font-bold text-primary dark:text-white tracking-tighter">
          The Curated Estate
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => {
            // Determine active state based on current route
            const isActive = pathname === link.href;

            return (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`font-headline text-lg tracking-tight transition-colors duration-300 ${
                  isActive 
                    ? "text-tertiary-container font-semibold border-b-2 border-tertiary-container pb-1" 
                    : "text-primary dark:text-gray-300 font-medium hover:text-tertiary-container"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-6">
          <Link 
            href="/login" 
            className="hidden md:block font-headline text-lg text-primary dark:text-white transition-all ease-in-out hover:text-tertiary-container active:scale-95"
          >
            Sign In
          </Link>
          <button className="md:hidden text-primary dark:text-white">
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>

      </div>
    </nav>
  );
}