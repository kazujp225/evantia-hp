import { PageHeader } from "@/components/ui/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "スカウト代行",
    description: "ダイレクトリクルーティングのプロフェッショナル代行。ビズリーチ、Wantedly、Green等各種媒体でのスカウト送信・返信対応を代行します。",
    alternates: { canonical: "/service/scout" },
};

export default function ServiceScoutPage() {
    return (
        <main className="bg-background min-h-screen pb-40">
            <PageHeader title="SCOUT AGENCY" subtitle="スカウト代行" />
            <div className="container-custom py-32 text-center">
                <ScrollReveal>
                    <h2 className="text-3xl font-bold mb-6">攻めの採用を実現するスカウト送信代行</h2>
                    <p className="text-muted-foreground">現在、詳細なサービス内容を準備中です。</p>
                </ScrollReveal>
            </div>
        </main>
    );
}
