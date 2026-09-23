<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Cloudflare deployment rules

- Production target: `https://zicatela.soteasmx.workers.dev`.
- Next.js is deployed through the official `@opennextjs/cloudflare` adapter.
- Keep `build` as `next build`; Cloudflare Workers Builds runs `npx opennextjs-cloudflare build` and then `npx wrangler deploy`.
- Do not commit `.dev.vars`, `.open-next`, Cloudflare secrets, or production credentials.
- `NEXT_PUBLIC_*` values are public build/runtime values; `LEADS_WEBHOOK_URL` is server-only and must be configured as a Cloudflare secret.
- Before changing deployment code, read `open-next.config.ts`, `wrangler.jsonc`, and the current OpenNext Cloudflare documentation.
