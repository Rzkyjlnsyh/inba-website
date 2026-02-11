import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Lightbulb, AlertTriangle, ArrowLeft, Clock, User, Calendar, Tag } from 'lucide-react';
import ArticleLayout from '../components/layout/ArticleLayout';
import { ProTip, WarningBox, KeyTakeaway } from '../components/ArticleElements';

// Vite helper to load all markdown files
const articleFiles = import.meta.glob('../src/content/articles/*.md', { as: 'raw', eager: true });

const ArticleDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [content, setContent] = useState<string>('');
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const loadArticle = async () => {
            try {
                const filePath = `../src/content/articles/${slug}.md`;
                const rawContent = articleFiles[filePath];

                if (!rawContent) {
                    setError(true);
                    return;
                }

                const text = rawContent as string;
                const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
                const frontmatter: any = {};
                let markdownBody = text;

                if (match) {
                    const yaml = match[1];
                    yaml.split('\n').forEach(line => {
                        const [key, ...val] = line.split(':');
                        if (key && val.length > 0) {
                            frontmatter[key.trim()] = val.join(':').trim().replace(/^["']|["']$/g, '');
                        }
                    });
                    markdownBody = text.replace(match[0], '').trim();
                }

                setData(frontmatter);
                setContent(markdownBody);
                window.scrollTo(0, 0);
            } catch (err) {
                console.error('Error loading article:', err);
                setError(true);
            }
        };

        loadArticle();
    }, [slug]);

    if (error) {
        return (
            <div className="min-h-screen bg-bg-primary flex items-center justify-center p-4">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-text-primary mb-4">404</h1>
                    <p className="text-text-secondary mb-8">Artikel tidak ditemukan.</p>
                    <Link to="/wawasan" className="bg-brand-emerald text-white px-6 py-3 rounded-xl font-bold inline-flex items-center gap-2">
                        <ArrowLeft className="w-5 h-5" />
                        Kembali ke Wawasan
                    </Link>
                </div>
            </div>
        );
    }

    if (!data) return null;

    // Custom components for ReactMarkdown to use our ArticleElements
    const components = {
        // Mapping custom patterns or standard elements
        blockquote: ({ children }: any) => {
            const text = React.Children.toArray(children).map((child: any) =>
                typeof child === 'string' ? child : child.props?.children || ''
            ).join('');

            // Check for custom symbols at start of blockquote content if needed
            // But for simplicity, we can just use standard blockquote for now
            // or check the content for !! or >!
            return (
                <blockquote className="border-l-4 border-brand-emerald bg-bg-secondary/50 p-6 rounded-r-xl my-8 italic">
                    {children}
                </blockquote>
            );
        },
        // We can use a trick: if paragraph starts with !!, it's a ProTip
        // If it starts with >!, it's a WarningBox
        p: ({ children }: any) => {
            const content = React.Children.toArray(children).join('');

            if (content.startsWith('!!')) {
                return <ProTip>{content.replace('!!', '').trim()}</ProTip>;
            }

            if (content.startsWith('>!')) {
                return <WarningBox title="PERHATIKAN">{content.replace('>!', '').trim()}</WarningBox>;
            }

            return <p className="mb-6 leading-relaxed">{children}</p>;
        },
        h2: ({ children }: any) => <h2 className="text-2xl font-bold mt-12 mb-6 text-text-primary">{children}</h2>,
        h3: ({ children }: any) => <h3 className="text-xl font-bold mt-8 mb-4 text-text-primary">{children}</h3>,
        ul: ({ children }: any) => <ul className="list-disc pl-6 mb-8 space-y-2">{children}</ul>,
        ol: ({ children }: any) => <ol className="list-decimal pl-6 mb-8 space-y-2">{children}</ol>,
        li: ({ children }: any) => <li className="text-text-secondary">{children}</li>,
        strong: ({ children }: any) => <strong className="text-brand-emerald font-bold">{children}</strong>,
    };

    return (
        <ArticleLayout
            title={data.title}
            category={data.category}
            publishDate={data.date}
            imageUrl={data.image}
            readTime={data.readTime}
            author={data.author}
        >
            <div className="prose prose-lg dark:prose-invert max-w-none">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={components}
                >
                    {content}
                </ReactMarkdown>
            </div>

            <div className="mt-16 pt-8 border-t border-border-color">
                <h3 className="text-lg font-bold mb-4">Ingin Belajar Lebih Dalam?</h3>
                <p className="text-text-secondary mb-6">
                    Bergabunglah dengan komunitas Inba University dan dapatkan akses ke materi eksklusif lainnya.
                </p>
                <Link
                    to="/#pricing"
                    className="inline-flex items-center gap-2 bg-brand-emerald hover:bg-brand-emerald-dark text-white px-8 py-3 rounded-xl font-bold transition-all"
                >
                    Lihat Program Belajar
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
        </ArticleLayout>
    );
};

// Internal component for the arrow
const ArrowRight = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
);

export default ArticleDetail;
