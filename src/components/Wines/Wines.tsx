"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { wines } from "@/data/wines";

const typeColors: Record<string, string> = {
  Tinto: "bg-[#722F37]/80 text-[#FFCCCC]",
  Blanco: "bg-[#EAC891]/80 text-[#1A1208]",
  Rosado: "bg-[#D4929A]/80 text-[#2A0808]",
  Espumoso: "bg-[#5E7E53]/80 text-[#0A0A0A]",
};

export default function Wines() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const visibleWines = wines.slice(0, 6);

  return (
    <section 
      ref={ref}
      id="vinos" 
      className="relative py-16 md:py-24 px-4 md:px-8 bg-[#1A0A10] overflow-x-hidden"
    >
      <div className="max-w-md md:max-w-4xl lg:max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-[#C9974A] text-xs md:text-sm tracking-widest uppercase">Nuestro Catálogo</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl text-white mt-4 md:mt-6">
            Vinos de{' '}
            <span className="text-[#C9974A]">Excelencia</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {visibleWines.map((wine) => (
            <div
              key={wine.id}
              className="flex md:flex-col gap-4 bg-[#0A0A0A] rounded-xl overflow-hidden border border-[#2A0808]"
            >
              <div className="relative w-24 md:w-full md:h-64 flex-shrink-0">
                <Image
                  src={wine.image}
                  alt={wine.name}
                  fill
                  sizes="(max-width: 768px) 25vw, 33vw"
                  className="object-cover"
                />
                <span
                  className={`absolute top-2 left-2 px-2 py-1 text-[10px] uppercase font-medium ${typeColors[wine.type]}`}
                >
                  {wine.type}
                </span>
              </div>
              
              <div className="flex-1 p-4 md:p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-lg md:text-xl text-white">{wine.name}</h3>
                  <span className="text-[#C9974A] font-medium">{wine.year}</span>
                </div>
                <p className="text-[#888888] text-sm mb-1">{wine.grape}</p>
                <p className="text-[#666666] text-xs italic mb-2">{wine.aging}</p>
                <p className="text-[#A0A0A0] text-xs md:text-sm line-clamp-2 md:line-clamp-3">{wine.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <button className="border-2 border-[#C9974A] text-[#C9974A] px-8 py-3 md:px-12 md:py-4 text-xs md:text-sm tracking-wider uppercase hover:bg-[#C9974A] hover:text-white transition-colors">
            Ver Catálogo Completo
          </button>
        </div>
      </div>
    </section>
  );
}
