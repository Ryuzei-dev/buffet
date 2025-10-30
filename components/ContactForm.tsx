"use client";
import { useState } from "react";

type Props = { withServiceSelect?: boolean };
export default function ContactForm({ withServiceSelect = false }: Props) {
  const [loading, setLoading] = useState(false);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("¡Gracias! Te contactaremos pronto.");
    }, 600);
  };
  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      {withServiceSelect && (
        <select className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5007D]" required>
          <option value="">Selecciona un servicio</option>
          <option>Buffet para boda</option>
          <option>Evento corporativo</option>
          <option>Cumpleaños</option>
          <option>Otro</option>
        </select>
      )}
      <input className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5007D]" placeholder="Nombre" required />
      <input type="email" className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5007D]" placeholder="Email" required />
      <input className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5007D]" placeholder="Teléfono" />
      <textarea rows={4} className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5007D]" placeholder="Mensaje"></textarea>
      <button disabled={loading} className="rounded-full bg-mexican-pink px-5 py-2 text-white font-semibold shadow-sm hover:brightness-110 disabled:opacity-60">
        {loading ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}
