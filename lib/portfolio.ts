export type PortfolioItem = {
  slug: string;
  name: string;
  url: string;
  tagline: string;
  description: string;
  tags: string[];
  status: "Live" | "Client" | "In Progress" | "Available";
  year: string;
  screenshot?: string;
  accent?: "blue" | "silver" | "steel";
};

export const portfolio: PortfolioItem[] = [
  {
    slug: "toppaws",
    name: "TopPaws.com",
    url: "https://toppaws.com",
    tagline: "AI creative platform for pet owners",
    description:
      "Full platform with AI image + video generation, meme creator, user profiles, Stripe billing, admin console, and a community feed.",
    tags: ["Next.js", "Supabase", "Stripe", "Mux", "AI"],
    status: "Live",
    year: "2026",
    accent: "blue",
    screenshot: "/portfolio/toppaws.png"
  },
  {
    slug: "makobot",
    name: "MakoBot",
    url: "https://makobot.com",
    tagline: "AI memory tool for Windows",
    description:
      "Desktop app + marketing site for MakoBytes' cross-project AI memory tool. Trusted signing, auto-updater, Skills Exchange.",
    tags: ["WPF", "Next.js", "Vercel", "Azure Trusted Signing"],
    status: "Live",
    year: "2026",
    accent: "silver",
    screenshot: "/portfolio/makobot.png"
  },
  {
    slug: "aipromptshive",
    name: "AI Prompts Hive",
    url: "https://aipromptshive.com",
    tagline: "Curated library of 5,000+ AI prompts",
    description:
      "Community-driven prompt library with scraped + user-submitted content, R2 image CDN, category pillar pages, and prompt run-links to every major model.",
    tags: ["Next.js", "Supabase", "Cloudflare R2", "SEO"],
    status: "Live",
    year: "2026",
    accent: "steel",
    screenshot: "/portfolio/aipromptshive.png"
  },
  {
    slug: "lengleng",
    name: "LengLeng.ai",
    url: "https://lengleng.ai",
    tagline: "K-pop aesthetic desktop assistant",
    description:
      "Licensed desktop AI assistant with OAuth, license key system, admin dashboard, maintenance mode, and a K-pop-inspired marketing site.",
    tags: ["Next.js", "NextAuth", "Neon", "WPF"],
    status: "Live",
    year: "2026",
    accent: "blue",
    screenshot: "/portfolio/lengleng.png"
  },
  {
    slug: "buffaloseal",
    name: "Buffalo Seal & Gasket",
    url: "https://buffaloseal-showcase.vercel.app",
    tagline: "Industrial sealing solutions — Houston, TX",
    description:
      "Full brand + site for a Houston-based industrial seal and gasket supplier. Clean, professional, contact-driven. Built and maintained by Makologics MSP.",
    tags: ["Client", "Next.js", "Makologics MSP", "Local SEO"],
    status: "Client",
    year: "2026",
    accent: "silver",
    screenshot: "/portfolio/buffaloseal.png"
  },
  {
    slug: "woodlands",
    name: "Family Psychiatry of The Woodlands",
    url: "https://woodlands-showcase.vercel.app",
    tagline: "Private psychiatric practice — The Woodlands, TX",
    description:
      "Warm, professional website for a family psychiatry practice with 30+ years in The Woodlands, TX. Provider bios, services, intake forms, clinical trials, and HIPAA-aware content. Maintained by Makologics MSP.",
    tags: ["Client", "Next.js", "Healthcare", "Makologics MSP"],
    status: "Client",
    year: "2026",
    accent: "steel",
    screenshot: "/portfolio/woodlands.png"
  },
  {
    slug: "davis-investigations",
    name: "Davis Investigation Services",
    url: "https://www.davisinvestigationservices.com",
    tagline: "Pre-employment screening — Conroe, TX",
    description:
      "Conroe, TX-based investigation firm serving Fortune 500 companies and government agencies since 2005. Site covers pre-employment screening, background checks, DOT drug testing, and legal investigations. Maintained by Makologics MSP.",
    tags: ["Client", "Makologics MSP", "Compliance", "Legal"],
    status: "Client",
    year: "2026",
    accent: "silver",
    screenshot: "/portfolio/davis.png"
  },
  {
    slug: "bulldog-security",
    name: "Bulldog Security Service",
    url: "https://bulldogsecurityservice.com",
    tagline: "Home security & smart home (ADT partner)",
    description:
      "Multi-state residential security provider and ADT authorized dealer — 30,000+ homes protected since 2010. Design by others; Makologics MSP handles backend infrastructure, uptime, and ongoing maintenance.",
    tags: ["Client", "Makologics MSP", "Backend", "Maintenance"],
    status: "Client",
    year: "2026",
    accent: "steel",
    screenshot: "/portfolio/bulldog.png"
  },
  {
    slug: "makobytes",
    name: "MakoBytes",
    url: "https://makobytes.com",
    tagline: "Product line for Mako Logics tools",
    description:
      "Umbrella site for the MakoBytes product line — PromptPixel, AI Prompt Hive, MakoBot. Product pages, analytics dashboard, download flow.",
    tags: ["Next.js", "Cloudflare", "Analytics"],
    status: "Live",
    year: "2026",
    accent: "blue",
    screenshot: "/portfolio/makobytes.png"
  }
];
