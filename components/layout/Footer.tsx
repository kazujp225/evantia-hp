import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const FOOTER_MAP = [
    {
        category: "事業内容",
        links: [
            { label: "採用コンサルティング", href: "/service/consulting" },
            { label: "RPO（採用代行）", href: "/service/rpo" },
            { label: "スカウト代行", href: "/service/scout" },
            { label: "クリエイティブ / ブランディング", href: "/service/creative" },
        ]
    },
    {
        category: "会社概要",
        links: [
            { label: "ミッション＆ビジョン", href: "/about" },
            { label: "代表メッセージ", href: "/about/message" },
            { label: "会社情報", href: "/about/company" },
        ]
    },
    {
        category: "採用情報",
        links: [
            { label: "インタビュー", href: "/recruit/interview" },
            { label: "カルチャー", href: "/recruit" },
            { label: "エントリー", href: "/recruit/entry" },
        ]
    },
    {
        category: "インフォメーション",
        links: [
            { label: "ニュース", href: "/news" },
            { label: "コラム", href: "/column" },
            { label: "お問い合わせ", href: "/contact" },
        ]
    }
];

export const Footer = () => {
    return (
        <footer className="bg-[var(--color-primary)] text-white pt-32 pb-6 relative overflow-hidden border-t-2 border-[var(--color-brand-accent)] h-full">
            {/* Texture Overlay */}
            <div className="absolute inset-0 bg-[#050505] opacity-90 z-0" />
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0 mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>

            {/* Massive Background Logo Anchoring - with Gradient */}
            <div className="absolute bottom-[-5%] left-[-2%] select-none pointer-events-none z-0 overflow-hidden w-full">
                <span className="text-[25vw] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/[0.05] to-transparent leading-none whitespace-nowrap">
                    EVANTIA
                </span>
            </div>

            <div className="container-custom relative z-10 px-6">

                {/* 1. CTA Section - More Integrated */}
                <div className="border-b border-white/10 pb-20 mb-24">
                    <div className="flex flex-col gap-12 text-center md:text-left md:flex-row md:justify-between md:items-end">
                        <div>
                            <span className="text-xs font-bold tracking-[0.3em] text-[var(--color-brand-accent)] mb-6 block uppercase flex items-center justify-center md:justify-start gap-3">
                                <span className="w-10 h-[1px] bg-[var(--color-brand-accent)]"></span>
                                Let&apos;s Create Future
                            </span>
                            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1] mb-8">
                                未来を、<br />
                                共に創る。
                            </h2>
                            <p className="text-white/70 font-medium text-lg md:text-xl max-w-xl leading-relaxed">
                                貴社の成長を加速させるパートナーとして。<br />
                                まずはカジュアルにお話ししませんか？
                            </p>
                        </div>
                        <Link href="/contact" className="group flex items-center justify-center gap-4 bg-white text-black px-12 py-5 text-lg font-bold tracking-widest hover:bg-[var(--color-brand-accent)] hover:text-white transition-all duration-300 rounded-sm shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(0,100,200,0.4)]">
                            お問い合わせ <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* 2. Main Grid - Spec Sheet Style */}
                <div className="grid grid-cols-2 md:grid-cols-12 gap-12 mb-40">
                    <div className="col-span-2 md:col-span-4">
                        <div className="mb-10 flex items-center gap-4">
                            <Image
                                src="/logo.png"
                                alt="株式会社エバンティア"
                                width={56}
                                height={56}
                            />
                            <span className="text-3xl font-extrabold tracking-tighter">EVANTIA</span>
                        </div>
                        <address className="not-italic text-sm text-gray-500 space-y-6 leading-relaxed font-medium">
                            <div className="border-l border-[var(--color-brand-accent)] pl-4">
                                <strong className="text-white block mb-1 text-xs tracking-widest uppercase">Head Office</strong>
                                〒541-0047<br />大阪府大阪市中央区淡路町1-4-9<br />TPR北浜ビル 6F
                            </div>
                            <div className="border-l border-white/20 pl-4 hover:border-[var(--color-brand-accent)] transition-colors duration-300">
                                <strong className="text-white block mb-1 text-xs tracking-widest uppercase">Contact</strong>
                                info@evantia-co.jp<br />090-2393-2820
                            </div>
                        </address>
                    </div>

                    <div className="col-span-2 md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
                        {FOOTER_MAP.map((section, i) => (
                            <div key={i} className="flex flex-col">
                                <div className="h-px w-8 bg-white/30 mb-6 group-hover:w-12 transition-all duration-300"></div>
                                <h3 className="font-bold text-xs tracking-[0.2em] text-[var(--color-brand-accent)] mb-6 uppercase">{section.category}</h3>
                                <ul className="space-y-3">
                                    {section.links.map((link) => (
                                        <li key={link.href}>
                                            <Link href={link.href} className="text-sm font-bold text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 block py-0.5">
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. Bottom Legal */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/5 text-[10px] text-gray-600 font-medium tracking-wide uppercase">
                    <div className="flex flex-wrap justify-center gap-8 mb-4 md:mb-0">
                        <Link href="/privacy" className="hover:text-[var(--color-brand-accent)] transition-colors">プライバシーポリシー</Link>
                        <Link href="/security" className="hover:text-[var(--color-brand-accent)] transition-colors">情報セキュリティ基本方針</Link>
                        <Link href="/terms" className="hover:text-[var(--color-brand-accent)] transition-colors">利用規約</Link>
                        <Link href="/sitemap" className="hover:text-[var(--color-brand-accent)] transition-colors">サイトマップ</Link>
                    </div>
                    <p>© 2026 EVANTIA Inc. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};
