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
      streetAddress: "淡路町1-4-9 TPR北浜ビル 6F",
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
      streetAddress: "淡路町1-4-9 TPR北浜ビル 6F",
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
