import React from 'react';
import { ArrowRight, BookOpen, Users, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-dark">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl animate-blob mix-blend-screen"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-blob animation-delay-2000 mix-blend-screen"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 text-brand-primary font-medium text-sm mb-6">
              <span className="flex h-2 w-2 relative mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
              </span>
              Pendaftaran Angkatan 12 Dibuka
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Kuasai Seni <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-emerald-300">
                Trading Profesional
              </span>
            </h1>
            
            <p className="mt-4 text-xl text-brand-muted max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Berhenti menebak arah pasar. Pelajari sistem trading teruji, manajemen risiko institusional, dan psikologi pemenang bersama Inba University.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-brand-primary hover:bg-brand-primaryHover md:text-lg transition-all shadow-lg shadow-brand-primary/25 transform hover:-translate-y-1">
                Mulai Kuliah Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="flex items-center justify-center px-8 py-4 border border-brand-surface text-base font-medium rounded-xl text-brand-light bg-brand-surface/50 hover:bg-brand-surface md:text-lg transition-all backdrop-blur-sm">
                Lihat Silabus
              </button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-brand-surface pt-8">
              <div>
                <div className="text-2xl font-bold text-white">2,500+</div>
                <div className="text-sm text-brand-muted">Alumni Sukses</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-brand-muted">Modul Kuliah</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-brand-primary">4.9/5</div>
                <div className="text-sm text-brand-muted">Rating Mahasiswa</div>
              </div>
            </div>
          </div>

          <div className="mt-16 lg:mt-0 relative hidden lg:block">
             {/* Abstract Educational Visual */}
             <div className="relative rounded-2xl bg-gradient-to-br from-brand-surface to-brand-dark border border-brand-surface p-2 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-brand-primary/5 rounded-2xl"></div>
                <div className="relative rounded-xl overflow-hidden">
                   <img 
                    src="https://picsum.photos/seed/trading/800/600" 
                    alt="Trading Education" 
                    className="w-full h-auto object-cover opacity-80 mix-blend-overlay"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
                   
                   {/* Floating Cards */}
                   <div className="absolute top-10 right-10 p-4 bg-brand-surface/90 backdrop-blur-md border border-brand-surface rounded-xl shadow-xl max-w-xs">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-blue-500/20 rounded-lg shrink-0">
                          <BookOpen className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white">Modul 3: Risk Management</div>
                          <div className="text-xs text-brand-muted mt-1">Status: Selesai</div>
                          <div className="w-full bg-brand-dark h-1.5 rounded-full mt-2">
                             <div className="bg-blue-400 h-1.5 rounded-full w-full"></div>
                          </div>
                        </div>
                      </div>
                   </div>

                   <div className="absolute bottom-10 left-10 p-4 bg-brand-surface/90 backdrop-blur-md border border-brand-primary/50 rounded-xl shadow-xl">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-brand-primary/20 rounded-lg">
                          <Award className="w-6 h-6 text-brand-primary" />
                        </div>
                        <div>
                          <div className="text-sm text-brand-muted">Sertifikat Kelulusan</div>
                          <div className="text-base font-bold text-white">Certified Pro Trader</div>
                        </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;