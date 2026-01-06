import React from 'react';
import { BookOpen, TrendingUp, Shield, Brain, Video, Users } from 'lucide-react';
import { FeatureProps } from '../types';

const features: FeatureProps[] = [
  {
    title: "Analisa Teknikal Mendalam",
    description: "Kuasai Price Action, Market Structure, dan Supply & Demand untuk entry yang presisi dan probabilitas tinggi.",
    icon: TrendingUp
  },
  {
    title: "Fundamental Makro Ekonomi",
    description: "Pahami bagaimana berita ekonomi global dan kebijakan bank sentral menggerakkan pasar mata uang.",
    icon: BookOpen
  },
  {
    title: "Manajemen Risiko Institusional",
    description: "Belajar cara melindungi modal Anda. Rumus position sizing, risk/reward ratio, dan manajemen drawdown.",
    icon: Shield
  },
  {
    title: "Psikologi Trading",
    description: "Bangun mindset pemenang. Kendalikan emosi, fear, dan greed untuk menjaga konsistensi jangka panjang.",
    icon: Brain
  },
  {
    title: "Mentoring Live Mingguan",
    description: "Sesi tanya jawab langsung dan analisa pasar mingguan bersama dosen praktisi via Zoom.",
    icon: Video
  },
  {
    title: "Komunitas & Sinyal",
    description: "Bergabung dengan grup Discord eksklusif. Diskusikan setup, berbagi ide, dan tumbuh bersama trader lain.",
    icon: Users
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-bg-secondary relative overflow-hidden transition-colors duration-300">
      {/* Background Pattern - Subtle */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-brand-navy/5 -skew-x-12 -translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-base text-brand-emerald font-semibold tracking-wide uppercase mb-2">Metode Pembelajaran</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Kurikulum Komprehensif
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-text-secondary mx-auto">
            Kami tidak hanya memberikan ikan, kami memberikan kail dan mengajarkan cara memancing di lautan pasar global bersama Inba University.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative group p-8 bg-bg-primary rounded-2xl border border-border-color hover:border-brand-emerald/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus-within:ring-2 focus-within:ring-brand-emerald focus-within:ring-offset-2"
              tabIndex={0}
              role="article"
              aria-labelledby={`feature-title-${index}`}
            >
              <div className="absolute inset-0 bg-linear-to-br from-brand-emerald/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
              <div className="relative z-10">
                <div 
                  className="w-14 h-14 bg-bg-secondary rounded-2xl flex items-center justify-center mb-6 border border-brand-emerald/30 shadow-sm group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                >
                  <feature.icon className="h-7 w-7 text-brand-emerald" />
                </div>
                <h4 
                  id={`feature-title-${index}`}
                  className="text-xl font-bold text-text-primary mb-3"
                >
                  {feature.title}
                </h4>
                <p className="text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;