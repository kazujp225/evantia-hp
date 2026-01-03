import { PageHeader } from "@/components/ui/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "RPO（採用代行）",
    description: "採用業務のプロフェッショナル代行。応募者対応、面接調整、選考管理など採用プロセス全体をサポート。貴社の採用担当者の負担を軽減します。",
    alternates: { canonical: "/service/rpo" },
};

export default function ServiceRPOPage() {
    return (
        <main className="bg-background min-h-screen pb-40">
            <PageHeader title="RPO" subtitle="採用代行" />
            <div className="container-custom py-32 text-center">
                <ScrollReveal>
                    <h2 className="text-3xl font-bold mb-6">採用業務のプロフェッショナル代行</h2>
                    <p className="text-muted-foreground">現在、詳細なサービス内容を準備中です。</p>
                </ScrollReveal>
            </div>
        </main>
    );
}
