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
- Open-Meteo para clima sin clave API

## Desarrollo local

Requiere Node.js `20.9+` (probado con Node.js 24).

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abre `http://localhost:3000`.

Comandos disponibles:

```bash
npm run lint
npm run build
npm run start
```

## Configuración de producción

1. Define `NEXT_PUBLIC_SITE_URL` con el dominio final.
2. Añade `NEXT_PUBLIC_GA_MEASUREMENT_ID` si vas a medir tráfico.
3. Define `LEADS_WEBHOOK_URL` con un endpoint HTTPS de CRM/Make/Zapier. El endpoint recibe `email`, `name`, `interest`, `source` y `receivedAt`.
4. Define `NEXT_PUBLIC_WHATSAPP_NUMBER` sólo si quieres habilitar el botón de compartir por WhatsApp, con prefijo de país y sin `+` (por ejemplo, `521234567890`).
5. Sustituye los enlaces de mapa/proveedores por los socios comerciales definitivos antes de publicar.
6. Revisa el aviso de privacidad con asesoría legal para la jurisdicción y el proveedor de captación elegido.

El formulario de leads es deliberadamente transparente: si el webhook no está configurado devuelve `503` y la interfaz informa que no pudo registrar el correo, en lugar de fingir que guardó datos.

## Despliegue

El proyecto se puede desplegar en Vercel sin cambios adicionales. En Vercel:

- Importa el repositorio.
- Añade las variables de entorno de `.env.example`.
- Usa `npm run build` como Build Command y `npm run start` como Start Command, o deja que Vercel detecte Next.js.

## Créditos de imagen

Las fotografías están en `public/images` y provienen de Wikimedia Commons:

- Daniel Sebastián Hernández Lozano — `CC BY-SA 4.0`
- Adam Jones — `CC BY-SA 2.0`
- Lunita28mx — `CC BY 4.0`
- Nimodo — dominio público
- Gzzz — `CC BY-SA 4.0`
- Miguel angel jose diaz — `CC BY-SA 4.0`
- Sasha India — `CC BY-SA 2.0`

Los enlaces completos están en `src/components/site-footer.tsx`. Mantén los créditos si reutilizas o redistribuyes las imágenes.
