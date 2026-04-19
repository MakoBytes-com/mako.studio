import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: "https://makoai.studio",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1
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
}
