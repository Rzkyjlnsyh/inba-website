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
    
    // Simulate thinking time for UX if api is too fast, or just call directly
    const result = await getMarketInsight(query);
    setResponse(result);
    setLoading(false);
  };

  return (
    <section id="ai-tutor" className="py-24 bg-gradient-to-b from-slate-900 to-brand-900 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>AI Personal Tutor 24/7</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Tanya Jawab Seputar Trading</h2>
          <p className="text-slate-400">
            Bingung dengan istilah "Support & Resistance"? Atau ingin tips menjaga psikologi?
            AI Tutor kami siap membimbing Anda kapan saja.
          </p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-6 shadow-2xl">
          <div className="h-[300px] overflow-y-auto mb-6 p-4 bg-slate-900/50 rounded-xl border border-slate-800/50">
            {!response && !loading && (
              <div className="h-full flex flex-col items-center justify-center text-slate-500">
                <Bot className="w-12 h-12 mb-3 opacity-50" />
                <p>Silakan ajukan pertanyaan materi trading...</p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {['Tips Psikologi Trading', 'Cara menentukan Stop Loss', 'Apa itu Tren Bullish?'].map(hint => (
                    <button 
                      key={hint} 
                      onClick={() => setQuery(hint)}
                      className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1 rounded-full transition-colors"
                    >
                      {hint}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {loading && (
              <div className="flex items-center justify-center h-full space-x-2">
                <div className="w-2 h-2 bg-brand-gold rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-brand-gold rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-brand-gold rounded-full animate-bounce delay-200"></div>
              </div>
            )}

            {response && (
              <div className="prose prose-invert max-w-none">
                <div className="flex items-start gap-3">
                  <div className="mt-1 min-w-[32px] w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center">
                    <Bot className="w-5 h-5 text-brand-900" />
                  </div>
                  <div className="bg-slate-800 p-4 rounded-r-xl rounded-bl-xl text-slate-200 text-sm leading-relaxed whitespace-pre-line">
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
              className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl py-4 pl-4 pr-14 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all placeholder-slate-500"
            />
            <button
              type="submit"
              disabled={loading || !query.trim()}
              className="absolute right-2 top-2 bottom-2 p-2 bg-brand-gold hover:bg-brand-goldDark text-brand-900 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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