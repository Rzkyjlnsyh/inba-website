import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { NavItem } from '../types';
import ThemeToggle from './ThemeToggle';

const navItems: NavItem[] = [
  { label: 'Beranda', href: '#home' },
  { label: 'Kurikulum', href: '#curriculum' },
  { label: 'Testimoni', href: '#testimonials' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bg-primary/90 backdrop-blur-md shadow-lg border-b border-border-color' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
             <img 
               src="/images/logo/logo-light.png" 
               alt="Inba University" 
               className="h-12 w-auto dark:hidden" 
             />
             <img 
               src="/images/logo/logo-dark.png" 
               alt="Inba University" 
               className="h-12 w-auto hidden dark:block" 
             />
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-baseline space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-text-secondary hover:text-brand-emerald px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="https://t.me/inbaofficial" 
                target="_blank" 
                rel="noreferrer"
                className="text-text-secondary hover:text-brand-emerald px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Free Community
              </a>
            </div>
            
            <div className="flex items-center gap-3 pl-6 border-l border-border-color">
              <ThemeToggle />
              <a 
                href="#pricing"
                className="bg-brand-emerald hover:bg-brand-emerald-dark text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-brand-emerald/20 hover:shadow-brand-emerald/30 hover:-translate-y-0.5"
              >
                Join Now
              </a>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-brand-emerald focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-bg-secondary border-b border-border-color shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-text-primary hover:text-brand-emerald block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="w-full mt-4 bg-brand-emerald text-white px-5 py-3 rounded-lg font-bold">
              Login Mahasiswa
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;