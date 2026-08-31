import { generateServiceMetadata } from "@/lib/serviceMetadata";
import ServiceDetailClient from "../ServiceDetailClient";
import SchemaMarkup from "@/components/SchemaMarkup";
import { SERVICES } from "@/data/site";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { slug: string; city: string } }) {
  return generateServiceMetadata(params.slug, params.city);
}

export default function ServiceCityPage({ params }: { params: { slug: string; city: string } }) {
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
      <ServiceDetailClient slug={params.slug} citySlugParam={params.city} />
    </>
  );
}
