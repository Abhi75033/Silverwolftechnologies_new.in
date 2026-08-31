export const SITE = {
  name: "Silver Wolf Technologies",
  shortName: "Silver Wolf Tech",
  domain: "https://www.silverwolftechnologies.in",
  email: "info@silverwolftechnologies.in",
  phone: "+91 63947 53801",
  phoneRaw: "+916394753801",
  whatsapp: "916394753801",
  presence: "Remote · Worldwide",
  founded: 2015,
  yearsExperience: 10,
  socials: {
    linkedin: "https://www.linkedin.com/company/silver-wolf-technologies",
    instagram: "https://www.instagram.com/silverwolftechnologies",
  },
};

export type TeamMember = {
  name: string;
  role: string;
  description: string;
  experience: string;
  photo?: string;
  linkedin?: string;
  email?: string;
  phone?: string;
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  category: "Development" | "Marketing" | "Creative";
  icon: string;
  keywords: string[];
  longDescription: string;
  bullets: string[];
  deliverables: string[];
  process: { step: string; detail: string }[];
  teamMembers?: TeamMember[];
  contentSections?: { heading: string; body: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "website-development",
    title: "Website Development",
    short: "Custom business, e-commerce and portfolio websites built on modern stacks (React, Next.js, Shopify, WordPress).",
    category: "Development",
    icon: "Code2",
    keywords: ["website development company", "custom website design", "react website development", "business website India"],
    longDescription:
      "We design and engineer high-performance websites that load fast, rank on Google and convert visitors into customers. Every site is hand-coded with semantic HTML, optimized Core Web Vitals and CMS flexibility — built to scale with your business for the next decade.",
    bullets: [
      "Custom UI/UX designed from scratch — no recycled templates",
      "Lightning-fast (90+ Lighthouse) with image and code optimization",
      "On-page SEO baked in: schema, sitemaps, semantic markup",
      "Mobile-first responsive on every device",
      "Headless CMS or WordPress — your editors stay in control",
    ],
    deliverables: ["Design system in Figma", "Production codebase", "Hosting + DNS setup", "30-day post-launch support"],
    process: [
      { step: "Discovery", detail: "Goals, audience, competitor audit, sitemap planning" },
      { step: "Design", detail: "Wireframes → high-fidelity UI in Figma with brand system" },
      { step: "Build", detail: "Component-driven development with weekly sprint demos" },
      { step: "Launch", detail: "QA, SEO checks, deployment and analytics setup" },
    ],
    teamMembers: [
      {
        name: "Add Team Member",
        role: "Web Developer",
        description: "Replace with your actual team member details.",
        experience: "X+ Years",
      },
    ],
  },
  {
    slug: "ecommerce-development",
    title: "E-commerce Development",
    short: "Conversion-optimized Shopify, WooCommerce and headless commerce stores built to scale.",
    category: "Development",
    icon: "ShoppingCart",
    keywords: ["ecommerce website development", "shopify development India", "woocommerce expert", "online store design"],
    longDescription:
      "From single-product D2C launches to multi-vendor marketplaces, we build e-commerce experiences engineered for conversion. Integrated payments, inventory sync, abandoned-cart automations and analytics that reveal exactly where revenue lives.",
    bullets: [
      "Shopify, WooCommerce, Magento or fully headless setups",
      "Razorpay, Stripe, PayPal, COD and global gateway integrations",
      "Conversion rate optimization on every template",
      "Multi-currency, multi-language, GST-ready",
    ],
    deliverables: ["Storefront + theme", "Payment + shipping integrations", "Inventory dashboards", "Marketing automation hooks"],
    process: [
      { step: "Strategy", detail: "Product catalog, pricing, fulfillment workflow" },
      { step: "Design", detail: "Conversion-first PDP, cart and checkout UX" },
      { step: "Build", detail: "Theme dev, integrations, performance tuning" },
      { step: "Scale", detail: "A/B tests, retargeting and CRO retainer" },
    ],
    teamMembers: [
      {
        name: "Add Team Member",
        role: "E-commerce Developer",
        description: "Replace with your actual team member details.",
        experience: "X+ Years",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    short: "Native iOS, Android and cross-platform Flutter / React Native apps with scalable backends.",
    category: "Development",
    icon: "Smartphone",
    keywords: ["mobile app development company", "android app development", "ios app development", "react native developers"],
    longDescription:
      "We build apps that users actually open. From MVPs validated in 8 weeks to feature-rich platforms with millions of users, our mobile team delivers buttery 60fps UX backed by a battle-tested cloud architecture.",
    bullets: [
      "Native Swift / Kotlin or cross-platform Flutter / React Native",
      "Push notifications, offline mode, in-app purchases",
      "Firebase, Supabase or custom Node/Go backends",
      "App Store + Play Store submission handled end-to-end",
    ],
    deliverables: ["iOS + Android binaries", "Admin dashboard", "API documentation", "Store listings + ASO"],
    process: [
      { step: "Validate", detail: "Wireframe → clickable prototype in 2 weeks" },
      { step: "Architect", detail: "Backend, data model, security, scaling plan" },
      { step: "Build", detail: "2-week sprints, TestFlight + internal testing" },
      { step: "Launch", detail: "Store submission, ASO, post-launch monitoring" },
    ],
    teamMembers: [
      {
        name: "Add Team Member",
        role: "Mobile App Developer",
        description: "Replace with your actual team member details.",
        experience: "X+ Years",
      },
    ],
  },
  {
    slug: "crm-development",
    title: "CRM Development",
    short: "Custom CRM platforms tailored to your sales pipeline, automation and reporting needs.",
    category: "Development",
    icon: "Database",
    keywords: ["custom crm development", "crm software India", "sales automation", "business process automation"],
    longDescription:
      "Off-the-shelf CRMs force you to bend your process around their software. We do the opposite — building custom CRMs around how your team actually sells, supports and reports. Result: faster pipelines, cleaner data, happier reps.",
    bullets: [
      "Custom pipelines, stages and workflows",
      "Lead routing, scoring and automation",
      "WhatsApp, email and call integration",
      "Role-based access, audit logs and reporting",
    ],
    deliverables: ["Web + mobile CRM app", "Admin dashboard", "Migration from existing CRM", "Team training"],
    process: [
      { step: "Map", detail: "Audit current sales / support workflows" },
      { step: "Design", detail: "Pipeline UX, automation rules, integrations" },
      { step: "Build", detail: "Modular development with role-based access" },
      { step: "Adopt", detail: "Data migration, training, ongoing iteration" },
    ],
    teamMembers: [
      {
        name: "Add Team Member",
        role: "CRM Developer",
        description: "Replace with your actual team member details.",
        experience: "X+ Years",
      },
    ],
  },
  {
    slug: "saas-development",
    title: "SaaS & Web Apps",
    short: "Multi-tenant SaaS products, dashboards and internal tools engineered to scale.",
    category: "Development",
    icon: "Rocket",
    keywords: ["saas development company", "web app development", "mern stack developers", "custom software India"],
    longDescription:
      "We've shipped SaaS products from idea to seven-figure ARR. Multi-tenancy, billing, role-based access, audit logs and observability — production-grade foundations from day one.",
    bullets: [
      "MERN, Next.js, NestJS, Python / Django, Go",
      "Stripe, Paddle, Razorpay subscription billing",
      "Multi-tenant + workspace architecture",
      "SOC2-ready logging, monitoring and backups",
    ],
    deliverables: ["Production codebase", "Admin + customer dashboards", "Billing + auth", "DevOps + CI/CD"],
    process: [
      { step: "Architect", detail: "System design, data model, scaling strategy" },
      { step: "MVP", detail: "Core flows shipped in 8–12 weeks" },
      { step: "Scale", detail: "Performance, observability, on-call playbooks" },
      { step: "Iterate", detail: "Feature retainer aligned to product analytics" },
    ],
    teamMembers: [
      {
        name: "Add Team Member",
        role: "SaaS Developer",
        description: "Replace with your actual team member details.",
        experience: "X+ Years",
      },
    ],
  },
  {
    slug: "bug-fixing-maintenance",
    title: "Bug Fixing & Maintenance",
    short: "Rapid debugging, performance audits and ongoing support for existing websites and apps.",
    category: "Development",
    icon: "Bug",
    keywords: ["website bug fixing", "wordpress maintenance", "app maintenance services", "performance optimization"],
    longDescription:
      "Inherited a messy codebase? Site crashing under traffic? We're the senior engineers you call when things break. Audit, stabilize and modernize legacy code so you can sleep again.",
    bullets: [
      "24–48hr emergency triage available",
      "Codebase audits with prioritized fix roadmaps",
      "Performance and Core Web Vitals optimization",
      "Monthly maintenance retainers from ₹15,000",
    ],
    deliverables: ["Audit report", "Fixed codebase + tests", "Performance metrics", "Maintenance SLA"],
    process: [
      { step: "Triage", detail: "Reproduce issue, isolate root cause" },
      { step: "Audit", detail: "Codebase, dependencies, security review" },
      { step: "Fix", detail: "Prioritized fixes with regression tests" },
      { step: "Maintain", detail: "Monthly retainer with monitoring" },
    ],
    teamMembers: [
      {
        name: "Add Team Member",
        role: "Support Engineer",
        description: "Replace with your actual team member details.",
        experience: "X+ Years",
      },
    ],
  },
  {
    slug: "seo-services",
    title: "SEO Services",
    short: "Rank on Google in India and globally with technical, on-page and off-page SEO.",
    category: "Marketing",
    icon: "Search",
    keywords: ["seo company India", "best seo services", "google ranking expert", "technical seo agency"],
    longDescription:
      "We don't promise rankings — we engineer them. Technical SEO that fixes crawl issues, content strategy that targets buyer-intent keywords, and link-building that earns authority. Transparent monthly reports show exactly what's moving.",
    bullets: [
      "Technical SEO audit + Core Web Vitals fixes",
      "Keyword research with search-intent mapping",
      "On-page optimization and content strategy",
      "Authority backlinks from genuine publications",
      "Monthly Looker Studio reporting dashboard",
    ],
    deliverables: ["Audit + roadmap", "Optimized pages", "Monthly content + outreach", "Ranking + traffic dashboard"],
    process: [
      { step: "Audit", detail: "Technical, content, backlink and competitor audit" },
      { step: "Strategy", detail: "Keyword map, content calendar, link plan" },
      { step: "Execute", detail: "On-page, content, technical fixes monthly" },
      { step: "Report", detail: "Live dashboard + monthly review call" },
    ],
    teamMembers: [
      {
        name: "Add Team Member",
        role: "SEO Specialist",
        description: "Replace with your actual team member details.",
        experience: "X+ Years",
      },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    short: "Performance ads, social and content marketing that drives measurable ROI.",
    category: "Marketing",
    icon: "Megaphone",
    keywords: ["digital marketing agency", "performance marketing", "google ads expert", "facebook ads agency"],
    longDescription:
      "Full-funnel digital marketing — from brand awareness to bottom-funnel conversion. Google, Meta, LinkedIn and YouTube campaigns managed by certified strategists who optimize against revenue, not vanity metrics.",
    bullets: [
      "Google Ads, Meta, LinkedIn, YouTube, Programmatic",
      "Landing-page CRO + conversion tracking setup",
      "Creative production handled in-house",
      "Weekly optimizations + transparent dashboards",
    ],
    deliverables: ["Strategy doc", "Ad creatives", "Landing pages", "Performance dashboard"],
    process: [
      { step: "Plan", detail: "ICP, funnel, channel mix, budget allocation" },
      { step: "Build", detail: "Creatives, landing pages, tracking pixels" },
      { step: "Launch", detail: "Test → scale winning ad sets" },
      { step: "Optimize", detail: "Weekly creative + bid optimization" },
    ],
    teamMembers: [
      {
        name: "Add Team Member",
        role: "Digital Marketing Manager",
        description: "Replace with your actual team member details.",
        experience: "X+ Years",
      },
    ],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    short: "Full-service social media marketing agency — strategy, content creation, community management and performance reporting under one roof with zero outsourcing.",
    category: "Marketing",
    icon: "Share2",
    keywords: [
      "social media marketing agency India",
      "social media marketing services",
      "social media management company India",
      "social media marketing Mumbai",
      "SMM packages India",
      "instagram marketing agency",
      "linkedin marketing services",
      "social media advertising services",
      "social media marketing cost India",
      "social media marketing strategy",
    ],
    longDescription:
      "Silver Wolf Technologies is a full-service social media marketing agency delivering end-to-end social media marketing services across India and globally. We handle everything — strategy, content creation, community management, and performance reporting — all under one roof with zero outsourcing. Our approach is platform-native: what we create for Instagram is built for Instagram, not resized from a generic template. If you're looking for a social media management company that treats growth as a system — not a gamble — Silver Wolf is built for you.",
    bullets: [
      "Platform-native content — not resized generic templates",
      "Instagram, Facebook, LinkedIn, YouTube and X (Twitter) management",
      "Monthly content calendars with hooks, captions and hashtag strategy",
      "Reels, shorts, carousels, static posts — all produced in-house",
      "Community management including DMs and comment handling",
      "Meta & Google social media advertising with detailed ROI tracking",
      "Dedicated account manager on every package",
      "Monthly performance reports with reach, engagement and lead attribution",
    ],
    deliverables: [
      "Social media strategy document",
      "Monthly content calendar + content packs",
      "Community management + DM lead handling",
      "Paid social ad campaigns (optional)",
      "Monthly performance reports with analytics",
    ],
    process: [
      { step: "Strategy", detail: "Deep audit of brand, audience and competitors — identifying content pillars and platform mix for fastest results" },
      { step: "Production", detail: "In-house team produces all assets — reels, carousels, captions — scheduled against a content calendar" },
      { step: "Engagement", detail: "Real-time community management including DMs, comments and lead routing" },
      { step: "Iteration", detail: "Monthly performance report with reach, engagement rate, follower growth and lead attribution — active optimisation based on data" },
    ],
    teamMembers: [
      {
        name: "Add Team Member",
        role: "Social Media Manager",
        description: "Replace with your actual team member details.",
        experience: "X+ Years",
      },
    ],
    contentSections: [
      {
        heading: "What We Do",
        body: "Silver Wolf Technologies is a full-service social media marketing agency in Mumbai delivering end-to-end social media marketing services across India and globally. We handle everything — strategy, content creation, community management, and performance reporting — all under one roof with zero outsourcing. Our approach is platform-native: what we create for Instagram is built for Instagram, not resized from a generic template. Businesses across Mumbai, Delhi, Bangalore, Pune, and Hyderabad partner with us to build social media presence that consistently drives leads, not just likes. If you're looking for a social media management company in India that treats growth as a system — not a gamble — Silver Wolf is built for you.",
      },
      {
        heading: "Our Services",
        body: "Our social media marketing services cover the full spectrum of what modern brands need — from content strategy and monthly calendars to reels production, carousel design, caption writing, and paid social ads. We manage brand presence across Instagram, Facebook, LinkedIn, YouTube, and X (Twitter). For e-commerce businesses, we also offer social media advertising services on Meta and Google, with detailed ROI tracking on every rupee spent. Our social media management packages in India are fully customisable — whether you need organic-only, paid-only, or a blended growth strategy. Every package includes a dedicated account manager, monthly performance reports, and content produced entirely in-house by our creative team.",
      },
      {
        heading: "Our Proven Process",
        body: "Our social media marketing strategy is built on a 4-step framework we've refined over 10 years: Strategy, Production, Engagement, and Iteration. We begin with a deep audit of your brand, audience, and competitors — identifying the content pillars and platform mix that will drive the fastest results. From there, our in-house team produces all assets, schedules them against a content calendar, and manages real-time community interactions including DMs and comments. Every month ends with a social media performance report showing reach, engagement rate, follower growth, and lead attribution. This isn't a set-and-forget service — we actively optimise based on what the data shows, making us one of the most results-driven social media agencies in India.",
      },
      {
        heading: "Pricing & Packages",
        body: "Social media marketing cost in India varies widely depending on the agency and scope of work — but at Silver Wolf, our packages start at ₹15,000/month with full transparency on what's included. There are no hidden charges, no lock-in contracts for the first month, and no outsourced freelancers handling your brand. Our SMM packages are tiered by platform count, posting frequency, and whether paid advertising is bundled in. Whether you're a startup with a modest budget or an enterprise brand scaling across multiple cities, we have a social media marketing plan built for your stage and goal.",
      },
      {
        heading: "Serving Clients Nationwide & Globally",
        body: "We serve clients across Mumbai, Delhi, Bangalore, Hyderabad, Pune, Chennai, Ahmedabad, Jaipur, Kolkata, Surat, Kochi, and Chandigarh — as well as international markets including Dubai, Singapore, London, and New York. Our social media marketing services in Mumbai are backed by local market understanding, while our global clients benefit from the same strategic rigour applied to their regional audiences. If you're ready to stop guessing and start growing, get in touch with Silver Wolf Technologies today. Request a free proposal and let our team build a social media strategy tailored to your business.",
      },
    ],
  },
  {
    slug: "branding-strategy",
    title: "Branding & Strategy",
    short: "Positioning, identity systems and growth roadmaps that compound over time.",
    category: "Marketing",
    icon: "LineChart",
    keywords: ["brand strategy agency", "logo design India", "brand identity", "positioning strategy"],
    longDescription:
      "Strong brands compound. We help founders and CMOs build positioning that's sharp, identities that scale and brand systems your whole team can apply consistently across every touchpoint.",
    bullets: [
      "Brand audit, positioning, voice + messaging",
      "Logo, color, typography, brand guidelines PDF",
      "Pitch decks, investor materials, sales collateral",
      "Brand launch / relaunch campaigns",
    ],
    deliverables: ["Brand strategy doc", "Logo + identity", "Brand guidelines", "Launch assets"],
    process: [
      { step: "Discover", detail: "Audit, interviews, market mapping" },
      { step: "Position", detail: "Sharp positioning + messaging hierarchy" },
      { step: "Design", detail: "Identity system + applications" },
      { step: "Launch", detail: "Brand reveal + activation campaign" },
    ],
    teamMembers: [
      {
        name: "Add Team Member",
        role: "Brand Strategist",
        description: "Replace with your actual team member details.",
        experience: "X+ Years",
      },
    ],
  },
  {
    slug: "video-editing",
    title: "Video Editing",
    short: "YouTube, reels, ads and corporate edits with cinematic motion design.",
    category: "Creative",
    icon: "Video",
    keywords: ["video editing services", "youtube video editor", "reels editing", "corporate video production"],
    longDescription:
      "Long-form YouTube to scroll-stopping reels — our editors blend storytelling with motion design that holds attention. Subtitles, color grading, sound design and platform-native pacing included.",
    bullets: [
      "YouTube long-form, shorts, reels, TikTok",
      "Ad creatives, explainer videos, product films",
      "Motion graphics + lower thirds + subtitles",
      "Bulk monthly retainers for creators + brands",
    ],
    deliverables: ["Edited videos in 1080p / 4K", "Source files", "Captions + thumbnails", "Revisions included"],
    process: [
      { step: "Brief", detail: "Goals, references, brand guidelines" },
      { step: "Edit", detail: "Story → cuts → motion → sound" },
      { step: "Review", detail: "2 rounds of revisions standard" },
      { step: "Deliver", detail: "Final files + platform-ready exports" },
    ],
    teamMembers: [
      // Replace with real team data — add photo URLs, LinkedIn profiles, etc.
      {
        name: "Add Team Member",
        role: "Video Editor",
        description: "Replace this with your actual team member's description and background.",
        experience: "X+ Years",
        // photo: "/team/member-photo.jpg",
        // linkedin: "https://linkedin.com/in/username",
        // email: "name@silverwolftechnologies.in",
        // phone: "+91XXXXXXXXXX",
      },
    ],
  },
  {
    slug: "photo-editing",
    title: "Photo Editing",
    short: "Retouching, background removal and product enhancement at scale.",
    category: "Creative",
    icon: "Image",
    keywords: ["photo editing services", "product photo editing", "background removal", "image retouching"],
    longDescription:
      "Catalog-grade product retouching, model and portrait editing, real-estate and lifestyle work — delivered at e-commerce scale with consistent batch processing.",
    bullets: [
      "Background removal, color correction, retouching",
      "E-commerce catalog standards (Amazon, Shopify, Flipkart)",
      "Bulk batches with consistent style",
      "Quick 24-hour turnaround available",
    ],
    deliverables: ["Edited high-res images", "Source PSDs on request", "White-background variants", "Web-optimized exports"],
    process: [
      { step: "Brief", detail: "Style guide, references, output specs" },
      { step: "Edit", detail: "Bulk editing with QC pass" },
      { step: "Review", detail: "Sample approval before full batch" },
      { step: "Deliver", detail: "Organized, named, web-optimized" },
    ],
    teamMembers: [
      {
        name: "Add Team Member",
        role: "Photo Editor",
        description: "Replace this with your actual team member's description and background.",
        experience: "X+ Years",
      },
    ],
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    short: "Logos, banners, social creatives and marketing collateral that stop the scroll.",
    category: "Creative",
    icon: "Palette",
    keywords: ["graphic design services", "logo design", "social media creatives", "brochure design"],
    longDescription:
      "Concept-led graphic design for brands that care about craft. Logos, social creatives, brochures, packaging, presentations — all built on systems your team can extend.",
    bullets: [
      "Logo + visual identity systems",
      "Social media post + ad creative packs",
      "Brochures, flyers, packaging, signage",
      "Pitch decks + investor presentations",
    ],
    deliverables: ["Design files (AI / Figma)", "Print + web-ready exports", "Brand guidelines", "Editable templates"],
    process: [
      { step: "Brief", detail: "Goals, audience, brand inputs" },
      { step: "Concept", detail: "2–3 distinct directions" },
      { step: "Refine", detail: "Iterate to final design system" },
      { step: "Deliver", detail: "All formats + working files" },
    ],
    teamMembers: [
      {
        name: "Add Team Member",
        role: "Graphic Designer",
        description: "Replace this with your actual team member's description and background.",
        experience: "X+ Years",
      },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    short: "Research-driven interfaces and user experiences that convert visitors into customers.",
    category: "Creative",
    icon: "Layout",
    keywords: ["ui ux design agency", "product design India", "figma designers", "mobile app ui design"],
    longDescription:
      "Strategy-led product design for SaaS, mobile apps and complex web platforms. We marry user research, interaction design and visual craft to ship interfaces people love.",
    bullets: [
      "User research, journey mapping, IA",
      "Wireframes, prototypes, design systems",
      "Web, SaaS, mobile, dashboard interfaces",
      "Usability testing + design QA on builds",
    ],
    deliverables: ["Figma file + prototype", "Design system tokens", "Handoff specs", "Usability test report"],
    process: [
      { step: "Research", detail: "Users, competitors, jobs-to-be-done" },
      { step: "Architect", detail: "Flows, IA, wireframes" },
      { step: "Design", detail: "High-fidelity UI + interactions" },
      { step: "Validate", detail: "Prototype testing + iteration" },
    ],
    teamMembers: [
      {
        name: "Add Team Member",
        role: "UI/UX Designer",
        description: "Replace with your actual team member details.",
        experience: "X+ Years",
      },
    ],
  },
];

export const CITIES = [
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Pune", "Chennai",
  "Kolkata", "Ahmedabad", "Jaipur", "Lucknow", "Chandigarh", "Noida",
  "Gurgaon", "Indore", "Surat", "Kochi", "Dubai", "London",
  "New York", "Toronto", "Sydney", "Singapore",
];

/** Sub-cities / localities grouped under each major city for hyper-local SEO */
export const SUB_CITIES: Record<string, string[]> = {
  Mumbai: [
    "Thane", "Andheri", "Dadar", "Ghatkopar", "Diva", "Dombivli",
    "Kalyan", "Ulhasnagar", "Borivali", "Vashi", "Navi Mumbai",
    "Bandra", "Powai", "Goregaon", "Malad", "Kandivali", "Kurla",
    "Chembur", "Mulund", "Vikhroli", "Wadala", "Lower Parel",
    "Worli", "Juhu", "Versova", "Panvel", "Kharghar", "Airoli",
    "Nerul", "Belapur", "Mira Road", "Bhayander", "Vasai", "Virar",
    "Ambernath", "Badlapur",
  ],
  Delhi: [
    "Connaught Place", "Karol Bagh", "Lajpat Nagar", "Saket",
    "Dwarka", "Rohini", "Pitampura", "Janakpuri", "Rajouri Garden",
    "Nehru Place", "Hauz Khas", "Greater Kailash", "Defence Colony",
    "Vasant Kunj", "Vasant Vihar", "Laxmi Nagar", "Preet Vihar",
    "Mayur Vihar", "Shahdara", "Chandni Chowk", "Kalkaji",
    "South Extension", "Patel Nagar", "Vikaspuri", "Uttam Nagar",
    "Narela", "Model Town", "Okhla", "Mehrauli",
  ],
  Bangalore: [
    "Whitefield", "Koramangala", "Indiranagar", "HSR Layout",
    "Electronic City", "Marathahalli", "Jayanagar", "Bannerghatta Road",
    "BTM Layout", "JP Nagar", "Hebbal", "Yelahanka", "Malleshwaram",
    "Rajajinagar", "Basavanagudi", "Banashankari", "Sadashivanagar",
    "RT Nagar", "Bellandur", "Sarjapur Road", "Hennur",
    "Kanakapura Road", "Devanahalli", "Peenya", "KR Puram",
  ],
  Hyderabad: [
    "HITEC City", "Gachibowli", "Madhapur", "Kondapur", "Banjara Hills",
    "Jubilee Hills", "Ameerpet", "Begumpet", "Kukatpally",
    "Secunderabad", "Miyapur", "Manikonda", "Tolichowki",
    "Dilsukhnagar", "LB Nagar", "Uppal", "Habsiguda",
    "Sainikpuri", "Kompally", "Shamshabad", "Mehdipatnam",
    "Attapur", "Lingampally", "Nizampet",
  ],
  Pune: [
    "Hinjewadi", "Kharadi", "Viman Nagar", "Koregaon Park",
    "Baner", "Wakad", "Pimpri-Chinchwad", "Hadapsar",
    "Magarpatta", "Kothrud", "Deccan", "Shivajinagar",
    "Aundh", "Pashan", "Bavdhan", "Katraj", "Swargate",
    "Camp", "Kalyani Nagar", "Yerawada", "Vishrantwadi",
    "Wagholi", "Undri", "NIBM Road", "Kondhwa",
  ],
  Chennai: [
    "T Nagar", "Anna Nagar", "Adyar", "Velachery",
    "Porur", "Tambaram", "Sholinganallur", "OMR",
    "Guindy", "Nungambakkam", "Mylapore", "Egmore",
    "Perambur", "Avadi", "Ambattur", "Chromepet",
    "Pallavaram", "Medavakkam", "Perungudi", "Thoraipakkam",
    "Thiruvanmiyur", "Besant Nagar", "Kodambakkam", "Ashok Nagar",
  ],
  Kolkata: [
    "Salt Lake", "Newtown", "Park Street", "Howrah",
    "Behala", "Ballygunge", "Dum Dum", "Barasat",
    "Garia", "Tollygunge", "Jadavpur", "Rajarhat",
    "Barrackpore", "Serampore", "Kalyani", "Lake Town",
    "Alipore", "Gariahat", "Esplanade", "Sealdah",
    "Ultadanga", "Kasba", "Baranagar",
  ],
  Ahmedabad: [
    "SG Highway", "Satellite", "Prahlad Nagar", "Bodakdev",
    "Navrangpura", "Maninagar", "Vastrapur", "Thaltej",
    "Bopal", "Gota", "Chandkheda", "Naranpura",
    "Paldi", "Ellisbridge", "Ashram Road", "CG Road",
    "Memnagar", "Ghatlodiya", "Sola", "Science City Road",
    "Isanpur", "Nikol", "Naroda",
  ],
  Jaipur: [
    "Malviya Nagar", "Vaishali Nagar", "Mansarovar", "C-Scheme",
    "Tonk Road", "Jagatpura", "Sitapura", "Sodala",
    "Raja Park", "Pratap Nagar", "Sanganer", "Vidhyadhar Nagar",
    "Bani Park", "MI Road", "Durgapura", "Ajmer Road",
    "Gopalpura", "Shyam Nagar", "Jhotwara",
  ],
  Lucknow: [
    "Hazratganj", "Gomti Nagar", "Aliganj", "Indira Nagar",
    "Aminabad", "Charbagh", "Alambagh", "Mahanagar",
    "Vikas Nagar", "Rajajipuram", "Aashiana", "Jankipuram",
    "Chinhat", "Kakori", "Cantonment", "Husainabad",
  ],
  Chandigarh: [
    "Sector 17", "Sector 22", "Sector 35", "Sector 43",
    "Mohali", "Panchkula", "Zirakpur", "Kharar",
    "Industrial Area Phase 1", "IT Park", "Manimajra",
    "Sector 8", "Sector 9", "Sector 26",
  ],
  Noida: [
    "Sector 62", "Sector 63", "Sector 18", "Sector 15",
    "Sector 16", "Greater Noida", "Noida Extension",
    "Sector 125", "Sector 137", "Sector 44", "Sector 50",
    "Film City", "Botanical Garden", "Sector 76", "Sector 104",
    "Knowledge Park", "Pari Chowk", "Alpha 1", "Alpha 2",
  ],
  Gurgaon: [
    "Cyber City", "DLF Phase 1", "DLF Phase 2", "DLF Phase 3",
    "Sohna Road", "Golf Course Road", "MG Road", "Sector 29",
    "Sector 14", "Sector 44", "Sector 45", "Udyog Vihar",
    "Manesar", "Palam Vihar", "South City", "Nirvana Country",
    "Sushant Lok", "Huda City Centre", "Sector 56", "Sector 57",
  ],
  Indore: [
    "Vijay Nagar", "Palasia", "Rajwada", "Sapna Sangeeta Road",
    "AB Road", "MG Road", "Bhawarkua", "Rau",
    "Nipania", "Bhanwarkuan", "Sudama Nagar", "Annapurna Road",
    "Scheme No 54", "Scheme No 78", "Aerodrome Road",
  ],
  Surat: [
    "Vesu", "Adajan", "Athwa", "Varachha",
    "Piplod", "Katargam", "Udhna", "Ring Road",
    "Pal", "Althan", "Ghod Dod Road", "Dumas Road",
    "City Light", "Parle Point", "Dindoli",
  ],
  Kochi: [
    "Edappally", "Kakkanad", "Vyttila", "MG Road Kochi",
    "Marine Drive", "Palarivattom", "Aluva", "Thrippunithura",
    "Kaloor", "Kadavanthra", "Fort Kochi", "Mattancherry",
    "Kalamassery", "Infopark", "SmartCity",
  ],
  Dubai: [
    "Downtown Dubai", "Dubai Marina", "Business Bay",
    "Jumeirah", "DIFC", "JLT", "Deira",
    "Bur Dubai", "Al Barsha", "Dubai Internet City",
    "Dubai Media City", "Dubai Silicon Oasis", "Al Quoz",
    "Karama", "Sheikh Zayed Road",
  ],
  London: [
    "Central London", "Shoreditch", "Canary Wharf", "Westminster",
    "Camden", "Islington", "Hackney", "Kensington",
    "Chelsea", "Soho", "Mayfair", "Brixton",
    "Stratford", "Greenwich", "Richmond", "Croydon",
  ],
  "New York": [
    "Manhattan", "Brooklyn", "Queens", "Bronx",
    "Staten Island", "Midtown", "SoHo", "Chelsea NYC",
    "Tribeca", "Williamsburg", "Harlem", "Upper East Side",
    "Upper West Side", "Lower East Side", "Financial District",
    "Long Island City",
  ],
  Toronto: [
    "Downtown Toronto", "North York", "Scarborough", "Etobicoke",
    "Mississauga", "Brampton", "Markham", "Richmond Hill",
    "Vaughan", "Oakville", "Pickering", "Ajax",
    "Yorkville", "Liberty Village", "King West",
  ],
  Sydney: [
    "Sydney CBD", "Parramatta", "North Sydney", "Bondi",
    "Manly", "Surry Hills", "Darlinghurst", "Newtown",
    "Chatswood", "Penrith", "Liverpool Sydney", "Bankstown",
    "Blacktown", "Macquarie Park", "Ryde", "Strathfield",
  ],
  Singapore: [
    "Raffles Place", "Marina Bay", "Orchard Road", "Bugis",
    "Jurong East", "Tampines", "Woodlands", "Ang Mo Kio",
    "Toa Payoh", "Clementi", "Buona Vista", "One-North",
    "Changi Business Park", "Paya Lebar",
  ],
};

export const citySlug = (c: string) => c.toLowerCase().replace(/\s+/g, "-");

/** Resolve a major city from its slug */
export const cityFromSlug = (slug: string) =>
  CITIES.find((c) => citySlug(c) === slug.toLowerCase());

/** Get all sub-cities for a major city */
export const getSubCities = (city: string): string[] =>
  SUB_CITIES[city] ?? [];

/** Resolve a sub-city name from its slug, within a specific parent city */
export const subCityFromSlug = (parentCity: string, slug: string): string | undefined => {
  const subs = SUB_CITIES[parentCity];
  if (!subs) return undefined;
  return subs.find((sc) => citySlug(sc) === slug.toLowerCase());
};

/** Find the parent city for any location (could be a major city or sub-city) */
export const findParentCity = (locationSlug: string): string | undefined => {
  // First check if it's a major city
  const major = cityFromSlug(locationSlug);
  if (major) return major;
  // Then check sub-cities
  for (const [city, subs] of Object.entries(SUB_CITIES)) {
    if (subs.some((sc) => citySlug(sc) === locationSlug.toLowerCase())) {
      return city;
    }
  }
  return undefined;
};

/** Get flat list of ALL locations (major + sub) for sitemap generation */
export const getAllLocations = (): { city: string; subCity?: string }[] => {
  const locations: { city: string; subCity?: string }[] = [];
  for (const city of CITIES) {
    locations.push({ city });
    for (const sub of (SUB_CITIES[city] ?? [])) {
      locations.push({ city, subCity: sub });
    }
  }
  return locations;
};
