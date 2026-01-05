import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartDataPoint } from '../types';

const data: ChartDataPoint[] = [
  { date: 'Bulan 1', portfolio: 1000, market: 1000 },
  { date: 'Bulan 2', portfolio: 1050, market: 980 },
  { date: 'Bulan 3', portfolio: 1150, market: 1020 },
  { date: 'Bulan 4', portfolio: 1280, market: 950 },
  { date: 'Bulan 5', portfolio: 1450, market: 1050 },
  { date: 'Bulan 6', portfolio: 1680, market: 1100 },
  { date: 'Bulan 9', portfolio: 2100, market: 1080 },
  { date: 'Bulan 12', portfolio: 2850, market: 1150 },
];

const PerformanceChart: React.FC = () => {
  return (
    <section id="results" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-12 items-center">
          <div className="col-span-1 mb-10 lg:mb-0">
            <h2 className="text-3xl font-bold text-white mb-6">
              Hasil Nyata <span className="text-brand-gold">Metode Inba</span>
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Grafik ini menunjukkan perbandingan pertumbuhan portofolio mahasiswa Inba University yang disiplin menerapkan sistem kami dibandingkan dengan trader retail rata-rata.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <span className="text-slate-300">Rata-rata Win Rate</span>
                <span className="text-2xl font-bold text-emerald-400">65-70%</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <span className="text-slate-300">Risk : Reward Ratio</span>
                <span className="text-2xl font-bold text-brand-gold">1 : 3</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Waktu Belajar</span>
                <span className="text-2xl font-bold text-white">3 Bulan</span>
              </div>
            </div>
            
            <button className="mt-8 text-brand-gold font-semibold hover:text-yellow-300 flex items-center group transition-colors">
              Lihat Laporan Audit
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          <div className="col-span-2 h-[400px] bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-xl relative overflow-hidden">
             {/* Chart Header */}
             <div className="flex items-center gap-4 mb-4">
               <div className="flex items-center gap-2">
                 <div className="w-3 h-3 rounded-full bg-brand-gold"></div>
                 <span className="text-sm text-slate-300">Mahasiswa Inba (Konsisten)</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                 <span className="text-sm text-slate-500">Retail Trader (Average)</span>
               </div>
             </div>

            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorPortfolio" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#fbbf24" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#fbbf24" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorMarket" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#475569" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#475569" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} dx={-10} />
                <Tooltip 
                  contentStyle={{backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '8px', color: '#f8fafc'}}
                  itemStyle={{color: '#fff'}}
                />
                <Area type="monotone" dataKey="market" stroke="#475569" strokeWidth={2} fillOpacity={1} fill="url(#colorMarket)" />
                <Area type="monotone" dataKey="portfolio" stroke="#fbbf24" strokeWidth={3} fillOpacity={1} fill="url(#colorPortfolio)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceChart;