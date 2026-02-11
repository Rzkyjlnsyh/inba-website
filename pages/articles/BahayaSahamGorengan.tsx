import React from 'react';
import ArticleLayout from '../../components/layout/ArticleLayout';
import { Skull, TrendingUp, Radio, DoorOpen, Search, BarChart3, Magnet, ShieldAlert } from 'lucide-react';
import { ProTip, WarningBox, KeyTakeaway, InfoCard } from '../../components/ArticleElements';

const BahayaSahamGorengan: React.FC = () => {
    return (
        <ArticleLayout
            title="Saham Bangun dari Kubur: Isu Akuisisi NASA Atau Jebakan Bandar?"
            category="Bandarmology"
            publishDate="7 Jan 2026"
            imageUrl="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            readTime="6 min read"
        >
            <p className="lead text-xl text-text-secondary leading-relaxed mb-10 border-b-2 border-dashed border-border-color pb-8 italic">
                "Pernah dengar saham tidur di harga 50 perak tiba-tiba loncat ke 200 hanya dalam seminggu? Rumornya gila-gilaan: mau diakuisisi perusahaan multinasional, mau sponsor MotoGP, atau bahkan isunya mau dibeli Elon Musk? 😂"
            </p>

            <h2 className="text-2xl font-extrabold mb-8 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-brand-emerald" />
                Pola Klasik "Pump & Dump"
            </h2>

            <p className="mb-10">
                Saham "GORENGAN" adalah istilah untuk saham yang volatilitasnya diatur oleh <strong>Big Player (Bandar)</strong>. Polanya selalu sama, berulang puluhan tahun, dan tujuannya satu: mengambil uang dari ritel yang FOMO.
            </p>

            <div className="space-y-6 mb-12">
                {[
                    {
                        phase: "Fase 1: Akumulasi Senyap",
                        desc: "Saat harga tiarap di 50-60, sepi transaksi. Di sinilah Smart Money pelan-pelan membeli barang dari ritel yang frustasi.",
                        icon: <Search className="w-6 h-6" />,
                        color: "bg-blue-500/10 text-blue-500"
                    },
                    {
                        phase: "Fase 2: The Pump & The News",
                        desc: "Ledakan volume! Berita 'positif' ditebar di grup Telegram. 'Target harga 1000!', 'Mau diakuisisi asing!'. Ritel mulai melirik.",
                        icon: <Radio className="w-6 h-6" />,
                        color: "bg-yellow-500/10 text-yellow-500"
                    },
                    {
                        phase: "Fase 3: Distribusi (Jebakan)",
                        desc: "Saat ritel berebut beli di harga pucuk (200++), Bandar mulai jualan. Mereka membuang barang murah kepada Anda di harga tinggi.",
                        icon: <Magnet className="w-6 h-6" />,
                        color: "bg-red-500/10 text-red-500"
                    },
                    {
                        phase: "Fase 4: Kuburan Massal",
                        desc: "Bandar keluar, harga dibanting ARB berhari-hari. Ritel nyangkut di pucuk, uang hilang 70%. Saham kembali tidur.",
                        icon: <Skull className="w-6 h-6" />,
                        color: "bg-gray-500/10 text-gray-500"
                    }
                ].map((p, i) => (
                    <div key={i} className="flex gap-5 p-6 bg-bg-secondary border border-border-color rounded-2xl hover:shadow-lg transition-all group">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${p.color} group-hover:scale-110 transition-transform`}>
                            {p.icon}
                        </div>
                        <div>
                            <h4 className="font-bold text-text-primary mb-1">{p.phase}</h4>
                            <p className="text-sm text-text-secondary m-0 leading-relaxed">{p.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <WarningBox title="KENALI CIRINYA">
                Saham gorengan biasanya memiliki fundamental yang buruk (rugi terus), market cap kecil, dan kenaikannya tidak masuk akal jika dibandingkan dengan kondisi perusahaan aslinya.
            </WarningBox>

            <h2 className="text-2xl font-extrabold mb-8 mt-16 flex items-center gap-3">
                <ShieldAlert className="w-8 h-8 text-brand-emerald" />
                Cara Menghindari Jebakan
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <InfoCard title="Cek Broker Summary" icon={<BarChart3 className="w-5 h-5 text-brand-emerald" />}>
                    Siapa yang beli? Jika hanya kumpulan broker ritel, kemungkinan besar itu jebakan.
                </InfoCard>
                <InfoCard title="Jangan Kejar Kereta" icon={<DoorOpen className="w-5 h-5 text-brand-emerald" />}>
                    Jika sudah naik tinggi (Parabolic), lupakan. Lebih baik kehilangan peluang daripada kehilangan modal.
                </InfoCard>
            </div>

            <ProTip>
                Di Inba University, kami mengajarkan cara mendeteksi <strong>Jejak Bandar</strong> saat mereka masih di Fase Akumulasi, bukan saat sudah di Fase Distribusi.
            </ProTip>

            <KeyTakeaway items={[
                "Jangan pernah beli saham karena 'Katanya'.",
                "Berita seringkali dibuat untuk memancing ritel beli di harga pucuk.",
                "Volume adalah indikator jujur yang sulit dimanipulasi.",
                "Jadilah Smart Trader yang disiplin, bukan korban euforia pasar."
            ]} />

            <p className="text-center font-extrabold text-2xl text-text-primary mt-16 border-t border-border-color pt-8">
                "Pasar Modal adalah tempat paling kejam untuk orang yang <span className="text-red-500">malas belajar</span>."
            </p>

        </ArticleLayout>
    );
};

export default BahayaSahamGorengan;
