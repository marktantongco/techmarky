import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@/components/Analytics";

export const metadata: Metadata = {
  title: "TechMarky - Innovative Technology Solutions",
  description: "Transform your ideas into reality with cutting-edge technology. Professional web development, mobile apps, and cloud solutions for modern businesses.",
  keywords: ["technology", "web development", "mobile apps", "cloud solutions", "software development", "digital transformation"],
  authors: [{ name: "Mark Tantongco" }],
  creator: "TechMarky",
  publisher: "TechMarky",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techmarky.com",
    title: "TechMarky - Innovative Technology Solutions",
    description: "Transform your ideas into reality with cutting-edge technology",
    siteName: "TechMarky",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TechMarky - Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechMarky - Innovative Technology Solutions",
    description: "Transform your ideas into reality with cutting-edge technology",
    images: ["/og-image.jpg"],
    creator: "@techmarky",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#4F46E5" />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
