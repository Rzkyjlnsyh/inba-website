import React from 'react';
import { ArrowRight, BookOpen, TrendingUp, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

import matter from 'gray-matter';

// Dynamic loading of articles
const articleFiles = import.meta.glob('../content/articles/*.md', { as: 'raw', eager: true });

const articles = Object.entries(articleFiles).map(([path, content]) => {
  const { data } = matter(content as string);
  const slug = path.split('/').pop()?.replace('.md', '') || '';

  return {
    title: data.title,
    excerpt: data.excerpt,
    category: data.category,
    date: data.date,
    image: data.image,
    slug: `/wawasan/${slug}`,
    icon: TrendingUp, // Default icon or map from data
    color: data.category === 'Psikologi' ? 'text-blue-500 bg-blue-500/10' :
      data.category === 'Strategi' ? 'text-green-500 bg-green-500/10' :
        'text-red-500 bg-red-500/10'
  };
}).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);

const LatestInsights: React.FC = () => {
  return (
    <section id="updates" className="py-24 bg-bg-primary transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-base text-brand-emerald font-semibold tracking-wide uppercase mb-2">Market Insights</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Latest Updates & Education
            </h3>
            <p className="text-lg text-text-secondary">
              Update terbaru seputar analisa pasar, psikologi trading, dan strategi Bandarmology untuk membantu perjalanan trading Anda.
            </p>
          </div>
          <Link
            to="/wawasan"
            className="flex items-center gap-2 text-brand-emerald font-bold hover:gap-3 transition-all group"
          >
            Lihat Semua Artikel
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Link
              to={article.slug}
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;
