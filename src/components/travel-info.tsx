import {
  ArrowUpRight,
  BusFront,
  CloudSun,
  ExternalLink,
  Plane,
  ShieldAlert,
} from "lucide-react";
import { faqs, officialSources } from "@/data/site";

const travelNotes = [
  {
    icon: Plane,
    label: "Volar",
    title: "Llega por PXM",
    text: "El aeropuerto internacional de Puerto Escondido conecta con rutas nacionales e internacionales. Las frecuencias cambian; confirma con tu aerolínea antes de comprar.",
  },
  {
    icon: BusFront,
    label: "Moverse",
    title: "Elige cómo moverte",
    text: "ADO y otros operadores conectan la costa con Oaxaca y otros puntos. Para moverte dentro del destino, define rutas con margen y confirma horarios.",
  },
  {
    icon: CloudSun,
    label: "Temporada",
    title: "Seca y de lluvias",
    text: "La temporada seca suele ir de noviembre a abril; la de lluvias, de mayo a octubre. La elección depende de tu prioridad y del estado del mar.",
  },
  {
    icon: ShieldAlert,
    label: "Seguridad",
    title: "Consulta antes de salir",
    text: "Revisa avisos oficiales, respeta las indicaciones locales y sigue las recomendaciones de operadores autorizados.",
  },
];

export function TravelInfo() {
  return (
    <section id="viaja-mejor" className="bg-white px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1380px]">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <p className="eyebrow">Antes de hacer clic en reservar</p>
            <h2 className="mt-5 max-w-xl font-display text-5xl font-medium leading-[0.94] tracking-[-0.05em] sm:text-7xl">
              La información también
              <span className="block text-coral italic">es una forma de cuidado.</span>
            </h2>
            <p className="mt-7 max-w-lg text-base font-medium leading-relaxed text-ink/60">
              Puerto Escondido cambia con el clima, el oleaje y la marea. Un buen viaje
              deja espacio para revisar condiciones y elegir proveedores que tengan información clara, trazable y un contacto verificable.
            </p>
            <a
              href="https://www.oaxaca.gob.mx/sectur/wp-content/uploads/sites/65/2024/08/Puerto_Escondido.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3.5 text-xs font-extrabold text-white transition-colors hover:bg-coral hover:text-ink"
            >
              Consultar guía oficial
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {travelNotes.map((note) => {
              const Icon = note.icon;
              return (
                <article key={note.label} className="rounded-[26px] border border-ink/10 bg-foam p-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <Icon className="h-5 w-5 text-coral" />
                    <span className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-ink/38">{note.label}</span>
                  </div>
                  <h3 className="mt-7 text-base font-extrabold">{note.title}</h3>
                  <p className="mt-2 text-xs font-medium leading-relaxed text-ink/55">{note.text}</p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-24 grid gap-12 lg:mt-32 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="eyebrow">Preguntas honestas</p>
            <h3 className="mt-5 font-display text-4xl font-medium leading-none tracking-[-0.04em] sm:text-5xl">
              Lo que conviene saber
              <span className="block text-coral italic">antes de llegar.</span>
            </h3>
          </div>
          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex items-start justify-between gap-5 text-sm font-extrabold leading-snug">
                  {faq.question}
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ink/15 text-lg font-normal transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pt-4 text-sm font-medium leading-relaxed text-ink/58">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="mt-24 border-t border-ink/10 pt-8 lg:mt-32">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-ink/40">Fuentes de la investigación</p>
              <p className="mt-2 text-xs font-medium text-ink/50">Contenido contrastado con fuentes públicas de Oaxaca, PNUD y World Surf League.</p>
            </div>
            <a
              href="#contenido"
              className="inline-flex items-center gap-2 text-xs font-extrabold text-ink/60 transition-colors hover:text-coral"
            >
              Volver arriba
              <ArrowUpRight className="h-4 w-4 rotate-[-90deg]" />
            </a>
          </div>
          <div className="mt-7 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {officialSources.map((source) => (
              <a
                key={source.url}
                href={source.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 rounded-2xl border border-ink/10 px-4 py-4 text-xs font-bold text-ink/60 transition-colors hover:border-coral hover:bg-foam hover:text-ink"
              >
                {source.label}
                <ArrowUpRight className="h-4 w-4 shrink-0 text-ink/30 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
