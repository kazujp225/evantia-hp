import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight } from "lucide-react";

export const metadata = {
    title: "Sitemap | EVANTIA",
    description: "サイトマップ",
};

const SITE_STRUCTURE = [
    {
        category: "MAIN",
        links: [
            { label: "トップページ", href: "/" },
            { label: "私たちについて", href: "/about" },
            { label: "事業内容", href: "/service" },
            { label: "採用情報", href: "/recruit" },
            { label: "コラム", href: "/column" },
            { label: "お知らせ", href: "/news" },
            { label: "お問い合わせ", href: "/contact" },
        ]
    },
    {
        category: "SERVICES",
        links: [
            { label: "採用コンサルティング", href: "/service/consulting" },
            { label: "RPO（採用代行）", href: "/service/rpo" },
            { label: "スカウト代行", href: "/service/scout" },
            { label: "クリエイティブ / ブランディング", href: "/service/creative" },
        ]
    },
    {
        category: "ABOUT",
        links: [
            { label: "ミッション＆ビジョン", href: "/about" },
            { label: "代表メッセージ", href: "/about/message" },
            { label: "会社概要", href: "/about/company" },
        ]
    },
    {
        category: "RECRUIT",
        links: [
            { label: "採用トップ", href: "/recruit" },
            { label: "エントリー", href: "/recruit/entry" },
        ]
    },
    {
        category: "LEGAL",
        links: [
            { label: "プライバシーポリシー", href: "/privacy" },
            { label: "情報セキュリティ基本方針", href: "/security" },
            { label: "サイト利用規約", href: "/terms" },
        ]
    }
];

export default function SitemapPage() {
    return (
        <main className="bg-background min-h-screen pb-40">
            <PageHeader title="SITEMAP" subtitle="サイトマップ" />

            <div className="container-custom max-w-5xl py-24">
                <ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20">
                        {SITE_STRUCTURE.map((section, i) => (
                            <div key={i}>
                                <h3 className="text-xl font-black mb-6 tracking-tight border-b-2 border-[var(--color-brand-accent)] pb-2 inline-block">
                                    {section.category}
                                </h3>
                                <ul className="space-y-4">
                                    {section.links.map((link) => (
                                        <li key={link.href}>
                                            <Link href={link.href} className="group flex items-center gap-2 font-medium text-muted-foreground hover:text-foreground transition-colors">
                                                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-[var(--color-brand-accent)]" />
                                                <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </main>
    );
}
