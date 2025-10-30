import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce nuestra historia, filosofía culinaria y el equipo detrás de Verde Vida.",
  alternates: { canonical: "/nosotros" },
};

export default function NosotrosPage() {
  return (
    <div className="mt-24 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
      <SectionTitle title="Nosotros" subtitle="Historia y filosofía culinaria" />
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-4">
          <p className="text-dark/80">Nacimos con la idea de acercar comida fresca y consciente a todos. Creemos en ingredientes locales y en un servicio honesto.</p>
          <p className="text-dark/80">Nuestro equipo de cocina experimenta con sabores para crear especialidades de temporada que celebran lo mejor de cada estación.</p>
        </div>
        <div className="rounded-2xl overflow-hidden">
          <img src="/imagenes/comida/chef1.jpg" alt="Equipo" className="w-full h-72 object-cover" />
        </div>
      </div>
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-dark">Nuestro equipo</h3>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[1,2,3].map((i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-zinc-200 bg-white">
              <img src={`/imagenes/comida/chef${i}.jpg`} alt="Chef" className="h-44 w-full object-cover" />
              <div className="p-3">
                <div className="font-medium text-dark">Chef {i}</div>
                <div className="text-sm text-dark/70">Especialista en banquetes</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
