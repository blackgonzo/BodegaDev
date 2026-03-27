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
    <section className="relative h-[85vh] w-full overflow-hidden bg-black">
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

      <div className="absolute top-0 left-0 w-full z-30 px-4 py-4 bg-gradient-to-b from-black/60 to-transparent">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border-2 border-amber-500 flex items-center justify-center">
            <span className="text-amber-500 font-serif text-lg">R</span>
          </div>
          <div>
            <span className="text-white font-serif text-lg tracking-widest block">
              BODEGA <span className="text-amber-500">RUZAFA</span>
            </span>
          </div>
        </div>
      </div>

      <div className={`absolute inset-0 z-20 flex flex-col justify-end px-4 pb-20 transition-opacity duration-700 ${
        showContent ? "opacity-100" : "opacity-0"
      }`}>
        <div className="max-w-md">
          <span className="text-amber-400 text-xs tracking-wider uppercase">
            {wine.type} · {wine.year}
          </span>
          
          <h1 className="font-serif text-4xl text-white mt-2 mb-4 leading-tight">
            {wine.name}
          </h1>
          
          <p className="text-white/70 text-base mb-6 leading-relaxed">
            {wine.description}
          </p>
          
          <div className="flex gap-3">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 text-xs tracking-wider uppercase">
              Reservar
            </button>
            <button className="border border-white/30 text-white px-6 py-3 text-xs tracking-wider uppercase">
              Catálogo
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {wines.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setShowContent(false);
              setTimeout(() => setActiveSlide(index), 300);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeSlide ? "w-8 bg-amber-400" : "w-2 bg-white/30"
            }`}
            aria-label={`Ver vino ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
