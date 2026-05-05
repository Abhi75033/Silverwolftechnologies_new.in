import { generateServiceMetadata } from "@/lib/serviceMetadata";
import ServiceDetailClient from "../../ServiceDetailClient";
import SchemaMarkup from "@/components/SchemaMarkup";
import { SERVICES, SITE } from "@/data/site";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string; city: string; subcity: string } }): Promise<Metadata> {
  const base = generateServiceMetadata(params.slug, params.city, params.subcity);
  return {
    ...base,
    robots: { index: false, follow: true },
    alternates: {
      canonical: `${SITE.domain}/services/${params.slug}/${params.city}`,
    },
  };
}

export default function ServiceSubCityPage({ params }: { params: { slug: string; city: string; subcity: string } }) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) return notFound();

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
      {/* Hyper-local LocalBusiness Schema */}
      <SchemaMarkup
        type="localBusiness"
        data={{
          name: `${SITE.name} — ${service.title} in ${params.subcity}`,
        }}
      />
      <ServiceDetailClient slug={params.slug} citySlugParam={params.city} subCitySlugParam={params.subcity} />
    </>
  );
}
