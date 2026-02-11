import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, BookOpen, TrendingUp, AlertTriangle } from 'lucide-react';

import { Link } from 'react-router-dom';
// Dynamic loading of all articles
const articleFiles = import.meta.glob('../src/content/articles/*.md', { as: 'raw', eager: true });

const Wawasan: React.FC = () => {
    const articles = React.useMemo(() => {
        return Object.entries(articleFiles).map(([path, content]) => {
            try {
                const text = content as string;
                const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
                const data: any = {};

                if (match) {
                    const yaml = match[1];
                    yaml.split('\n').forEach(line => {
                        const [key, ...val] = line.split(':');
                        if (key && val.length > 0) {
                            data[key.trim()] = val.join(':').trim().replace(/^["']|["']$/g, '');
                        }
                    });
                }

                const slug = path.split('/').pop()?.replace('.md', '') || '';

                return {
                    title: data.title || 'Untitled',
                    excerpt: data.excerpt || '',
                    category: data.category || 'General',
                    date: data.date || '',
                    image: data.image || '',
                    slug: `/wawasan/${slug}`,
                    icon: TrendingUp,
                    color: data.category === 'Psikologi' ? 'text-blue-500 bg-blue-500/10' :
                        data.category === 'Strategi' ? 'text-green-500 bg-green-500/10' :
                            'text-red-500 bg-red-500/10'
                };
            } catch (err) {
                console.error('Error parsing article:', path, err);
                return null;
            }
        })
            .filter((a): a is any => a !== null)
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }, []);

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
            </main>

            <Footer />
        </div>
    );
};

export default Wawasan;
