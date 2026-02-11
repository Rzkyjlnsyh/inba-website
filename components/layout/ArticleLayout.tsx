import React, { ReactNode } from 'react';
import { Share2, Clock, Calendar, ArrowRight, User } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';

interface ArticleLayoutProps {
  children: ReactNode;
  title: string;
  category: string;
  publishDate: string;
  author?: string;
  readTime?: string;
  imageUrl?: string;
}

const ArticleLayout: React.FC<ArticleLayoutProps> = ({ 
  children, 
  title, 
  category, 
  publishDate, 
  author = "Rizky Ahmad (Head Mentor)",
  readTime = "5 min read",
  imageUrl 
}) => {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary font-sans transition-colors duration-300">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Article Header */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <div className="flex items-center gap-2 mb-4">
                <span className="bg-brand-emerald/10 text-brand-emerald px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {category}
                </span>
                <span className="text-text-secondary text-sm flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {publishDate}
                </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
                {title}
            </h1>
            
            <div className="flex items-center justify-between border-b border-border-color pb-8">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-bg-secondary flex items-center justify-center border border-border-color">
                        <User className="w-5 h-5 text-text-secondary" />
                    </div>
                    <div>
                        <div className="font-bold text-sm">{author}</div>
                        <div className="text-xs text-text-secondary flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {readTime}
                        </div>
                    </div>
                </div>
                
                <button className="p-2 rounded-full hover:bg-bg-secondary text-text-secondary transition-colors" aria-label="Share">
                    <Share2 className="w-5 h-5" />
                </button>
            </div>
        </div>

        {/* Featured Image */}
        {imageUrl && (
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-border-color">
                    <img 
                        src={imageUrl} 
                        alt={title} 
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
                    />
                </div>
            </div>
        )}

        {/* Content & Sidebar Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* Main Content */}
                <div className="lg:col-span-8">
                    <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-text-primary prose-p:text-text-secondary prose-a:text-brand-emerald prose-blockquote:border-l-brand-emerald prose-blockquote:bg-bg-secondary/50 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-img:rounded-xl">
                        {children}
                    </article>
                </div>

                {/* Sidebar */}
                <aside className="lg:col-span-4 space-y-8">
                    {/* CTA Widget */}
                    <div className="bg-bg-secondary rounded-2xl p-6 border border-border-color sticky top-32">
                        <h3 className="text-xl font-bold mb-2">Ingin Profit Konsisten?</h3>
                        <p className="text-text-secondary text-sm mb-6">
                            Jangan cuma baca teori. Praktek langsung bareng mentor profesional di Inba University.
                        </p>
                        <ul className="space-y-3 mb-6">
                            <li className="flex items-center gap-2 text-sm">
                                <span className="w-5 h-5 rounded-full bg-brand-emerald/20 flex items-center justify-center text-brand-emerald text-xs">✓</span>
                                Live Mentoring Tiap Minggu
                            </li>
                            <li className="flex items-center gap-2 text-sm">
                                <span className="w-5 h-5 rounded-full bg-brand-emerald/20 flex items-center justify-center text-brand-emerald text-xs">✓</span>
                                Analisa Bandarmology
                            </li>
                            <li className="flex items-center gap-2 text-sm">
                                <span className="w-5 h-5 rounded-full bg-brand-emerald/20 flex items-center justify-center text-brand-emerald text-xs">✓</span>
                                Komunitas Solid
                            </li>
                        </ul>
                        <a 
                            href="https://t.me/inbaofficial" 
                            target="_blank"
                            className="w-full flex items-center justify-center gap-2 bg-brand-emerald hover:bg-brand-emerald-dark text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-lg shadow-brand-emerald/20"
                        >
                            Gabung Sekarang
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </aside>

            </div>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default ArticleLayout;
