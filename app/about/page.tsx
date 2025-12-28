import { PageHeader } from "@/components/ui/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Check, Mail, MapPin, Phone } from "lucide-react";

export const metadata = {
    title: "About | 私たちについて",
    description: "株式会社エバンティアの企業情報です。",
};

export default function AboutPage() {
    return (
        <div className="bg-white overflow-hidden text-black">
            <PageHeader title="ABOUT" subtitle="私たちについて" />

            {/* Mission Section - Stark Typography */}
            <section className="py-32 md:py-40">
                <div className="container-custom">
                    <ScrollReveal className="max-w-6xl mx-auto">
                        <span className="text-primary font-bold tracking-[0.5em] text-xs mb-12 block uppercase">Our Mission</span>
                        <h2 className="text-4xl md:text-7xl font-black leading-[1.1] mb-16">
                            挑戦の価値と面白さを<br />
                            <span className="text-primary">最大化する。</span>
                        </h2>
                        <div className="grid md:grid-cols-2 gap-16">
                            <p className="text-xl md:text-2xl font-bold leading-relaxed">
                                エバンティア(Evantia)は、<br />
                                "Evand (挑戦)" と "tir (場所)" を<br />
                                掛け合わせた造語です。
                            </p>
                            <div className="space-y-8 text-gray-500 font-medium leading-loose">
                                <p>
                                    私たちは、顧客や社会や仲間のために最良を追求したい人が、
                                    モチベーション高く働ける「挑戦の場所」でありたいと考えています。
                                </p>
                                <p>
                                    挑戦には痛みが伴いますが、その過程こそが人を成長させます。
                                    私たちは、公平な裁量と誠実な基準のもとで、
                                    「挑戦する人の潜在力」を最大限に引き出し、より良い未来を実現します。
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Feature Section - Horizontal Flow */}
            <section className="py-32 bg-gray-50 border-y border-black">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-black pb-8">
                            <h2 className="text-4xl font-black">Why EVANTIA?</h2>
                            <p className="font-mono text-sm tracking-widest mt-4 md:mt-0">CORE COMPETENCIES</p>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-3 gap-12 md:gap-0">
                        {[
                            { num: "01", title: "Story Design", desc: "トップセールス流の戦略構築" },
                            { num: "02", title: "Total Solution", desc: "一気通貫のソリューション" },
                            { num: "03", title: "Self Running", desc: "「自走体制」の構築" }
                        ].map((feature, i) => (
                            <ScrollReveal key={i} delay={i * 0.1} className="md:border-r border-black last:border-r-0 md:px-12 first:pl-0">
                                <span className="text-6xl font-black text-gray-200 block mb-8">{feature.num}</span>
                                <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                                <p className="text-primary font-bold mb-6">{feature.desc}</p>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    {i === 0 && "経営層は業界のトップセールス出身。人の心の機微を突くシナリオ構築力で、確固たる動機形成を実現します。"}
                                    {i === 1 && "戦略立案から、集客、イベント、ツール制作まで。入り口から出口までを一貫して支援することで最適解を提供します。"}
                                    {i === 2 && "ゴールは「勝ち続けられる」こと。成功事例から導き出した勝ちパターンを移植し、成果を生み出し続けるチームを創ります。"}
                                </p>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Profile - Swiss Grid */}
            <section className="py-32">
                <div className="container-custom max-w-5xl mx-auto">
                    <ScrollReveal>
                        <h2 className="text-4xl font-black mb-16 tracking-tight">COMPANY INFO</h2>

                        <div className="border-t border-black">
                            {/* Row 1 */}
                            <div className="grid md:grid-cols-[200px_1fr] border-b border-black group hover:bg-black hover:text-white transition-colors duration-300">
                                <div className="py-8 font-bold text-sm tracking-widest uppercase md:border-r border-black group-hover:border-white/20 transition-colors">Company Name</div>
                                <div className="py-8 md:pl-12 font-bold text-xl">株式会社エバンティア</div>
                            </div>

                            {/* Row 2 */}
                            <div className="grid md:grid-cols-[200px_1fr] border-b border-black group hover:bg-black hover:text-white transition-colors duration-300">
                                <div className="py-8 font-bold text-sm tracking-widest uppercase md:border-r border-black group-hover:border-white/20 transition-colors">Establishment</div>
                                <div className="py-8 md:pl-12 font-bold text-xl">2026.01.05</div>
                            </div>

                            {/* Row 3 - Rep */}
                            <div className="grid md:grid-cols-[200px_1fr] border-b border-black group hover:bg-black hover:text-white transition-colors duration-300">
                                <div className="py-8 font-bold text-sm tracking-widest uppercase md:border-r border-black group-hover:border-white/20 transition-colors">Board Member</div>
                                <div className="py-8 md:pl-12 font-medium">
                                    <div className="mb-4"><span className="text-sm opacity-50 block mb-1">Representative Director</span>新井 淳平 (Junpei Arai)</div>
                                    <div><span className="text-sm opacity-50 block mb-1">Director</span>豊嶋 令 (Rei Toyoshima)</div>
                                </div>
                            </div>

                            {/* Row 4 - Location */}
                            <div className="grid md:grid-cols-[200px_1fr] border-b border-black group hover:bg-black hover:text-white transition-colors duration-300">
                                <div className="py-8 font-bold text-sm tracking-widest uppercase md:border-r border-black group-hover:border-white/20 transition-colors">Location</div>
                                <div className="py-8 md:pl-12 font-medium">
                                    〒541-0047<br />
                                    大阪府大阪市中央区淡路町1-4-9 TPR北浜ビル 6F
                                </div>
                            </div>

                            {/* Row 5 - Business */}
                            <div className="grid md:grid-cols-[200px_1fr] border-b border-black group hover:bg-black hover:text-white transition-colors duration-300">
                                <div className="py-8 font-bold text-sm tracking-widest uppercase md:border-r border-black group-hover:border-white/20 transition-colors">Business</div>
                                <div className="py-8 md:pl-12 font-medium">
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                        <li>・採用コンサルティング事業</li>
                                        <li>・採用戦略立案・プロセス設計</li>
                                        <li>・求人媒体選定・運用支援</li>
                                        <li>・採用ブランディング支援</li>
                                        <li>・人材定着・組織開発</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Row 6 - Contact */}
                            <div className="grid md:grid-cols-[200px_1fr] border-b border-black group hover:bg-black hover:text-white transition-colors duration-300">
                                <div className="py-8 font-bold text-sm tracking-widest uppercase md:border-r border-black group-hover:border-white/20 transition-colors">Contact</div>
                                <div className="py-8 md:pl-12 font-medium">
                                    <p className="mb-2 font-mono">jyunpei.arai@evantia-co.jp</p>
                                    <p className="font-mono">090-2393-2820</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
