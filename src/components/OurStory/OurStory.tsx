"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides: { id: number; title: string; subtitle: string; content: string; image?: string }[] = [
  {
    id: 1,
    title: "Nuestra Historia",
    subtitle: "Tres generaciones de pasión vinícola",
    content: "Bodega Ruzafa nació de la pasión de tres generaciones dedicadas a seleccionar los mejores vinos. Desde nuestros inicios, nos hemos comprometido a ofrecer una cuidada selección de vinos nacionales e internacionales, acompañando a nuestros clientes en el descubrimiento de nuevas experiencias sensoriales.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80",
  },
  {
    id: 2,
    title: "Nuestra Ubicación",
    subtitle: "En el corazón de Valencia",
    content: "Bodega Ruzafa se encuentra en C/ de Cadis, 45, en el elegante barrio de L'Eixample, Valencia. Un espacio acogedor donde puedes disfrutar de catas guiadas, maridajes exclusivos y una selección de más de 500 vinos.",
  },
  {
    id: 3,
    title: "Jairo Ruzafa",
    subtitle: "Creador y sumiller",
    content: "Jairo Ruzafa, sumiller con amplia experiencia internacional, lidera Bodega Ruzafa con una visión clara: acercar el mundo del vino a todos, desde principiantes hasta expertos. Su trayectoria incluye formación en las principales regiones vinícolas y la creación de experiencias únicas de maridaje.",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=80",
  },
];

export default function OurStory() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[activeSlide];

  return (
    <section className="relative py-20 md:py-32 bg-[#0F0F0F] overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#722F37]/30 via-transparent to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative h-80 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#2A2A2A]">
            {activeSlide === 1 ? (
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A0A10] to-[#0A0A0A] flex flex-col items-center justify-center p-8">
                <div className="w-20 h-20 rounded-full bg-[#C9974A]/20 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#C9974A" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-white text-center mb-2">Bodega Ruzafa</h3>
                <p className="font-body text-[#C9974A] text-center text-lg">C/ de Cadis, 45</p>
                <p className="font-body text-[#888888] text-center">Ensanche, 46006 València</p>
                <p className="font-body text-[#666666] text-center mt-4 text-sm">Valencia, España</p>
              </div>
            ) : slide.image ? (
              <>
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-all duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-[#0A0A0A]/20" />
              </>
            ) : null}
          </div>

          <div className="text-center md:text-left">
            <span className="font-script text-[#C9974A] text-2xl md:text-3xl block mb-2">
              {slide.subtitle}
            </span>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 md:mb-8 leading-tight">
              {slide.title}
            </h2>
            
            <p className="text-[#A0A0A0] text-base md:text-lg leading-relaxed mb-8 md:mb-10">
              {slide.content}
            </p>

            <div className="flex justify-center md:justify-start gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeSlide
                      ? "w-12 bg-[#C9974A]"
                      : "w-4 bg-[#3A3A3A] hover:bg-[#4A4A4A]"
                  }`}
                  aria-label={`Ver slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
