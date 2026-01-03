import type { Metadata } from "next";
import { Noto_Sans_JP, Manrope } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "株式会社エバンティア | 採用コンサルティング・RPO・スカウト代行",
    template: "%s | 株式会社エバンティア",
  },
  description: "株式会社エバンティア（Evantia Inc.）は、採用コンサルティング、採用代行（RPO）、スカウト代行を通じて企業の採用課題を解決。戦略設計から実行、内製化支援まで一貫してサポートします。大阪を拠点に全国対応。",
  keywords: ["採用コンサルティング", "RPO", "採用代行", "スカウト代行", "採用支援", "人材採用", "エバンティア", "大阪"],
  authors: [{ name: "株式会社エバンティア" }],
  creator: "株式会社エバンティア",
  publisher: "株式会社エバンティア",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://evantia-co.jp"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://evantia-co.jp",
    siteName: "株式会社エバンティア",
    title: "株式会社エバンティア | 採用コンサルティング・RPO・スカウト代行",
    description: "採用コンサルティング、採用代行（RPO）、スカウト代行を通じて企業の採用課題を解決。戦略設計から実行、内製化支援まで一貫してサポート。",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "株式会社エバンティア",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社エバンティア | 採用コンサルティング・RPO・スカウト代行",
    description: "採用コンサルティング、採用代行（RPO）、スカウト代行を通じて企業の採用課題を解決。",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OrganizationJsonLd, WebsiteJsonLd, LocalBusinessJsonLd } from "@/components/seo/JsonLd";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        <LocalBusinessJsonLd />
      </head>
      <body
        className={`${notoSansJP.variable} ${manrope.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="skip-link">
          メインコンテンツへスキップ
        </a>
        <Header />
        <main id="main-content" className="flex-grow pt-20" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

