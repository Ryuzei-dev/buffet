import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Eventos y servicios",
  description: "Buffet para bodas, cumpleaños y empresas. Cotiza tu evento con nuestro equipo.",
  alternates: { canonical: "/eventos" },
};

export default function EventosPage() {
  return (
    <div className="mt-24 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
      <SectionTitle title="Eventos y servicios" subtitle="Buffet para bodas, cumpleaños y empresas" />

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div className="rounded-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1600&auto=format&fit=crop" alt="Evento" className="w-full h-64 object-cover" />
          </div>
          <p className="text-dark/80">Personalizamos menús, montaje y servicio. Nuestro equipo te acompaña desde la planeación hasta el último brindis.</p>
          <ul className="list-disc list-inside text-dark/80 grid gap-1">
            <li>Bodas y aniversarios</li>
            <li>Eventos corporativos</li>
            <li>Cumpleaños y reuniones</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-dark mb-3">Solicita una cotización</h3>
          <ContactForm withServiceSelect />
        </div>
      </div>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-dark">Testimonios</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {["Todo salió perfecto", "La comida fue un éxito", "Gran coordinación"].map((t, i) => (
            <div key={i} className="rounded-xl border border-zinc-200 p-4 bg-white">{t}</div>
          ))}
        </div>
      </section>
    </div>
  );
}
