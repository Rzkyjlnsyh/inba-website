import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, GraduationCap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
               <div className="w-8 h-8 bg-brand-gold rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-brand-900 w-5 h-5" />
               </div>
               <span className="font-bold text-xl text-white">Inba<span className="text-brand-gold">University</span></span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Membangun masa depan finansial melalui edukasi trading yang terstruktur, jujur, dan berorientasi pada hasil nyata.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram className="w-5 h-5"/></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-5 h-5"/></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5"/></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook className="w-5 h-5"/></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Fakultas</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Kurikulum</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Mentoring</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Studi Kasus</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">E-Library</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Kampus</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Karir Dosen</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Blog Edukasi</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Kontak Admin</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legalitas</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Kebijakan Privasi</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Syarat & Ketentuan</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Disclaimer Risiko</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center md:text-left">
          <p className="text-slate-500 text-xs leading-relaxed">
            <strong>Peringatan Risiko:</strong> Trading Forex, Komoditas, dan CFD melibatkan risiko tinggi. Inba University adalah lembaga edukasi, bukan penasihat keuangan. Pastikan Anda memahami risiko sebelum terjun ke pasar.
          </p>
          <div className="mt-4 text-slate-600 text-sm text-center">
            &copy; {new Date().getFullYear()} Inba University Indonesia. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;