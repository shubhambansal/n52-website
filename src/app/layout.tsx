import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://n52.de'),
  title: "N 52° — Your Digital Foundation Partner | AI-First Software Development Berlin",
  description: "Rooted in Berlin (52°N), we design, build and scale digital products with AI-first teams. Complete software development covering strategy, design, engineering and operation for SMEs and entrepreneurs.",
  keywords: [
    "software development Berlin",
    "AI-first development",
    "digital products",
    "SME software solutions",
    "entrepreneur software",
    "Berlin tech company",
    "AI tools development",
    "software architecture",
    "digital transformation",
    "web development Berlin"
  ],
  authors: [{ name: "N 52°" }],
  creator: "N 52°",
  publisher: "N 52°",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://n52.de',
    siteName: 'N 52°',
    title: 'N 52° — Your Digital Foundation Partner',
    description: 'Rooted in Berlin (52°N), we design, build and scale digital products with AI-first teams.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'N 52° — Your Digital Foundation Partner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'N 52° — Your Digital Foundation Partner',
    description: 'Rooted in Berlin (52°N), we design, build and scale digital products with AI-first teams.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://n52.de',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "N 52°",
    "description": "Digital Foundation Partner specializing in AI-first software development",
    "url": "https://n52.de",
    "logo": "https://n52.de/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Berlin",
      "addressCountry": "Germany"
    },
    "sameAs": [
      "https://linkedin.com/company/n52",
      "https://github.com/n52"
    ],
    "services": [
      "Software Development",
      "AI-First Development",
      "Digital Product Design",
      "Web Development",
      "Mobile Development",
      "Software Architecture"
    ],
    "areaServed": "Germany",
    "foundingLocation": "Berlin, Germany"
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="canonical" href="https://n52.de" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
