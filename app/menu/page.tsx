import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import MenuCard from "@/components/MenuCard";

export const metadata: Metadata = {
  title: "Menú",
  description: "Categorías del menú: entradas, platos fuertes, postres y bebidas.",
  alternates: { canonical: "/menu" },
};

export default function MenuPage() {
  const categorias = [
    {
      nombre: "Entradas",
      items: [
        { title: "Ensalada fresca", image: "/imagenes/comida/comida3.jpg", tags: ["Veg"] },
        { title: "Sopa del día", image: "/imagenes/comida/comida4.jpg" },
        { title: "Pan artesanal", image: "/imagenes/comida/pan.jpg" },
      ],
    },
    {
      nombre: "Platos fuertes",
      items: [
        { title: "Pasta al pesto", image: "/imagenes/comida/comida5.jpg", tags: ["Veg"] },
        { title: "Pollo a las hierbas", image: "/imagenes/comida/pollo.jpg" },
        { title: "Corte a la plancha", image: "/imagenes/comida/carne1.jpg" },
      ],
    },
    {
      nombre: "Postres",
      items: [
        { title: "Cheesecake de frutos", image: "/imagenes/comida/cheesecake.jpg" },
        { title: "Brownie", image: "/imagenes/comida/brownie.jpg" },
        { title: "Fruta de temporada", image: "/imagenes/comida/fruta.jpg", tags: ["Veg"] },
      ],
    },
    {
      nombre: "Bebidas",
      items: [
        { title: "Agua fresca", image: "/imagenes/comida/bebida1.jpg" },
        { title: "Limonada", image: "/imagenes/comida/bebida2.jpg" },
        { title: "Café", image: "/imagenes/comida/bebida3.jpg" },
      ],
    },
  ];

  return (
    <div className="mt-24 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
      <SectionTitle title="Menú" subtitle="Categorías y especialidades" />
      {categorias.map((cat) => (
        <section key={cat.nombre} className="space-y-4">
          <h3 className="text-xl font-semibold text-dark">{cat.nombre}</h3>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {cat.items.map((i) => (
              <MenuCard key={i.title} title={i.title} image={i.image} tags={i.tags} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
