import Image from "next/image";
import { ArrowUpRight, Compass, Sparkles, Waves } from "lucide-react";

const signals = [
  {
    value: "13,65 %",
    label: "crecimiento de turistas en Puerto Escondido",
    note: "Enero–mayo de 2026",
  },
  {
    value: "11 828",
    label: "asientos internacionales proyectados para 2026",
    note: "Vuelos desde Houston y Dallas",
  },
  {
    value: "Mundial",
    label: "legado de competencias en Zicatela",
    note: "Eventos World Surf League",
  },
];

export function DestinationIntro() {
  return (
    <section className="relative overflow-hidden bg-sand px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
      <div className="intro-orbit pointer-events-none absolute -right-40 top-16 h-[520px] w-[520px] rounded-full border border-ink/10" />
      <div className="relative mx-auto max-w-[1380px]">
        <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          <div className="flex flex-col justify-between">
            <div>
              <p className="eyebrow">Una costa con personalidade</p>
              <h2 className="mt-5 max-w-4xl font-display text-5xl font-medium leading-[0.96] tracking-[-0.05em] sm:text-7xl lg:text-[6.4rem]">
                No es sólo una playa.
                <span className="block text-coral italic">Es un menú de formas de estar.</span>
              </h2>
              <p className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-ink/62">
                Puerto Escondido funciona como un archipiélago de experiencias: la energía
                de Zicatela, la calma de Manialtepec, la vida de pueblo en Mazunte y el
                centro que nunca se toma una siesta. El mejor viaje no añade todo; decide
                qué quieres sentir.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-ink/10 bg-white/55 p-4">
                <Waves className="h-5 w-5 text-coral" />
                <p className="mt-3 text-xs font-extrabold uppercase tracking-[0.12em]">Mar de todos los niveles</p>
              </div>
              <div className="rounded-2xl border border-ink/10 bg-white/55 p-4">
                <Compass className="h-5 w-5 text-coral" />
                <p className="mt-3 text-xs font-extrabold uppercase tracking-[0.12em]">Rutas que se bifurcan</p>
              </div>
              <div className="col-span-2 rounded-2xl border border-ink/10 bg-white/55 p-4 sm:col-span-1">
                <Sparkles className="h-5 w-5 text-coral" />
                <p className="mt-3 text-xs font-extrabold uppercase tracking-[0.12em]">Encuentros con raíz</p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[520px] overflow-hidden rounded-[36px] bg-ink sm:min-h-[680px]">
            <Image
              src="/images/puerto-aerea.jpg"
              alt="Vista aérea de la costa de Puerto Escondido y sus playas"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-10">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-lime">Tu mapa empieza aquí</p>
              <p className="mt-3 max-w-md font-display text-4xl font-medium leading-[1.02] sm:text-5xl">
                Elige una ruta. Después, deja que el mar ajuste el plan.
              </p>
              <a
                href="#rutas"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-extrabold text-ink transition-colors hover:bg-lime"
              >
                Ver rutas sugeridas
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-24 border-y border-ink/15 py-7 lg:mt-32">
          <div className="grid gap-7 lg:grid-cols-[0.8fr_2.2fr] lg:gap-14">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-ink/50">
                Señales del destino
              </p>
              <p className="mt-3 max-w-xs text-xs font-medium leading-relaxed text-ink/52">
                Contexto para tomar mejores decisiones. No son promesas de disponibilidad ni precios.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-3">
              {signals.map((signal, index) => (
                <div key={signal.label} className="border-l border-ink/15 pl-5 sm:pl-6">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">
                      {signal.value}
                    </span>
                    {index === 2 ? <span className="text-sm text-coral">↗</span> : null}
                  </div>
                  <p className="mt-3 text-sm font-extrabold leading-snug">{signal.label}</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-ink/40">
                    {signal.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
