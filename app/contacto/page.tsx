import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto y reservaciones",
  description: "Escríbenos para reservar o cotizar eventos. También atendemos por WhatsApp.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <div className="mt-24 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
      <SectionTitle title="Contacto y reservaciones" />
      <div className="grid gap-6 md:grid-cols-2 items-start">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <ContactForm />
          <a href="https://wa.me/5215555555555" target="_blank" className="mt-3 inline-block text-sm text-[#0D47A1] hover:underline">Reservar por WhatsApp →</a>
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl overflow-hidden h-72">
            <iframe
              title="Mapa"
              width="100%"
              height="100%"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12087.708097072514!2d-73.9856564!3d40.7484445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMDguNCJX!5e0!3m2!1ses-419!2smx!4v1610000000000"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div>
            <div className="font-semibold text-dark">Horarios</div>
            <p className="text-dark/70 text-sm">Lun - Dom: 12:00 - 22:00</p>
          </div>
          <div>
            <div className="font-semibold text-dark">Teléfono</div>
            <p className="text-dark/70 text-sm">(55) 0000 0000</p>
          </div>
          <div>
            <div className="font-semibold text-dark">Redes</div>
            <div className="flex gap-3 text-sm">
              <a href="https://www.facebook.com" target="_blank" className="text-dark/80 hover:text-dark">Facebook</a>
              <a href="https://www.instagram.com" target="_blank" className="text-dark/80 hover:text-dark">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
