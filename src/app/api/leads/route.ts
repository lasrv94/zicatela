import { z } from "zod";

const leadSchema = z.object({
  email: z.string().trim().email().max(160),
  name: z.string().trim().max(80).optional().default(""),
  interest: z.string().trim().max(80).optional().default("viaje"),
  source: z.string().trim().max(80).optional().default("marea-pxm"),
  company: z.string().max(0).optional().default(""),
});

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 12_000) {
    return Response.json({ error: "Payload too large" }, { status: 413 });
  }

  let input: unknown;
  try {
    input = await request.json();
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
      { status: 503 },
    );
  }

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
    });

    if (!response.ok) throw new Error("Lead webhook failed");

    return Response.json({ success: true }, { status: 201 });
  } catch {
    return Response.json(
      { error: "Lead channel unavailable" },
      { status: 502 },
    );
  }
}
