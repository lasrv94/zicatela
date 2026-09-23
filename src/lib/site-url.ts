const localFallback = "http://localhost:3000";

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!configuredUrl) {
    if (process.env.VERCEL) {
      throw new Error(
        "NEXT_PUBLIC_SITE_URL debe configurarse en producción para generar canonical, sitemap y Open Graph correctamente.",
      );
    }
    return localFallback;
  }

  let parsedUrl: URL;
  try {
    parsedUrl = new URL(configuredUrl);
  } catch {
    throw new Error("NEXT_PUBLIC_SITE_URL debe ser una URL absoluta válida.");
  }

  if (process.env.VERCEL && parsedUrl.protocol !== "https:") {
    throw new Error("NEXT_PUBLIC_SITE_URL debe usar HTTPS en producción.");
  }

  return parsedUrl.toString().replace(/\/$/, "");
}
