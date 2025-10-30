import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mt-24 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center space-y-6">
        <div>
          <div className="inline-flex items-center justify-center rounded-full bg-[#E5007D]/10 px-4 py-2 text-[#E5007D] text-sm font-semibold">Error 404</div>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold text-dark">Página no encontrada</h1>
        <p className="text-dark/70 text-lg sm:text-xl max-w-2xl mx-auto">
          La página que buscas no existe o fue movida. Revisa la URL o vuelve al inicio.
        </p>
        <div className="flex items-center justify-center gap-3 pt-2">
          <Link href="/inicio" className="rounded-full bg-mexican-pink px-5 py-2 text-white font-semibold shadow-sm hover:brightness-110 cursor-pointer">Ir al inicio</Link>
          <Link href="/menu" className="rounded-full bg-white px-5 py-2 text-[#0D47A1] border-2 border-mexican-pink hover:bg-white/90 cursor-pointer">Ver menú</Link>
        </div>
      </div>
    </div>
  );
}
