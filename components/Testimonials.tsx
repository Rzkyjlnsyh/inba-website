import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Andi Saputra",
    role: "Mahasiswa & Swing Trader",
    profit: "+15% Portfolio / Bulan",
    quote: "Dulu saya asal beli saham gorengan dan sering nyangkut. Di Inba, saya diajarkan cara screener saham yang punya fundamental bagus tapi teknikalnya lagi diskon. Sekarang portofolio saya perlahan hijau konsisten.",
    image: "https://picsum.photos/seed/indo1/100/100"
  },
  {
    name: "Sarah Wijaya",
    role: "Ibu Rumah Tangga",
    profit: "Cuan BBCA & BBRI",
    quote: "Saya cari investasi yang aman buat tabungan anak. Mentor menjelaskan dengan bahasa manusia, bukan bahasa robot. Sekarang saya bisa nabung saham Bluechip dengan tenang tanpa takut market crash.",
    image: "https://picsum.photos/seed/indo2/100/100"
  },
  {
    name: "Budi Santoso",
    role: "Karyawan Swasta",
    profit: "Income Tambahan",
    quote: "Gaji UMR tapi pengen investasi? Bisa banget. Strategi 'Nabung Saham' yang diajarkan Inba sangat masuk akal. Gak perlu pantau chart tiap detik, cukup 15 menit sehari buat evaluasi.",
    image: "https://picsum.photos/seed/indo3/100/100"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-bg-secondary transition-colors duration-300 relative overflow-hidden">
      {/* Background Enhancements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-navy/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-current" />
            <span>Kisah Sukses Alumni</span>
          </div>
          <h2 id="testimonials-heading" className="text-3xl font-bold text-text-primary mb-4">Bukti Nyata Inba University</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Ribuan siswa telah mengubah nasib finansial mereka melalui metode pendidikan kami. Inilah cerita mereka.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-bg-primary p-8 rounded-2xl border border-border-color hover:border-brand-emerald/50 transition-all duration-300 hover:shadow-xl group relative">
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-emerald/30">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-text-primary font-bold">{item.name}</h4>
                  <span className="text-text-secondary text-sm block">{item.role}</span>
                  <span className="text-brand-emerald text-xs font-bold bg-brand-emerald/10 px-2 py-0.5 rounded mt-1 inline-block">
                    {item.profit}
                  </span>
                </div>
              </div>
              
              <div className="relative z-10">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-brand-emerald/10 transform -scale-x-100" />
                <p className="text-text-secondary italic leading-relaxed pl-4">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-6 flex gap-1 relative z-10">
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