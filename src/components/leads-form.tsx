"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Check, Mail, Sparkles } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

type FormState = "idle" | "loading" | "success" | "error";

export function LeadsForm() {
  const [state, setState] = useState<FormState>("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    const form = new FormData(event.currentTarget);
    const payload = {
      email: String(form.get("email") ?? ""),
      name: String(form.get("name") ?? ""),
      interest: String(form.get("interest") ?? "viaje"),
      company: String(form.get("company") ?? ""),
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Lead request failed");
      setState("success");
      trackEvent("lead_form_success", { interest: payload.interest });
    } catch {
      setState("error");
      trackEvent("lead_form_error");
    }
  }

  return (
    <section className="bg-lime px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto grid max-w-[1380px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-24">
        <div>
          <p className="eyebrow">Una señal antes de llegar</p>
          <h2 className="mt-5 max-w-xl font-display text-5xl font-medium leading-[0.93] tracking-[-0.05em] sm:text-7xl">
            Guarda una marea
            <span className="block italic">de ideas.</span>
          </h2>
          <p className="mt-6 max-w-md text-sm font-medium leading-relaxed text-ink/62">
            Déjanos tu correo para recibir rutas, cambios y alertas de temporada. Sin ruido:
            solo información útil para decidir mejor.
          </p>
        </div>

        <div className="rounded-[32px] border border-ink/10 bg-foam/75 p-5 shadow-[0_24px_70px_rgba(7,38,37,0.1)] sm:p-8">
          {state === "success" ? (
            <div className="flex min-h-[270px] flex-col items-start justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-coral text-ink">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-4xl font-semibold">Listo para la siguiente marea.</h3>
              <p className="mt-3 max-w-sm text-sm font-medium leading-relaxed text-ink/58">Tu registro se envió correctamente. Gracias por dejar tu señal.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2" noValidate>
              <div className="sm:col-span-2">
                <label htmlFor="lead-name" className="mb-2 block text-[10px] font-extrabold uppercase tracking-[0.15em] text-ink/55">Tu nombre (opcional)</label>
                <input id="lead-name" name="name" type="text" autoComplete="name" placeholder="¿Cómo te llamas?" className="h-13 w-full rounded-2xl border border-ink/12 bg-white px-4 text-sm font-medium placeholder:text-ink/30 focus:border-coral focus:outline-none" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="lead-email" className="mb-2 block text-[10px] font-extrabold uppercase tracking-[0.15em] text-ink/55">Correo electrónico</label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/35" />
                  <input id="lead-email" name="email" type="email" required autoComplete="email" placeholder="tu@email.com" className="h-13 w-full rounded-2xl border border-ink/12 bg-white pl-11 pr-4 text-sm font-medium placeholder:text-ink/30 focus:border-coral focus:outline-none" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="lead-interest" className="mb-2 block text-[10px] font-extrabold uppercase tracking-[0.15em] text-ink/55">Qué te interesa más</label>
                <select id="lead-interest" name="interest" defaultValue="surf" className="h-13 w-full rounded-2xl border border-ink/12 bg-white px-4 text-sm font-medium focus:border-coral focus:outline-none">
                  <option value="surf">Surf y olas</option>
                  <option value="naturaleza">Naturaleza y bienestar</option>
                  <option value="cocina">Cocina y comunidad</option>
                  <option value="viaje">Un viaje completo</option>
                </select>
              </div>
              <div className="hidden" aria-hidden="true">
                <label htmlFor="lead-company">Company</label>
                <input id="lead-company" name="company" tabIndex={-1} autoComplete="off" />
              </div>
              <div className="flex flex-col items-start gap-4 pt-2 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xs text-[10px] font-medium leading-relaxed text-ink/42">Al enviar aceptas recibir información de Marea PXM. La baja se gestiona según el proveedor que configure el propietario del sitio.</p>
                <button type="submit" disabled={state === "loading"} className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-xs font-extrabold text-white transition-colors hover:bg-coral hover:text-ink disabled:cursor-wait disabled:opacity-60">
                  {state === "loading" ? "Enviando…" : "Guardar mi marea"}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              {state === "error" ? (
                <p className="rounded-2xl bg-coral/20 px-4 py-3 text-xs font-bold text-ink sm:col-span-2" role="alert">
                  No pudimos registrar el correo en este momento. Intenta más tarde o usa el planificador para descargar tu ruta.
                </p>
              ) : null}
            </form>
          )}
          <div className="mt-5 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.13em] text-ink/35">
            <Sparkles className="h-3.5 w-3.5" />
            Una señal, no un ruido
          </div>
        </div>
      </div>
    </section>
  );
}
