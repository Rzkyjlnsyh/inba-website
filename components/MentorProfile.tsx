import React from 'react';
import { Instagram, Youtube, UserCheck } from 'lucide-react';

const MentorProfile: React.FC = () => {
  return (
    <section className="py-20 bg-bg-primary transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-bg-secondary to-bg-primary rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden border border-border-color">
          
          {/* Decorative Pattern */}
          <div className="absolute top-0 right-0 p-12 opacity-5 text-text-primary">
             <UserCheck size={300} />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
            {/* Mentor Image */}
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 md:w-72 md:h-72">
                <div className="absolute inset-0 bg-brand-emerald rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Head Mentor" 
                  className="relative w-full h-full object-cover rounded-full border-4 border-bg-secondary shadow-2xl"
                />
                <div className="absolute bottom-0 right-4 bg-brand-emerald text-white font-bold px-4 py-1 rounded-full text-sm shadow-lg">
                  Head Mentor
                </div>
              </div>
            </div>

            {/* Mentor Copy */}
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">Andi "The Sniper" Saputra</h2>
              <p className="text-brand-emerald font-medium mb-6">Certified Financial Technician (CFTe) | 12 Tahun Pengalaman</p>
              
              <div className="space-y-4 text-text-secondary text-lg leading-relaxed mb-8">
                <p>
                  "Saya percaya trading bukan tentang IQ tinggi, tapi tentang EQ (Emosi) yang stabil. 
                  Saya mendirikan Inba University karena muak melihat pemula ditipu oleh 'Mentor flexing' yang hanya menjual mimpi."
                </p>
                <p>
                  Metode saya fokus pada <span className="text-text-primary font-bold">Low Risk, High Reward</span>. 
                  Kita cari profit konsisten, bukan jackpot sekali lalu bangkrut.
                </p>
              </div>

              <div className="flex justify-center md:justify-start gap-4">
                 <button className="flex items-center gap-2 px-5 py-2.5 bg-bg-secondary border border-border-color rounded-lg text-text-primary hover:border-brand-emerald hover:text-brand-emerald transition-all shadow-sm">
                    <Instagram className="w-5 h-5" />
                    <span>@inbauniversity</span>
                 </button>
                 <button className="flex items-center gap-2 px-5 py-2.5 bg-bg-secondary border border-border-color rounded-lg text-text-primary hover:border-red-500 hover:text-red-500 transition-all shadow-sm">
                    <Youtube className="w-5 h-5" />
                    <span>Inba Official</span>
                 </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorProfile;
