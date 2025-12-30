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
            <div className="relative h-[70vh] w-full overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1554797078-4574bd71e70e?auto=format&fit=crop&q=80&w=2000"
                    alt="About Hero"
                    fill
                    className="object-cover brightness-75"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 w-full px-6 pb-20">
                    <div className="max-w-screen-xl mx-auto">
                        <ScrollReveal>
                            <h1 className="text-sm font-black tracking-[0.4em] uppercase mb-8 text-primary">Philosophy</h1>
                            <p className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] max-w-5xl text-foreground">
                                採用は「人を集めること」ではない。<br />
                                過去ではなく、<span className="text-primary">未来に責任を持つことだ。</span>
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
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
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
                        <h2 className="text-[10px] font-black tracking-[0.4em] uppercase mb-12">Company Profile</h2>
                        <div className="border-t border-border">
                            {[
                                { label: "Company Name", value: "株式会社エバンティア (Evantia Inc.)" },
                                { label: "Establishment", value: "2026.01.05" },
                                { label: "Representative", value: "新井 淳平 (Junpei Arai)" },
                                { label: "Location", value: "〒541-0047 大阪府大阪市中央区淡路町1-4-9 TPR北浜ビル 6F" },
                                { label: "Business", value: "採用コンサルティング / 採用戦略立案 / RPO / 採用ブランディング" },
                                { label: "Contact", value: "jyunpei.arai@evantia-co.jp" }
                            ].map((row, i) => (
                                <div key={i} className="grid grid-cols-1 md:grid-cols-4 py-8 border-b border-border/60 gap-4 md:gap-0">
                                    <div className="md:col-span-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">{row.label}</div>
                                    <div className="md:col-span-3 font-medium">{row.value}</div>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>

                <div className="mt-40 text-center">
                    <Link href="/contact" className="inline-flex items-center justify-center px-12 py-6 bg-foreground text-background text-sm font-black tracking-[0.2em] uppercase hover:bg-primary hover:text-white transition-all">
                        Start Dialogue
                    </Link>
                </div>

            </div>
        </main>
    );
}
