import type { MetadataRoute } from 'next';

const paths = ['', 'developer-tools', 'developer-tools/url','developer-tools/uuid','developer-tools/hash','developer-tools/hmac','developer-tools/entity','developer-tools/parser','developer-tools/status','developer-tools/xml','developer-tools/sql','developer-tools/yaml','developer-tools/markdown','developer-tools/css','developer-tools/color','developer-tools/permissions','developer-tools/json-csv','developer-tools/json-yaml','developer-tools/number-base','developer-tools/rgb','developer-tools/temperature','developer-tools/bytes','developer-tools/case','developer-tools/image-base64', 'converters', 'guides', 'developer-tools/json-formatter', 'developer-tools/jwt-decoder', 'developer-tools/regex-tester','developer-tools/text-diff-checker','developer-tools/cron-job-parser', 'converters/timestamp-converter', 'converters/base64-converter', 'guides/how-to-format-json', 'guides/jwt-vs-session', 'guides/regex-cheat-sheet', 'about', 'contact', 'privacy', 'terms'];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path, index) => {
    const isTool = path.includes('tools/') || path.includes('converters/');
    return {
      url: `https://devkit-thai-tools.tasty-sugar-2900.chatgpt.site/${path}${path ? '/' : ''}`,
      lastModified: new Date('2026-09-03'),
      changeFrequency: index === 0 ? 'weekly' : 'monthly',
      priority: index === 0 ? 1 : isTool ? 0.9 : 0.6,
    };
  });
}




