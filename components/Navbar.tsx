"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/inicio";
  const [isScrolled, setIsScrolled] = useState(false);
  const [overHero, setOverHero] = useState(true);
  const heroObserverRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setIsScrolled(y > 24);
      if (y > lastY && y > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastY(y);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    // Reconfigura observador del hero en cada cambio de ruta
    if (heroObserverRef.current) {
      heroObserverRef.current.disconnect();
      heroObserverRef.current = null;
    }
    const hero = document.getElementById("hero");
    // Si volvemos a inicio y estamos arriba, fuerza estado inicial transparente
    if (pathname === "/" || pathname === "/inicio") {
      setIsScrolled((typeof window !== "undefined" ? window.scrollY : 0) > 24);
    } else {
      setIsScrolled(true);
    }
    if (!hero) return;
    const io = new IntersectionObserver(([entry]) => setOverHero(entry.isIntersecting), { threshold: 0.2 });
    io.observe(hero);
    heroObserverRef.current = io;
    return () => {
      io.disconnect();
    };
  }, [pathname]);

  const solid = !isHome || !overHero || isScrolled;

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className={`transition-all duration-500 ease-out ${hidden ? "-translate-y-full" : "translate-y-0"} ${solid ? "bg-white/95 backdrop-blur border-b border-zinc-200 shadow-sm" : "bg-transparent shadow-none border-transparent"}`}>
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* LOGO PRINCIPAL - AHORA DOBLE DE TAMAÑO */}
            <Link href="/inicio" className="flex items-center gap-2">
              <img
                src="/imagenes/logo.png"
                alt="Logo Buffet Verde Vida"
                className={`h-24 w-24 rounded-full object-contain transition-all duration-500 ${
                  !solid ? "ring-2 ring-white/40" : ""
                }`}
              />
            </Link>

            {/* BOTONES Y MENU */}
            <div className="flex items-center gap-5">
              <a
                href="https://wa.me/5215555555555"
                target="_blank"
                className={`hidden sm:inline-block rounded-full px-4 py-2 text-sm font-semibold shadow-sm focus:outline-none focus-visible:ring-2 border-2 transition-colors cursor-pointer ${
                  solid
                    ? "bg-white text-dark border-[#E5007D] hover:bg-[#E5007D] hover:text-white"
                    : "bg-transparent text-white border-white hover:bg-white/10"
                }`}
              >
                WhatsApp
              </a>
              <Link
                href="/menu"
                className={`hidden md:inline-block text-sm font-semibold ${
                  !solid ? "text-white" : "text-dark"
                }`}
              >
                MENÚ
              </Link>
              <button
                className="p-2 cursor-pointer"
                onClick={() => setMenuOpen(true)}
                aria-label="Abrir menú"
              >
                <span
                  className={`block h-0.5 w-6 ${
                    !solid ? "bg-white" : "bg-dark"
                  } mb-1`}
                ></span>
                <span
                  className={`block h-0.5 w-6 ${
                    !solid ? "bg-white" : "bg-dark"
                  } mb-1`}
                ></span>
                <span
                  className={`block h-0.5 w-6 ${
                    !solid ? "bg-white" : "bg-dark"
                  }`}
                ></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* OVERLAY MENU */}
      <div
        className={`fixed inset-0 z-[60] transition ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        {/* FONDO OSCURO (debajo del panel) */}
        <div
          className={`fixed inset-0 z-60 bg-black/50 transition-opacity duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* PANEL DESLIZANTE */}
        <aside
          className={`fixed right-0 top-0 z-[70] isolate h-screen w-11/12 sm:w-[420px] max-w-[420px] text-white shadow-2xl transform transition-transform duration-500 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col bg-[#E5007D]">
          <div className="flex items-center justify-between p-6 border-b border-white/20">
            <div className="flex items-center gap-2">
              <img
                src="/imagenes/logo.png"
                alt="Logo Buffet Verde Vida"
                className="h-16 w-16 rounded-full object-contain"
              />
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Cerrar"
              className="text-white/90 hover:text-white text-3xl"
            >
              ×
            </button>
          </div>

          {/* LINKS PRINCIPALES */}
          <nav className="px-6 py-6 grid gap-5 text-lg font-semibold overflow-y-auto">
            <Link href="/inicio" onClick={() => setMenuOpen(false)}>
              Inicio →
            </Link>
            <Link href="/menu" onClick={() => setMenuOpen(false)}>
              Menú →
            </Link>
            <Link href="/eventos" onClick={() => setMenuOpen(false)}>
              Eventos →
            </Link>
            <Link href="/nosotros" onClick={() => setMenuOpen(false)}>
              Nosotros →
            </Link>
            <Link href="/contacto" onClick={() => setMenuOpen(false)}>
              Contacto →
            </Link>
          </nav>

          {/* CONTACTO */}
          <div className="px-6 py-6 border-t border-white/30 text-white/90 grid gap-2 text-sm">
            <div>Av. Principal 123, CDMX</div>
            <div>T. (55) 0000 0000</div>
            <a
              href="https://wa.me/5215555555555"
              target="_blank"
              className="underline hover:text-white"
            >
              WhatsApp
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              className="underline hover:text-white"
            >
              Facebook
            </a>
          </div>
          </div>
        </aside>
      </div>
    </header>
  );
}
  