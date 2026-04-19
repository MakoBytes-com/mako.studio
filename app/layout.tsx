import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mako Studio — Web Design & Development",
  description:
    "Mako Studio designs and ships modern, premium websites for small businesses, professionals, and ambitious brands. Based in Montgomery, TX.",
  openGraph: {
    title: "Mako Studio — Web Design & Development",
    description:
      "Modern, premium websites designed and shipped fast. Mako Studio.",
    url: "https://makoai.studio",
    siteName: "Mako Studio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Mako Studio",
    description: "Modern, premium websites designed and shipped fast."
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
