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
  description: "Formando líderes para la misión global con excelencia y compromiso.",
  icons: {
    icon: "http://sebibe.org/wp-content/uploads/2023/12/cropped-logo-general-azul.2.png",
    apple: "http://sebibe.org/wp-content/uploads/2023/12/cropped-logo-general-azul.2.png",
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
              "logo": "http://sebibe.org/wp-content/uploads/2023/12/cropped-logo-general-azul.2.png",
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
