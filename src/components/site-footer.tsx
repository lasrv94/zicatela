import { ArrowUpRight, ExternalLink } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { officialSources } from "@/data/site";

const credits = [
  { label: "Daniel Sebastián Hernández Lozano · CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Playa_Zicatela,_Oaxaca.jpg" },
  { label: "Adam Jones · CC BY-SA 2.0", url: "https://commons.wikimedia.org/wiki/File:Young_Woman_Surfer_-_Zicatela_Beach_-_Puerto_Escondido_-_Oaxaca_-_Mexico_-_01_(6533401381).jpg" },
  { label: "Adam Jones · CC BY-SA 2.0", url: "https://commons.wikimedia.org/wiki/File:Surf_at_Sunset_-_Zicatela_Beach_-_Puerto_Escondido_-_Oaxaca_-_Mexico_(6533419239).jpg" },
  { label: "Adam Jones · CC BY-SA 2.0", url: "https://commons.wikimedia.org/wiki/File:Beach_Scene_-_Playa_Mazunte_-_Oaxaca_-_Mexico_-_02_(6523044693).jpg" },
  { label: "Lunita28mx · CC BY 4.0", url: "https://commons.wikimedia.org/wiki/File:Laguna_de_Manialtepec_Oaxaca.jpg" },
  { label: "Nimodo · dominio público", url: "https://commons.wikimedia.org/wiki/File:Mexico-PuertoEscondido-Airview.jpg" },
  { label: "subzonica · CC BY 2.0", url: "https://commons.wikimedia.org/wiki/File:Coconut_Puerto_Escondido.jpg" },
  { label: "Gzzz · CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Lepidochelys_olivacea_Puerto_Escondido_(1).jpg" },
  { label: "Miguel angel jose diaz · CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Playa_de_puerto_escondido_mexico.jpg" },
  { label: "Sasha India · CC BY-SA 2.0", url: "https://commons.wikimedia.org/wiki/File:Puerto_Escondido_(Oaxaca,_Mexico)_(27002979597).jpg" },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink px-5 pb-7 pt-20 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1380px]">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <a href="#inicio" className="inline-flex items-center gap-2.5" aria-label="Volver al inicio">
              <BrandMark className="h-11 w-11" />
              <span className="flex flex-col leading-none">
                <span className="text-lg font-extrabold tracking-[0.16em]">MAREA</span>
                <span className="mt-1 text-[9px] font-bold tracking-[0.34em] text-white/50">PUERTO ESCONDIDO</span>
              </span>
            </a>
            <p className="mt-7 max-w-sm text-sm font-medium leading-relaxed text-white/52">
              Una guía editorial para viajar con más contexto, más presencia y menos ruido.
              Hecha para el Pacífico, con respeto por quienes lo sostienen.
            </p>
            <a href="#planificador" className="mt-7 inline-flex items-center gap-2 rounded-full bg-coral px-5 py-3 text-xs font-extrabold text-ink transition-colors hover:bg-lime">
              Crear mi viaje <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/38">Explora</p>
            <div className="mt-5 flex flex-col items-start gap-3 text-sm font-bold text-white/62">
              <a href="#experiencias" className="transition-colors hover:text-coral">Experiencias</a>
              <a href="#zicatela" className="transition-colors hover:text-coral">Zicatela</a>
              <a href="#rutas" className="transition-colors hover:text-coral">Rutas locales</a>
              <a href="#planificador" className="transition-colors hover:text-coral">Planificador</a>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/38">Lee</p>
            <div className="mt-5 flex flex-col items-start gap-3 text-sm font-bold text-white/62">
              <a href="#viaja-mejor" className="transition-colors hover:text-coral">Información útil</a>
              <a href="#impacto" className="transition-colors hover:text-coral">Viaja mejor</a>
              <a href="/privacidad" className="transition-colors hover:text-coral">Privacidad</a>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/38">Fuentes</p>
            <div className="mt-5 flex flex-col items-start gap-3 text-sm font-bold text-white/62">
              {officialSources.slice(0, 3).map((source) => (
                <a key={source.url} href={source.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-coral">
                  {source.label.split(" · ")[0]} <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-6 text-[10px] font-medium leading-relaxed text-white/35">
          <p>Marea PXM es un proyecto editorial independiente. No es un sitio oficial del Gobierno de Oaxaca. Los horarios, precios, rutas y servicios deben confirmarse con los proveedores correspondientes.</p>
          <p className="mt-4">Fotografías: Wikimedia Commons, bajo licencias Creative Commons o dominio público. <a href="/images/IMAGE_CREDITS.md" className="underline decoration-white/20 underline-offset-4 hover:text-white">Ver créditos completos</a></p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            {credits.map((credit) => (
              <a key={credit.url} href={credit.url} target="_blank" rel="noreferrer" className="hover:text-white/65">{credit.label}</a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Marea PXM · Puerto Escondido, Oaxaca</span>
          <a href="#inicio" className="inline-flex items-center gap-2 transition-colors hover:text-white">Volver arriba <ArrowUpRight className="h-3.5 w-3.5 rotate-[-90deg]" /></a>
        </div>
      </div>
    </footer>
  );
}
