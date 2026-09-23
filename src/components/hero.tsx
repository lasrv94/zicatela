import Image from "next/image";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { LiveWeather } from "@/components/live-weather";

const promises = ["Surf de clase mundial", "Rutas con raíz local", "Viajes más conscientes"];

export function Hero() {
  return (
    <section id="inicio" className="relative isolate min-h-svh overflow-hidden bg-ink text-white">
      <Image
        src="/images/hero-zicatela.jpg"
        alt="Atardecer dorado sobre la playa de Zicatela en Puerto Escondido"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover object-[52%_52%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,32,32,0.86)_0%,rgba(5,32,32,0.55)_42%,rgba(5,32,32,0.12)_74%,rgba(5,32,32,0.18)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(5,32,32,0.7)_0%,transparent_42%,rgba(5,32,32,0.22)_100%)]" />
      <div className="hero-grain pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative mx-auto flex min-h-svh max-w-[1440px] flex-col justify-between px-5 pb-6 pt-28 sm:px-8 sm:pt-32 md:px-12 md:pb-10 lg:px-16 lg:pt-36">
        <div className="flex items-start justify-between gap-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/10 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.18em] backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-coral shadow-[0_0_0_5px_rgba(255,107,74,0.18)]" />
            Puerto Escondido · Oaxaca
          </div>
          <div className="hidden sm:block">
            <LiveWeather />
          </div>
        </div>

        <div className="max-w-[940px] pb-12 pt-24 sm:pt-32 lg:pb-20 lg:pt-40">
          <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-white/65 sm:mb-7">
            <Sparkles className="h-4 w-4 text-coral" />
            Un destino, muchas formas de sentirlo
          </div>
          <h1 className="max-w-[900px] font-display text-[clamp(4rem,12vw,10.5rem)] font-medium leading-[0.78] tracking-[-0.065em] text-balance">
            El Pacífico,
            <span className="mt-1 block pl-[0.14em] text-coral italic sm:mt-3 sm:pl-[0.4em]">
              a tu manera.
            </span>
          </h1>
          <div className="mt-8 flex max-w-2xl flex-col gap-7 sm:mt-10 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-lg text-base font-medium leading-relaxed text-white/76 sm:text-lg">
              No te vendemos una postal. Te ayudamos a construir una escapada que conecte con el mar, la comunidad y tu propio ritmo.
            </p>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a
                href="#planificador"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-coral px-6 py-4 text-sm font-extrabold text-ink shadow-[0_14px_35px_rgba(255,107,74,0.25)] transition-all hover:-translate-y-1 hover:bg-foam focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Diseñar mi viaje
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#experiencias"
                className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/5 px-6 py-4 text-sm font-bold backdrop-blur-sm transition-colors hover:bg-white hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Ver experiencias
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-white/15 pt-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] font-bold uppercase tracking-[0.13em] text-white/60 sm:gap-x-8">
            {promises.map((promise) => (
              <span key={promise} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-coral" />
                {promise}
              </span>
            ))}
          </div>
          <a
            href="#experiencias"
            className="hidden items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/70 transition-colors hover:text-white md:flex"
          >
            Sigue la marea
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25">
              <ArrowDown className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
