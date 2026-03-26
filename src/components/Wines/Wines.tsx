"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { wines } from "@/data/wines";

const typeColors: Record<string, string> = {
  Tinto: "bg-red-900/80 text-red-200",
  Blanco: "bg-amber-200/80 text-amber-900",
  Rosado: "bg-pink-300/80 text-pink-900",
  Espumoso: "bg-purple-300/80 text-purple-900",
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

  return (
    <section 
      ref={ref}
      id="vinos" 
      className="relative py-40 px-8 bg-stone-950 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-amber-700/5 rounded-full blur-[180px]" />
        <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-red-800/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="h-px w-20 bg-amber-600/50" />
            <span className="text-amber-500 text-sm tracking-[0.5em] uppercase">Nuestro Catálogo</span>
            <div className="h-px w-20 bg-amber-600/50" />
          </div>
          <h2 className="font-serif text-7xl lg:text-8xl text-white mb-8">
            Vinos de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
              Excelencia
            </span>
          </h2>
          <p className="text-stone-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Cada vino es una expresión única de nuestro terroir, elaborado con pasión y respeto por la tradición vinícola.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wines.map((wine, index) => (
            <div
              key={wine.id}
              className={`group relative bg-stone-900/80 rounded-2xl overflow-hidden border border-stone-800 hover:border-amber-600/30 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent z-10" />
                <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/5 transition-colors duration-500 z-10" />
                <Image
                  src={wine.image}
                  alt={wine.name}
                  fill
                  className="object-cover group-hover:scale-125 group-hover:rotate-2 transition-all duration-700"
                />
                <span
                  className={`absolute top-4 left-4 px-4 py-2 text-xs tracking-wider uppercase font-medium backdrop-blur-sm ${typeColors[wine.type]}`}
                >
                  {wine.type}
                </span>
                <div className="absolute top-4 right-4 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-amber-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  →
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-serif text-2xl text-white group-hover:text-amber-400 transition-colors duration-300">
                    {wine.name}
                  </h3>
                  <span className="text-amber-500 font-semibold text-xl">
                    {wine.year}
                  </span>
                </div>
                <p className="text-stone-400 font-medium mb-2">{wine.grape}</p>
                <p className="text-stone-500 text-sm mb-4 italic">{wine.aging}</p>
                <p className="text-stone-400 text-sm mb-6 line-clamp-2 leading-relaxed">
                  {wine.description}
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-stone-800">
                  <span className="text-xs text-stone-600 uppercase tracking-widest">Detalles</span>
                  <span className="text-amber-500 text-xl group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </div>

              <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all duration-500" />
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <button className="relative bg-transparent border-2 border-amber-600 text-amber-500 px-16 py-5 tracking-[0.2em] uppercase overflow-hidden group">
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">
              Ver Catálogo Completo
            </span>
            <span className="absolute inset-0 bg-amber-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}