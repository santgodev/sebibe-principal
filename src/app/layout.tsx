import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "SEBIBE | Seminario Bíblico Internacional Berea",
  description: "Formación teológica inmersiva y comunitaria en Fusagasugá. Discipulado profundo para impactar una generación.",
  keywords: ["seminario biblico", "teologia", "berea", "formacion ministerial", "fusagasuga", "mision global", "estudio biblico"],
  authors: [{ name: "SEBIBE" }],
  openGraph: {
    title: "SEBIBE | Seminario Bíblico Internacional Berea",
    description: "Formando líderes para la misión global",
    url: "https://sebibe.org",
    siteName: "SEBIBE",
    images: [
      {
        url: "/assets/images/sections/hero-main.jpg",
        width: 1200,
        height: 630,
        alt: "SEBIBE Formación Teológica",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  icons: {
    icon: "/assets/images/brand/logo-main.png",
    apple: "/assets/images/brand/logo-main.png",
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={outfit.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Seminario Bíblico Internacional Berea - SEBIBE",
              "url": "https://sebibe.org",
              "logo": "/assets/images/brand/logo-main.png",
              "description": "Formando líderes para la misión global con excelencia y compromiso.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Fusagasugá",
                "addressRegion": "Cundinamarca",
                "addressCountry": "CO"
              },
              "telephone": "+573144787072"
            })
          }}
        />
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
