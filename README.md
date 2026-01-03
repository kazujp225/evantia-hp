# 株式会社エバンティア コーポレートサイト

株式会社エバンティアの公式コーポレートサイトです。

## 技術スタック

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Typography**: Noto Sans JP + Manrope
- **Language**: TypeScript

## 機能

- レスポンシブデザイン
- SEO最適化（メタデータ、構造化データ、サイトマップ）
- アクセシビリティ対応（WCAG準拠）
- パフォーマンス最適化

## ディレクトリ構成

```
├── app/                    # ページコンポーネント
│   ├── about/             # 会社概要
│   ├── service/           # 事業内容
│   ├── recruit/           # 採用情報
│   ├── contact/           # お問い合わせ
│   └── ...
├── components/            # 共通コンポーネント
│   ├── layout/           # Header, Footer
│   ├── ui/               # UI部品
│   ├── hero/             # ヒーローセクション
│   ├── services/         # サービスセクション
│   ├── home/             # ホームページ専用
│   └── seo/              # SEO関連
├── lib/                   # ユーティリティ
└── public/               # 静的ファイル
    └── assets/images/    # 画像
```

## 開発

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# 本番サーバー起動
npm start
```

## SEO対策

- 全ページに最適化されたメタデータ
- Open Graph / Twitter Card対応
- JSON-LD構造化データ（Organization, LocalBusiness, Service）
- 動的サイトマップ生成
- robots.txt自動生成

## アクセシビリティ

- WCAG 2.1 AA準拠
- スキップリンク
- 適切なaria属性
- reduced motion対応
- キーボードナビゲーション

## デプロイ

Render.comでホスティング。`render.yaml`で設定済み。

## ライセンス

All Rights Reserved - 株式会社エバンティア
