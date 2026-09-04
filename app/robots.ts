import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap:
      "https://devkit-thai-tools.tasty-sugar-2900.chatgpt.site/sitemap.xml",
  };
}

