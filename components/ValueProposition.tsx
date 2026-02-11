import React from 'react';
import { Target, TrendingUp, Users } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: "Sistem Trading Teruji",
    description: "Metode yang sudah diuji ribuan kali di berbagai kondisi pasar (Bullish, Bearish, Sideways) dengan Win Rate di atas 65%."
  },
  {
    icon: TrendingUp,
    title: "Live Trading Real Account",
    description: "Kami tidak hanya bicara teori. Mentor melakukan live trading dengan akun asli, transparan, dan bisa diverifikasi."
  },
  {
    icon: Users,
    title: "Komunitas & Sinyal Premium",
    description: "Gabung dengan ribuan trader lain. Dapatkan sinyal harian dengan entry, stop loss, dan take profit yang jelas."
  }
];

import SpotlightCard from './SpotlightCard';

const ValueProposition: React.FC = () => {
  return (
    <section className="py-24 bg-bg-primary relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-brand-emerald font-semibold tracking-wide uppercase mb-2">Mengapa Memilih Kami?</h2>
          <p className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Berhenti Membakar Uang Anda di Pasar
          </p>
          <p className="text-lg text-text-secondary">
            Mayoritas trader pemula gagal karena tidak memiliki sistem. Kami menyediakan roadmap yang jelas untuk kesuksesan Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <SpotlightCard key={index} className="p-8 h-full">
              <div className="relative z-10">
                <div className="w-14 h-14 bg-bg-primary/50 rounded-2xl flex items-center justify-center mb-6 text-brand-emerald shadow-sm border border-brand-emerald/20">
                  <benefit.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">{benefit.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
