import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Aviso de privacidad",
  description: "Información sobre privacidad en Marea PXM.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-foam px-5 py-10 text-ink sm:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-extrabold text-ink/60 transition-colors hover:text-coral">
          <ArrowLeft className="h-4 w-4" /> Volver a Marea PXM
        </Link>
        <p className="eyebrow mt-16">Transparencia</p>
        <h1 className="mt-5 font-display text-6xl font-medium leading-[0.92] tracking-[-0.05em] sm:text-8xl">Aviso de privacidad.</h1>
        <p className="mt-7 text-sm font-bold text-ink/45">Última actualización: 23 de septiembre de 2026</p>
        <div className="prose prose-sm mt-10 max-w-none text-sm font-medium leading-relaxed text-ink/68">
          <p>Marea PXM es un proyecto editorial independiente. Esta versión del sitio no crea una cuenta de usuario y el planificador funciona en el navegador, sin enviar tus respuestas a un servidor.</p>
          <h2 className="mt-10 text-lg font-extrabold text-ink">Datos que podemos recibir</h2>
          <p>Si el propietario del sitio conecta un canal de captación, el formulario de la página de contacto podrá enviar el nombre, correo electrónico e interés que indiques al proveedor de destino configurado. Esa integración no viene activada en el código base.</p>
          <h2 className="mt-8 text-lg font-extrabold text-ink">Cookies y analítica</h2>
          <p>El sitio no instala cookies de seguimiento por defecto. Si se configura una medición de Google Analytics, se cargará únicamente después de revisar qué herramientas y consentimiento son necesarios para tu jurisdicción.</p>
          <h2 className="mt-8 text-lg font-extrabold text-ink">Tus decisiones</h2>
          <p>Puedes solicitar acceso, corrección o eliminación de tus datos escribiendo al contacto que el propietario publique antes de publicar el sitio. No respondemos a solicitudes de terceros por este proyecto de demostración.</p>
        </div>
      </div>
    </main>
  );
}
