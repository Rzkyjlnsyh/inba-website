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
    <section id="curriculum" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-gold font-semibold tracking-wide uppercase text-sm">Metode Pembelajaran</h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Kurikulum Komprehensif
          </h3>
          <p className="mt-4 max-w-2xl text-xl text-slate-400 mx-auto">
            Kami tidak hanya memberikan ikan, kami memberikan kail dan mengajarkan cara memancing di lautan pasar global bersama Inba University.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative group p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-brand-gold/50 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-gold/5 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
              <div className="relative">
                <div className="w-12 h-12 bg-brand-900 rounded-lg flex items-center justify-center mb-6 border border-brand-gold/30 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-brand-gold" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;