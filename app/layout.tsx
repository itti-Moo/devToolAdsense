import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://devkit-thai-tools.tasty-sugar-2900.chatgpt.site",
  ),
  title: { default: "DevKit — Learn more", template: "%s | DevKit" },
  description: "Learn more Learn more Learn more",
  keywords: [
    "developer tools",
    "JSON formatter",
    "JWT decoder",
    "regex tester",
    "Learn more",
  ],
  openGraph: {
    type: "website",
    locale: "th_TH",
    siteName: "DevKit",
    title: "DevKit — Learn more",
    description:
      "Learn moreSmall coding tasks Learn moredone faster without sending data anywhere",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevKit — Learn more",
    description: "Learn more",
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

