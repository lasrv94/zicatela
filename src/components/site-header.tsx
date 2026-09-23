"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";

const navItems = [
  { label: "Experiencias", href: "#experiencias" },
  { label: "Zicatela", href: "#zicatela" },
  { label: "Rutas locales", href: "#rutas" },
  { label: "Planifica", href: "#planificador" },
  { label: "Viaja mejor", href: "#viaja-mejor" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-[#f5f1e7]/90 px-3 py-3 backdrop-blur-xl md:px-6"
          : "bg-transparent px-4 py-5 md:px-8"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1440px] items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-500 md:px-5 ${
          scrolled || open
            ? "border-ink/10 bg-white/60 text-ink shadow-[0_12px_40px_rgba(7,38,37,0.08)]"
            : "border-white/20 bg-black/10 text-white shadow-[0_10px_40px_rgba(0,0,0,0.12)] backdrop-blur-md"
        }`}
      >
        <a
          href="#inicio"
          className="group flex items-center gap-2.5 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral"
          aria-label="Marea PXM, ir al inicio"
        >
          <BrandMark className="h-9 w-9 transition-transform duration-500 group-hover:rotate-6" />
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-extrabold tracking-[0.16em]">MAREA</span>
            <span className="mt-1 text-[9px] font-bold tracking-[0.36em] opacity-70">PUERTO ESCONDIDO</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[12px] font-bold tracking-[0.04em] opacity-75 transition-opacity hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <a
            href="#planificador"
            className={`group inline-flex items-center gap-2 rounded-full px-5 py-3 text-xs font-extrabold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral ${
              scrolled || open
                ? "bg-ink text-foam hover:bg-coral hover:text-ink"
                : "bg-foam text-ink hover:bg-coral"
            }`}
          >
            Crear mi viaje
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/15 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/15 sm:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`mx-auto mt-2 max-w-[1440px] overflow-hidden rounded-[28px] border border-ink/10 bg-foam text-ink shadow-2xl transition-all duration-500 lg:hidden ${
          open
            ? "pointer-events-auto max-h-[calc(100vh-100px)] translate-y-0 opacity-100"
            : "pointer-events-none max-h-0 -translate-y-3 opacity-0"
        }`}
      >
        <nav className="flex flex-col p-3" aria-label="Navegación móvil">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between rounded-2xl px-4 py-4 text-2xl font-semibold transition-colors hover:bg-white"
            >
              <span>{item.label}</span>
              <span className="font-display text-sm italic text-coral">0{index + 1}</span>
            </a>
          ))}
          <a
            href="#planificador"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-between rounded-2xl bg-ink px-5 py-4 font-bold text-foam"
          >
            Crear mi itinerario
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </nav>
      </div>
    </header>
  );
}
