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
    name: "Blanco Premium",
    year: "2023",
    type: "Blanco",
    description: "Viñas centenarios con bouquet floral",
    image: "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800&q=80",
  },
];

export default function Banner() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, [activeSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowContent(false);
      setTimeout(() => {
        setActiveSlide((prev) => (prev + 1) % wines.length);
      }, 500);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const wine = wines[activeSlide];

  return (
    <section className="relative h-[85vh] md:h-screen w-full overflow-hidden bg-black">
      {wines.map((w, index) => (
        <div
          key={w.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === activeSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className={`absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10`} />
          <Image
            src={w.image}
            alt={w.name}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      <div className="absolute top-0 left-0 w-full z-30 px-4 py-4 md:px-8 md:py-6 bg-gradient-to-b from-black/60 to-transparent">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="w-10 h-10 md:w-14 md:h-14 border-2 border-amber-500 flex items-center justify-center">
            <span className="text-amber-500 font-serif text-lg md:text-2xl">R</span>
          </div>
          <div>
            <span className="text-white font-serif text-lg md:text-2xl lg:text-3xl tracking-widest block">
              BODEGA <span className="text-amber-500">RUZAFA</span>
            </span>
          </div>
        </div>
      </div>

      <div className={`absolute inset-0 z-20 flex flex-col justify-end px-4 md:px-12 lg:px-24 pb-20 md:pb-32 transition-opacity duration-700 ${
        showContent ? "opacity-100" : "opacity-0"
      }`}>
        <div className="max-w-md md:max-w-2xl lg:max-w-4xl">
          <span className="text-amber-400 text-xs md:text-lg tracking-wider uppercase">
            {wine.type} · {wine.year}
          </span>
          
          <h1 className="font-serif text-4xl md:text-6xl lg:text-8xl text-white mt-2 md:mt-4 mb-4 md:mb-8 leading-tight">
            {wine.name}
          </h1>
          
          <p className="text-white/70 text-base md:text-xl lg:text-2xl mb-6 md:mb-10 leading-relaxed">
            {wine.description}
          </p>
          
          <div className="flex gap-3 md:gap-6">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 md:px-12 md:py-5 text-xs md:text-lg tracking-wider uppercase">
              Reservar
            </button>
            <button className="border border-white/30 text-white px-6 py-3 md:px-12 md:py-5 text-xs md:text-lg tracking-wider uppercase">
              Catálogo
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-2 md:gap-4">
        {wines.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setShowContent(false);
              setTimeout(() => setActiveSlide(index), 300);
            }}
            className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
              index === activeSlide ? "w-8 md:w-16 bg-amber-400" : "w-2 md:w-8 bg-white/30"
            }`}
            aria-label={`Ver vino ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
