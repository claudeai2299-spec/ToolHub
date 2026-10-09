import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  verification: {
    google: "3YSEZUduDeXRiQO9wCYLKE3MBGXCSDrI07pFwf3XSWU",
  },
  other: {
    "google-adsense-account": "ca-pub-7019363107057449",
  },
  title: {
    default: "ToolHub - Free Online Tools",
    template: "%s",
  },
  description:
    "Free browser-based tools. No sign-up, no downloads.",
  openGraph: {
    siteName: "ToolHub",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7019363107057449"
          crossOrigin="anonymous"
        />
      </head>
      <body className="flex min-h-screen flex-col antialiased">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
