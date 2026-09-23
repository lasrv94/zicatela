import Image from "next/image";
import { ArrowUpRight, HeartPulse, ShieldCheck, Waves } from "lucide-react";

const principles = [
  {
    icon: Waves,
    title: "Lee el mar",
    text: "Consulta el estado de la rompiente y deja que un instructor local te ayude a entrar.",
  },
  {
    icon: ShieldCheck,
    title: "Respeta la lineup",
    text: "La prioridad se gana con experiencia, respeto y conocimiento local.",
  },
  {
    icon: HeartPulse,
    title: "Elige bien tu nivel",
    text: "La potencia de Zicatela no se toma a la ligera. Elige una clase si estás aprendiendo.",
  },
];

export function ZicatelaFeature() {
  return (
    <section id="zicatela" className="overflow-hidden bg-ink text-white">
      <div className="grid min-h-[820px] lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative min-h-[620px] overflow-hidden lg:min-h-full">
          <Image
            src="/images/surf-sunset.jpg"
            alt="Olas de Zicatela rompiendo al atardecer"
            fill
            sizes="(max-width: 1024px) 100vw, 46vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/5 to-transparent" />
          <div className="absolute left-5 top-5 rounded-full border border-white/25 bg-ink/25 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.17em] backdrop-blur-md sm:left-8 sm:top-8">
            16.13° N · 97.08° W
          </div>
          <div className="absolute bottom-7 left-5 right-5 sm:bottom-10 sm:left-8 sm:right-8">
            <p className="font-display text-5xl font-medium italic leading-none sm:text-7xl">Zicatela</p>
            <p className="mt-3 max-w-sm text-sm font-medium leading-relaxed text-white/70">
              Una rompiente de clase mundial, sin filtros. Entra con respeto, curiosidad
              y una buena guía.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center px-5 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28 xl:px-24">
          <p className="eyebrow !text-lime">La firma del destino</p>
          <h2 className="mt-5 max-w-2xl font-display text-5xl font-medium leading-[0.93] tracking-[-0.05em] sm:text-7xl xl:text-[6.5rem]">
            Una ola puede cambiarlo todo.
          </h2>
          <p className="mt-7 max-w-xl text-base font-medium leading-relaxed text-white/64 sm:text-lg">
            La World Surf League ha organizado competencias en Zicatela. La magia está
            ahí; la responsabilidad también. Sigue tres reglas sencillas para que
            tu sesión sea segura y respetuosa.
          </p>

          <div className="mt-11 grid gap-3 sm:grid-cols-3">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div
                  key={principle.title}
                  className="rounded-[24px] border border-white/12 bg-white/[0.055] p-5 transition-colors hover:bg-white/[0.09]"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="h-5 w-5 text-coral" />
                    <span className="font-display text-sm italic text-white/30">0{index + 1}</span>
                  </div>
                  <h3 className="mt-7 text-sm font-extrabold">{principle.title}</h3>
                  <p className="mt-2 text-xs font-medium leading-relaxed text-white/48">
                    {principle.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Playa%20Zicatela%20Puerto%20Escondido"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-coral px-5 py-3.5 text-xs font-extrabold text-ink transition-colors hover:bg-lime"
            >
              Abrir Zicatela en mapa
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://www.worldsurfleague.com/events/2024/mqs/4796/pacifico-surf-open-puerto-escondido"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3.5 text-xs font-extrabold text-white transition-colors hover:bg-white hover:text-ink"
            >
              Historia de surf
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
