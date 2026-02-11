import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

const navItems: NavItem[] = [
  { label: 'Beranda', href: '/' },
  { label: 'Kurikulum', href: '/#curriculum' },
  { label: 'Wawasan', href: '/wawasan' },
  { label: 'Testimoni', href: '/#testimonials' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    setIsOpen(false);
  };

  const isHashLink = (href: string) => href.includes('#');

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bg-primary/95 backdrop-blur-md shadow-lg border-b border-border-color' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="shrink-0 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
             <img 
               src="/images/logo/logo-light.png" 
               alt="Inba University" 
               className="h-9 w-auto dark:hidden" 
             />
             <img 
               src="/images/logo/logo-dark.png" 
               alt="Inba University" 
               className="h-9 w-auto hidden dark:block" 
             />
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-baseline space-x-6">
              {navItems.map((item) => (
                isHashLink(item.href) ? (
                   <a
                    key={item.label}
                    href={item.href}
                    className="text-text-secondary hover:text-brand-emerald px-3 py-2 rounded-md text-sm font-medium transition-colors"
                   >
                     {item.label}
                   </a>
                ) : (
                   <Link
                    key={item.label}
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === item.href ? 'text-brand-emerald font-bold' : 'text-text-secondary hover:text-brand-emerald'}`}
                   >
                     {item.label}
                   </Link>
                )
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
                href="https://t.me/inba_admin"
                target="_blank"
                rel="noreferrer"
                className="bg-brand-emerald hover:bg-brand-emerald-dark text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-brand-emerald/20 hover:shadow-brand-emerald/30 hover:-translate-y-0.5 active:scale-95"
              >
                Daftar Sekarang
              </a>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-brand-emerald focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-bg-secondary border-t border-border-color shadow-xl rounded-b-2xl">
          {navItems.map((item) => (
             isHashLink(item.href) ? (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleClick}
                  className="text-text-secondary hover:text-brand-emerald block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.label}
                </a>
             ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={handleClick}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === item.href ? 'text-brand-emerald font-bold' : 'text-text-secondary hover:text-brand-emerald'}`}
                >
                  {item.label}
                </Link>
             )
          ))}
          <a
            href="https://t.me/inbaofficial"
            target="_blank" 
            rel="noreferrer"
            onClick={handleClick}
            className="text-text-secondary hover:text-brand-emerald block px-3 py-2 rounded-md text-base font-medium"
          >
             Free Community
          </a>
          <div className="pt-4 pb-2 px-3">
             <a 
                href="https://t.me/inba_admin"
                target="_blank"
                rel="noreferrer"
                onClick={handleClick}
                className="block w-full text-center bg-brand-emerald hover:bg-brand-emerald-dark text-white px-5 py-3 rounded-xl font-bold transition-all shadow-md active:scale-95"
              >
                Daftar Sekarang
              </a>
          </div>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;