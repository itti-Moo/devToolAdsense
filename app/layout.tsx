import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://devkit-thai-tools.tasty-sugar-2900.chatgpt.site",
  ),
  title: { default: "DevKit — Fast private developer tools", template: "%s | DevKit" },
  description: "Fast, private browser-based developer tools for JSON, JWT, regex, timestamps, Base64, diffs, and cron schedules.",
  keywords: [
    "developer tools",
    "JSON formatter",
    "JWT decoder",
    "regex tester",
    "Unix timestamp converter", "Base64 encoder decoder", "text diff checker", "cron parser",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "DevKit",
    title: "DevKit — Fast private developer tools",
    description: "Useful developer utilities that run locally in your browser.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevKit — Fast private developer tools",
    description: "Useful developer utilities that run locally in your browser.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

