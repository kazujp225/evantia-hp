import { PageHeader } from "@/components/ui/PageHeader";

export default function SecurityPage() {
    return (
        <div className="bg-white text-black pb-40">
            <PageHeader title="SECURITY" subtitle="情報セキュリティ基本方針" />
            <section className="py-24">
                <div className="container-custom max-w-4xl text-gray-600 leading-relaxed space-y-8">
                    <p>株式会社エバンティア（以下「当社」）は、顧客情報をはじめとする情報資産を事故・災害・犯罪などの脅威から守り、お客様ならびに社会の信頼に応えるべく、以下の方針に基づき全社で情報セキュリティに取り組みます。</p>

                    <div>
                        <h3 className="text-lg font-bold text-black mb-2">1. 経営者の責任</h3>
                        <p>当社は、経営者主導で組織的かつ継続的に情報セキュリティの改善・向上に努めます。</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-black mb-2">2. 社内体制の整備</h3>
                        <p>当社は、情報セキュリティの維持及び改善のために組織を設置し、情報セキュリティ対策を社内の正式な規則として定めます。</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
