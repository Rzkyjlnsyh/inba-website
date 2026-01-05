import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Beranda', href: '#home' },
  { label: 'Kurikulum', href: '#curriculum' },
  { label: 'Hasil Siswa', href: '#results' },
  { label: 'Testimoni', href: '#testimonials' },
  { label: 'Biaya', href: '#pricing' },
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-900/90 backdrop-blur-md shadow-lg border-b border-brand-800' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="w-10 h-10 bg-gradient-to-br from-brand-gold to-brand-goldDark rounded-xl flex items-center justify-center shadow-lg shadow-brand-gold/20">
              <GraduationCap className="text-brand-900 w-6 h-6" />
            </div>
            <span className="font-bold text-2xl tracking-tight text-white">Inba<span className="text-brand-gold">University</span></span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-slate-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
              <button className="bg-brand-gold hover:bg-brand-goldDark text-brand-900 px-5 py-2 rounded-full font-bold transition-all shadow-lg shadow-brand-gold/25 hover:shadow-brand-gold/40 transform hover:-translate-y-0.5">
                Login Mahasiswa
              </button>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-900 border-b border-brand-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="w-full mt-4 bg-brand-gold text-brand-900 px-5 py-3 rounded-lg font-bold">
              Login Mahasiswa
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;