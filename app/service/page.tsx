import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Target, Layers, Trophy } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata = {
    title: "Services | EVANTIA",
    description: "一時的な成功より、勝ち続ける「自走力」を。表面ではなく本質から、貴社の採用を強くする。",
};

export default function ServicePage() {
    const features = [
        {
            icon: Target,
            num: "01",
            title: "トップセールス流のストーリー設計型戦略構築",
            desc: "経営層は業界のトップセールス。だからこそ描ける、人の心の機微を突くシナリオ構築が強みです。候補者の志向と貴社のビジョンを重ね合わせ、「なぜ貴社なのか」を語り切る力で、競合他社に埋もれない確固たる動機形成を軸としたご提案が可能です。"
        },
        {
            icon: Layers,
            num: "02",
            title: "戦略立案・集客実務代行までの幅広いソリューション",
            desc: "集客媒体、イベント、ツール等の入り口施策から、前提の戦略立案、実行までの採用の一気通貫サービスを取り扱っております。これにより貴社の現状とビジョン、市場動向に合わせた柔軟な支援が可能です。"
        },
        {
            icon: Trophy,
            num: "03",
            title: "勝てるノウハウを資産として残す「自走体制」の構築力",
            desc: "私たちのゴールは貴社だけで勝ち続けられる「自走体制」の確立です。数多くの成功事例から導き出した「再現性の高い勝ちパターン」を、貴社の組織文化に合わせて移植。成果を生み出し続ける強い採用チームを共に創り上げます。"
        }
    ];

    const services = [
        {
            num: "01",
            title: "採用戦略の構築",
            desc: "戦略立案の上流から実行改善の下流まで、自走を見据えて採用のブランド構築とPDCAサイクルの仕組みづくりを実施"
        },
        {
            num: "02",
            title: "母集団形成支援",
            desc: "ナビサイト、スカウト、イベント、幅広い集客サービスから最適なサービスを提案"
        },
        {
            num: "03",
            title: "採用実務アウトソーシング",
            desc: "実際に候補者と接する説明会、面接、面談を代行。ただ結果を出すだけではなく、マニュアル作りをゴールとしています"
        },
        {
            num: "04",
            title: "採用事務アウトソーシング",
            desc: "集客サービスの運用やATSの構築等を戦略コンサルタントと専任のチームが運用成果最大化を軸とした代行サービスを提供"
        },
        {
            num: "05",
            title: "採用AIツールのご提供",
            desc: "専用のAIスカウトサービス等を用いて、費用を抑えつつ成果を最大化するご支援を行います"
        },
        {
            num: "06",
            title: "採用ツールの制作",
            desc: "ピッチ資料、HP制作等採用のブランディングツールの構築を実施いたします"
        }
    ];

    return (
        <main className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] md:min-h-[70vh] w-full overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000"
                    alt="Service Hero"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute bottom-0 left-0 w-full px-6 pb-16 md:pb-20">
                    <div className="max-w-screen-xl mx-auto">
                        <ScrollReveal>
                            <span className="text-xs font-bold tracking-[0.3em] text-white/60 uppercase mb-6 block">Recruitment Consulting</span>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.15] max-w-4xl text-white mb-6">
                                一時的な成功より、<br />
                                勝ち続ける「自走力」を。
                            </h1>
                            <p className="text-lg md:text-xl text-white/80 font-medium max-w-2xl">
                                表面ではなく本質から、貴社の採用を強くする。
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-20 md:py-32 px-6 border-b border-border/40">
                <div className="max-w-screen-xl mx-auto">
                    <ScrollReveal>
                        <div className="max-w-4xl">
                            <p className="text-xl md:text-2xl font-bold text-muted-foreground leading-relaxed">
                                業界トップクラスの支援実績を誇る企業のトップランナーが顧客フォローの成果を最大化するために設立した少数精鋭チームです。
                                大手の戦略的ノウハウと、少数精鋭ならではの圧倒的な機動力と「顔の見えるサービス」を武器に、
                                "自走体制を構築すること"を最終ミッションにあらゆる採用課題を突破します。
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Features Section - 特徴3選 */}
            <section className="py-20 md:py-32 px-6 bg-zinc-50">
                <div className="max-w-screen-xl mx-auto">
                    <ScrollReveal>
                        <div className="mb-16 md:mb-24">
                            <span className="text-xs font-bold tracking-[0.3em] text-primary uppercase mb-4 block">Our Strengths</span>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                                エバンティアの特徴
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 gap-12 md:gap-16">
                        {features.map((feature, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start p-8 md:p-12 bg-white border border-border/40 hover:shadow-lg transition-shadow">
                                    <div className="lg:col-span-1">
                                        <span className="text-4xl md:text-5xl font-black text-primary/20">{feature.num}</span>
                                    </div>
                                    <div className="lg:col-span-11">
                                        <div className="flex items-center gap-4 mb-6">
                                            <feature.icon className="w-6 h-6 text-primary" />
                                            <h3 className="text-xl md:text-2xl font-bold">{feature.title}</h3>
                                        </div>
                                        <p className="text-muted-foreground font-medium leading-relaxed text-base md:text-lg">
                                            {feature.desc}
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section - 提供サービス6つ */}
            <section className="py-20 md:py-32 px-6">
                <div className="max-w-screen-xl mx-auto">
                    <ScrollReveal>
                        <div className="mb-16 md:mb-24">
                            <span className="text-xs font-bold tracking-[0.3em] text-primary uppercase mb-4 block">Professional Services</span>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                                提供サービス
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {services.map((service, i) => (
                            <ScrollReveal key={i} delay={i * 0.05}>
                                <div className="group p-8 border border-border/40 hover:border-primary/40 hover:bg-zinc-50/50 transition-all h-full">
                                    <div className="flex items-start gap-6">
                                        <span className="text-3xl font-black text-primary/30 group-hover:text-primary/50 transition-colors">{service.num}</span>
                                        <div>
                                            <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                                            <p className="text-muted-foreground font-medium leading-relaxed">
                                                {service.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 md:py-32 px-6 bg-foreground text-background">
                <div className="max-w-screen-xl mx-auto text-center">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-5xl font-black mb-8">
                            採用課題、<br className="md:hidden" />ご相談ください。
                        </h2>
                        <p className="text-lg text-white/70 font-medium mb-12 max-w-2xl mx-auto">
                            貴社の採用を「自走できる体制」へ。<br />
                            まずはカジュアルにお話ししませんか？
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-12 py-6 bg-white text-foreground text-sm font-black tracking-[0.2em] hover:bg-primary hover:text-white transition-all"
                        >
                            お問い合わせ
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </ScrollReveal>
                </div>
            </section>
        </main>
    );
}
