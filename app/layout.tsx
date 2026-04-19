import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://makoai.studio"),
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Mako Studio",
  alternateName: "MakoAI Studio",
  description:
    "AI-native web design and engineering team. The in-house web shop at Mako Logics LLC.",
  url: "https://makoai.studio",
  telephone: "+1-281-206-4848",
  email: "admin@makoai.studio",
  parentOrganization: {
    "@type": "Organization",
    name: "Mako Logics",
    legalName: "Mako Logics LLC",
    url: "https://makologics.com"
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "550 Club Dr #264",
    addressLocality: "Montgomery",
    addressRegion: "TX",
    postalCode: "77316",
    addressCountry: "US"
  },
  areaServed: {
    "@type": "Country",
    name: "United States"
  },
  knowsAbout: [
    "Web Design",
    "Web Development",
    "Next.js",
    "AI-native development",
    "SEO",
    "Managed Hosting"
  ],
  sameAs: ["https://github.com/MakoBytes-com"]
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
