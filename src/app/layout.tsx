import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SEBIBE | Seminario Bíblico Internacional Berea",
  description: "Formación teológica inmersiva y comunitaria en Fusagasugá. Discipulado profundo para impactar una generación.",
  keywords: ["seminario biblico", "teologia", "berea", "formacion ministerial", "fusagasuga", "mision global", "estudio biblico"],
  authors: [{ name: "SEBIBE" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "SEBIBE | Seminario Bíblico Internacional Berea",
    description: "Formación para lo Eterno y Profundo. Vive una experiencia de discipulado inmersivo.",
    url: "https://sebibe.org",
    siteName: "SEBIBE",
    images: [
      {
        url: "https://sebibe.org/wp-content/uploads/2026/03/IMG_4034-scaled.jpg",
        width: 1200,
        height: 630,
        alt: "SEBIBE Formación Teológica",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  icons: {
    icon: "https://sebibe.org/wp-content/uploads/2023/12/cropped-logo-general-azul.2.png",
    apple: "https://sebibe.org/wp-content/uploads/2023/12/cropped-logo-general-azul.2.png",
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
    <html lang="es" className={outfit.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Seminario Bíblico Internacional Berea - SEBIBE",
              "url": "https://sebibe.org",
              "logo": "https://sebibe.org/wp-content/uploads/2023/12/cropped-logo-general-azul.2.png",
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
