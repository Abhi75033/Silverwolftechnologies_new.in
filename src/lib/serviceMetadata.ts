import { Metadata } from "next";
import { SERVICES, cityFromSlug, subCityFromSlug, SITE, citySlug } from "@/data/site";

// Custom SEO titles & descriptions per service
const SERVICE_META: Record<string, { title: string; description: string }> = {
  "website-development": {
    title: "Website Development Company | Fast & SEO-Ready Sites",
    description: "Silver Wolf Technologies builds fast, mobile-friendly, SEO-ready websites designed to convert visitors into customers and support business growth.",
  },
  "ecommerce-development": {
    title: "E-commerce Development Company | High-Converting Stores",
    description: "Silver Wolf Technologies develops secure, scalable e-commerce websites on Shopify and custom platforms to increase conversions and sales.",
  },
  "mobile-app-development": {
    title: "Mobile App Development Company | iOS & Android Apps",
    description: "Silver Wolf Technologies builds high-performance mobile apps for iOS and Android with seamless user experience and scalable architecture.",
  },
  "crm-development": {
    title: "CRM Development Company | Automate & Scale Business",
    description: "Silver Wolf Technologies provides custom CRM solutions to manage leads, automate workflows, and improve customer relationships efficiently.",
  },
  "saas-web-apps": {
    title: "SaaS & Web App Development | Scalable Digital Solutions",
    description: "Silver Wolf Technologies builds scalable SaaS and web applications with modern technology, cloud readiness, and user-focused design.",
  },
  "bug-fixing-maintenance": {
    title: "Website Maintenance & Bug Fixing | Fast & Secure",
    description: "Silver Wolf Technologies offers reliable website maintenance and bug fixing to keep your website fast, secure, and running smoothly.",
  },
  "seo-services": {
    title: "SEO Agency | Rank Higher & Get More Traffic",
    description: "Silver Wolf Technologies provides result-driven SEO services to improve rankings, drive organic traffic, and generate high-quality leads.",
  },
  "digital-marketing": {
    title: "Digital Marketing Agency | SEO, Ads & Social Media",
    description: "Silver Wolf Technologies delivers digital marketing services including SEO, paid ads, and social media to increase visibility, leads, and revenue.",
  },
  "social-media-marketing": {
    title: "Social Media Marketing Agency | Build & Grow Your Brand",
    description: "Silver Wolf Technologies manages social media platforms to boost engagement, grow your audience, and generate consistent leads.",
  },
  "branding-strategy": {
    title: "Branding & Strategy Agency | Build Strong Identity",
    description: "Silver Wolf Technologies helps businesses build a strong brand identity with clear strategy, positioning, and impactful messaging.",
  },
  "video-editing": {
    title: "Video Editing Services | Reels, Ads & YouTube Content",
    description: "Silver Wolf Technologies offers professional video editing for reels, ads, and YouTube content that captures attention and boosts engagement.",
  },
  "photo-editing": {
    title: "Photo Editing Services | Professional Image Enhancement",
    description: "Silver Wolf Technologies provides high-quality photo editing and retouching for sharp, visually appealing images across all platforms.",
  },
  "graphic-design": {
    title: "Graphic Design Agency | Creative & Impactful Designs",
    description: "Silver Wolf Technologies creates stunning graphic designs for branding, social media, and marketing that attract attention and build recognition.",
  },
  "ui-ux-design": {
    title: "UI/UX Design Agency | Intuitive Digital Experiences",
    description: "Silver Wolf Technologies designs intuitive UI/UX experiences that improve usability, enhance engagement, and increase conversions.",
  },
};

export function generateServiceMetadata(slug: string, citySlugParam?: string, subCitySlugParam?: string): Metadata {
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  const city = citySlugParam ? cityFromSlug(citySlugParam) : undefined;
  const subCity = city && subCitySlugParam ? subCityFromSlug(city, subCitySlugParam) : undefined;
  const svcLower = service.title.toLowerCase();
  const custom = SERVICE_META[service.slug];

  const title = subCity
    ? `${service.title} in ${subCity}, ${city}`
    : city
      ? `Best ${service.title} Agency in ${city} | ${SITE.name}`
      : custom?.title || `${service.title} | ${SITE.name}`;

  const description = subCity
    ? `Looking for the best ${svcLower} in ${subCity}, ${city}? ${SITE.name} delivers ${service.short.toLowerCase()} ${SITE.yearsExperience}+ years of experience. Free consultation. Call ${SITE.phone}.`
    : city
      ? `Top-rated ${svcLower} agency in ${city}. ${custom?.description || service.short} Trusted by 200+ businesses. Get a free quote today — call ${SITE.phone}.`
      : custom?.description || `${service.short} Trusted by businesses across India and globally. ${SITE.yearsExperience}+ years of experience. Free consultation.`;

  // 12+ keywords per page for broad search coverage
  const baseKeywords = [
    svcLower,
    `${svcLower} services`,
    `${svcLower} company`,
    `${svcLower} agency`,
    `best ${svcLower}`,
    `top ${svcLower}`,
    `professional ${svcLower}`,
    `affordable ${svcLower}`,
    `${svcLower} cost`,
    `${svcLower} pricing`,
    `${svcLower} near me`,
    `hire ${svcLower} expert`,
    ...service.keywords,
  ];

  const locationKeywords = city
    ? [
        `${svcLower} in ${city}`,
        `${svcLower} ${city}`,
        `best ${svcLower} in ${city}`,
        `top ${svcLower} agency ${city}`,
        `${svcLower} company in ${city}`,
        `${svcLower} services ${city}`,
        `affordable ${svcLower} ${city}`,
        `${svcLower} near me ${city}`,
      ]
    : [];

  const canonicalPath = `/services/${service.slug}${city ? `/${citySlug(city)}` : ""}${subCity ? `/${citySlug(subCity)}` : ""}`;
  const canonicalUrl = `${SITE.domain}${canonicalPath}`;
  const ogImage = `${SITE.domain}/og-image.jpg`;

  return {
    title,
    description,
    keywords: Array.from(new Set([...baseKeywords, ...locationKeywords])),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE.name,
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
