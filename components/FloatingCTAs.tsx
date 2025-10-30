"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function FloatingCTAs() {
  const [overHero, setOverHero] = useState(true);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const io = new IntersectionObserver(
      ([entry]) => setOverHero(entry.isIntersecting),
      { threshold: 0.2 }
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  const menuClasses = "bg-white text-black border-2 border-mexican-pink";
  const reservarClasses = "bg-mexican-pink text-white";

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-40 flex justify-center">
      <div className="pointer-events-auto flex gap-4">
        <Link
          href="/menu"
          className={`rounded-full px-7 py-4 text-lg font-semibold shadow-lg transition-colors ${menuClasses}`}
        >
          Ver menú
        </Link>
        <a
          href="https://wa.me/5215555555555"
          target="_blank"
          className={`rounded-full px-7 py-4 text-lg font-semibold shadow-lg hover:brightness-110 transition-colors ${reservarClasses}`}
        >
          Reservar
        </a>
      </div>
    </div>
  );
}
