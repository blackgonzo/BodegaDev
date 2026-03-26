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
    color: "from-red-900/80",
  },
  {
    id: 2,
    name: "Cava Brut",
    year: "2022",
    type: "Espumoso",
    description: "Método tradicional con 36 meses de maduración",
    image: "https://images.unsplash.com/photo-1609592806596-4435da1122dc?w=800&q=80",
    color: "from-amber-500/60",
  },
  {
    id: 3,
    name: "Blanco Premium",
    year: "2023",
    type: "Blanco",
    description: "Viñas centenarios con bouquet floral",
    image: "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800&q=80",
    color: "from-yellow-400/40",
  },
];

export default function Banner() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSlideChange = (index: number) => {
    if (index !== activeSlide) {
      setShowContent(false);
      setTimeout(() => {
        setActiveSlide(index);
      }, 300);
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div 
        className="absolute inset-0 z-10 transition-transform duration-1000 ease-out"
        style={{ 
          background: `radial-gradient(circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, transparent 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.9) 100%)`
        }}
      />

      {wines.map((wine, index) => (
        <div
          key={wine.id}
          className={`absolute inset-0 transition-all duration-1500 ease-in-out ${
            index === activeSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-110"
          }`}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${wine.color} to-black/90 z-10`} />
          <Image
            src={wine.image}
            alt={wine.name}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      <div className="absolute inset-0 z-20 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-600/20 rounded-full blur-[120px]" />
      </div>

      {wines.map((wine, index) => (
        index === activeSlide && (
          <div
            key={`content-${wine.id}`}
            className={`absolute inset-0 z-30 flex flex-col justify-center px-8 md:px-24 transition-all duration-1000 ${
              showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
          >
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-20 bg-amber-500/50" />
                <span className="text-amber-400 text-lg tracking-[0.4em] uppercase">
                  {wine.type} · {wine.year}
                </span>
              </div>
              
              <h1 className="font-serif text-7xl md:text-9xl lg:text-[140px] text-white mb-6 leading-none">
                <span className="block relative">
                  <span className="relative z-10">{wine.name.split(" ")[0]}</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-amber-500/30 to-transparent blur-2xl -z-10" />
                </span>
                {wine.name.split(" ").slice(1).map((word, i) => (
                  <span key={i} className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">{word}</span>
                ))}
              </h1>
              
              <p className="text-white/70 text-2xl md:text-3xl max-w-2xl mb-10 leading-relaxed border-l-4 border-amber-500/50 pl-6">
                {wine.description}
              </p>
              
              <div className="flex flex-wrap gap-6">
                <button className="relative bg-amber-600 hover:bg-amber-700 text-white px-12 py-5 text-lg tracking-[0.2em] uppercase transition-all duration-300 group overflow-hidden">
                  <span className="relative z-10">Reservar Cata</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
                <button className="border-2 border-white/30 hover:border-amber-400 text-white px-12 py-5 text-lg tracking-[0.2em] uppercase transition-all duration-300 backdrop-blur-sm hover:bg-white/5">
                  <span>Ver Catálogo</span>
                </button>
              </div>
            </div>

            <div className="absolute bottom-40 right-24 hidden xl:block">
              <div className="relative w-48 h-64">
                <svg className="w-full h-full" viewBox="0 0 100 140" fill="none">
                  <path d="M30 5H70V15C70 20 65 25 50 25C35 25 30 20 30 15V5Z" fill="#78350f" opacity="0.5"/>
                  <path d="M20 25C15 40 15 60 20 90C25 120 40 135 50 135C60 135 75 120 80 90C85 60 85 40 80 25" stroke="#78350f" strokeWidth="2" fill="none"/>
                  <path d="M40 135V145H60V135" stroke="#78350f" strokeWidth="4" fill="none"/>
                  <path d="M30 25H70" stroke="#78350f" strokeWidth="2"/>
                  <ellipse cx="50" cy="60" rx="25" ry="35" fill="url(#wineGlass)"/>
                  <defs>
                    <linearGradient id="wineGlass" x1="50" y1="25" x2="50" y2="95" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#991b1b" stopOpacity="0.8"/>
                      <stop offset="1" stopColor="#450a0a" stopOpacity="0.3"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        )
      ))}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-4">
        {wines.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`relative h-2 rounded-full transition-all duration-500 ${
              index === activeSlide ? "w-16 bg-amber-400" : "w-8 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Ver vino ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute top-0 left-0 w-full z-40 px-8 py-8 bg-gradient-to-b from-black/80 to-transparent">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-14 h-14 border-2 border-amber-500 flex items-center justify-center bg-black/50 backdrop-blur-sm">
              <span className="text-amber-500 font-serif text-2xl">R</span>
            </div>
            <div>
              <span className="text-white font-serif text-2xl tracking-widest block">
                BODEGA <span className="text-amber-500">RUZAF</span>
              </span>
              <span className="text-white/50 text-xs tracking-[0.3em]">VALENCIA</span>
            </div>
          </div>
          <nav className="hidden lg:flex gap-10">
            {["Vinos", "Experiencias", "La Bodega", "Contacto"].map((item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/70 hover:text-amber-400 transition-all duration-300 text-sm tracking-[0.2em] uppercase relative group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4">
        <button
          onClick={() => handleSlideChange((activeSlide - 1 + wines.length) % wines.length)}
          className="w-14 h-14 border border-white/20 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all duration-300 backdrop-blur-sm"
          aria-label="Anterior"
        >
          ←
        </button>
        <button
          onClick={() => handleSlideChange((activeSlide + 1) % wines.length)}
          className="w-14 h-14 border border-white/20 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all duration-300 backdrop-blur-sm"
          aria-label="Siguiente"
        >
          →
        </button>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-30" />
    </section>
  );
}