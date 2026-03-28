"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Banner() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-[85vh] md:h-screen w-full overflow-hidden bg-[#0A0A0A]">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1920&q=80"
      >
        <source
          src="/copa.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-[#0A0A0A]/50 to-[#0A0A0A]/30 z-10" />

      <div className={`absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 transition-opacity duration-1000 ${
        showContent ? "opacity-100" : "opacity-0"
      }`}>
        <span className="font-script text-[#C9974A] text-2xl md:text-4xl lg:text-5xl mb-2 md:mb-4">
          Vinoteca & Club Enófilo
        </span>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-9xl text-white mb-4 md:mb-8 leading-tight">
          BODEGA <span className="text-[#C9974A]">RUZAFA</span>
        </h1>
        
        <p className="text-white/80 text-lg md:text-2xl lg:text-3xl font-body max-w-2xl mb-8 md:mb-12 leading-relaxed">
          Más de 3 generaciones ofreciendo los mejores vinos seleccionados
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <Link
            href="#contacto"
            className="bg-[#C9974A] hover:bg-[#B8863B] text-white px-8 py-4 md:px-12 md:py-5 font-body text-sm tracking-wider uppercase transition-colors"
          >
            Reservar una Cata
          </Link>
          <Link
            href="#vinos"
            className="border border-white/40 text-white px-8 py-4 md:px-12 md:py-5 font-body text-sm tracking-wider uppercase hover:bg-white/10 transition-colors"
          >
            Ver Catálogo
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="w-8 h-8 text-white/60"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </section>
  );
}
