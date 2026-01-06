import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-12 lg:pt-48 lg:pb-20 overflow-hidden bg-bg-primary transition-colors duration-300">
      {/* Background Glows (Adjusted for Light/Dark) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-emerald/10 rounded-full blur-[100px] opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-navy/5 rounded-full blur-[100px] opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Content (Copywriting) */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-emerald/30 bg-brand-emerald/5 text-brand-emerald font-semibold text-sm mb-8 animate-fade-in-up">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-emerald"></span>
              </span>
              Professional Market Intelligence
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-text-primary tracking-tight leading-[1.1] mb-6">
              Unlock Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-emerald to-emerald-400">
                Trading Potential
              </span>
            </h1>
            
            <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-10">
              Platform edukasi <b>investasi saham</b> terbaik di Indonesia dengan pendekatan <i>Human-Centered</i>. 
              Kuasai analisis Fundamental, Teknikal, dan Bandarmology untuk profit maksimal di IHSG.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a href="https://t.me/inbaofficial" target="_blank" rel="noreferrer" className="flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-brand-emerald hover:bg-brand-emerald-dark transition-all shadow-lg shadow-brand-emerald/25 hover:shadow-brand-emerald/40 hover:-translate-y-1">
                Gabung Komunitas Gratis
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <button className="flex items-center justify-center px-8 py-4 border border-border-color text-base font-medium rounded-full text-text-secondary bg-transparent hover:bg-bg-secondary hover:text-text-primary transition-all">
                Lihat Program Kelas
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 border-t border-border-color">
              <div className="flex -space-x-3">
                 {[1,2,3,4].map((i) => (
                   <img key={i} className="w-10 h-10 rounded-full border-2 border-bg-primary" src={`https://picsum.photos/seed/${i}/100`} alt="Avatar" />
                 ))}
                 <div className="w-10 h-10 rounded-full border-2 border-bg-primary bg-bg-secondary flex items-center justify-center text-xs font-bold text-text-primary">
                   5k+
                 </div>
              </div>
              <div className="text-left">
                <div className="flex items-center text-yellow-500 gap-1 mb-1">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="text-sm text-text-secondary">Dipercaya 5.000+ Alumni</p>
              </div>
            </div>
          </div>

          {/* Right Content (Visual Authority) */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
             {/* Main Image Frame (Minimalist Border) */}
             <div className="relative z-10 bg-gradient-to-b from-bg-secondary to-bg-primary rounded-3xl p-2 shadow-2xl border border-border-color transform rotate-2 hover:rotate-0 transition-duration-500">
                <div className="rounded-2xl overflow-hidden relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
                  <img 
                    src="https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Professional Mentor" 
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay Gradient at bottom matching bg-primary */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-90"></div>
                  
                  {/* Float Card: Profit */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-bg-secondary/90 backdrop-blur-md p-4 rounded-xl border border-border-color shadow-lg">
                      <div className="flex items-center justify-between mb-2">
                         <span className="text-sm text-text-secondary">Total Profit (Bulan Ini)</span>
                         <span className="text-brand-emerald bg-brand-emerald/10 px-2 py-0.5 rounded text-xs font-bold">+128%</span>
                      </div>
                      <div className="text-2xl font-bold text-text-primary">Rp 485.000.000</div>
                    </div>
                  </div>
                </div>
             </div>

             {/* Background Decorative Element */}
             <div className="absolute top-10 -right-10 w-full h-full border-2 border-brand-emerald/10 rounded-3xl -z-10 bg-transparent rotate-6 hidden sm:block"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;