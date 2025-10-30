export default function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* Fila 1 */}
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4 space-y-3">
            <div className="flex items-center gap-2">
              <img src="/imagenes/logo.png" alt="Logo Verde Vida" className="h-10 w-10 rounded-full object-contain" />
              <div className="text-xl font-semibold text-dark">Verde Vida</div>
            </div>
            <p className="text-dark/70">Buffet fresco y banquetes para tus eventos. Sabores para todos los gustos.</p>
            <a href="https://wa.me/5215555555555" target="_blank" className="inline-block rounded-full bg-mexican-pink text-white px-4 py-2 text-sm font-semibold shadow-sm hover:brightness-110">Cotiza por WhatsApp</a>
          </div>
          <div className="md:col-span-4">
            <div className="font-semibold text-[#0D47A1] mb-3">Enlaces</div>
            <ul className="grid gap-2 text-sm">
              <li><a href="/nosotros" className="text-[#0D47A1] hover:underline">¿Quiénes somos?</a></li>
              <li><a href="/menu" className="text-[#0D47A1] hover:underline">Menú</a></li>
              <li><a href="/eventos" className="text-[#0D47A1] hover:underline">Eventos</a></li>
              <li><a href="/contacto" className="text-[#0D47A1] hover:underline">Contacto</a></li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <div className="font-semibold text-[#0D47A1] mb-3">Horarios y contacto</div>
            <p className="text-sm text-dark/70">Lun - Dom: 12:00 - 22:00</p>
            <p className="text-sm text-dark/70 mt-2">T. (55) 0000 0000</p>
            <div className="flex gap-3 mt-3 text-sm">
              <a href="https://www.facebook.com" target="_blank" className="text-[#0D47A1] hover:underline">Facebook</a>
              <a href="https://www.instagram.com" target="_blank" className="text-[#0D47A1] hover:underline">Instagram</a>
              <a href="https://wa.me/5215555555555" target="_blank" className="text-[#0D47A1] hover:underline">WhatsApp</a>
            </div>
          </div>
        </div>

        {/* Fila 2 - Ubicación */}
        <div className="grid gap-6">
          <div className="font-semibold text-[#0D47A1]">Ubicación</div>
          <p className="text-sm text-dark/70">Av. Principal 123, CDMX</p>
          <div className="h-48 sm:h-64 w-full overflow-hidden rounded-xl border border-zinc-200">
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
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-zinc-200">
          <div className="text-xs text-dark/60">© {new Date().getFullYear()} Verde Vida. Todos los derechos reservados.</div>
          <div className="text-xs text-dark/60">Aviso de privacidad</div>
        </div>
      </div>
    </footer>
  );
}
