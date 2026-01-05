import React from 'react';
import { Instagram, Youtube, Facebook, Twitter, GraduationCap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-secondary pt-16 pb-8 border-t border-border-color transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          <div className="col-span-1 md:col-span-1">
             <div className="mb-4">
                <img 
                  src="/images/logo/logo-light.png" 
                  alt="Inba University" 
                  className="h-10 w-auto dark:hidden" 
                />
                <img 
                  src="/images/logo/logo-dark.png" 
                  alt="Inba University" 
                  className="h-10 w-auto hidden dark:block" 
                />
             </div>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Professional Market Intelligence & Education Platform. Mencetak trader mandiri dengan psikologi yang matang.
            </p>
            <div className="flex gap-4">
               <a href="https://www.instagram.com/inbauniversity/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-bg-primary flex items-center justify-center text-text-secondary hover:text-brand-emerald hover:bg-brand-emerald/10 transition-colors border border-border-color">
                 <Instagram className="w-5 h-5" />
               </a>
               <a href="https://www.youtube.com/@inbauniversity" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-bg-primary flex items-center justify-center text-text-secondary hover:text-red-500 hover:bg-red-500/10 transition-colors border border-border-color">
                 <Youtube className="w-5 h-5" />
               </a>
               <a href="https://www.tiktok.com/@inbauniversity" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-bg-primary flex items-center justify-center text-text-secondary hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-border-color">
                 <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
               </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-text-primary mb-4">Program</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><a href="#curriculum" className="hover:text-brand-emerald transition-colors">Kurikulum Basic</a></li>
              <li><a href="#curriculum" className="hover:text-brand-emerald transition-colors">Pro Mastery</a></li>
              <li><a href="#pricing" className="hover:text-brand-emerald transition-colors">Private Mentoring</a></li>
              <li><a href="#" className="hover:text-brand-emerald transition-colors">Webinar Gratis</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text-primary mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><a href="#" className="hover:text-brand-emerald transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-brand-emerald transition-colors">Hubungi Admin</a></li>
              <li><a href="#" className="hover:text-brand-emerald transition-colors">Testimoni Alumni</a></li>
              <li><a href="#" className="hover:text-brand-emerald transition-colors">Disclaimer</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text-primary mb-4">Legal</h4>
            <p className="text-xs text-text-secondary leading-relaxed">
              Perdagangan saham dan aset kripto memiliki risiko tinggi. Kinerja masa lalu tidak menjamin hasil di masa depan. Berinvestasilah dengan bijak.
            </p>
            <p className="mt-4 text-xs text-text-secondary">
              © {new Date().getFullYear()} Inba University. All rights reserved.
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;