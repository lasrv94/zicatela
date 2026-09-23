"use client";

import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  Download,
  MapPinned,
  RotateCcw,
  Share2,
  Sparkles,
} from "lucide-react";

type Vibe = "equilibrio" | "surf" | "calma" | "aventura" | "sabores";
type Pace = "suave" | "movido";
type Interest = "surf" | "naturaleza" | "cocina" | "cultura" | "bienestar";

type PlanDay = {
  day: number;
  title: string;
  morning: string;
  afternoon: string;
  evening: string;
};

const vibes: { id: Vibe; label: string; description: string; emoji: string }[] = [
  { id: "equilibrio", label: "Un poco de todo", description: "Un ritmo cómodo para descubrir el destino.", emoji: "✦" },
  { id: "surf", label: "Olas y adrenalina", description: "El mar es el protagonista de cada día.", emoji: "≈" },
  { id: "calma", label: "Pausa y horizonte", description: "Menos agenda, más tiempo para sentir.", emoji: "◌" },
  { id: "aventura", label: "Muévete y explora", description: "Kayak, caminatas y horizontes inesperados.", emoji: "↗" },
  { id: "sabores", label: "Cocina con raíz", description: "Mercados, productores y mesas con historia.", emoji: "✺" },
];

const interests: { id: Interest; label: string }[] = [
  { id: "surf", label: "Surf" },
  { id: "naturaleza", label: "Naturaleza" },
  { id: "cocina", label: "Cocina local" },
  { id: "cultura", label: "Cultura" },
  { id: "bienestar", label: "Bienestar" },
];

const dayNames: Record<Vibe, string[]> = {
  equilibrio: ["Llegar y encontrar el pulso", "Carrizalillo al atardecer", "Zicatela sin prisas", "Manialtepec y naturaleza", "Mazunte y comunidad", "El centro y sus sabores", "Último mar"],
  surf: ["Llegada y primera mirada al mar", "Clase de surf en Zicatela", "Ola temprano, tarde libre", "Manialtepec para recargar", "Zicatela al atardecer", "Centro y última ola", "Despedida junto al Pacífico"],
  calma: ["Llegar sin correr", "Carrizalillo y hora dorada", "Manialtepec en kayak", "Paseo por Mazunte", "Yoga y tiempo libre", "Mercado y cocina local", "Mañana sin agenda"],
  aventura: ["Llegada y primer mapa", "Kayak en Manialtepec", "Caminata y costa abierta", "Mazunte y comunidad", "Clase de surf en Zicatela", "Ruta de sabores", "Última exploración"],
  sabores: ["Llegada y paseo por el centro", "Mercado y desayuno local", "Mazunte y cocina costera", "Productores de la región", "Tarde libre junto al mar", "Cocina y productos locales", "Cena de despedida"],
};

