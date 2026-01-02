import { PageHeader } from "@/components/ui/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata = {
    title: "Security Policy | EVANTIA",
    description: "情報セキュリティ基本方針",
};

export default function SecurityPage() {
    return (
        <main className="bg-background min-h-screen pb-40">
            <PageHeader title="SECURITY POLICY" subtitle="情報セキュリティ基本方針" />

            <div className="container-custom max-w-4xl py-24">
                <ScrollReveal>
                    <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:text-muted-foreground prose-p:leading-loose">
                        <p className="lead">
                            株式会社エバンティア（以下、「当社」）は、当社の情報資産を事故・災害・犯罪などの脅威から守り、お客様ならびに社会の信頼に応えるべく、以下の方針に基づき全社で情報セキュリティに取り組みます。
                        </p>

                        <h3>1. 経営者の責任</h3>
                        <p>
                            当社は、経営者主導で組織的かつ継続的に情報セキュリティの改善・向上に努めます。
                        </p>

                        <h3>2. 社内体制の整備</h3>
                        <p>
                            当社は、情報セキュリティの維持及び改善のために組織を設置し、情報セキュリティ対策を社内の正式な規則として定めます。
                        </p>

                        <h3>3. 従業員の取組み</h3>
                        <p>
                            当社の従業員は、情報セキュリティのために必要とされる知識、技術を習得し、情報セキュリティへの取り組みを確かなものにします。
                        </p>

                        <h3>4. 法令及び契約上の要求事項の遵守</h3>
                        <p>
                            当社は、情報セキュリティに関わる法令、規制、規範、契約上の義務を遵守するとともに、お客様の期待に応えます。
                        </p>

                        <h3>5. 違反及び事故への対応</h3>
                        <p>
                            当社は、情報セキュリティに関わる法令違反、契約違反及び事故が発生した場合には適切に対処し、再発防止に努めます。
                        </p>

                        <div className="mt-12 pt-12 border-t border-border/40 text-sm text-muted-foreground text-right">
                            <p>
                                制定日: 2026年1月2日<br />
                                株式会社エバンティア<br />
                                代表取締役 新井 淳平
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </main>
    );
}
