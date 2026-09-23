import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-09-23"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/privacidad`,
      lastModified: new Date("2026-09-23"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
