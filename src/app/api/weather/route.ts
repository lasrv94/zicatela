type OpenMeteoResponse = {
  current?: {
    temperature_2m?: number;
    apparent_temperature?: number;
    weather_code?: number;
    wind_speed_10m?: number;
  };
  daily?: {
    time?: string[];
    weather_code?: number[];
    temperature_2m_max?: number[];
    temperature_2m_min?: number[];
  };
};

export async function GET() {
  const url =
    "https://api.open-meteo.com/v1/forecast" +
    "?latitude=15.8653" +
    "&longitude=-97.0756" +
    "&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m" +
    "&daily=weather_code,temperature_2m_max,temperature_2m_min" +
    "&timezone=America%2FMexico_City" +
    "&forecast_days=4";

  try {
    const response = await fetch(url, {
      next: { revalidate: 1800 },
      headers: { Accept: "application/json" },
    });

    if (!response.ok) throw new Error("Open-Meteo returned an error");

    const payload = (await response.json()) as OpenMeteoResponse;
    const current = payload.current;
    const daily = payload.daily;

    if (typeof current?.temperature_2m !== "number" || typeof current.weather_code !== "number" || !Array.isArray(daily?.time)) {
      throw new Error("Incomplete weather response");
    }

    const forecast = daily.time.slice(0, 4).map((date, index) => ({
      date,
      weatherCode: daily.weather_code?.[index] ?? 0,
      max: daily.temperature_2m_max?.[index] ?? current.temperature_2m,
      min: daily.temperature_2m_min?.[index] ?? current.temperature_2m,
    }));

    return Response.json(
      {
        current: {
          temperature: current.temperature_2m,
          feelsLike: current.apparent_temperature ?? current.temperature_2m,
          weatherCode: current.weather_code,
          windSpeed: current.wind_speed_10m ?? 0,
        },
        forecast,
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=86400",
        },
      },
    );
  } catch {
    return Response.json(
      { error: "Weather service unavailable" },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }
}
