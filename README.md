# Marea PXM · Puerto Escondido

[![CI](https://github.com/lasrv94/zicatela/actions/workflows/ci.yml/badge.svg)](https://github.com/lasrv94/zicatela/actions/workflows/ci.yml)

Aplicación web editorial y operativa para atraer visitantes a Puerto Escondido, Oaxaca. La propuesta no vende una sola postal: organiza el destino por energía (surf, naturaleza, bienestar, cultura y sabores), ayuda a elegir una ruta y convierte la planificación en una acción concreta.

## Investigación que informa el producto

La investigación se contrastó con fuentes públicas, no con cifras inventadas:

- **Sectur Oaxaca — Indicadores enero–mayo 2026:** el destino registró 47,99 % de ocupación hotelera y un crecimiento de 13,65 % en la llegada de turistas durante el periodo. La cifra se presenta como contexto, no como garantía de disponibilidad.
- **Gobierno de Oaxaca / Sectur — diciembre de 2025:** se informó un segundo vuelo internacional desde Dallas hacia PXM, además del enlace desde Houston, y una proyección de 11 828 asientos internacionales para 2026. La interfaz indica que las rutas pueden cambiar.
- **PNUD México — agosto de 2026:** el crecimiento turístico también trae retos de agua, residuos, expansión urbana, manglares, arrecifes y zonas de anidación. Por eso “turismo responsable” es una columna del producto, no un bloque decorativo.
- **World Surf League:** el destino tiene historia documentada de competencias en Zicatela; la experiencia de surf incluye recomendaciones de seguridad, nivel y respeto de la lineup.
- **Guía oficial de Sectur Oaxaca:** se usa como referencia para la ficha de información práctica.

Fuentes completas están enlazadas en la sección “Fuentes de la investigación” y en el pie de la aplicación.

## Funcionalidades

- Portada responsive con imagen editorial, CTA y clima real vía **Open-Meteo**.
- Filtro interactivo de experiencias con Motion y layout animado.
- Guía de barrios/base: Centro, Carrizalillo, La Punta y Zicatela.
- Planificador de viajes en tres pasos: vibe, duración, ritmo e intereses.
- Itinerario descargable como `.txt`, compartible con Web Share API o WhatsApp si se configura el número.
- Sección informativa con vuelos, transporte, temporadas, seguridad y FAQ.
- CTA de captación preparado para un webhook/CRM (`LEADS_WEBHOOK_URL`).
- PWA instalable con Manifest, service worker y cache de app shell.
- SEO técnico: metadata, canonical, Open Graph dinámico, JSON-LD (`TouristDestination`, `ItemList`, `FAQPage`), sitemap, robots y favicon.
- Analítica GA4 opcional: sólo se carga cuando existe `NEXT_PUBLIC_GA_MEASUREMENT_ID`.
- Imágenes locales de Wikimedia Commons, con créditos y licencias en el footer.

## Stack

- Next.js `16.3.6` (App Router + Turbopack)
- React `19.3.0`
- TypeScript estricto
- Tailwind CSS `4`
- Motion `13.4.2`
- Lucide React
- Zod para validación de leads
- `@opennextjs/cloudflare` `1.20.6` + Wrangler `4.137.0`
- Open-Meteo para clima sin clave API

## Calidad y producción

- Workflow de CI en `.github/workflows/ci.yml` con `npm ci`, lint y build en Node.js 24.
- `npm ci` reproducible mediante `package-lock.json`.
- Cloudflare Workers con adaptador oficial `@opennextjs/cloudflare` y Wrangler 4.
- Cabeceras de seguridad básicas en `next.config.ts`.
- Webhook de leads con validación Zod, límite de tamaño, rate limit básico por instancia y timeout.
- Service worker con fallback offline limitado a navegación.
- `NEXT_PUBLIC_SITE_URL` usa por defecto `https://zicatela.soteasmx.workers.dev` y puede sobrescribirse con una URL HTTPS personalizada.
- Open-Meteo muestra atribución visible. Su endpoint gratuito tiene condiciones de uso no comerciales: revisa o migra a un plan comercial antes de monetizar el sitio o superar el tier gratuito.

## Desarrollo local

Requiere Node.js `20.9+` (probado con Node.js 24).

```bash
npm install
Copy-Item .env.example .env.local
Copy-Item .dev.vars.example .dev.vars
npm run dev
```

Abre `http://localhost:3000`.

Comandos disponibles:

```bash
npm run lint
npm run build
npm run start
npm run preview
npm run deploy
npm run cf-typegen
```

`npm run preview` y `npm run deploy` ejecutan el adaptador OpenNext. No subas `.dev.vars`, `.open-next` ni secretos.

## Configuración de Cloudflare Workers

El Worker se llama `zicatela` y su URL pública es:

```text
https://zicatela.soteasmx.workers.dev
```

En Cloudflare Builds, usa:

- Root directory: `/`
- Build command: `npx opennextjs-cloudflare build`
- Deploy command: `npx wrangler deploy`
- Branch: `main`

La configuración de runtime está en `wrangler.jsonc` y `open-next.config.ts`. El binding `IMAGES` habilita optimización de imágenes mediante Cloudflare Images; activa transformaciones en la cuenta y revisa su precios antes de producción.

## Configuración de producción

1. Define `NEXT_PUBLIC_SITE_URL=https://zicatela.soteasmx.workers.dev` o un dominio HTTPS personalizado.
2. Define `NEXT_PUBLIC_CONTACT_EMAIL` con el buzón público de privacidad.
3. Añade `NEXT_PUBLIC_GA_MEASUREMENT_ID` sólo después de revisar el consentimiento aplicable.
4. Define `NEXT_PUBLIC_WHATSAPP_NUMBER` sólo si quieres habilitar el botón de compartir por WhatsApp, con prefijo de país y sin `+`.
5. Configura `LEADS_WEBHOOK_URL` como secreto de Cloudflare, nunca como build variable pública. En local puedes usar `npx wrangler secret put LEADS_WEBHOOK_URL` después de autenticar Wrangler.
6. Sustituye los enlaces de mapa/proveedores por los socios comerciales definitivos antes de publicar.
7. Revisa el aviso de privacidad con asesoría legal para la jurisdicción y el proveedor de captación elegido.

El formulario de leads es deliberadamente transparente: si el webhook no está configurado devuelve `503` y la interfaz informa que no pudo registrar el correo, en lugar de fingir que guardó datos.

## Licencia y créditos

El código de la aplicación se publica bajo la licencia [MIT](LICENSE). Las fotografías conservan sus licencias originales y **no** quedan cubiertas por la licencia del código. La atribución completa está en [`public/images/IMAGE_CREDITS.md`](public/images/IMAGE_CREDITS.md) y se muestra resumida en el footer. Mantén esos créditos si reutilizas o redistribuyes las imágenes.

Para reportar una vulnerabilidad, sigue [`SECURITY.md`](SECURITY.md) y utiliza el canal privado de GitHub.
