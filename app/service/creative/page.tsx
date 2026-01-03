import { PageHeader } from "@/components/ui/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "クリエイティブ・ブランディング",
    description: "採用ブランドを強化するクリエイティブ制作。採用サイト、求人原稿、会社説明資料など、候補者の心に響くコンテンツを制作します。",
    alternates: { canonical: "/service/creative" },
};

export default function ServiceCreativePage() {
    return (
        <main className="bg-background min-h-screen pb-40">
            <PageHeader title="CREATIVE" subtitle="クリエイティブ / ブランディング" />
            <div className="container-custom py-24 md:py-32 text-center">
                <ScrollReveal>
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">採用ブランドを強化するクリエイティブ</h2>
                    <p className="text-muted-foreground mb-12">現在、詳細なサービス内容を準備中です。</p>
                    <a href="/service" className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold tracking-widest border border-primary hover:bg-primary hover:text-white transition-colors duration-300 rounded-full">
                        サービス一覧に戻る
                    </a>
                </ScrollReveal>
            </div>
        </main>
    );
}
