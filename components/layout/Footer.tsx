import Link from "next/link";
import { ArrowUpRight, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const FOOTER_MAP = [
    {
        category: "SERVICE",
        links: [
            { label: "Recruitment Consulting", href: "/service/consulting" },
            { label: "RPO", href: "/service/rpo" },
            { label: "Direct Recruiting", href: "/service/scout" },
            { label: "Creative / Branding", href: "/service/creative" },
        ]
    },
    {
        category: "ABOUT",
        links: [
            { label: "Mission & Vision", href: "/about" },
            { label: "CEO Message", href: "/about/message" },
            { label: "Company Profile", href: "/about/company" },
        ]
    },
    {
        category: "RECRUIT",
        links: [
            { label: "Interview", href: "/recruit/interview" },
            { label: "Culture", href: "/recruit" },
            { label: "Entry", href: "/recruit/entry" },
        ]
    },
    {
        category: "INFORMATION",
        links: [
            { label: "News", href: "/news" },
            { label: "Column", href: "/column" },
            { label: "Case Study", href: "/case" },
            { label: "Contact", href: "/contact" },
        ]
    }
];

export const Footer = () => {
    return (
        <footer className="bg-[#0a0a0a] text-white pt-32 pb-12 relative overflow-hidden">
            {/* Texture Overlay */}
            <div className="absolute inset-0 bg-[#0a0a0a] opacity-90 z-0" />
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>

            <div className="container-custom relative z-10 px-6">

                {/* 1. CTA Section */}
                <div className="border-b border-white/10 pb-24 mb-24">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-12">
                        <div>
                            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
                                LET'S BUILD<br />
                                THE FUTURE.
                            </h2>
                            <p className="text-gray-400 font-medium text-lg max-w-xl">
                                貴社の成長を加速させるパートナーとして。<br />
                                まずはカジュアルにお話ししませんか？
                            </p>
                        </div>
                        <Link href="/contact" className="group flex items-center gap-4 bg-white text-black px-12 py-6 rounded-full text-xl font-bold hover:bg-primary hover:text-white transition-all duration-300">
                            CONTACT US <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* 2. Main Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-32">
                    <div className="col-span-2 md:col-span-1">
                        <div className="mb-8">
                            {/* Logo Text */}
                            <span className="text-2xl font-black tracking-tighter">EVANTIA</span>
                        </div>
                        <address className="not-italic text-sm text-gray-500 space-y-4 leading-relaxed font-mono">
                            <p>
                                <strong className="text-white block mb-1">TOKYO HEADQUARTER</strong>
                                1-2-3 Otemachi, Chiyoda-ku,<br />Tokyo 100-0004
                            </p>
                            <p>
                                <strong className="text-white block mb-1">OSAKA BRANCH</strong>
                                1-4-9 Awajicho, Chuo-ku,<br />Osaka 541-0047
                            </p>
                        </address>
                        <div className="flex gap-4 mt-8">
                            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"><Twitter size={16} /></a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"><Linkedin size={16} /></a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"><Facebook size={16} /></a>
                        </div>
                    </div>

                    {FOOTER_MAP.map((section, i) => (
                        <div key={i}>
                            <h3 className="font-bold text-xs tracking-[0.2em] text-gray-500 mb-8 uppercase">{section.category}</h3>
                            <ul className="space-y-4">
                                {section.links.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href} className="text-sm font-bold text-gray-300 hover:text-primary transition-colors block py-1">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* 3. Bottom Legal */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs font-mono text-gray-600 gap-4">
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-gray-400 transition-colors">PRIVACY POLICY</Link>
                        <Link href="/security" className="hover:text-gray-400 transition-colors">SECURITY POLICY</Link>
                        <Link href="/sitemap" className="hover:text-gray-400 transition-colors">SITEMAP</Link>
                    </div>
                    <p>© 2026 EVANTIA Inc. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};
