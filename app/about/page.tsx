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
                    src="https://images.unsplash.com/photo-1522071823942-0050acc2dfdb?auto=format&fit=crop&q=80&w=2000"
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
                                採用は「人を集めること」ではない。<br />
                                過去ではなく、未来に責任を持つことだ。
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
                                「いい人が採れない」<br />
                                その嘆きの裏には、停止した思考があります。
                            </p>
                            <p>
                                私たちは、短期的な成果（＝頭数）よりも、<br className="hidden md:inline" />
                                組織に残る判断と仕組み（＝未来への資産）を重視します。
                            </p>
                            <p>
                                挑戦する人と企業が、<br className="hidden md:inline" />
                                正しく評価され、成長できる環境をつくる。<br />
                                それが、私たちの仕事です。
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

                {/* Company Profile */}
                <div className="border-t border-border pt-20">
                    <ScrollReveal>
                        <h2 className="text-sm md:text-[10px] font-black tracking-[0.4em] uppercase mb-12">会社概要</h2>
                        <div className="border-t border-border">
                            {[
                                { label: "会社名", value: "株式会社エバンティア (EVANTIA Inc.)" },
                                { label: "設立", value: "2026.01.05" },
                                { label: "代表", value: "新井 淳平 (Junpei Arai)" },
                                { label: "所在地", value: "〒541-0047 大阪府大阪市中央区淡路町1-4-9 TPR北浜ビル 6F" },
                                { label: "事業内容", value: "採用コンサルティング / 採用戦略立案 / RPO / 採用ブランディング" },
                                { label: "連絡先", value: "jyunpei.arai@evantia-co.jp" }
                            ].map((row, i) => (
                                <div key={i} className="grid grid-cols-1 md:grid-cols-4 py-8 border-b border-border/60 gap-4 md:gap-0">
                                    <div className="md:col-span-1 text-sm md:text-xs font-bold uppercase tracking-widest text-muted-foreground">{row.label}</div>
                                    <div className="md:col-span-3 font-medium">{row.value}</div>
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
