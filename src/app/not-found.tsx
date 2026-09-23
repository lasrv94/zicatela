import Link from "next/link";
import { ArrowLeft, Waves } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-ink px-5 text-center text-white">
      <div>
        <Waves className="mx-auto h-10 w-10 text-coral" />
        <p className="mt-8 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/45">404 · Fuera de mapa</p>
        <h1 className="mt-5 font-display text-7xl font-medium tracking-[-0.05em] sm:text-9xl">La marea se movió.</h1>
        <p className="mx-auto mt-5 max-w-md text-sm font-medium leading-relaxed text-white/55">La página que buscas no está aquí, pero el Pacífico sigue esperándote.</p>
        <Link href="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-coral px-5 py-3.5 text-xs font-extrabold text-ink transition-colors hover:bg-lime">
          <ArrowLeft className="h-4 w-4" /> Volver al inicio
        </Link>
      </div>
    </main>
  );
}
