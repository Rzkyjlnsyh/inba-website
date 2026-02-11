import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, BookOpen, TrendingUp, AlertTriangle } from 'lucide-react';

const articles = [
  {
    title: "Jangan Anggap Saham Itu Judi",
    excerpt: "Banyak trader boncos karena salah mindset. Pelajari bedanya bisnis trading dengan perjudian agar modal Anda selamat.",
    category: "Psikologi",
    date: "9 Jan 2026",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "/wawasan/mindset-saham-judi",
    icon: BookOpen,
    color: "text-blue-500 bg-blue-500/10"
  },
  {
    title: "Jebakan 'Investor Dadakan'",
    excerpt: "Pagi scalping, sore nyangkut terus ngaku investor? Awas, ini penyakit paling mematikan bagi portofolio pemula.",
    category: "Strategi",
    date: "8 Jan 2026",
    image: "https://images.unsplash.com/photo-1611974765270-ca1258634369?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "/wawasan/jebakan-investor-dadakan",
    icon: TrendingUp,
    color: "text-green-500 bg-green-500/10"
  },
  {
    title: "Bahaya Saham Gorengan & Isu Liar",
    excerpt: "Saham tidur tiba-tiba bangun? Hati-hati jebakan Batman. Kenali ciri-ciri Pump & Dump sebelum Anda FOMO.",
    category: "Bandarmology",
    date: "7 Jan 2026",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "/wawasan/bahaya-saham-gorengan",
    icon: AlertTriangle,
    color: "text-red-500 bg-red-500/10"
  }
];

const Wawasan: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg-primary font-sans transition-colors duration-300">
      <Navbar />
      
      <main className="pt-32 pb-24">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-6 tracking-tight">
                Market <span className="text-brand-emerald">Insights</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                Analisa mendalam, tips psikologi, dan strategi trading institusional. 
                Belajar langsung dari pengalaman real market.
            </p>
        </div>

        {/* Articles Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article, index) => (
                    <a 
                        href={article.slug} 
                        key={index}
                        className="group bg-bg-secondary rounded-2xl overflow-hidden border border-border-color hover:border-brand-emerald/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
                    >
                        {/* Image */}
                        <div className="h-48 overflow-hidden relative">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                            <img 
                                src={article.image} 
                                alt={article.title} 
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute top-4 left-4 z-20">
                                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md ${article.color}`}>
                                    {article.category}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex items-center gap-2 text-text-secondary text-xs mb-3">
                                <span>{article.date}</span>
                                <span>•</span>
                                <span>5 min read</span>
                            </div>
                            
                            <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-brand-emerald transition-colors">
                                {article.title}
                            </h3>
                            
                            <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1">
                                {article.excerpt}
                            </p>
                            
                            <div className="flex items-center text-brand-emerald font-bold text-sm mt-auto">
                                Baca Selengkapnya
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Wawasan;
