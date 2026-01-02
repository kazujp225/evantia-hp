import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata = {
    title: "About | EVANTIA",
    description: "未来に責任を持つことだ。",
};

export default function AboutPage() {
    return (
        <main className="bg-background min-h-screen">

            {/* Hero Image */}
            <div className="relative min-h-[80vh] md:h-[70vh] w-full overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
                    alt="About Hero"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/60 md:bg-black/40" />
                <div className="absolute bottom-0 left-0 w-full px-6 pb-16 md:pb-20">
                    <div className="max-w-screen-xl mx-auto">
                        <ScrollReveal>
                            <h1 className="text-xl font-black tracking-widest uppercase mb-6 md:mb-8 text-white">Philosophy</h1>
                            <p className="text-3xl md:text-6xl lg:text-7xl font-black leading-[1.15] max-w-5xl text-white">
                                挑戦の価値と面白さを<br />
                                最大化する
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </div>

            <div className="max-w-screen-xl mx-auto px-6 py-24">

                {/* Philosophy Detail with Image */}
                <ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-40">
                        <div className="text-muted-foreground leading-loose font-bold text-xl md:text-2xl space-y-10">
                            <p>
                                エバンティアは、Evand＝挑戦、tir＝場所を由来とし、<br className="hidden md:inline" />
                                人も企業も"より良い未来"を実現できる場として誕生しました。
                            </p>
                            <p>
                                顧客や社会や仲間のために最良を追求したい人が<br className="hidden md:inline" />
                                モチベーション高く働ける組織でありたい。
                            </p>
                            <p>
                                挑戦には痛みも伴うが、その過程こそが人を成長させ、成果へとつながる。<br className="hidden md:inline" />
                                だからこそ、公平な裁量と誠実な基準のもとで、<br className="hidden md:inline" />
                                "挑戦する人の潜在力を最大限に引き出す場所"でいたい。<br />
                                それがエバンティアの理想です。
                            </p>
                        </div>
                        <div className="relative aspect-square md:aspect-[4/5] bg-muted">
                            <Image
                                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200"
                                alt="Working"
                                fill
                                className="object-cover transition-all duration-1000 hover:scale-105"
                            />
                        </div>
                    </div>
                </ScrollReveal>

                {/* Corporate Philosophy */}
                <div className="border-t border-border pt-20 mb-20">
                    <ScrollReveal>
                        <h2 className="text-sm md:text-[10px] font-black tracking-[0.4em] uppercase mb-12">企業理念</h2>
                        <div className="max-w-3xl">
                            <p className="text-2xl md:text-3xl font-bold leading-relaxed mb-8">
                                採用は「人を集めること」ではなく、<br />
                                「未来をつくること」。
                            </p>
                            <p className="text-muted-foreground font-medium leading-relaxed text-lg">
                                私たちは人材コンサルの専門性を活かし、企業一社一社の課題に向き合い、
                                最適な人材との出会いを実現することで、企業の成長を支えます。
                            </p>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Company Profile - High Impact List */}
                <div className="border-t border-black pt-20">
                    <ScrollReveal>
                        <h2 className="text-xs font-bold tracking-[0.2em] text-[var(--color-brand-accent)] uppercase mb-10 flex items-center gap-3">
                            <span className="w-4 h-4 rounded-full border border-[var(--color-brand-accent)]"></span>
                            Company Profile
                        </h2>
                        <div className="border-t border-black/10">
                            {[
                                { label: "会社名", value: "株式会社エバンティア", sub: "EVANTIA Inc." },
                                { label: "設立", value: "2026年1月5日" },
                                { label: "資本金", value: "500万円" },
                                { label: "代表取締役", value: "新井 淳平", sub: "Junpei Arai" },
                                { label: "取締役", value: "豊嶋 令", sub: "Ryo Toyoshima" },
                                { label: "所在地", value: "〒541-0047 大阪府大阪市中央区淡路町1-4-9 TPR北浜ビル 6F", link: "https://maps.google.com" },
                                { label: "連絡先", value: "jyunpei.arai@evantia-co.jp", sub: "090-2393-2820" }
                            ].map((row, i) => (
                                <div key={i} className="group grid grid-cols-1 md:grid-cols-4 py-8 border-b border-black/10 hover:border-[var(--color-brand-accent)] transition-colors duration-500 items-baseline gap-2 md:gap-0">
                                    <div className="md:col-span-1 text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-[var(--color-brand-accent)] transition-colors">
                                        {row.label}
                                    </div>
                                    <div className="md:col-span-3">
                                        <div className="text-xl md:text-2xl font-bold tracking-tight">{row.value}</div>
                                        {row.sub && <div className="text-sm text-muted-foreground font-mono mt-1">{row.sub}</div>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>

                {/* Business Details - High Impact Grid */}
                <div className="pt-32 mt-20 border-t border-black relative">
                    <ScrollReveal>
                        <div className="mb-16">
                            <h2 className="text-xs font-bold tracking-[0.2em] text-[var(--color-brand-accent)] uppercase mb-4 flex items-center gap-3">
                                <span className="w-4 h-4 rounded-full border border-[var(--color-brand-accent)]"></span>
                                Services
                            </h2>
                            <p className="text-3xl md:text-5xl font-black">事業内容</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
                            {[
                                "採用コンサルティング事業",
                                "採用戦略立案・プロセス設計",
                                "求人媒体選定・運用支援",
                                "面接設計・選考フロー改善",
                                "採用ブランディング支援",
                                "人材定着・組織開発コンサル"
                            ].map((item, i) => (
                                <div key={i} className="group flex items-baseline gap-6 py-8 border-b border-black/10 hover:border-[var(--color-brand-accent)] transition-colors duration-300">
                                    <span className="text-xs font-mono font-bold text-[var(--color-brand-accent)]">0{i + 1}</span>
                                    <h3 className="text-xl font-bold tracking-tight group-hover:translate-x-2 transition-transform duration-300">{item}</h3>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>

                <div className="mt-40 text-center">
                    <Link href="/contact" className="inline-flex items-center justify-center px-12 py-6 bg-foreground text-background text-base md:text-sm font-black tracking-[0.2em] hover:bg-primary hover:text-white transition-all">
                        お問い合わせ
                    </Link>
                </div>

            </div>
        </main>
    );
}
