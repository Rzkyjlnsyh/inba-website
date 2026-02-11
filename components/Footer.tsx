import React from 'react';
import { Instagram, Youtube, Facebook, MessageCircle } from 'lucide-react';

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
            <div className="flex gap-3 flex-wrap">
               {/* Instagram - #E4405F (Instagram Pink) */}
               <a 
                 href="https://www.instagram.com/inbauniversity/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 aria-label="Follow us on Instagram"
                 className="w-10 h-10 rounded-full bg-bg-primary flex items-center justify-center text-text-secondary hover:text-white hover:bg-[#E4405F] transition-all duration-300 border border-border-color hover:border-[#E4405F] hover:scale-110"
               >
                 <Instagram className="w-5 h-5" />
               </a>
               
               {/* TikTok - #000000 (Black) / #EE1D52 (TikTok Red) */}
               <a 
                 href="https://www.tiktok.com/@inbauniversity" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 aria-label="Follow us on TikTok"
                 className="w-10 h-10 rounded-full bg-bg-primary flex items-center justify-center text-text-secondary hover:text-white hover:bg-[#000000] dark:hover:bg-[#EE1D52] transition-all duration-300 border border-border-color hover:border-[#EE1D52] hover:scale-110"
               >
                 <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
               </a>
               
               {/* YouTube - #FF0000 (YouTube Red) */}
               <a 
                 href="https://www.youtube.com/channel/UCneI4ch5gRpEWRb0lkF_icw" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 aria-label="Subscribe to our YouTube channel"
                 className="w-10 h-10 rounded-full bg-bg-primary flex items-center justify-center text-text-secondary hover:text-white hover:bg-[#FF0000] transition-all duration-300 border border-border-color hover:border-[#FF0000] hover:scale-110"
               >
                 <Youtube className="w-5 h-5" />
               </a>
               
               {/* Facebook - #1877F2 (Facebook Blue) */}
               <a 
                 href="https://www.facebook.com/profile.php?id=61585344047237" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 aria-label="Follow us on Facebook"
                 className="w-10 h-10 rounded-full bg-bg-primary flex items-center justify-center text-text-secondary hover:text-white hover:bg-[#1877F2] transition-all duration-300 border border-border-color hover:border-[#1877F2] hover:scale-110"
               >
                 <Facebook className="w-5 h-5" />
               </a>
               
               {/* Threads - #000000 (Black) */}
               <a 
                 href="https://www.threads.com/@inbauniversity" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 aria-label="Follow us on Threads"
                 className="w-10 h-10 rounded-full bg-bg-primary flex items-center justify-center text-text-secondary hover:text-white hover:bg-[#000000] transition-all duration-300 border border-border-color hover:border-[#000000] hover:scale-110"
               >
                 {/* Official Threads Logo SVG (Bootstrap Icons / FontAwesome style) */}
                 <svg viewBox="0 0 16 16" className="w-5 h-5 fill-current" aria-hidden="true">
                    <path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161"/>
                 </svg>
               </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-text-primary mb-4">Program</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><a href="#curriculum" className="hover:text-brand-emerald transition-colors">Kurikulum Basic</a></li>
              <li><a href="#curriculum" className="hover:text-brand-emerald transition-colors">Pro Mastery</a></li>
              <li><a href="#pricing" className="hover:text-brand-emerald transition-colors">Private Mentoring</a></li>
              <li><a href="https://t.me/inbaofficial" target="_blank" rel="noopener noreferrer" className="hover:text-brand-emerald transition-colors">Komunitas Gratis</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text-primary mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><a href="#faq" className="hover:text-brand-emerald transition-colors">FAQ</a></li>
              <li><a href="https://t.me/inba_admin" target="_blank" rel="noopener noreferrer" className="hover:text-brand-emerald transition-colors">Hubungi Admin</a></li>
              <li><a href="#testimonials" className="hover:text-brand-emerald transition-colors">Testimoni Alumni</a></li>
              <li>
                <a href="#disclaimer" className="hover:text-brand-emerald transition-colors">Disclaimer</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 id="disclaimer" className="font-bold text-text-primary mb-4">Legal Disclaimer</h4>
            <p className="text-xs text-text-secondary leading-relaxed">
              Investasi di Pasar Modal (Saham) mengandung risiko kerugian. Kinerja masa lalu tidak menjamin hasil di masa depan.
              Seluruh keputusan investasi (Jual/Beli) sepenuhnya menjadi tanggung jawab pribadi investor (Do Your Own Research).
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