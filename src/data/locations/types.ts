export interface FAQ {
  question: string;
  answer: string;
}

export interface AreaData {
  slug: string; // e.g., 'anna-nagar'
  name: string; // e.g., 'Anna Nagar'
  pinCode: string;
  intro: string;
  metaDescription: string;
  h2Options: string[];
  clientTypes: string; // e.g., "retail boutiques on 2nd Avenue, medical clinics near Shanti Colony"
  nearbyAreas: string[]; // e.g., ["Arumbakkam", "Villivakkam", "Aminjikarai"]
  landmarks: string[]; // e.g., ["2nd Avenue", "Shanti Colony"]
  faqs: FAQ[];
  coordinates: {
    lat: string;
    lng: string;
  };
  // ── Extended content fields (populated by contentGenerator) ──────────────────
  h1Variant?: string;       // Unique H1 text for this page
  metaTitle?: string;       // Unique meta title (without brand suffix)
  h3Options?: string[];     // Sub-heading variants for body sections
  bodySection1?: string;    // Local market context paragraph
  bodySection2?: string;    // Service benefits paragraph
  bodySection3?: string;    // Why-choose-us paragraph
  ctaCopy?: string;         // Unique CTA paragraph
}

export interface CityData {
  slug: string;
  name: string;
  description: string; // 80-100 word ecosystem description
  topIndustries: string[];
  areas: AreaData[];
}
