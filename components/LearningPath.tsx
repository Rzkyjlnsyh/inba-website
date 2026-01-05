import React from 'react';

const steps = [
  {
    num: "01",
    title: "Fundamental & Mindset",
    desc: "Membangun pondasi kokoh. Memahami psikologi pasar dan menghilangkan mental 'cepat kaya' yang berbahaya."
  },
  {
    num: "02",
    title: "Mastering Technical",
    desc: "Mempelajari Price Action, Supply & Demand, dan Indikator kunci yang benar-benar bekerja di pasar modern."
  },
  {
    num: "03",
    title: "Risk Management",
    desc: "Seni melindungi modal. Bagaimana cara mengatur lot size agar akun Anda anti-MC (Margin Call) meskipun salah prediksi."
  },
  {
    num: "04",
    title: "Konsistensi & Compounding",
    desc: "Fase panen. Mengulang profit kecil secara rutin yang akan menggulung menjadi kekayaan besar (Snowball Effect)."
  }
];

const LearningPath: React.FC = () => {
  return (
    <section className="py-24 bg-bg-secondary relative overflow-hidden transition-colors duration-300">
      {/* Background Pattern - Subtle */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-navy/5 skew-x-12 translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Kurikulum <span className="text-brand-emerald">Zero to Hero</span>
            </h2>
            <p className="text-lg text-text-secondary">
              Kami tidak mengajarkan "tips trik ajaib". Ini adalah silabus akademis yang disusun untuk mencetak trader profesional.
            </p>
          </div>
          <button className="hidden md:inline-flex mt-6 md:mt-0 px-6 py-3 border border-brand-emerald text-brand-emerald rounded-xl font-medium hover:bg-brand-emerald hover:text-white transition-colors cursor-pointer">
            Lihat Detail Silabus
          </button>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              {/* Connector Line (Desktop) - Subtle */}
              {idx !== steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-border-color -z-10"></div>
              )}
              
              <div className="bg-bg-primary p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 h-full border border-transparent hover:border-brand-emerald/30">
                <div className="w-16 h-16 rounded-2xl bg-bg-secondary flex items-center justify-center text-2xl font-bold text-brand-emerald mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 border border-border-color">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden text-center">
            <button className="px-6 py-3 border border-brand-emerald text-brand-emerald rounded-xl font-medium hover:bg-brand-emerald hover:text-white transition-colors w-full">
            Lihat Detail Silabus
          </button>
        </div>
      </div>
    </section>
  );
};

export default LearningPath;
