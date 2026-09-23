"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Clock3, MapPin, SlidersHorizontal } from "lucide-react";
import {
  categoryLabels,
  experiences,
  type ExperienceCategory,
} from "@/data/site";

type Filter = "all" | ExperienceCategory;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "Todo" },
  ...Object.entries(categoryLabels).map(([id, label]) => ({
    id: id as ExperienceCategory,
    label,
  })),
];

export function ExperienceExplorer() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const filteredExperiences =
    activeFilter === "all"
      ? experiences
      : experiences.filter((experience) =>
          experience.categories.includes(activeFilter),
        );

  return (
    <section id="experiencias" className="bg-foam px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1380px]">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow">Elige tu frecuencia</p>
            <h2 className="mt-5 max-w-4xl font-display text-5xl font-medium leading-[0.95] tracking-[-0.045em] sm:text-7xl lg:text-[6.2rem]">
              Haz algo con el viaje.
              <span className="block text-coral italic">No sólo con la playa.</span>
            </h2>
          </div>
          <p className="max-w-md text-base font-medium leading-relaxed text-ink/65 lg:pb-2">
            Filtra por estado de ánimo. Cada experiencia incluye contexto prático,
            una nota de seguridad y su ubicación para que elijas con claridad.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-y border-ink/10 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.15em] text-ink/45">
            <SlidersHorizontal className="h-4 w-4" />
            Filtrar experiencias
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0" role="group" aria-label="Categorías de experiencias">
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-bold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral ${
                  activeFilter === filter.id
                    ? "border-ink bg-ink text-foam"
                    : "border-ink/15 bg-transparent text-ink hover:border-ink/40"
                }`}
                aria-pressed={activeFilter === filter.id}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredExperiences.map((experience, index) => {
              const isWide = index % 5 === 0;
              return (
                <motion.article
                  layout
                  key={experience.id}
                  initial={{ opacity: 0, y: 24, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 16, scale: 0.98 }}
                  transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.2) }}
                  className={`group flex min-h-full flex-col overflow-hidden rounded-[30px] border border-ink/10 bg-white shadow-[0_20px_60px_rgba(7,38,37,0.06)] ${
                    isWide ? "md:col-span-2 lg:col-span-2" : ""
                  }`}
                >
                  <div className={`relative overflow-hidden ${isWide ? "h-[360px] sm:h-[460px]" : "h-[340px]"}`}>
                    <Image
                      src={experience.image}
                      alt={experience.imageAlt}
                      fill
                      sizes={isWide ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-ink/5" />
                    <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                      {experience.categories.map((category) => (
                        <span
                          key={category}
                          className="rounded-full border border-white/30 bg-ink/25 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.15em] text-white backdrop-blur-md"
                        >
                          {categoryLabels[category]}
                        </span>
                      ))}
                    </div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white/85">
                      <MapPin className="h-3.5 w-3.5" />
                      {experience.location}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-coral">
                        {experience.eyebrow}
                      </p>
                      <span className="flex shrink-0 items-center gap-1.5 text-[10px] font-bold text-ink/45">
                        <Clock3 className="h-3.5 w-3.5" />
                        {experience.duration}
                      </span>
                    </div>
                    <h3 className={`mt-4 font-display leading-[1.02] tracking-[-0.035em] ${isWide ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl"}`}>
                      {experience.title}
                    </h3>
                    <p className="mt-4 text-sm font-medium leading-relaxed text-ink/64 sm:text-base">
                      {experience.description}
                    </p>
                    <p className="mt-5 border-l-2 border-coral/45 pl-4 text-xs font-medium leading-relaxed text-ink/48">
                      {experience.detail}
                    </p>
                    <div className="mt-auto flex items-center justify-between gap-4 pt-7">
                      <span className="font-display text-3xl italic text-ink/18">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <a
                        href={experience.mapUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2.5 text-xs font-extrabold transition-colors hover:border-ink hover:bg-ink hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
                      >
                        Ver en mapa
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-[28px] bg-lime px-6 py-6 sm:flex-row sm:items-center sm:px-8">
          <div>
            <p className="font-display text-2xl font-semibold">¿Quieres combinarlas sin saturarte?</p>
            <p className="mt-1 text-sm font-medium text-ink/60">Crea una ruta equilibrada según tus días, intereses y energía.</p>
          </div>
          <a
            href="#planificador"
            className="shrink-0 rounded-full bg-ink px-5 py-3 text-xs font-extrabold text-white transition-colors hover:bg-coral hover:text-ink"
          >
            Abrir planificador
          </a>
        </div>
      </div>
    </section>
  );
}
