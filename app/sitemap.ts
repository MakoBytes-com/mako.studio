import type { MetadataRoute } from "next";
import { caseStudySlugs } from "@/lib/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base: MetadataRoute.Sitemap = [
    {
      url: "https://makoai.studio",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: "https://makoai.studio/pricing",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: "https://makoai.studio/privacy",
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3
    },
    {
      url: "https://makoai.studio/terms",
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3
    }
  ];

  const caseStudies: MetadataRoute.Sitemap = caseStudySlugs().map((slug) => ({
    url: `https://makoai.studio/work/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8
  }));

  return [...base, ...caseStudies];
}
