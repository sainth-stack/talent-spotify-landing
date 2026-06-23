import type { MetadataRoute } from "next";
import { posts } from "@/app/blog/data";

const SITE = "https://www.talentspotify.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE}/`,             lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${SITE}/about`,        lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/blog`,         lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${SITE}/case-study`,   lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/roi-calculator`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/tools`,        lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/tools/okr-readiness`,    lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/tools/okr-learning`,     lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/tools/feedback-studio`,  lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/tools/manager-spark`,    lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/tools/attrition-insight`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/tools/ai-risk-navigator`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/contact`,   lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/careers`,   lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE}/privacy`,  lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${SITE}/terms`,    lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${SITE}/gdpr`,     lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${SITE}/blog/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: p.featured ? 0.9 : 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
