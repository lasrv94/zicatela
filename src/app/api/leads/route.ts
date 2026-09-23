import { z } from "zod";

const MAX_BODY_BYTES = 12_000;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 20;
const WEBHOOK_TIMEOUT_MS = 8_000;

const leadSchema = z.object({
  email: z.string().trim().email().max(160),
  name: z.string().trim().max(80).optional().default(""),
  interest: z.string().trim().max(80).optional().default("viaje"),
  source: z.string().trim().max(80).optional().default("marea-pxm"),
  company: z.string().max(200).optional().default(""),
});

type RateLimitEntry = {
  count: number;
  expiresAt: number;
};

const rateLimitStore = new Map<string, RateLimitEntry>();

function getClientKey(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    request.headers.get("x-vercel-forwarded-for") ??
    "unknown"
  );
}

function isRateLimited(key: string) {
  const now = Date.now();
  const current = rateLimitStore.get(key);

  if (!current || current.expiresAt <= now) {
    rateLimitStore.set(key, { count: 1, expiresAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT_MAX_REQUESTS;
}

async function readBodyWithLimit(request: Request, maxBytes: number) {
  if (!request.body) return "";

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let totalBytes = 0;

  try {
    while (true) {
      const result = await reader.read();
      if (result.done) break;
      totalBytes += result.value.byteLength;
      if (totalBytes > maxBytes) {
        await reader.cancel();
        return null;
      }
      chunks.push(result.value);
    }
  } catch {
    return null;
  }

  const body = new Uint8Array(totalBytes);
  let offset = 0;
  for (const chunk of chunks) {
    body.set(chunk, offset);
    offset += chunk.byteLength;
  }

  return new TextDecoder().decode(body);
}

export async function POST(request: Request) {
  const clientKey = getClientKey(request);
  if (isRateLimited(clientKey)) {
    return Response.json(
      { error: "Too many requests" },
      {
        status: 429,
        headers: { "Retry-After": "60", "Cache-Control": "no-store" },
      },
    );
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return Response.json({ error: "Payload too large" }, { status: 413 });
  }

  const rawBody = await readBodyWithLimit(request, MAX_BODY_BYTES);
  if (rawBody === null) {
    return Response.json({ error: "Payload too large" }, { status: 413 });
  }

  let input: unknown;
  try {
    input = JSON.parse(rawBody);
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(input);
  if (!parsed.success) {
    return Response.json(
      { error: "Revisa los datos del formulario" },
      { status: 400 },
    );
  }

  // Honeypot: bots get a neutral response and never reach the webhook.
  if (parsed.data.company) {
    return Response.json({ success: true }, { status: 202 });
  }

  const webhookUrl = process.env.LEADS_WEBHOOK_URL;
  if (!webhookUrl) {
    return Response.json(
      {
        error: "Lead channel is not configured",
        code: "LEAD_CHANNEL_NOT_CONFIGURED",
      },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), WEBHOOK_TIMEOUT_MS);

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...parsed.data,
        company: undefined,
        receivedAt: new Date().toISOString(),
      }),
      cache: "no-store",
      signal: controller.signal,
    });

    if (!response.ok) throw new Error("Lead webhook failed");

    return Response.json({ success: true }, { status: 201 });
  } catch {
    return Response.json(
      { error: "Lead channel unavailable" },
      { status: 502, headers: { "Cache-Control": "no-store" } },
    );
  } finally {
    clearTimeout(timeout);
  }
}
