import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Apakah materi ini cocok untuk yang buta sama sekali soal saham?",
    answer: "Sangat cocok. Kami mulai dari nol: Cara buka RDN (Rekening Dana Nasabah), cara baca aplikasi sekuritas, hingga cara memilih saham yang bagus. Bahasa yang kami gunakan sederhana dan membumi."
  },
  {
    question: "Apakah ini grup rekomendasi/pom-pom saham?",
    answer: "BUKAN. Kami adalah institusi edukasi. Kami mengajarkan kailnya (analisa), bukan cuma memberi ikannya. Meski ada insight pasar harian, tujuannya agar Anda belajar mandiri, bukan ketergantungan."
  },
  {
    question: "Berapa modal minimal untuk beli saham?",
    answer: "Sangat terjangkau. Di Bursa Efek Indonesia, minimal beli 1 lot (100 lembar). Ada saham bagus yang harganya cuma Rp 50.000 per lot. Jadi, siapa saja bisa mulai investasi."
  },
  {
    question: "Apakah ada bimbingan portofolio nyangkut?",
    answer: "Ya, khususnya di paket Pro dan Private. Mentor akan membantu membedah portofolio Anda yang 'merah', memberikan opsi *cut loss* bijak atau *average down* di momen tepat."
  },
  {
    question: "Apakah materinya bisa diakses selamanya?",
    answer: "Tentu! Untuk paket membership tertentu, Anda mendapatkan akses materi seumur hidup (Lifetime) dan gratis update materi jika ada kurikulum baru."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-bg-secondary transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg-primary border border-border-color text-text-secondary text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>Paling Sering Ditanyakan</span>
          </div>
          <h2 className="text-3xl font-bold text-text-primary mb-4">Frequently Asked Questions</h2>
          <p className="text-text-secondary">
            Jawaban untuk keraguan yang mungkin Anda miliki sebelum bergabung.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-bg-primary border rounded-2xl transition-all duration-300 ${openIndex === index ? 'border-brand-emerald shadow-lg' : 'border-border-color hover:border-brand-emerald/30'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`font-semibold text-lg ${openIndex === index ? 'text-brand-emerald' : 'text-text-primary'}`}>
                  {faq.question}
                </span>
                <span className={`p-2 rounded-full transition-colors ${openIndex === index ? 'bg-brand-emerald text-white' : 'bg-bg-secondary text-text-secondary'}`}>
                  {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-text-secondary leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
