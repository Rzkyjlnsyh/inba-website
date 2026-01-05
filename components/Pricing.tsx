import React from 'react';
import { Check } from 'lucide-react';
import { PricingPlan } from '../types';

const plans: PricingPlan[] = [
  {
    name: "Starter Class",
    price: "Rp 499rb",
    period: "/sekali bayar",
    features: [
      "Akses 20+ Video Materi Dasar",
      "E-book 'Trading 101'",
      "Kuis & Ujian Mandiri",
      "Akses Lifetime ke Materi",
      "Tanpa Mentor"
    ],
    isPopular: false
  },
  {
    name: "Inba Academy Pro",
    price: "Rp 2.5jt",
    period: "/tahun",
    features: [
      "Akses Semua Video (Basic - Expert)",
      "Webinar Mentoring Mingguan",
      "Akses Grup Discord VIP",
      "Analisa Market Harian",
      "Review Jurnal Trading",
      "Sertifikat Kelulusan"
    ],
    isPopular: true
  },
  {
    name: "Mentoring Private",
    price: "Rp 7.5jt",
    period: "/3 bulan",
    features: [
      "Semua Fasilitas Academy",
      "1-on-1 Zoom (4x Sebulan)",
      "Personalized Trading Plan",
      "Direct WhatsApp dengan Mentor",
      "Evaluasi Psikologi Mendalam",
      "Prioritas Support"
    ],
    isPopular: false
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Investasi Leher ke Atas</h2>
          <p className="mt-4 text-xl text-slate-400">
            Pilih program yang sesuai dengan target dan gaya belajar Anda di Inba University.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl p-8 border flex flex-col ${
                plan.isPopular 
                  ? 'bg-slate-800 border-brand-gold shadow-2xl shadow-brand-gold/10 transform md:-translate-y-4' 
                  : 'bg-slate-800/50 border-slate-700'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-gold text-brand-900 px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                  REKOMENDASI
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-extrabold text-white">{plan.price}</span>
                  <span className="ml-1 text-slate-400 text-sm">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-brand-gold flex-shrink-0 mr-3" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-4 rounded-xl font-bold transition-all ${
                plan.isPopular
                  ? 'bg-gradient-to-r from-brand-gold to-yellow-500 text-brand-900 hover:shadow-lg hover:shadow-brand-gold/25'
                  : 'bg-slate-700 text-white hover:bg-slate-600'
              }`}>
                Daftar Kelas
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;