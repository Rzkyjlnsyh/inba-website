import React from 'react';
import { Quote, Star, User } from 'lucide-react';

const testimonials = [
  {
    name: "Andi Saputra",
    role: "Alumni Batch 5",
    profit: "+$2,400 / bulan",
    quote: "Dulu saya sering MC (Margin Call) karena tidak punya trading plan. Setelah lulus dari Inba University, saya mengerti bahwa trading bukan soal tebak-tebakan, tapi probabilitas. Sekarang trading jadi sumber penghasilan utama saya.",
    image: "https://picsum.photos/seed/andi/100/100"
  },
  {
    name: "Sarah Wijaya",
    role: "Alumni Batch 8",
    profit: "ROI 45% (3 Bulan)",
    quote: "Materi psikologi trading di sini benar-benar mengubah cara pandang saya. Mentornya sangat sabar membimbing dari nol sampai bisa profit konsisten. Sangat recommended untuk pemula.",
    image: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    name: "Budi Santoso",
    role: "Alumni Batch 2",
    profit: "Full Time Trader",
    quote: "Investasi terbaik yang pernah saya lakukan. Biaya kuliahnya sebanding dengan ilmu 'daging' yang didapat. Komunitas discord-nya juga sangat solid, kita saling bantu analisa setiap hari.",
    image: "https://picsum.photos/seed/budi/100/100"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-slate-900 to-brand-900 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-brand-gold" />
            <span>Kisah Sukses Alumni</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Bukti Nyata Inba University</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Ribuan siswa telah mengubah nasib finansial mereka melalui metode pendidikan kami. Inilah cerita mereka.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-brand-gold/50 transition-all duration-300 hover:shadow-xl hover:shadow-brand-gold/10 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-gold/30">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-white font-bold">{item.name}</h4>
                  <span className="text-slate-400 text-sm block">{item.role}</span>
                  <span className="text-brand-gold text-xs font-semibold">{item.profit}</span>
                </div>
              </div>
              
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-brand-gold/10 transform -scale-x-100" />
                <p className="text-slate-300 italic leading-relaxed relative z-10 pl-4">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-6 flex gap-1">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;