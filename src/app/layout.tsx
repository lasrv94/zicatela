import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Fraunces, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Marea PXM | Puerto Escondido, Oaxaca",
    template: "%s | Marea PXM",
  },
  description:
    "Guía editorial y planificador de viajes para descubrir Puerto Escondido, Oaxaca: Zicatela, Manialtepec, Mazunte, sabores locales y rutas con sentido.",
  applicationName: "Marea PXM",
  authors: [{ name: "Marea PXM" }],
  creator: "Marea PXM",
  keywords: [
    "Puerto Escondido",
    "Oaxaca",
    "Zicatela",
    "surf",
    "Manialtepec",
    "Mazunte",
    "viajes México",
    "turismo Oaxaca",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteUrl,
    siteName: "Marea PXM",
    title: "Marea PXM | El Pacífico, a tu manera",
    description:
      "Una guía honesta y una ruta a medida para vivir Puerto Escondido más allá de la postal.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marea PXM | Puerto Escondido",
    description: "El Pacífico, a tu manera. Guía y planificador de viajes.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon-192.png",
    apple: "/icon-192.png",
  },
  category: "travel",
};

export const viewport: Viewport = {
  themeColor: "#082b2a",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

function AnalyticsScripts() {
  if (!gaId) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="marea-ga" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaId}', { anonymize_ip: true });`}
      </Script>
    </>
  );
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es-MX" className={`${manrope.variable} ${fraunces.variable}`}>
      <body className="min-h-screen bg-foam text-ink antialiased">
        <a
          href="#contenido"
          className="sr-only fixed left-4 top-4 z-[100] rounded-full bg-ink px-4 py-3 text-sm font-bold text-white focus:not-sr-only"
        >
          Saltar al contenido
        </a>
        {children}
        <AnalyticsScripts />
      </body>
    </html>
  );
}
