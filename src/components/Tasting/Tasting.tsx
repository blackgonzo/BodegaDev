"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const experiences = [
  {
    id: 1,
    title: "Cata Clásica",
    duration: "1.5 horas",
    description:
      "Descubre los fundamentos del vino con una selección de 5 vinos premium.",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80",
    includes: [
      "5 vinos seleccionados",
      "Copa de cata profesional",
      "Guía de aromas",
      "Panel de degustación",
    ],
    price: "45€",
  },
  {
    id: 2,
    title: "Experiencia Premium",
    duration: "3 horas",
    description:
      "Una experiencia exclusiva con vinos de alta gama y maridaje gastronómico.",
    image:
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=80",
    includes: [
      "7 vinos premium",
      "Maridaje con productos locales",
      "Tour por la bodega",
      "Cata privada con sumiller",
      "Regalo: botella personalizada",
    ],
    price: "120€",
    featured: true,
  },
  {
    id: 3,
    title: "Cata en Familia",
    duration: "2 horas",
    description:
      "Actividad perfecta para toda la familia con opciones sin alcohol para niños.",
    image:
      "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800&q=80",
    includes: [
      "Vinos y mosto",
      "Juego de pistas en el viñedo",
      "Taller de etiquetas",
      "Merienda tradicional",
      "Diploma de catador junior",
    ],
    price: "65€",
  },
];

export default function Tasting() {
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
      id="experiencias" 
      className="relative py-40 px-8 bg-black overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-amber-600/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-red-700/5 rounded-full blur-[180px]" />
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #78350f 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}/>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="h-px w-20 bg-amber-600/50" />
            <span className="text-amber-500 text-sm tracking-[0.5em] uppercase">Vive la Experiencia</span>
            <div className="h-px w-20 bg-amber-600/50" />
          </div>
          <h2 className="font-serif text-7xl lg:text-8xl text-white mb-8">
            Catas <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-red-600">Guiadas</span>
          </h2>
          <p className="text-stone-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Sumérgete en el mundo del vino con experiencias únicas diseñadas para todos los niveles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div
                className={`relative bg-stone-900 rounded-2xl overflow-hidden border transition-all duration-500 ${
                  exp.featured 
                    ? 'border-amber-500 shadow-lg shadow-amber-500/20 scale-105' 
                    : 'border-stone-800 hover:border-amber-600/50'
                }`}
              >
                {exp.featured && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-600 to-amber-500 text-black text-xs font-bold tracking-widest uppercase px-6 py-2 rounded-bl-xl z-20">
                    ✦ Popular
                  </div>
                )}
                
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-black/30 to-transparent z-10" />
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className="object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="bg-black/60 backdrop-blur-sm text-white text-sm px-4 py-2 tracking-wider">
                      {exp.duration}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="font-serif text-3xl text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <p className="text-stone-400 mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {exp.includes.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-stone-500"
                      >
                        <span className="w-2 h-2 bg-amber-500 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-stone-800">
                    <span className="text-3xl font-serif text-amber-500">
                      {exp.price}
                    </span>
                    <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 tracking-wider uppercase text-sm transition-all duration-300 hover:px-10">
                      Reservar
                    </button>
                  </div>
                </div>
              </div>

              <div className="absolute -inset-4 bg-gradient-to-r from-amber-600/0 to-red-600/0 rounded-2xl blur-xl group-hover:from-amber-600/10 group-hover:to-red-600/10 transition-all duration-700 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}