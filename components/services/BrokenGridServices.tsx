"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const SERVICES = [
    {
        id: "01",
        en: "Strategy Building",
        jp: "採用戦略の構築",
        desc: "「欲しい人材」の定義から、彼らに響くメッセージ設計まで。自走を見据えた採用ブランドの土台を築きます。",
        link: "/service/strategy",
        image: "/assets/images/service-strategy.jpg",
        colSpan: "md:col-span-7",
        height: "h-[400px] md:h-[500px]",
        delay: 0.1
    },
    {
        id: "02",
        en: "Population Formation",
        jp: "母集団形成支援",
        desc: "ナビサイト、ダイレクトリクルーティング、SNS。貴社に最適なチャネルを選定し、ターゲットへのリーチを最大化します。",
        link: "/service/population",
        image: "/assets/images/service-marketing.jpg",
        colSpan: "md:col-span-5",
        height: "h-[400px] md:h-[360px]", // Adjusted height for balance
        delay: 0.2
    },
    {
        id: "03",
        en: "RPO (Execution)",
        jp: "採用実務アウトソーシング",
        desc: "説明会運営から面接代行まで。単なるマンパワーの提供ではなく、プロフェッショナルとしての「目」を提供します。",
        link: "/service/rpo",
        image: "/assets/images/service-execution.jpg",
        colSpan: "md:col-span-5",
        height: "h-[400px] md:h-[360px]",
        delay: 0.3
    },
    {
        id: "04",
        en: "RPO (Admin)",
        jp: "採用事務アウトソーシング",
        desc: "ATS管理、日程調整、数値集計。煩雑な業務を巻き取り、人事が「人」と向き合う時間を創出します。",
        link: "/service/admin",
        image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200", // Corporate Lounge
        colSpan: "md:col-span-7",
        height: "h-[400px] md:h-[500px]",
        delay: 0.4
    }
];

export function BrokenGridServices() {
    return (
        <section className="py-24 md:py-40 bg-white">
            <div className="container-custom">
                <div className="mb-20 md:mb-32 max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-primary font-bold tracking-widest text-xs mb-4 block">OUR SERVICES</span>
                        <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
                            本質的な課題解決のための<br />
                            ４つのアプローチ。
                        </h2>
                        <p className="text-muted-foreground font-medium leading-loose">
                            採用活動における課題は、企業ステージや市場環境によって異なります。
                            エバンティアは、戦略策定から実務実行まで、貴社のフェーズに合わせた最適なソリューションを組み合わせ、
                            組織の成長を加速させます。
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                    {SERVICES.map((service) => (
                        <div key={service.id} className={`${service.colSpan} relative group`}>
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: service.delay }}
                                className="h-full"
                            >
                                <Link href={service.link} className="block h-full relative overflow-hidden rounded-lg">
                                    {/* Image Base */}
                                    <div className={`relative w-full ${service.height} overflow-hidden`}>
                                        <Image
                                            src={service.image}
                                            alt={service.jp}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                                        {/* Content Overlay */}
                                        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between text-white">
                                            <div className="flex justify-between items-start">
                                                <span className="text-3xl font-black opacity-50">{service.id}</span>
                                                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                                                    <ArrowUpRight size={18} />
                                                </div>
                                            </div>

                                            <div>
                                                <p className="text-sm font-bold tracking-widest mb-2 opacity-80">{service.en}</p>
                                                <h3 className="text-2xl md:text-3xl font-bold mb-4">{service.jp}</h3>
                                                <p className="text-sm md:text-base text-gray-200 line-clamp-3 md:line-clamp-none opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                                    {service.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