function getDayPlan(vibe: Vibe, day: number, selectedInterests: Interest[]): PlanDay {
  const nature = selectedInterests.includes("naturaleza");
  const food = selectedInterests.includes("cocina") || vibe === "sabores";
  const culture = selectedInterests.includes("cultura");
  const wellbeing = selectedInterests.includes("bienestar") || vibe === "calma";
  const adventure = vibe === "aventura";
  const title = dayNames[vibe][day - 1] ?? `Día ${day} a tu ritmo`;

  const defaultPlan: Record<number, Omit<PlanDay, "day" | "title">> = {
    1: {
      morning: "Llegada, hydratación y un paseo breve por el centro.",
      afternoon: "Elige una base conveniente y deja las maletas en modo pausa.",
      evening: "Cena sencilla y puesta de sol sin plan obligatorio.",
    },
    2: {
      morning: "Mañana para conocer el ritmo local y preguntar por las condiciones del mar.",
      afternoon: "Carrizalillo con tiempo para bajar, observar y volver sin correr.",
      evening: "Atardecer en la costa y comida en un lugar con historia.",
    },
    3: {
      morning: "Amanecer temprano para aprovechar la luz y la fuerza de Zicatela.",
      afternoon: "Sesión de surf o caminata costera, siempre guiada por un local.",
      evening: "Cena cerca del centro y tiempo para escuchar el ambiente.",
    },
    4: {
      morning: "Traslado temprano hacia Manialtepec para encontrar la mejor ventana del día.",
      afternoon: "Kayak, avistamiento de aves o una ruta de naturaleza autorizada.",
      evening: "Regreso tranquilo y comida sencilla en Puerto Escondido.",
    },
    5: {
      morning: "Mazunte: playa, conversación y una visita a una iniciativa de conservación local.",
      afternoon: "Café, artesanía o una comida que ponga en valor lo que produce la región.",
      evening: "Regreso antes de oscurecer y noche de descanso.",
    },
    6: {
      morning: "Yoga, paseo junto al bosque o tiempo libre junto a la playa.",
      afternoon: "Una última ruta elegida por ti: café, arte, playa o bienestar.",
      evening: "Cena de despedida y una foto mental de todo lo que fue importante.",
    },
    7: {
      morning: "Mañana lenta, desayuno y una última caminata por la costa.",
      afternoon: "Check-out y tiempo para recuerdos que respetan el lugar.",
      evening: "Despedida con la certeza de que dejaste espacio para volver.",
    },
  };

  const plan = defaultPlan[day] ?? defaultPlan[2];
  const adjustments: string[] = [];
  if (nature && day % 2 === 0) adjustments.push("nature");
  if (food && day % 2 === 1) adjustments.push("food");
  if (culture && day > 2) adjustments.push("culture");
  if (wellbeing && day > 1) adjustments.push("wellbeing");
  if (adventure && day > 1) adjustments.push("adventure");

  const extraByAdjustment: Record<string, string> = {
    nature: "Incluye un bloque para observar el ecosistema sin intervenirlo.",
    food: "Incluye una parada específica por mercado, productor o cocina local.",
    culture: "Incluye tiempo para una historia, taller o conversación con la comunidad.",
    wellbeing: "Incluye una hora sin pantalla para bajar el ritmo.",
    adventure: "Incluye una actividad activa y un margen para cambios de plan.",
  };

  return {
    day,
    title,
    morning: plan.morning,
    afternoon: adjustments.length > 0 ? `${plan.afternoon} ${extraByAdjustment[adjustments[0]]}` : plan.afternoon,
    evening: plan.evening,
  };
}

