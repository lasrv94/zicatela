"use client";

import { useEffect, useState } from "react";
import {
  Cloud,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSnow,
  CloudSun,
  MapPin,
  Sun,
  type LucideIcon,
} from "lucide-react";

type ForecastDay = {
  date: string;
  weatherCode: number;
  max: number;
  min: number;
};

type WeatherPayload = {
  current: {
    temperature: number;
    feelsLike: number;
    weatherCode: number;
    windSpeed: number;
  };
  forecast: ForecastDay[];
};

type WeatherState =
  | { status: "loading"; data: null; error: false }
  | { status: "success"; data: WeatherPayload; error: false }
  | { status: "error"; data: null; error: true };

const conditions: Record<string, { label: string; icon: LucideIcon }> = {
  sun: { label: "Cielo despejado", icon: Sun },
  partly: { label: "Parcialmente nublado", icon: CloudSun },
  cloud: { label: "Nublado", icon: Cloud },
  fog: { label: "Bruma", icon: CloudFog },
  drizzle: { label: "Llovizna", icon: CloudRain },
  rain: { label: "Lluvia", icon: CloudRain },
  snow: { label: "Nieve", icon: CloudSnow },
  storm: { label: "Tormenta", icon: CloudLightning },
};

function getCondition(code: number) {
  if (code === 0) return conditions.sun;
  if (code <= 3) return conditions.partly;
  if (code === 45 || code === 48) return conditions.fog;
  if (code <= 57) return conditions.drizzle;
  if (code <= 67 || (code >= 80 && code <= 82)) return conditions.rain;
  if (code <= 77 || code === 85 || code === 86) return conditions.snow;
  return conditions.storm;
}

function formatDay(date: string) {
  return new Intl.DateTimeFormat("es-MX", { weekday: "short" })
    .format(new Date(`${date}T12:00:00`))
    .replace(".", "");
}

export function LiveWeather() {
  const [state, setState] = useState<WeatherState>({
    status: "loading",
    data: null,
    error: false,
  });

  useEffect(() => {
    const controller = new AbortController();

    async function loadWeather() {
      try {
        const response = await fetch("/api/weather", {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error("Weather request failed");
        const data = (await response.json()) as WeatherPayload;
        setState({ status: "success", data, error: false });
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setState({ status: "error", data: null, error: true });
      }
    }

    loadWeather();
    return () => controller.abort();
  }, []);

  if (state.status === "loading") {
    return (
      <div className="flex min-w-[220px] animate-pulse items-center gap-3 rounded-full border border-white/20 bg-black/15 px-4 py-3 backdrop-blur-md">
        <div className="h-6 w-6 rounded-full bg-white/20" />
        <div className="space-y-1.5">
          <div className="h-2.5 w-24 rounded-full bg-white/20" />
          <div className="h-2 w-16 rounded-full bg-white/10" />
        </div>
      </div>
    );
  }

  if (state.status === "error" || !state.data) {
    return (
      <div className="flex min-w-[220px] items-center gap-3 rounded-full border border-white/20 bg-black/15 px-4 py-3 backdrop-blur-md">
        <MapPin className="h-5 w-5 text-coral" />
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">Puerto Escondido</p>
          <p className="mt-0.5 text-sm font-semibold">Clima no disponible</p>
        </div>
      </div>
    );
  }

  const condition = getCondition(state.data.current.weatherCode);
  const WeatherIcon = condition.icon;

  return (
    <div
      className="min-w-[236px] rounded-full border border-white/20 bg-black/15 p-1.5 pr-4 backdrop-blur-md"
      aria-live="polite"
      title={`${condition.label}. Sensación ${Math.round(state.data.current.feelsLike)} °C. Datos: Open-Meteo.`}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foam/95 text-coral">
          <WeatherIcon className="h-5 w-5" strokeWidth={1.8} />
        </div>
        <div className="mr-2 min-w-[78px]">
          <p className="flex items-center gap-1 text-[9px] font-extrabold uppercase tracking-[0.16em] text-white/65">
            <MapPin className="h-2.5 w-2.5" /> Ahora · PXM
          </p>
          <p className="mt-0.5 text-sm font-bold">
            {Math.round(state.data.current.temperature)}° <span className="font-normal opacity-60">{condition.label}</span>
          </p>
        </div>
        <div className="ml-auto flex items-center gap-2.5">
          {state.data.forecast.slice(1, 4).map((day) => {
            const DayIcon = getCondition(day.weatherCode).icon;
            return (
              <div key={day.date} className="flex flex-col items-center gap-0.5 text-white/75">
                <span className="text-[8px] font-bold uppercase">{formatDay(day.date)}</span>
                <DayIcon className="h-3.5 w-3.5" />
                <span className="text-[9px] font-semibold">{Math.round(day.max)}°</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
