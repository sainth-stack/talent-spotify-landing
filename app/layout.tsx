import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AnalyticsScripts } from "@/components/AnalyticsScripts";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const META_TITLE =
  "TalentSpotify | AI Performance Review Software for Fairer Reviews";
const META_DESCRIPTION =
  "TalentSpotify helps Indian mid-market companies run fairer performance reviews with TARA, an AI voice agent for bias detection, OKRs, recognition, and performance evidence.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.talentspotify.com"),
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical: "/" },
  keywords: [
    "AI performance review software",
    "fairer performance reviews",
    "performance management software India",
    "OKR software India",
    "employee recognition software India",
    "AI voice agent for HR",
  ],
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: "https://www.talentspotify.com",
    siteName: "TalentSpotify",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="manifest" href="/images/manifest.json" />
        <meta name="theme-color" content="#33685A" />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} font-sans bg-white text-slate-900 antialiased`}
      >
        <AnalyticsScripts />
        {children}
      </body>
    </html>
  );
}
