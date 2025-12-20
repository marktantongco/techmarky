import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechMarky - Landing Page",
  description: "Professional landing page with demo modal, portfolio, and contact form",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
