import { PageHeader } from "@/components/ui/PageHeader";

export default function PrivacyPage() {
    return (
        <div className="bg-white text-black pb-40">
            <PageHeader title="PRIVACY POLICY" subtitle="プライバシーポリシー" />
            <section className="py-24">
                <div className="container-custom max-w-4xl text-gray-600 leading-relaxed space-y-8">
                    <p>株式会社エバンティア（以下「当社」）は、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、全従業員に個人情報保護の重要性の認識と取組みを徹底させることにより、個人情報の保護を推進致します。</p>

                    <div>
                        <h3 className="text-lg font-bold text-black mb-2">1. 個人情報の管理</h3>
                        <p>当社は、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-black mb-2">2. 個人情報の利用目的</h3>
                        <p>お客さまからお預かりした個人情報は、当社からのご連絡や業務のご案内やご質問に対する回答として、電子メールや資料のご送付に利用いたします。</p>
                    </div>

                    <p className="text-sm border-t border-gray-200 pt-8 mt-8">
                        制定日：2026年1月5日<br />
                        株式会社エバンティア<br />
                        代表取締役 新井 淳平
                    </p>
                </div>
            </section>
        </div>
    );
}
