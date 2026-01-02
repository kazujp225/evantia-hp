import { PageHeader } from "@/components/ui/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata = {
    title: "Creative / Branding | Service",
    description: "クリエイティブ・ブランディング",
};

export default function ServiceCreativePage() {
    return (
        <main className="bg-background min-h-screen pb-40">
            <PageHeader title="CREATIVE" subtitle="クリエイティブ / ブランディング" />
            <div className="container-custom py-32 text-center">
                <ScrollReveal>
                    <h2 className="text-3xl font-bold mb-6">採用ブランドを強化するクリエイティブ</h2>
                    <p className="text-muted-foreground">現在、詳細なサービス内容を準備中です。</p>
                </ScrollReveal>
            </div>
        </main>
    );
}
