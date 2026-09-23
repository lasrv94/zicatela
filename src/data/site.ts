export type ExperienceCategory =
  | "surf"
  | "naturaleza"
  | "cultura"
  | "bienestar"
  | "gastronomia";

export type Experience = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  detail: string;
  image: string;
  imageAlt: string;
  location: string;
  duration: string;
  categories: ExperienceCategory[];
  mapUrl: string;
  featured?: boolean;
};

export const categoryLabels: Record<ExperienceCategory, string> = {
  surf: "Surf",
  naturaleza: "Naturaleza",
  cultura: "Cultura",
  bienestar: "Bienestar",
  gastronomia: "Sabores",
};

export const experiences: Experience[] = [
  {
    id: "zicatela",
    title: "Zicatela al ritmo del mar",
    eyebrow: "Icónico · Todo nivel",
    description:
      "Aprende a leer las olas, mejora tu técnica o disfruta una sesión acompañada por un instructor local.",
    detail:
      "La potencia de Zicatela cambia rápido. Consulta el estado del mar, entra con supervisión cuando estés empezando y respeta siempre las prioridades locales dentro de la rompiente.",
    image: "/images/surf-zicatela.jpg",
    imageAlt: "Surfista caminando hacia el mar con su tabla en Playa Zicatela",
    location: "Playa Zicatela",
    duration: "2–3 h",
    categories: ["surf", "bienestar"],
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Playa%20Zicatela%20Puerto%20Escondido",
    featured: true,
  },
  {
    id: "manialtepec",
    title: "Manialtepec en kayak",
    eyebrow: "Luz y naturaleza",
    description:
      "Navega entre canales, aves y playas; de día, al atardecer o bajo la luz de la bioluminiscencia.",
    detail:
      "La experiencia nocturna depende de condiciones ambientales. Acude con operador autorizado, sigue sus indicaciones y no nades en la laguna por corrientes o vida silvestre.",
    image: "/images/manialtepec.jpg",
    imageAlt: "Vista abierta de la Laguna de Manialtepec bajo un cielo azul",
    location: "Manialtepec",
    duration: "3–4 h",
    categories: ["naturaleza", "bienestar"],
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Laguna%20de%20Manialtepec%20Puerto%20Escondido",
    featured: true,
  },
  {
    id: "mazunte",
    title: "Mazunte y su costa viva",
    eyebrow: "Comunidad y horizonte",
    description:
      "Camina entre playa, cocoteros y una agenda comunitaria que respalda la conservación costera.",
    detail:
      "Combina el paseo por Mazunte con visitas autorizadas de conservación. No manipules fauna marina ni compres productos que exploten la vida silvestre.",
    image: "/images/mazunte.jpg",
    imageAlt: "Playa amplia de Mazunte con arena dorada y mar azul",
    location: "Mazunte",
    duration: "Día completo",
    categories: ["naturaleza", "cultura", "gastronomia"],
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Mazunte%20Puerto%20Escondido%20Oaxaca",
  },
  {
    id: "cafe-mezcal",
    title: "Café, maíz y mezcal",
    eyebrow: "Sabores de la región",
    description:
      "Una ruta de visitas pequeñas que conecta con productores rurales, cocinas familiares y conocimientos ancestrales.",
    detail:
      "Elige visitas que informen cómo se elaboran los productos, pague un precio justo y compartan quién produce cada pieza. La compra responsable comienza con preguntas buenas.",
    image: "/images/puerto-town.jpg",
    imageAlt: "Vista urbana costera de Puerto Escondido al atardecer",
    location: "Región de Puerto Escondido",
    duration: "Medio día",
    categories: ["cultura", "gastronomia"],
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=San%20Mateo%20Macuilxochitl%20Oaxaca",
  },
  {
    id: "movimiento",
    title: "Marea suave",
    eyebrow: "Menos prisa, más playa",
    description:
      "Combina yoga al aire libre, caminatas junto al Pacífico y tiempo sin agenda para volver a tu centro.",
    detail:
      "Busca proveedores que indiquen claramente duración, nivel, equipo necesario y condiciones de cancelación. El bienestar también empieza con una reserva transparente.",
    image: "/images/coconut.jpg",
    imageAlt: "Coco tropical y fruta junto a una bebida en Puerto Escondido",
    location: "Puerto Escondido",
    duration: "2–5 h",
    categories: ["bienestar", "naturaleza"],
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=yoga%20Puerto%20Escondido%20Oaxaca",
  },
  {
    id: "carrizalillo",
    title: "El atardecer en Carrizalillo",
    eyebrow: "La hora dorada",
    description:
      "Baja con cuidado por la escalera tallada en roca y encuentra uno de los horizontes más fotogénicos de la costa.",
    detail:
      "El acceso al mar y a la arena puede cambiar con la marea. Lleva agua, calzado de agua y regresa antes de que oscurezca; una linterna pequeña es más útil de lo que parece.",
    image: "/images/surf-sunset.jpg",
    imageAlt: "Olas rompiendo en la playa de Zicatela durante la hora dorada",
    location: "Carrizalillo",
    duration: "Atardecer",
    categories: ["naturaleza", "bienestar"],
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Playa%20Carrizalillo%20Puerto%20Escondido",
  },
];

