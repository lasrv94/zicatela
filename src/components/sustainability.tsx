import Image from "next/image";
import { ArrowUpRight, Droplets, Leaf, Turtle, Waves } from "lucide-react";

const principles = [
  {
    icon: Turtle,
    title: "Observa sin invadir",
    text: "No toques, persigas ni saques animales. Sigue las indicaciones de guías autorizadas.",
  },
  {
    icon: Leaf,
    title: "Reduce lo desechable",
    text: "Lleva termo, reutiliza y pregunta siempre antes de llevarte algo de la playa.",
  },
  {
    icon: Waves,
    title: "Elige operadores locales",
    text: "Prioriza guías, cocinas y experiencias que pagan bien y respetan a la comunidad.",
  },
];

export function Sustainability() {
  return (
    <section id="impacto" className="overflow-hidden bg-coral text-ink">
      <div className="mx-auto grid max-w-[1440px] gap-0 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative min-h-[520px] lg:min-h-[760px]">
          <Image
            src="/images/tortuga.jpg"
            alt="Tortuga marina avanzando sobre la arena"
            fill
            sizes="(max-width: 1024px) 100vw, 48vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-5 right-5 text-white sm:bottom-9 sm:left-9 sm:right-9">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.17em] text-white/65">Una playa que también merece proteger</p>
            <p className="mt-3 max-w-md font-display text-4xl font-medium leading-[0.98] sm:text-5xl">
              La belleza de PXM se sostiene en los ecosistemas costeros.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center px-5 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28 xl:px-24">
          <p className="eyebrow">Viaja mejor</p>
          <h2 className="mt-5 max-w-2xl font-display text-5xl font-medium leading-[0.93] tracking-[-0.05em] sm:text-7xl">
            Dejar huella
            <span className="block italic">no es la idea.</span>
          </h2>
          <p className="mt-7 max-w-xl text-base font-medium leading-relaxed text-ink/68">
            El PNUD señaló en 2026 el reto de coordinar turismo, agua, residuos, manglares,
            arrecifes y zonas de anidación de tortugas. La respuesta no es una etiqueta:
            son elecciones concretas que repetimos cada día.
          </p>

          <div className="mt-10 divide-y divide-ink/15 border-y border-ink/15">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div key={principle.title} className="grid gap-3 py-5 sm:grid-cols-[44px_0.75fr_1.25fr] sm:items-start sm:gap-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-coral">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold">{principle.title}</h3>
                    <p className="mt-1 text-xs font-medium leading-relaxed text-ink/58">{principle.text}</p>
                  </div>
                  <span className="hidden font-display text-2xl italic text-ink/25 sm:block">0{index + 1}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <a
              href="https://www.undp.org/es/mexico/noticias/pnud-impulsa-el-intercambio-de-experiencias-sobre-financiamiento-para-fortalecer-el-turismo-sostenible-en-puerto-escondido"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-xs font-extrabold"
            >
              Leer el contexto del PNUD
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <span className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-ink/45">
              <Droplets className="h-4 w-4" /> Menos residuos, más futuro
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
