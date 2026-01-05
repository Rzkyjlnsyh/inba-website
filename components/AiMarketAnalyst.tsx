import React, { useState } from 'react';
import { Bot, Send, Sparkles } from 'lucide-react';
import { getMarketInsight } from '../services/geminiService';

const AiMarketAnalyst: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalysis = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResponse(null);
    
    const result = await getMarketInsight(query);
    setResponse(result);
    setLoading(false);
  };

  return (
    <section id="ai-tutor" className="py-24 bg-bg-primary relative overflow-hidden transition-colors duration-300">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-emerald/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>AI Personal Tutor 24/7</span>
          </div>
          <h2 className="text-3xl font-bold text-text-primary mb-4">Tanya Jawab Seputar Trading</h2>
          <p className="text-text-secondary">
            Bingung dengan istilah "Support & Resistance"? Atau ingin tips menjaga psikologi?
            AI Tutor kami siap membimbing Anda kapan saja.
          </p>
        </div>

        <div className="bg-bg-secondary border border-border-color rounded-2xl p-6 shadow-xl">
          <div className="h-[300px] overflow-y-auto mb-6 p-4 bg-bg-primary rounded-xl border border-border-color">
            {!response && !loading && (
              <div className="h-full flex flex-col items-center justify-center text-text-secondary">
                <Bot className="w-12 h-12 mb-3 opacity-30" />
                <p>Silakan ajukan pertanyaan materi trading...</p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {['Tips Psikologi Trading', 'Cara menentukan Stop Loss', 'Apa itu Tren Bullish?'].map(hint => (
                    <button 
                      key={hint} 
                      onClick={() => setQuery(hint)}
                      className="text-xs bg-bg-secondary hover:bg-brand-emerald hover:text-white text-text-secondary border border-border-color px-3 py-1 rounded-full transition-all"
                    >
                      {hint}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {loading && (
              <div className="flex items-center justify-center h-full space-x-2">
                <div className="w-2 h-2 bg-brand-emerald rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-brand-emerald rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-brand-emerald rounded-full animate-bounce delay-200"></div>
              </div>
            )}

            {response && (
              <div className="prose prose-invert max-w-none">
                <div className="flex items-start gap-3">
                  <div className="mt-1 min-w-[32px] w-8 h-8 rounded-full bg-brand-emerald flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-bg-secondary p-4 rounded-r-xl rounded-bl-xl text-text-primary text-sm leading-relaxed whitespace-pre-line border border-border-color shadow-sm">
                    {response}
                  </div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleAnalysis} className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Contoh: Mengapa manajemen risiko itu penting?"
              className="w-full bg-bg-primary border border-border-color text-text-primary rounded-xl py-4 pl-4 pr-14 focus:outline-none focus:border-brand-emerald focus:ring-1 focus:ring-brand-emerald transition-all placeholder-text-secondary"
            />
            <button
              type="submit"
              disabled={loading || !query.trim()}
              className="absolute right-2 top-2 bottom-2 p-2 bg-brand-emerald hover:bg-brand-emerald-dark text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AiMarketAnalyst;