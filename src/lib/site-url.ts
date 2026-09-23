const publicSiteUrl = "https://zicatela.soteasmx.workers.dev";

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || publicSiteUrl;

  let parsedUrl: URL;
  try {
    parsedUrl = new URL(configuredUrl);
  } catch {
    throw new Error("NEXT_PUBLIC_SITE_URL debe ser una URL absoluta válida.");
  }

  if (process.env.NODE_ENV === "production" && parsedUrl.protocol !== "https:") {
    throw new Error("NEXT_PUBLIC_SITE_URL debe usar HTTPS en producción.");
  }

  return parsedUrl.toString().replace(/\/$/, "");
}
