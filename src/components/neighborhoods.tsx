import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { neighborhoods } from "@/data/site";

export function Neighborhoods() {
  return (
    <section id="rutas" className="bg-foam px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1380px]">
        <div className="grid items-end gap-6 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow">Tu base, tu energía</p>
            <h2 className="mt-5 max-w-4xl font-display text-5xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-[6.3rem]">
              Elige dónde quieres
              <span className="block text-coral italic">despertar.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm font-medium leading-relaxed text-ink/58">
            Puerto Escondido no termina en el centro. Cada barrio cambia el ritmo,
            el paisaje y la forma de conectar con el mar.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {neighborhoods.map((neighborhood, index) => (
            <a
              key={neighborhood.name}
              href={neighborhood.mapUrl}
              target="_blank"
              rel="noreferrer"
              className={`group flex min-h-[450px] flex-col overflow-hidden rounded-[30px] border border-ink/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral ${
                index === 1 ? "bg-coral text-ink" : "bg-sand text-ink"
              }`}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={neighborhood.image}
                  alt={neighborhood.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-ink/25 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.14em] text-white backdrop-blur-md">
                  {neighborhood.label}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-3xl font-semibold tracking-[-0.03em]">
                    {neighborhood.name}
                  </h3>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/15 transition-colors group-hover:bg-ink group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <p className="mt-4 text-sm font-medium leading-relaxed text-ink/62">
                  {neighborhood.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-7 text-[10px] font-extrabold uppercase tracking-[0.14em] text-ink/45">
                  <MapPin className="h-3.5 w-3.5" />
                  Ver ubicación
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
