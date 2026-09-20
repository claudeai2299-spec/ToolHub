import type { MetadataRoute } from "next";
import { getIndexableTools } from "@/lib/tools-registry";
import { categories } from "@/lib/categories";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/about`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/contact`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/terms`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/disclaimer`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${SITE_URL}/categories/${cat.slug}`,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const toolPages: MetadataRoute.Sitemap = getIndexableTools().map((tool) => ({
    url: `${SITE_URL}/tools/${tool.slug}`,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticPages, ...categoryPages, ...toolPages];
}
