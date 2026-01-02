import { PageHeader } from "@/components/ui/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata = {
    title: "Recruitment Consulting | Service",
    description: "採用コンサルティング",
};

export default function ServiceConsultingPage() {
    return (
        <main className="bg-background min-h-screen pb-40">
            <PageHeader title="CONSULTING" subtitle="採用コンサルティング" />
            <div className="container-custom py-32 text-center">
                <ScrollReveal>
                    <h2 className="text-3xl font-bold mb-6">採用戦略の構築から実行まで</h2>
                    <p className="text-muted-foreground">現在、詳細なサービス内容を準備中です。</p>
                </ScrollReveal>
            </div>
        </main>
    );
}
