import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

const FOOTER_LINKS = [
    { label: "SERVICE", href: "/service" },
    { label: "ABOUT", href: "/about" },
    { label: "RECRUIT", href: "/recruit" },
    { label: "COLUMN", href: "/column" },
    { label: "CASE", href: "/case" },
    { label: "CONTACT", href: "/contact" },
];

export const Footer = () => {
    return (
        <footer className="bg-black text-white relative overflow-hidden">
            <div className="container-custom py-32 flex flex-col min-h-screen justify-between relative z-10">

                {/* Top: Brand */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                    <div>
                        <h2 className="text-[12vw] font-black leading-none tracking-tighter mb-8">
                            EVANTIA
                        </h2>
                        <p className="text-xl md:text-2xl font-bold tracking-tight">
                            Challenge for Better Future.
                        </p>
                    </div>

                    <div className="flex flex-col text-right gap-1 font-mono text-sm text-gray-400">
                        <span>OSAKA HQ</span>
                        <span>TPR Kitahama Bldg 6F</span>
                        <span>1-4-9 Awajicho, Chuo-ku</span>
                        <span>Osaka, 541-0047</span>
                    </div>
                </div>

                {/* Middle: Links */}
                <div className="grid grid-cols-2 md:grid-cols-6 gap-8 border-t border-white/20 pt-12 mt-20">
                    {FOOTER_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-lg md:text-xl font-bold hover:text-primary transition-colors hover:translate-x-2 duration-300 block"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Bottom: Legal */}
                <div className="border-t border-white/20 pt-8 mt-20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-gray-500">
                    <div className="flex gap-8">
                        <Link href="/privacy" className="hover:text-white transition-colors">PRIVACY POLICY</Link>
                        <Link href="/security" className="hover:text-white transition-colors">SECURITY</Link>
                    </div>
                    <p>© 2026 Evantia Inc. All Rights Reserved.</p>
                </div>
            </div>

            {/* Background Glow */}
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
        </footer>
    );
};
