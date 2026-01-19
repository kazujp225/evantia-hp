export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "株式会社エバンティア",
    alternateName: "Evantia Inc.",
    url: "https://evantia-co.jp",
    logo: "https://evantia-co.jp/logo.png",
    description: "採用コンサルティング、採用代行（RPO）、スカウト代行を通じて企業の採用課題を解決する専門企業",
    address: {
      "@type": "PostalAddress",
      streetAddress: "淡路町1-4-9 TPR北浜ビル 601",
      addressLocality: "大阪市中央区",
      addressRegion: "大阪府",
      postalCode: "541-0047",
      addressCountry: "JP",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+81-90-2393-2820",
      contactType: "customer service",
      email: "info@evantia-co.jp",
      availableLanguage: ["Japanese"],
    },
    sameAs: [],
    foundingDate: "2026-01-05",
    areaServed: "JP",
    serviceArea: {
      "@type": "Country",
      name: "Japan",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebsiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "株式会社エバンティア",
    url: "https://evantia-co.jp",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://evantia-co.jp/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "株式会社エバンティア",
    image: "https://evantia-co.jp/logo.png",
    "@id": "https://evantia-co.jp",
    url: "https://evantia-co.jp",
    telephone: "+81-90-2393-2820",
    email: "info@evantia-co.jp",
    address: {
      "@type": "PostalAddress",
      streetAddress: "淡路町1-4-9 TPR北浜ビル 601",
      addressLocality: "大阪市中央区",
      addressRegion: "大阪府",
      postalCode: "541-0047",
      addressCountry: "JP",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.6892,
      longitude: 135.5063,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    priceRange: "$$",
    servesCuisine: undefined,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "採用支援サービス",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "採用コンサルティング",
            description: "採用戦略の設計から実行支援まで",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "RPO（採用代行）",
            description: "採用業務の代行・アウトソーシング",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "スカウト代行",
            description: "ダイレクトリクルーティングの代行",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface ServicePageProps {
  name: string;
  description: string;
  url: string;
}

export function ServiceJsonLd({ name, description, url }: ServicePageProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: name,
    description: description,
    provider: {
      "@type": "Organization",
      name: "株式会社エバンティア",
      url: "https://evantia-co.jp",
    },
    url: url,
    areaServed: {
      "@type": "Country",
      name: "Japan",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQJsonLd({ items }: { items: FAQItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface ArticleProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}

export function ArticleJsonLd({
  title,
  description,
  url,
  datePublished,
  dateModified,
  image,
}: ArticleProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    url: url,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    image: image || "https://evantia-co.jp/og-image.png",
    author: {
      "@type": "Organization",
      name: "株式会社エバンティア",
      url: "https://evantia-co.jp",
    },
    publisher: {
      "@type": "Organization",
      name: "株式会社エバンティア",
      logo: {
        "@type": "ImageObject",
        url: "https://evantia-co.jp/logo.png",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function HowToJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "採用支援サービス導入の流れ",
    description: "エバンティアの採用支援プロセス。戦略設計から実行、自走体制の構築まで。",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "戦略設計",
        text: "経営目標から逆算した採用要件を定義。評価基準を明確に言語化することで、選考の精度を向上させます。",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "実行・仕組み化",
        text: "スカウト、日程調整、面接フィードバック。すべての工程を標準化し、再現性のある採用体制を構築します。",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "移管・自走",
        text: "構築したノウハウと仕組みを社内に移管し、持続的に成果を出せる採用チームを実現します。",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
