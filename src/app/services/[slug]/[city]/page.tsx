import { generateServiceMetadata } from "@/lib/serviceMetadata";
import ServiceDetailClient from "../ServiceDetailClient";
import SchemaMarkup from "@/components/SchemaMarkup";
import { SERVICES, SITE, cityFromSlug } from "@/data/site";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { slug: string; city: string } }) {
  return generateServiceMetadata(params.slug, params.city);
}

export default function ServiceCityPage({ params }: { params: { slug: string; city: string } }) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) return notFound();

  const city = cityFromSlug(params.city);
  const svcLower = service.title.toLowerCase();

  // FAQ data for schema markup — targets location + service keywords
  const faqData = city ? [
    { "@type": "Question", "name": `What does ${svcLower} cost in ${city}?`, "acceptedAnswer": { "@type": "Answer", "text": `Our ${svcLower} pricing in ${city} varies based on project scope. We offer competitive rates. Contact us for a free quote.` } },
    { "@type": "Question", "name": `How long does ${svcLower} take in ${city}?`, "acceptedAnswer": { "@type": "Answer", "text": `Typical ${svcLower} projects in ${city} take 2-8 weeks depending on complexity.` } },
    { "@type": "Question", "name": `Why choose Silver Wolf Technologies for ${svcLower} in ${city}?`, "acceptedAnswer": { "@type": "Answer", "text": `With ${SITE.yearsExperience}+ years of experience and 200+ projects delivered, we are one of ${city}'s most trusted ${svcLower} agencies.` } },
    { "@type": "Question", "name": `Do you provide ongoing support after ${svcLower} in ${city}?`, "acceptedAnswer": { "@type": "Answer", "text": `Yes, we provide dedicated post-delivery support for all our ${city} clients.` } },
    { "@type": "Question", "name": `Can I see examples of your ${svcLower} work in ${city}?`, "acceptedAnswer": { "@type": "Answer", "text": `Visit our portfolio page to see case studies from ${city} and other cities.` } },
  ] : [];

  return (
    <>
      <SchemaMarkup
        type="service"
        data={{
          serviceType: service.title,
          description: service.longDescription,
          name: service.title,
        }}
      />
      {city && <SchemaMarkup type="faq" data={{ faqs: faqData }} />}
      <ServiceDetailClient slug={params.slug} citySlugParam={params.city} />
    </>
  );
}
