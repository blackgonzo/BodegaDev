"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const wines = [
  {
    id: 1,
    name: "Reserva Especial",
    year: "2019",
    type: "Tinto",
    description: "Crianza de 24 meses en barrica de roble francés",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80",
  },
  {
    id: 2,
    name: "Cava Brut",
    year: "2022",
    type: "Espumoso",
    description: "Método tradicional con 36 meses de maduración",
    image: "https://images.unsplash.com/photo-1609592806596-4435da1122dc?w=800&q=80",
  },
  {
    id: 3,
    name: " Blanco Premium",
    year: "2023",
    type: "Blanco",
    description: "Viñas centenarios con bouquet floral",
    image: "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800&q=80",
  },
];

export default function Banner() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % wines.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {wines.map((wine, index) => (
        <div
          key={wine.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === activeSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-110"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
          <Image
            src={wine.image}
            alt={wine.name}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div
            className={`absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-24 transition-all duration-1000 delay-300 ${
              index === activeSlide
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-amber-400 text-lg md:text-xl tracking-[0.3em] uppercase mb-4">
              {wine.type} · {wine.year}
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 max-w-3xl">
              {wine.name}
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-xl mb-8">
              {wine.description}
            </p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg tracking-wider uppercase transition-all duration-300 w-fit">
              Reservar Cata
            </button>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {wines.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              index === activeSlide
                ? "bg-amber-400 w-12"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Ver vino ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute top-1/2 right-8 z-30 hidden md:flex flex-col gap-4">
        <button
          onClick={() =>
            setActiveSlide((prev) => (prev - 1 + wines.length) % wines.length)
          }
          className="w-12 h-12 border border-white/30 hover:bg-white/10 flex items-center justify-center text-white transition-colors"
          aria-label="Anterior"
        >
          ←
        </button>
        <button
          onClick={() => setActiveSlide((prev) => (prev + 1) % wines.length)}
          className="w-12 h-12 border border-white/30 hover:bg-white/10 flex items-center justify-center text-white transition-colors"
          aria-label="Siguiente"
        >
          →
        </button>
      </div>

      <div className="absolute top-0 left-0 w-full z-30 flex justify-between items-center px-8 py-6 bg-gradient-to-b from-black/50 to-transparent">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border-2 border-amber-400 flex items-center justify-center">
            <span className="text-amber-400 font-serif text-xl">R</span>
          </div>
          <span className="text-white font-serif text-xl tracking-wider">
            BODEGA <span className="text-amber-400">RUZAF</span>
          </span>
        </div>
        <nav className="hidden md:flex gap-8">
          {["Vinos", "Experiencias", "La Bodega", "Contacto"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white/80 hover:text-amber-400 transition-colors text-sm tracking-widest uppercase"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
