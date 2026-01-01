import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = {
    title: "Privacy Policy | EVANTIA",
    description: "個人情報の取り扱いについて",
};

export default function PrivacyPage() {
    return (
        <div className="bg-white text-black pb-40">
            <PageHeader title="PRIVACY POLICY" subtitle="プライバシーポリシー" />
            <section className="py-24">
                <div className="container-custom max-w-4xl text-gray-600 leading-relaxed space-y-8">
                    <p className="text-lg font-medium text-black">【個人情報の取り扱いについて】</p>

                    <p>当社は、お客様の個人情報を適切に保護することを重要な責務と考え、以下の方針に基づき個人情報の保護に努めます。</p>

                    <div>
                        <h3 className="text-lg font-bold text-black mb-2">1. 個人情報の収集について</h3>
                        <p>当社は、適法かつ公正な手段によって個人情報を収集いたします。</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-black mb-2">2. 個人情報の利用目的</h3>
                        <p>収集した個人情報は、以下の目的で利用いたします。</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>お客様へのサービス提供</li>
                            <li>お問い合わせへの対応</li>
                            <li>サービス改善のための分析</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-black mb-2">3. 個人情報の第三者提供</h3>
                        <p>当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-black mb-2">4. 個人情報の管理</h3>
                        <p>当社は、個人情報の漏洩、滅失、毀損等を防止するため、適切な安全管理措置を講じます。</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-black mb-2">5. お問い合わせ</h3>
                        <p>個人情報の取り扱いに関するお問い合わせは、当社までご連絡ください。</p>
                        <div className="mt-4 p-4 bg-gray-50 rounded">
                            <p className="text-sm">
                                メールアドレス: jyunpei.arai@evantia-co.jp<br />
                                担当者: 新井淳平<br />
                                電話番号: 090-2393-2820
                            </p>
                        </div>
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
