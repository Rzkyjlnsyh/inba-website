import React from 'react';
import { Check, ShieldCheck, Zap } from 'lucide-react';

const commonFeatures = [
  'Daily Trade & Scalping Strategy',
  'Swing Trading Strategy',
  'Margin Trading Insight',
  'Value Investing Approach',
  'Edukasi Pasar Saham Terstruktur',
  'Konsultasi Portofolio'
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-bg-primary relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-brand-emerald font-semibold tracking-wide uppercase mb-2">Membership Plan</h2>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">Investasi Leher ke Atas Terbaik</h2>
          <p className="text-text-secondary text-lg">
            Akses penuh ke semua materi dan fasilitas premium dengan pilihan durasi yang fleksibel.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
          
          {/* Paket 1 Bulan */}
          <div className="bg-bg-secondary border border-border-color p-8 rounded-3xl hover:shadow-xl transition-all duration-300 relative group h-full flex flex-col">
            <div className="mb-6">
               <h3 className="text-xl font-bold text-text-primary mb-2">Paket 1 Bulan</h3>
               <p className="text-text-secondary text-sm">Untuk coba-coba & pemahaman dasar.</p>
            </div>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-3xl font-bold text-brand-emerald">Rp 200.000</span>
              <span className="text-text-secondary text-sm">/ bulan</span>
            </div>
            
            <div className="flex-grow">
               <ul className="space-y-4 mb-8">
                 {commonFeatures.map((item) => (
                   <li key={item} className="flex items-start gap-3 text-text-secondary text-sm">
                     <Check className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                     <span>{item}</span>
                   </li>
                 ))}
               </ul>
            </div>

             <a href="https://t.me/inba_admin" target="_blank" rel="noreferrer" className="block w-full text-center py-4 border border-border-color bg-bg-primary hover:bg-bg-secondary text-text-primary rounded-xl font-bold transition-all">
              Daftar 1 Bulan
            </a>
          </div>

          {/* Paket 3 Bulan (Highlight) */}
          <div className="bg-bg-secondary border-2 border-brand-emerald p-8 rounded-3xl relative shadow-2xl lg:-mt-6 lg:mb-0 transform hover:scale-105 transition-transform duration-300 h-full flex flex-col z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-emerald text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg tracking-wide uppercase flex items-center gap-2">
              <Zap className="w-4 h-4 fill-current" /> Paling Ideal
            </div>

            <div className="mb-6 mt-4">
               <h3 className="text-2xl font-bold text-text-primary mb-2">Paket 3 Bulan</h3>
               <p className="text-brand-emerald font-medium text-sm">Pendalaman strategi & konsistensi.</p>
            </div>
            
             <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-extrabold text-text-primary">Rp 500.000</span>
              <span className="text-text-secondary text-sm">/ 3 bulan</span>
            </div>

            <div className="flex-grow">
               <ul className="space-y-4 mb-8">
                 {commonFeatures.map((item) => (
                   <li key={item} className="flex items-start gap-3 text-text-primary font-medium text-sm">
                     <div className="bg-brand-emerald/10 p-1 rounded-full">
                       <Check className="w-3 h-3 text-brand-emerald shrink-0" />
                     </div>
                     <span>{item}</span>
                   </li>
                 ))}
               </ul>
            </div>
            
            <a href="https://t.me/inba_admin" target="_blank" rel="noreferrer" className="block w-full text-center py-4 bg-brand-emerald hover:bg-brand-emerald-dark text-white rounded-xl font-bold text-lg shadow-lg shadow-brand-emerald/25 hover:shadow-brand-emerald/40 transition-all hover:-translate-y-1 mb-4">
              Ambil Paket 3 Bulan
            </a>
             <div className="text-center text-xs text-text-secondary">
               Hemat Rp 100.000 dibanding bulanan
             </div>
          </div>

          {/* Paket 1 Tahun */}
          <div className="bg-bg-secondary border border-border-color p-8 rounded-3xl hover:shadow-xl transition-all duration-300 h-full flex flex-col">
            <div className="mb-6">
                <h3 className="text-xl font-bold text-text-primary mb-2">Paket 1 Tahun</h3>
                <p className="text-text-secondary text-sm">Pendampingan jangka panjang.</p>
            </div>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-3xl font-bold text-text-primary">Rp 1.800.000</span>
              <span className="text-text-secondary text-sm">/ tahun</span>
            </div>
            
            <div className="flex-grow">
               <ul className="space-y-4 mb-8">
                 {commonFeatures.map((item) => (
                   <li key={item} className="flex items-start gap-3 text-text-secondary text-sm">
                     <Check className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                     <span>{item}</span>
                   </li>
                 ))}
               </ul>
            </div>

             <a href="https://t.me/inba_admin" target="_blank" rel="noreferrer" className="block w-full text-center py-4 border border-text-primary bg-text-primary hover:bg-text-secondary text-bg-primary rounded-xl font-bold transition-all">
              Daftar 1 Tahun
            </a>
             <div className="text-center text-xs text-text-secondary mt-4">
               Hanya Rp 150rb / bulan (Hemat 25%)
             </div>
          </div>

        </div>
        
        <div className="mt-12 text-center">
            <div className="inline-flex items-center justify-center gap-2 text-sm text-text-secondary bg-bg-secondary px-4 py-2 rounded-full border border-border-color">
              <ShieldCheck className="w-4 h-4 text-brand-emerald" />
              <span>Garansi 100% Uang Kembali jika materi tidak sesuai deskripsi</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