export const neighborhoods = [
  {
    name: "Centro",
    label: "Ritmo local",
    description:
      "Mercado, restaurantes y vida cotidiana para empezar y terminar bien el día.",
    image: "/images/puerto-town.jpg",
    imageAlt: "Vista de Puerto Escondido y la costa desde el centro",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Centro%20de%20Puerto%20Escondido%20Oaxaca",
  },
  {
    name: "Carrizalillo",
    label: "Atardecer",
    description: "Acantilados, escalones y un cielo que cambia antes del crepúsculo.",
    image: "/images/hero-zicatela.jpg",
    imageAlt: "Atardecer dorado sobre el mar en Puerto Escondido",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Playa%20Carrizalillo%20Puerto%20Escondido",
  },
  {
    name: "La Punta",
    label: "Sin prisa",
    description:
      "Un ambiente más relajado para nadar con cuidado, comer junto al mar y observar la tarde.",
    image: "/images/playa-caribe.jpg",
    imageAlt: "Rocas oscuras y olas rompiendo junto a la costa de Puerto Escondido",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Playa%20La%20Punta%20Puerto%20Escondido",
  },
  {
    name: "Zicatela",
    label: "Energía",
    description:
      "Surf, puesta de sol y una agenda activa. Consulta siempre las condiciones de la rompiente.",
    image: "/images/surf-zicatela.jpg",
    imageAlt: "Surfista en la costa de Zicatela con su tabla",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Playa%20Zicatela%20Puerto%20Escondido",
  },
];

export const faqs = [
  {
    question: "¿Cuándo es mejor visitar Puerto Escondido?",
    answer:
      "La temporada seca suele ir de noviembre a abril y la de lluvias de mayo a octubre. La mejor elección depende de si priorizas cielo más estable, oleaje, flora o fauna. Revisa el clima, el mar y los avisos oficiales antes de reservar.",
  },
  {
    question: "¿Es posible llegar directo por vía aérea?",
    answer:
      "Sí. El Aeropuerto Internacional de Puerto Escondido (PXM) recibe vuelos nacionales e internacionales. Desde diciembre de 2025 Sectur Oaxaca informó un segundo enlace internacional con Dallas, además del vuelo desde Houston. Las rutas y frecuencias pueden cambiar; confírmalas directamente con la aerolínea.",
  },
  {
    question: "¿Qué nivel necesito para surfear en Zicatela?",
    answer:
      "Zicatela es potente y conocida por su rompiente. No es un lugar para improvisar: revisa el parte, pregunta a personas locales o a tu instructor, respeta la prioridad en el agua y empieza con una clase antes de entrar solo.",
  },
  {
    question: "¿Cuántos días son ideales?",
    answer:
      "Con dos días puedes conocer el centro, Carrizalillo y una experiencia principal. Tres a cinco días permiten combinar Zicatela con Manialtepec, Mazunte y días de calma. Usa el planificador para crear un ritmo que se ajuste a ti.",
  },
  {
    question: "¿Cómo cuidamos el destino?",
    answer:
      "Elige guías autorizadas, operadores locales y experiencias que protejan tortugas, humedales y fauna. No toques ni persigas animales, evita entrar al mar sin autorización y sigue las indicaciones de quienes cuidan cada ecosistema. Queremos que el turismo genere beneficios, no solo llegadas.",
  },
];

export const officialSources = [
  {
    label: "Indicadores turísticos · Sectur Oaxaca",
    url: "https://www.oaxaca.gob.mx/sectur/wp-content/uploads/sites/65/2026/06/1.-Indicadores-de-la-Actividad-Turistica-2026-Enero_-mayo.pdf",
  },
  {
    label: "Vuelos internacionales a PXM · Gobierno de Oaxaca",
    url: "https://www.oaxaca.gob.mx/sectur/la-primavera-oaxaquena-hace-historia-puerto-escondido-tiene-segundo-vuelo-internacional/",
  },
  {
    label: "Turismo sostenible · PNUD México",
    url: "https://www.undp.org/es/mexico/noticias/pnud-impulsa-el-intercambio-de-experiencias-sobre-financiamiento-para-fortalecer-el-turismo-sostenible-en-puerto-escondido",
  },
  {
    label: "Zicatela · World Surf League",
    url: "https://www.worldsurfleague.com/events/2024/mqs/4796/pacifico-surf-open-puerto-escondido",
  },
  {
    label: "Guía oficial del destino · Sectur Oaxaca",
    url: "https://www.oaxaca.gob.mx/sectur/wp-content/uploads/sites/65/2024/08/Puerto_Escondido.pdf",
  },
];