export function TripPlanner() {
  const [step, setStep] = useState(1);
  const [vibe, setVibe] = useState<Vibe>("equilibrio");
  const [days, setDays] = useState(3);
  const [pace, setPace] = useState<Pace>("movido");
  const [selectedInterests, setSelectedInterests] = useState<Interest[]>(["naturaleza", "cocina"]);
  const [shared, setShared] = useState(false);

  const plan = useMemo(
    () => Array.from({ length: days }, (_, index) => getDayPlan(vibe, index + 1, selectedInterests)),
    [days, selectedInterests, vibe],
  );

  const planText = useMemo(() => {
    const vibeLabel = vibes.find((item) => item.id === vibe)?.label ?? "Mi viaje";
    const interestLabel = selectedInterests
      .map((interest) => interests.find((item) => item.id === interest)?.label)
      .filter(Boolean)
      .join(", ");
    return [
      "MAREA PXM · Itinerario sugerido",
      `${vibeLabel} · ${days} días · ritmo ${pace}`,
      `Intereses: ${interestLabel || "flexibles"}`,
      "",
      ...plan.flatMap((day) => [
        `DÍA ${day.day} — ${day.title}`,
        `Mañana: ${day.morning}`,
        `Tarde: ${day.afternoon}`,
        `Noche: ${day.evening}`,
        "",
      ]),
      "Importante: confirma horarios, disponibilidad, estado del mar y condiciones de seguridad antes de reservar.",
    ].join("\n");
  }, [days, pace, plan, selectedInterests, vibe]);

  function toggleInterest(interest: Interest) {
    setSelectedInterests((current) =>
      current.includes(interest)
        ? current.filter((item) => item !== interest)
        : [...current, interest],
    );
  }

  function resetPlanner() {
    setStep(1);
    setVibe("equilibrio");
    setDays(3);
    setPace("movido");
    setSelectedInterests(["naturaleza", "cocina"]);
    setShared(false);
  }

  function downloadPlan() {
    const blob = new Blob([planText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "marea-pxm-itinerario.txt";
    anchor.click();
    URL.revokeObjectURL(url);
  }

  async function sharePlan() {
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    if (whatsappNumber) {
      window.open(
        `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(planText)}`,
        "_blank",
        "noopener,noreferrer",
      );
      setShared(true);
      return;
    }

    try {
      if (navigator.share) {
        await navigator.share({ title: "Mi itinerario Marea PXM", text: planText });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(planText);
      } else {
        setShared(false);
        return;
      }
      setShared(true);
      window.setTimeout(() => setShared(false), 3000);
    } catch {
      setShared(false);
    }
  }

  return (
    <section id="planificador" className="bg-ink px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1380px]">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow !text-lime">Tu viaje, en tres pasos</p>
            <h2 className="mt-5 max-w-xl font-display text-5xl font-medium leading-[0.92] tracking-[-0.05em] sm:text-7xl">
              Deja de comparar.
              <span className="block text-coral italic">Empieza a elegir.</span>
            </h2>
            <p className="mt-7 max-w-md text-base font-medium leading-relaxed text-white/60">
              El planificador crea una ruta editorial, no un paquete cerrado. Sirve como punto
              de partida para reservar con tiempo, proveedores locales y criterio.
            </p>
            <div className="mt-10 hidden items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/38 lg:flex">
              <Sparkles className="h-4 w-4 text-coral" />
              Sin spam · Se puede descargar · Sin cuenta
            </div>
          </div>

          <div className="rounded-[36px] border border-white/12 bg-white/[0.065] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.18)] sm:p-8 lg:p-10">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div className="flex items-center gap-3">
                {["Tu vibe", "Tu ritmo", "Tu ruta"].map((label, index) => {
                  const number = index + 1;
                  return (
                    <div key={label} className="flex items-center gap-3">
                      <span className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-extrabold ${step >= number ? "bg-coral text-ink" : "border border-white/15 text-white/40"}`}>
                        {step > number ? <Check className="h-4 w-4" /> : number}
                      </span>
                      <span className={`hidden text-[10px] font-extrabold uppercase tracking-[0.13em] sm:inline ${step >= number ? "text-white" : "text-white/35"}`}>
                        {label}
                      </span>
                    </div>
                  );
                })}
              </div>
              <span className="font-display text-2xl italic text-white/30">0{step} / 03</span>
            </div>

            {step === 1 ? (
              <div className="pt-8">
                <p className="text-sm font-medium text-white/50">¿Cómo quieres que se sienta este viaje?</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {vibes.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setVibe(option.id)}
                      className={`group rounded-[24px] border p-5 text-left transition-all ${vibe === option.id ? "border-coral bg-coral text-ink" : "border-white/10 bg-white/[0.035] hover:border-white/30"}`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <span className="font-display text-3xl">{option.emoji}</span>
                        {vibe === option.id ? <Check className="h-5 w-5" /> : null}
                      </div>
                      <p className="mt-6 text-base font-extrabold">{option.label}</p>
                      <p className={`mt-1 text-xs font-medium leading-relaxed ${vibe === option.id ? "text-ink/60" : "text-white/42"}`}>
                        {option.description}
                      </p>
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime px-5 py-4 text-sm font-extrabold text-ink transition-colors hover:bg-coral sm:w-auto sm:justify-start"
                >
                  Continuar
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ) : null}

            {step === 2 ? (
              <div className="pt-8">
                <p className="text-sm font-medium text-white/50">¿Cuánto espacio tienes?</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[2, 3, 5, 7].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setDays(option)}
                      className={`rounded-full border px-5 py-3 text-sm font-extrabold transition-colors ${days === option ? "border-coral bg-coral text-ink" : "border-white/15 text-white/65 hover:border-white/35"}`}
                    >
                      {option} días
                    </button>
                  ))}
                </div>

                <p className="mt-9 text-sm font-medium text-white/50">¿Qué ritmo se siente mejor?</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    { id: "suave", label: "Con espacio", text: "Menos prisa y más pausas para respirar." },
                    { id: "movido", label: "Con movimiento", text: "Dos o tres paradas al día." },
                  ].map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setPace(option.id as Pace)}
                      className={`rounded-[22px] border p-4 text-left transition-all ${pace === option.id ? "border-lime bg-lime text-ink" : "border-white/10 hover:border-white/30"}`}
                    >
                      <p className="text-sm font-extrabold">{option.label}</p>
                      <p className={`mt-1 text-xs font-medium ${pace === option.id ? "text-ink/60" : "text-white/42"}`}>{option.text}</p>
                    </button>
                  ))}
                </div>

                <p className="mt-9 text-sm font-medium text-white/50">¿Qué quieres llevar a la costa?</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {interests.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => toggleInterest(option.id)}
                      className={`rounded-full border px-4 py-2.5 text-xs font-extrabold transition-colors ${selectedInterests.includes(option.id) ? "border-coral bg-coral text-ink" : "border-white/15 text-white/65 hover:border-white/35"}`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>

                <div className="mt-9 flex flex-col-reverse gap-3 sm:flex-row">
                  <button type="button" onClick={() => setStep(1)} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3.5 text-sm font-bold text-white/70 transition-colors hover:bg-white/10">
                    <ArrowLeft className="h-4 w-4" /> Volver
                  </button>
                  <button type="button" onClick={() => setStep(3)} className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-6 py-3.5 text-sm font-extrabold text-ink transition-colors hover:bg-coral">
                    Ver mi ruta <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ) : null}

            {step === 3 ? (
              <div className="pt-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-medium text-white/50">Tu ruta sugerida</p>
                    <h3 className="mt-2 font-display text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
                      {vibes.find((item) => item.id === vibe)?.label}
                    </h3>
                  </div>
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.13em] text-white/60">
                    <CalendarDays className="h-3.5 w-3.5" /> {days} días
                  </span>
                </div>

                <div className="mt-7 divide-y divide-white/10 border-y border-white/10">
                  {plan.map((day) => (
                    <article key={day.day} className="grid gap-3 py-5 sm:grid-cols-[52px_1fr] sm:gap-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-coral font-display text-xl italic text-ink">
                        {day.day}
                      </div>
                      <div>
                        <h4 className="text-sm font-extrabold">{day.title}</h4>
                        <p className="mt-2 text-xs font-medium leading-relaxed text-white/48">{day.morning}</p>
                        <p className="mt-1 text-xs font-medium leading-relaxed text-white/48">{day.afternoon}</p>
                        <p className="mt-1 text-xs font-medium leading-relaxed text-white/48">{day.evening}</p>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <button type="button" onClick={downloadPlan} className="inline-flex items-center justify-center gap-2 rounded-full bg-coral px-5 py-3.5 text-xs font-extrabold text-ink transition-colors hover:bg-lime">
                    <Download className="h-4 w-4" /> Descargar itinerario
                  </button>
                  <button type="button" onClick={sharePlan} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3.5 text-xs font-extrabold text-white transition-colors hover:bg-white/10">
                    <Share2 className="h-4 w-4" /> {shared ? "Itinerario copiado" : "Compartir"}
                  </button>
                  <a href="https://www.google.com/maps/search/?api=1&query=Puerto%20Escondido%20Oaxaca" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3.5 text-xs font-extrabold text-white transition-colors hover:bg-white/10">
                    <MapPinned className="h-4 w-4" /> Abrir destino
                  </a>
                </div>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <p className="text-[10px] font-medium leading-relaxed text-white/32">Ruta editorial orientativa. Confirma condiciones, horarios y disponibilidad antes de reservar.</p>
                  <button type="button" onClick={resetPlanner} className="inline-flex shrink-0 items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-[0.13em] text-white/45 transition-colors hover:text-white">
                    <RotateCcw className="h-3.5 w-3.5" /> Reiniciar
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
