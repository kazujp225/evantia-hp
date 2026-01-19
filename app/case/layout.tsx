import { Metadata } from "next";

export const metadata: Metadata = {
    title: "導入事例",
    description: "株式会社エバンティアの採用コンサルティング・RPO導入事例。IT・通信、メーカー、サービス業界など様々な企業の採用課題を解決した実績をご紹介。",
    openGraph: {
        title: "導入事例 | 株式会社エバンティア",
        description: "採用コンサルティング・RPO導入事例。様々な業界の採用課題を解決した実績をご紹介。",
    },
    alternates: { canonical: "/case" },
};

export default function CaseLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
