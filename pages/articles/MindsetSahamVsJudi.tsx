import React from 'react';
import ArticleLayout from '../../components/layout/ArticleLayout';
import { Brain, Target, ShieldCheck, TrendingUp, AlertTriangle, Zap } from 'lucide-react';
import { ProTip, WarningBox, KeyTakeaway, InfoCard } from '../../components/ArticleElements';

const MindsetSahamVsJudi: React.FC = () => {
    return (
        <ArticleLayout
            title="Jangan Anggap Saham Itu Judi: Kenali Perbedannya Sebelum Anda Boncos"
            category="Psikologi Trading"
            publishDate="9 Jan 2026"
            imageUrl="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            readTime="4 min read"
        >
            <p className="lead text-xl text-text-secondary leading-relaxed mb-10 border-l-4 border-brand-emerald pl-6 font-medium italic">
                "Banyak trader pemula mengalami kerugian besar bukan karena mereka membeli saham yang jelek, melainkan karena mindset yang salah. Mereka memperlakukan bursa efek seperti meja kasino."
            </p>

            <h2 className="flex items-center gap-3 text-2xl font-extrabold mb-6 group">
                <Brain className="w-8 h-8 text-brand-emerald group-hover:rotate-12 transition-transform" />
                Jebakan Mindset "Cepat Kaya"
            </h2>

            <p>
                Saat Anda masuk ke pasar saham dengan harapan melipatgandakan uang dalam semalam hanya dengan menebak arah harga, saat itulah Anda sedang <strong>berjudi</strong>. Bursa Efek Indonesia (BEI) bukanlah Las Vegas. Di sini, probabilitas kemenangan bukan diatur oleh keberuntungan, tapi oleh data dan strategi yang terukur.
            </p>

            <WarningBox title="WASPADA: Ciri-ciri Trader 'Penjudi'">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                    <InfoCard title="No Trading Plan" icon={<AlertTriangle className="w-5 h-5 " />}>
                        Masuk pasar hanya berdasarkan 'kata orang' tanpa rencana entry & exit.
                    </InfoCard>
                    <InfoCard title="Feeling Trading" icon={<Zap className="w-5 h-5" />}>
                        Lebih percaya insting daripada Analisa Teknikal atau Fundamental.
                    </InfoCard>
                    <InfoCard title="No Stop Loss" icon={<ShieldCheck className="w-5 h-5" />}>
                        Menitipkan modal pada doa daripada disiplin mengatur batas risiko.
                    </InfoCard>
                    <InfoCard title="Overtrading" icon={<TrendingUp className="w-5 h-5 rotate-180" />}>
                        Balas dendam saat rugi dan memaksakan transaksi tanpa arah.
                    </InfoCard>
                </div>
            </WarningBox>

            <p className="my-10 text-lg leading-relaxed">
                Seorang pedagang profesional memperlakukan trading sebagai <strong>bisnis nyata</strong>. Seperti toko kelontong, ada biaya operasional (kerugian/loss) dan ada keuntungan (profit). Kuncinya bukan menghindari kerugian, tapi menjaga kerugian sekecil mungkin agar keuntungan bisa menutupinya.
            </p>

            <h2 className="flex items-center gap-3 text-2xl font-extrabold mb-6 mt-12">
                <Target className="w-8 h-8 text-brand-emerald" />
                Strategi vs Keberuntungan
            </h2>

            <p>
                Dalam Inba University, kami mengajarkan konsep <strong>Risk Management</strong> yang ketat. Kami tidak menebak. Kami menganalisa struktur pasar (Market Structure), aliran dana bandar (Bandarmology), dan hanya masuk ketika probabilitas menang jauh lebih besar daripada risiko kalah.
            </p>

            <ProTip>
                Ingat, pasar saham adalah alat transfer kekayaan dari yang tidak sabar kepada yang sabar. Fokuslah pada PROSES belajar, bukan hanya hasil akhir berupa cuan instan.
            </ProTip>

            <h2 className="text-2xl font-extrabold mb-8 mt-12">3 Langkah Transformasi Mindset</h2>

            <div className="space-y-4 mb-10">
                {[
                    { title: "Belajar Analisa", desc: "Jangan malas membaca chart. Analisa adalah kompas Anda di tengah badai market." },
                    { title: "Disiplin Total", desc: "Patuhi plan yang sudah dibuat. Jika harga menyentuh Stop Loss, keluar. Titik." },
                    { title: "Kelola Emosi", desc: "Kuasai psikologi Anda. Jangan FOMO saat harga terbang tinggi, jangan panik saat koreksi." }
                ].map((step, idx) => (
                    <div key={idx} className="flex gap-4 p-5 bg-bg-secondary border border-border-color rounded-2xl hover:border-brand-emerald/50 transition-all">
                        <div className="w-10 h-10 rounded-full bg-brand-emerald/10 text-brand-emerald flex items-center justify-center font-bold shrink-0">
                            {idx + 1}
                        </div>
                        <div>
                            <h4 className="font-bold text-text-primary">{step.title}</h4>
                            <p className="text-sm text-text-secondary m-0 leading-relaxed">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <KeyTakeaway items={[
                "Saham adalah bisnis berbasis data, bukan tebak-tebakan.",
                "Risk Management adalah nyawa dari portofolio Anda.",
                "Disiplin cut loss adalah kunci bertahan hidup di market.",
                "Kesuksesan trading adalah 80% Psikologi dan 20% Teknikal."
            ]} />

            <p className="text-center font-bold text-text-primary text-xl mt-16 italic">
                "Mau di sisi mana Anda ingin berada? Penjudi yang boncos, atau Trader yang matang?"
            </p>

        </ArticleLayout>
    );
};

export default MindsetSahamVsJudi;
