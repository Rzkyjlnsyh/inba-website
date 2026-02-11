import React from 'react';
import { Lightbulb, AlertCircle, CheckCircle2, Info } from 'lucide-react';

export const ProTip: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="my-8 bg-brand-emerald/5 border-l-4 border-brand-emerald p-6 rounded-r-xl shadow-sm">
    <div className="flex items-center gap-2 text-brand-emerald font-bold mb-2">
      <Lightbulb className="w-5 h-5" />
      <span>INBA INSIGHT</span>
    </div>
    <div className="text-text-primary italic leading-relaxed">
      {children}
    </div>
  </div>
);

export const WarningBox: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="my-8 bg-red-500/5 border border-red-500/20 p-6 rounded-2xl shadow-sm">
    <div className="flex items-center gap-2 text-red-500 font-bold mb-3">
      <AlertCircle className="w-5 h-5" />
      <span>{title}</span>
    </div>
    <div className="text-text-secondary leading-relaxed">
      {children}
    </div>
  </div>
);

export const KeyTakeaway: React.FC<{ items: string[] }> = ({ items }) => (
  <div className="my-10 bg-bg-secondary border border-border-color rounded-2xl p-8 shadow-xl relative overflow-hidden">
    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-emerald/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
    <h3 className="text-xl font-extrabold text-text-primary mb-6 flex items-center gap-2">
      <CheckCircle2 className="w-6 h-6 text-brand-emerald" />
      Poin Penting Untuk Diingat
    </h3>
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 m-0 p-0 list-none">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-text-secondary m-0">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-emerald shrink-0"></span>
          <span className="text-sm font-medium leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const InfoCard: React.FC<{ title: string; children: React.ReactNode; icon?: React.ReactNode }> = ({ title, children, icon }) => (
  <div className="my-6 p-6 bg-bg-primary border border-border-color rounded-xl flex gap-4 shadow-sm hover:shadow-md transition-shadow">
    {icon && <div className="text-brand-emerald shrink-0">{icon}</div>}
    <div>
      <h4 className="font-bold text-text-primary mb-1">{title}</h4>
      <div className="text-sm text-text-secondary leading-relaxed">{children}</div>
    </div>
  </div>
);
