import Link from "next/link";
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
            { label: "導入事例", href: "/case" },
            { label: "お問い合わせ", href: "/contact" },
        ]
    }
];

export const Footer = () => {
    return (
        <footer className="bg-[#050505] text-white pt-32 pb-6 relative overflow-hidden">
            {/* Texture Overlay */}
            <div className="absolute inset-0 bg-[#050505] opacity-90 z-0" />
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0 mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>

            {/* Massive Background Logo Anchoring */}
            <div className="absolute bottom-[-5%] left-[-2%] select-none pointer-events-none z-0 overflow-hidden w-full">
                <span className="text-[25vw] font-black tracking-tighter text-white/[0.03] leading-none whitespace-nowrap">
                    EVANTIA
                </span>
            </div>

            <div className="container-custom relative z-10 px-6">

                {/* 1. CTA Section - More Integrated */}
                <div className="border-b border-white/10 pb-20 mb-24">
                    <div className="flex flex-col gap-12 text-center md:text-left md:flex-row md:justify-between md:items-end">
                        <div>
                            <span className="text-xs font-bold tracking-[0.3em] text-white/50 mb-6 block uppercase">Let&apos;s Create Future</span>
                            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1] mb-8">
                                未来を、<br />
                                共に創る。
                            </h2>
                            <p className="text-white/70 font-medium text-lg md:text-xl max-w-xl leading-relaxed">
                                貴社の成長を加速させるパートナーとして。<br />
                                まずはカジュアルにお話ししませんか？
                            </p>
                        </div>
                        <Link href="/contact" className="group flex items-center justify-center gap-4 bg-white text-black px-12 py-5 text-lg font-bold tracking-widest hover:bg-white/90 transition-all duration-300 rounded-sm">
                            お問い合わせ <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* 2. Main Grid - Spec Sheet Style */}
                <div className="grid grid-cols-2 md:grid-cols-12 gap-12 mb-40">
                    <div className="col-span-2 md:col-span-4">
                        <div className="mb-10">
                            {/* Logo Text */}
                            <span className="text-3xl font-extrabold tracking-tighter">EVANTIA</span>
                        </div>
                        <address className="not-italic text-sm text-gray-500 space-y-6 leading-relaxed font-medium">
                            <div className="border-l border-white/20 pl-4">
                                <strong className="text-white block mb-1 text-xs tracking-widest uppercase">Head Office</strong>
                                〒541-0047<br />大阪府大阪市中央区淡路町1-4-9<br />TPR北浜ビル 6F
                            </div>
                            <div className="border-l border-white/20 pl-4">
                                <strong className="text-white block mb-1 text-xs tracking-widest uppercase">Contact</strong>
                                jyunpei.arai@evantia-co.jp<br />090-2393-2820
                            </div>
                        </address>
                        <div className="flex gap-4 mt-10 pl-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:bg-white hover:text-black hover:border-white transition-all"><Twitter size={14} /></a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:bg-white hover:text-black hover:border-white transition-all"><Linkedin size={14} /></a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:bg-white hover:text-black hover:border-white transition-all"><Facebook size={14} /></a>
                        </div>
                    </div>

                    <div className="col-span-2 md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
                        {FOOTER_MAP.map((section, i) => (
                            <div key={i} className="flex flex-col">
                                <div className="h-px w-8 bg-white/30 mb-6"></div>
                                <h3 className="font-bold text-xs tracking-[0.2em] text-white/40 mb-6 uppercase">{section.category}</h3>
                                <ul className="space-y-3">
                                    {section.links.map((link) => (
                                        <li key={link.href}>
                                            <Link href={link.href} className="text-sm font-bold text-gray-400 hover:text-white transition-colors block py-0.5">
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
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/security" className="hover:text-white transition-colors">Security Policy</Link>
                        <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
                    </div>
                    <p>© 2026 EVANTIA Inc. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};
