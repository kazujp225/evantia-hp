import type { Metadata } from "next";
import { Noto_Sans_JP, Fraunces } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "株式会社アズライト | Azurite Inc.",
  description: "株式会社アズライト（Azurite Inc.）は、採用コンサルティング、採用代行（RPO）、スカウト代行などを通じて、企業の成長を支援します。",
};

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${fraunces.variable} antialiased flex flex-col min-h-screen font-sans`}
      >
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

