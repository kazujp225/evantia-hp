export const SERVICE_DATA: Record<string, {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    features: string[];
    process: { step: string; title: string; desc: string }[];
}> = {
    "consulting": {
        title: "Recruitment Consulting",
        subtitle: "採用コンサルティング",
        description: "採用は「経営課題」です。単なる人手不足の解消ではなく、事業成長を牽引する組織づくりを支援します。トップセールス流のストーリー設計と、徹底的な数値分析に基づいた「勝ちパターン」を構築します。",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
        features: [
            "経営戦略に基づいた採用KPIの設計",
            "候補者の心を動かすスカウト文章・ピッチ資料の作成",
            "面接官トレーニングによる選考精度の向上"
        ],
        process: [
            { step: "01", title: "現状分析", desc: "競合他社比較、過去の採用データの分析を行い、課題を特定します。" },
            { step: "02", title: "戦略立案", desc: "求める人物像の再定義、訴求軸の策定、最適なチャネル選定を行います。" },
            { step: "03", title: "実行支援", desc: "スカウト配信、面接同席、定期的な振り返りミーティングを実施します。" },
            { step: "04", title: "内製化移行", desc: "ノウハウをすべてドキュメント化し、貴社のみで運用できる体制を整えます。" }
        ]
    },
    "rpo": {
        title: "RPO (Recruitment Process Outsourcing)",
        subtitle: "採用実務アウトソーシング",
        description: "リソース不足により「攻めの採用」ができていない企業様へ。日程調整や応募者対応などの守りの業務だけでなく、スカウト送付やエージェントコントロールなどの攻めの業務までを一気通貫で代行します。",
        image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=1200",
        features: [
            "採用実務経験豊富なプロフェッショナルチーム",
            "土日祝日や夜間の対応も柔軟に相談可能",
            "主要ATS（HERP, HRMOS, Talentio等）の運用実績多数"
        ],
        process: [
            { step: "01", title: "業務整理", desc: "現在の採用フローを可視化し、アウトソース範囲を決定します。" },
            { step: "02", title: "フロー構築", desc: "効率的なオペレーションフローを設計し、マニュアルを作成します。" },
            { step: "03", title: "実務開始", desc: "専任チームが貴社採用担当の一員として業務を遂行します。" },
            { step: "04", title: "改善提案", desc: "月次の定例会にて、歩留まり改善などの提案を行います。" }
        ]
    },
    "scout": {
        title: "Direct Recruiting",
        subtitle: "ダイレクトリクルーティング支援",
        description: "待っているだけでは出会えない優秀層に、こちらからアプローチ。BizReachやWantedlyなど、各媒体の特性を熟知したプロが、返信率にこだわったスカウトメールを配信します。",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200",
        features: [
            "ターゲットごとに文面をパーソナライズ",
            "ABテストによる開封率・返信率の継続的な改善",
            "媒体アルゴリズムをハックした運用手法"
        ],
        process: [
            { step: "01", title: "ターゲット選定", desc: "採用要件に基づき、アプローチすべきターゲットリストを作成します。" },
            { step: "02", title: "文面作成", desc: "候補者のインサイトを突く、魅力的なスカウト文面を作成します。" },
            { step: "03", title: "配信・運用", desc: "最適なタイミングで配信を行い、反応を見ながらチューニングします。" },
            { step: "04", title: "タレントプール化", desc: "返信がなかった候補者もプール化し、中長期的な接点を持ちます。" }
        ]
    },
    "creative": {
        title: "Creative / Branding",
        subtitle: "採用クリエイティブ / ブランディング",
        description: "「なんとなくかっこいい」ではなく「入社したくなる」クリエイティブを。採用サイト、ピッチ資料、インタビュー記事など、候補者の志望度を高めるためのあらゆるツールを制作します。",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
        features: [
            "採用広報のプロによる取材・ライティング",
            "スマホファーストなWebデザイン",
            "求職者が本当に知りたい情報の可視化"
        ],
        process: [
            { step: "01", title: "コンセプト設計", desc: "採用ブランドのコアとなるメッセージやトーン＆マナーを決定します。" },
            { step: "02", title: "取材・撮影", desc: "社員インタビューやオフィス風景の撮影を行います。" },
            { step: "03", title: "制作・実装", desc: "デザイン、ライティング、コーディングを行います。" },
            { step: "04", title: "公開・活用", desc: "公開後の数値を分析し、改善案を提示します。" }
        ]
    }
};
