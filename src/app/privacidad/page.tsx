import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";

export const metadata = {
  title: "Aviso de privacidad",
  description: "Información sobre privacidad en Marea PXM.",
};

export default function PrivacyPage() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

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
          <p>Si el propietario conecta un canal de captación, el formulario podrá enviar nombre, correo electrónico e interés para enviarte rutas, alertas de temporada y contenido editorial. El código base no guarda esos datos ni incluye un proveedor de correo.</p>
          <p>La finalidad, el proveedor, el periodo de conservación y la mecánica de baja deben documentarse aquí antes de activar un webhook de producción. No se debe activar GA4 sin revisar el consentimiento aplicable a la jurisdicción del propietario.</p>
          <h2 className="mt-8 text-lg font-extrabold text-ink">Cookies y analítica</h2>
          <p>El sitio no instala cookies de seguimiento por defecto. Si se configura Google Analytics, se cargará únicamente después de revisar qué herramientas y consentimiento son necesarios para tu jurisdicción.</p>
          <h2 className="mt-8 text-lg font-extrabold text-ink">Tus decisiones</h2>
          {contactEmail ? (
            <p>Puedes solicitar acceso, corrección o eliminación de tus datos escribiendo a <a href={`mailto:${contactEmail}`} className="inline-flex items-center gap-1 font-extrabold text-ink underline decoration-coral underline-offset-4"><Mail className="h-3.5 w-3.5" />{contactEmail}</a>.</p>
          ) : (
            <p>El contacto público para solicitar acceso, corrección o eliminación de tus datos debe publicarse antes de activar la captación de leads. Esta demo editorial no incluye un buzón de contacto.</p>
          )}
        </div>
      </div>
    </main>
  );
}
