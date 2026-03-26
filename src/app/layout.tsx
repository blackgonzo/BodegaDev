import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bodega Ruzafa | Tienda de Vinos y Catas en Valencia",
  description: "Bodega Ruzafa - C/ de Cadis, 45, L'Eixample, 46006 València, Valencia, España. Tienda de vinos especializada, catas guiadas, maridajes y entregas a domicilio.",
  keywords: "tienda vinos Valencia, bodega Valencia, cata vinos, maridaje, wine bar Valencia, Bodega Ruzafa, entrega vino a domicilio",
  openGraph: {
    title: "Bodega Ruzafa | Tienda de Vinos y Catas en Valencia",
    description: "Tienda de vinos especializada en Valencia. Catas, maridajes y más de 500 vinos seleccionados.",
    type: "website",
    locale: "es_ES",
    url: "https://www.bodegaruzafa.es",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WineStore",
  "name": "Bodega Ruzafa",
  "image": "https://www.bodegaruzafa.es",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "C/ de Cadis, 45",
    "addressLocality": "València",
    "addressRegion": "Valencia",
    "postalCode": "46006",
    "addressCountry": "ES"
  },
  "telephone": "+34667677142",
  "email": "bodegaruzafa@gmail.com",
  "url": "https://www.bodegaruzafa.es",
  "priceRange": "€€",
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"], "opens": "18:30", "closes": "21:30" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Friday", "Saturday"], "opens": "11:30", "closes": "14:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Friday", "Saturday"], "opens": "18:00", "closes": "01:30" }
  ],
  "wheelchairAccessible": true,
  "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "NFC"],
  "sameAs": [
    "https://www.instagram.com/bodegaruzafa",
    "https://www.facebook.com/bodegaruzafa"
  ],
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Wi-Fi gratuito", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Accesible para sillas de ruedas", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "LGBTQ+ amigable", "value": true }
  ],
  "potentialAction": [
    { "@type": "OrderAction", "target": "https://www.bodegaruzafa.es/#contacto", "name": "Hacer pedido" },
    { "@type": "ReserveAction", "target": "https://www.bodegaruzafa.es/#contacto", "name": "Reservar cata" }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${lato.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-stone-50 text-stone-800">
        {children}
      </body>
    </html>
  );
}
