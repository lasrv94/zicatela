import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Marea PXM · Puerto Escondido",
    short_name: "Marea PXM",
    description:
      "Guía editorial y planificador de viajes para Puerto Escondido, Oaxaca.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f1e7",
    theme_color: "#082b2a",
    lang: "es-MX",
    categories: ["travel", "lifestyle", "navigation"],
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
