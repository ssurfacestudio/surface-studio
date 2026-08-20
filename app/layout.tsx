import type { Metadata, Viewport } from "next";
import { Cormorant, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ThemeProvider from "@/components/ThemeProvider";
import ProtectContent from "@/components/ProtectContent";

const display = Cormorant({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.surfacestudio.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Surface Studio | Luxury Handcrafted Marble Furniture, India",
    template: "%s | Surface Studio",
  },
  description:
    "Surface Studio designs and exports handcrafted marble furniture and décor from India — coffee tables, dining tables, consoles, sculptures and home décor for luxury homes worldwide.",
  keywords: [
    "luxury marble furniture",
    "marble furniture manufacturer India",
    "marble furniture exporter",
    "handcrafted marble tables",
    "marble coffee table",
    "marble dining table",
    "marble sculpture India",
  ],
  authors: [{ name: "Surface Studio" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Surface Studio",
    title: "Surface Studio | Luxury Handcrafted Marble Furniture, India",
    description:
      "Handcrafted marble furniture and décor, designed in India and crafted for luxury homes worldwide.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Surface Studio handcrafted marble furniture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Surface Studio | Luxury Handcrafted Marble Furniture, India",
    description:
      "Handcrafted marble furniture and décor, designed in India and crafted for luxury homes worldwide.",
    images: ["/og-image.jpg"],
  },
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8F7F5" },
    { media: "(prefers-color-scheme: dark)", color: "#1C1C1C" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Surface Studio",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description:
      "Premium Indian manufacturer and exporter of handcrafted marble furniture and décor.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Makrana Road, Kishangarh",
      addressRegion: "Rajasthan",
      postalCode: "305801",
      addressCountry: "IN",
    },
    sameAs: [
      "https://instagram.com/surface_s_",
      "https://facebook.com/surfacestudio",
      "https://linkedin.com/company/surfacestudio",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${display.variable} ${body.variable} font-body`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
                <ProtectContent />
        <ThemeProvider>
          <Navbar />
          <main className="pt-0">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}