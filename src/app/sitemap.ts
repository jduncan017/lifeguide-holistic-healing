import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://lifeguidehealing.com",
      lastModified: new Date("2024-06-12T00:00:00Z"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
