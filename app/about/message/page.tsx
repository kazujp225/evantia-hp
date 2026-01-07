import { PageHeader } from "@/components/ui/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata = {
    title: "Message | 代表挨拶",
    description: "エバンティア代表取締役 新井淳平からのメッセージ。",
};

export default function MessagePage() {
    return (
        <div className="bg-white pb-40 text-black">
            <PageHeader title="MESSAGE" subtitle="代表挨拶" />

            <div className="container-custom max-w-4xl py-24">
                <ScrollReveal>
                    <h2 className="text-3xl md:text-5xl font-black leading-tight mb-12">
                        人が必要とされる"今"を、つくる
                    </h2>

                    <div className="space-y-8 text-lg font-medium leading-loose text-gray-600">
                        <p>
                            AIの進化により、業務の多くは効率化・自動化される時代になりました。<br />
                            しかしその一方で、「最終的な成果を生み出す力」「判断し、責任を持ち、関係性を築く力」は、これからも人にしか担えない価値だと私たちは考えています。
                        </p>
                        <p>
                            AIを使いこなし、成果を出せる人になるかどうかは、個人の意思だけでなく、どのような環境で、どのような人と関わり、どのように育てられるかによって大きく左右されます。<br />
                            人をつくるのも、また人です。
                        </p>
                        <p>
                            エバンティアでは、組織に欠かせない人材を「採用」から「育成」、そして「定着・活躍」まで一貫して支援します。<br />
                            人材コンサルティングに加え、業務効率化や生産性向上を実現するAI・媒体ツール等のサービスを組み合わせ、企業ごとの課題や成長フェーズに合わせた最適なプランをご提案します。
                        </p>
                        <p>
                            単なる人材提供やツール導入ではなく、<br />
                            人と仕組みの両面から、組織の成果を最大化すること。<br />
                            そして、お客様と長期的に伴走できる深い信頼関係を築くことを、私たちのモットーとしています。
                        </p>
                        <p>
                            人が主役であり続ける未来のために。<br />
                            エバンティアは、「人が必要とされる"今"」をつくり続けます。
                        </p>
                    </div>

                    <div className="mt-16 pt-16 border-t border-black">
                        <p className="text-xl font-bold text-gray-800">代表取締役　新井 淳平</p>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
}
