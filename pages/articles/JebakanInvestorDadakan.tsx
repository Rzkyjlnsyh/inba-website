import React from 'react';
import ArticleLayout from '../../components/layout/ArticleLayout';
import { Timer, Briefcase, AlertOctagon, RefreshCcw, ShieldAlert, CheckCircle, Zap } from 'lucide-react';
import { ProTip, WarningBox, KeyTakeaway, InfoCard } from '../../components/ArticleElements';

const JebakanInvestorDadakan: React.FC = () => {
    return (
        <ArticleLayout
            title="Pagi Scalper, Sore Jadi Investor? Resep Hancurnya Portofolio"
            category="Strategi Trading"
            publishDate="8 Jan 2026"
            imageUrl="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            readTime="5 min read"
        >
            <p className="lead text-xl text-text-secondary leading-relaxed mb-10 p-6 bg-red-500/5 rounded-2xl border-dashed border-2 border-red-500/20 italic text-center">
                "Pagi niatnya cuma cari cuan bungkus nasi (Scalping). Eh harganya turun, ya udah deh saya hold aja buat investasi jangka panjang." 🚩🚩🚩
            </p>

            <p className="mb-8">
                Kalimat di atas adalah <strong>"Red Flag"</strong> terbesar seorang trader pemula. Ini adalah fenomena <strong>"Accidental Investor"</strong> atau Investor Kecelakaan. Ini bukan strategi, ini adalah mekanisme pertahanan mental (denial) yang merupakan resep murni kehancuran finansial.
            </p>

            <h2 className="text-2xl font-extrabold mb-8 flex items-center gap-3">
                <AlertOctagon className="w-8 h-8 text-red-500" />
                Kenapa Ini Sangat Berbahaya?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="p-6 bg-bg-secondary border border-border-color rounded-2xl">
                    <div className="flex items-center gap-2 mb-4 text-brand-emerald font-bold">
                        <Timer className="w-5 h-5" />
                        <h4>SCALPING</h4>
                    </div>
                    <p className="text-sm text-text-secondary m-0">Mengandalkan momentum jangka pendek (menit/jam). Toleransi risiko sangat kecil. Jika harga tidak sesuai harapan, harus segera keluar (Cut Loss).</p>
                </div>
                <div className="p-6 bg-bg-secondary border border-border-color rounded-2xl">
                    <div className="flex items-center gap-2 mb-4 text-blue-500 font-bold">
                        <Briefcase className="w-5 h-5" />
                        <h4>INVESTING</h4>
                    </div>
                    <p className="text-sm text-text-secondary m-0">Mengandalkan valuasi fundamental (tahunan). Strategi masuk saat harga murah (Undervalued). Siap menahan posisi selama bertahun-tahun.</p>
                </div>
            </div>

            <WarningBox title="JANGAN CAMPUR ADUK">
                Mencampur kedua strategi ini berarti Anda masuk dengan alasan teknikal (momentum), tapi menolaknya saat rugi dengan alasan fundamental (valuasi). Anda sedang menolak mengakui kesalahan analisa.
            </WarningBox>

            <h2 className="text-2xl font-extrabold mb-8 flex items-center gap-3 mt-16">
                <RefreshCcw className="w-8 h-8 text-brand-emerald" />
                Siklus "Setan" Trader Pemula
            </h2>

            <div className="relative space-y-8 mb-16 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border-color before:to-transparent">
                {[
                    { title: "Beli Saham Gorengan", desc: "Ikut-ikutan tren tanpa analisa mendalam." },
                    { title: "Harga Turun 5%", desc: "Plan awal scalping harusnya Cut Loss, tapi malah ragu." },
                    { title: "Berharap Balik Modal", desc: "Harga turun 10%, mulai berdoa 'semoga balik naik'." },
                    { title: "Mencari Pembenaran", desc: "Harga turun 20%, mulai cek berita positif buat menenangkan diri." },
                    { title: "Jadi Investor Dadakan", desc: "Harga turun 50%, pasrah dan bilang 'yaudah buat tabungan masa depan'." }
                ].map((step, i) => (
                    <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border-color bg-bg-secondary text-brand-emerald font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                            {i + 1}
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-border-color bg-bg-secondary/50 group-hover:border-brand-emerald/30 transition-colors">
                            <h4 className="font-bold text-text-primary mb-1">{step.title}</h4>
                            <p className="text-xs text-text-secondary m-0 leading-relaxed">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <ProTip>
                <strong>Opportunity Cost:</strong> Bahaya terbesar bukan hanya modal Anda yang berkurang, tapi "Modal Mati" yang tidak bisa diputar di peluang lain yang lebih menguntungkan selama bertahun-tahun.
            </ProTip>

            <h2 className="text-2xl font-extrabold mb-8 flex items-center gap-3 mt-16 text-brand-emerald">
                <CheckCircle className="w-8 h-8" />
                Solusi Inba: Stick to The Plan
            </h2>

            <div className="space-y-4 mb-10">
                <InfoCard title="Tujuan Jelas Sejak Awal" icon={<ShieldAlert className="w-5 h-5" />}>
                    Tentukan apakah Anda masuk untuk Scalping, Swing, atau Investing SEBELUM klik tombol Buy.
                </InfoCard>
                <InfoCard title="Zero Negotiation" icon={<Zap className="w-5 h-5 text-yellow-500" />}>
                    Jika harga menyentuh level Stop Loss yang sudah ditentukan, keluar detik itu juga. Jangan pernah menawar.
                </InfoCard>
            </div>

            <KeyTakeaway items={[
                "Scalping dan Investing punya manajemen risiko yang berbeda.",
                "Denial adalah musuh terbesar dalam trading.",
                "Cut Loss adalah biaya asuransi untuk menyelamatkan modal Anda.",
                "Trader sukses bukan yang tidak pernah salah, tapi yang cepat mengakui kesalahan."
            ]} />

            <p className="text-center font-extrabold text-2xl text-text-primary mt-16 leading-tight">
                "Jangan biarkan gengsi membunuh <span className="text-brand-emerald underline decoration-wavy underline-offset-8">dompet Anda</span>."
            </p>

        </ArticleLayout>
    );
};

export default JebakanInvestorDadakan;
