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
    accent: "blue"
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
    accent: "silver"
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
    accent: "steel"
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
    accent: "blue"
  },
  {
    slug: "buffaloseal",
    name: "Buffalo Seal & Gasket",
    url: "https://buffalosealandgasket.com",
    tagline: "Industrial sealing solutions — Buffalo, NY",
    description:
      "Full brand + site for an industrial seal and gasket supplier. Clean, professional, contact-driven. Built and maintained by Makologics MSP.",
    tags: ["Client", "Next.js", "SEO", "Local"],
    status: "Client",
    year: "2026",
    accent: "silver"
  },
  {
    slug: "woodlands",
    name: "Woodlands Family Psychiatry",
    url: "https://woodlandsfamilypsychiatry.com",
    tagline: "Private psychiatric practice",
    description:
      "Warm, professional website for a family psychiatry practice. Intake forms, provider bios, services, and HIPAA-aware content.",
    tags: ["Client", "Next.js", "Healthcare", "Forms"],
    status: "Client",
    year: "2026",
    accent: "steel"
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
    accent: "blue"
  }
];
