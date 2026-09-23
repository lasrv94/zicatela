export function trackEvent(
  eventName: string,
  parameters: Record<string, string | number | boolean> = {},
) {
  if (typeof window === "undefined") return;

  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === "function") {
    gtag("event", eventName, parameters);
  }
}
