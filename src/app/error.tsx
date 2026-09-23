"use client";

import { RotateCcw, Waves } from "lucide-react";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-ink px-5 text-center text-white">
      <div>
        <Waves className="mx-auto h-10 w-10 text-coral" />
        <p className="mt-8 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/45">La marea se interrumpió</p>
        <h1 className="mt-5 font-display text-5xl font-medium tracking-[-0.04em] sm:text-7xl">Algo no salió como esperábamos.</h1>
        <p className="mx-auto mt-5 max-w-md text-sm font-medium leading-relaxed text-white/55">Prueba de nuevo para volver a cargar esta experiencia.</p>
        <button type="button" onClick={reset} className="mt-8 inline-flex items-center gap-2 rounded-full bg-coral px-5 py-3.5 text-xs font-extrabold text-ink transition-colors hover:bg-lime">
          <RotateCcw className="h-4 w-4" /> Intentar de nuevo
        </button>
      </div>
    </main>
  );
}
