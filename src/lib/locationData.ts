import { chennaiData } from "@/data/locations/chennai";
import { AreaData, CityData } from "@/data/locations/types";
import { generateFallbackAreaData } from "@/lib/contentGenerator";

const ALL_CITIES: Record<string, CityData> = {
  chennai: chennaiData,
  // Other cities will be added here
};

export function getCityData(citySlug: string): CityData | undefined {
  return ALL_CITIES[citySlug];
}

export function getAreaData(citySlug: string, areaSlug: string, serviceTitle: string): AreaData {
  const city = ALL_CITIES[citySlug];
  
  if (city) {
    const area = city.areas.find(a => a.slug === areaSlug);
    if (area) return area;
  }

  // Fallback to programmatic generation
  return generateFallbackAreaData(city?.name || citySlug, areaSlug, serviceTitle);
}
