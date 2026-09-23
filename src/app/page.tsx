import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { DestinationIntro } from "@/components/destination-intro";
import { ExperienceExplorer } from "@/components/experience-explorer";
import { ZicatelaFeature } from "@/components/zicatela-feature";
import { Neighborhoods } from "@/components/neighborhoods";
import { TripPlanner } from "@/components/trip-planner";
import { Sustainability } from "@/components/sustainability";
import { TravelInfo } from "@/components/travel-info";
import { LeadsForm } from "@/components/leads-form";
import { SiteFooter } from "@/components/site-footer";
import { ServiceWorkerRegistration } from "@/components/service-worker-registration";
import { experiences, faqs } from "@/data/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Marea PXM",
      url: siteUrl,
      description: "Guía editorial y planificador de viajes para Puerto Escondido, Oaxaca.",
    },
    {
      "@type": "TouristDestination",
      name: "Puerto Escondido",
      url: siteUrl,
      description: "Destino costero de Oaxaca conocido por Zicatela, sus playas y sus rutas naturales.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Puerto Escondido",
        addressRegion: "Oaxaca",
        addressCountry: "MX",
      },
      image: `${siteUrl}/images/hero-zicatela.jpg`,
    },
    {
      "@type": "ItemList",
      name: "Experiencias en Puerto Escondido",
      itemListElement: experiences.map((experience, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: experience.title,
        description: experience.description,
        url: `${siteUrl}/#experiencias`,
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteHeader />
      <ServiceWorkerRegistration />
      <main id="contenido">
        <Hero />
        <DestinationIntro />
        <ExperienceExplorer />
        <ZicatelaFeature />
        <Neighborhoods />
        <TripPlanner />
        <Sustainability />
        <TravelInfo />
        <LeadsForm />
      </main>
      <SiteFooter />
    </>
  );
}
