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
  description: "Bodega Ruzafa - C/ de Cadis, 45, L'Eixample, 46006 València. Tienda de vinos especializada, catas guiadas, maridajes y entregas a domicilio.",
  keywords: "tienda vinos Valencia, bodega Valencia, cata vinos, maridaje, wine bar Valencia, Bodega Ruzafa, entrega vino a domicilio",
  openGraph: {
    title: "Bodega Ruzafa | Tienda de Vinos y Catas en Valencia",
    description: "Tienda de vinos especializada en Valencia. Catas, maridajes y más de 500 vinos seleccionados.",
    type: "website",
    locale: "es_ES",
    url: "https://www.bodegaruzafa.es",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-sans antialiased bg-stone-50 text-stone-800">
        {children}
      </body>
    </html>
  );
}
