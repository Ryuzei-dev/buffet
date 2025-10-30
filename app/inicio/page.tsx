import type { Metadata } from "next";
import HeroVideo from "@/components/HeroVideo";
import SectionTitle from "@/components/SectionTitle";
import GalleryGrid from "@/components/GalleryGrid";
import ReviewCard from "@/components/ReviewCard";
import Link from "next/link";
import FloatingCTAs from "@/components/FloatingCTAs";

export const metadata: Metadata = {
  title: "Inicio",
  description: "Buffet fresco, eventos memorables y especialidades de temporada.",
  alternates: { canonical: "/inicio" },
};

export default function InicioPage() {
  const gallery = [
    "/imagenes/comida/comida2.jpg",
    "/imagenes/comida/comida3.jpg",
    "/imagenes/comida/comida4.jpg",
    "/imagenes/comida/comida5.jpg",
    "/imagenes/comida/pizza.jpg",
    "/imagenes/comida/alitas.jpg",
    "/imagenes/comida/brownie.jpg",
    "/imagenes/comida/bebida1.jpg",
  ];

  const reviews = [
    { name: "María G.", text: "El mejor buffet de la zona, opciones para todos." },
    { name: "Carlos P.", text: "La variedad es increíble y todo fresco." },
    { name: "Ana L.", text: "Excelente servicio para eventos, 100% recomendado." },
  ];

  return (
    <div className="">
      <HeroVideo
        title="Sabores para todos los gustos"
        subtitle="Buffet fresco, eventos memorables y especialidades de temporada."
        full
      />
      <FloatingCTAs />

      <div className="space-y-16 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <section className="grid gap-6 md:grid-cols-3">
        {[
          { title: "Buffet diario", desc: "Variedad balanceada con opciones vegetarianas y sin gluten.", href: "/menu" },
          { title: "Eventos", desc: "Bodas, cumpleaños y empresas con atención personalizada.", href: "/eventos" },
          { title: "Especialidades", desc: "Platillos destacados de temporada con ingredientes locales.", href: "/menu" },
        ].map((c) => (
          <Link key={c.title} href={c.href} className="rounded-2xl border border-zinc-200 p-6 bg-white hover:shadow-sm cursor-pointer">
            <div className="text-lg font-semibold text-dark">{c.title}</div>
            <p className="text-sm text-dark/70 mt-2">{c.desc}</p>
            <div className="mt-3 text-[#0D47A1] text-sm">Ver más →</div>
          </Link>
        ))}
      </section>

      <section className="space-y-6">
        <SectionTitle title="Galería de platos" subtitle="Un vistazo a nuestra mesa." />
        <GalleryGrid images={gallery} />
      </section>

      <section className="space-y-6">
        <SectionTitle title="Reseñas de clientes" />
        <div className="grid gap-4 md:grid-cols-3">
          {reviews.map((r) => (
            <ReviewCard key={r.name} name={r.name} text={r.text} />
          ))}
        </div>
        <div className="text-center">
          <Link href="/contacto" className="rounded-full bg-mexican-pink px-5 py-2 text-white cursor-pointer">Contáctanos</Link>
        </div>
      </section>
      </div>
    </div>
  );
}
