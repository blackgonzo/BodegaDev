"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const experiences = [
  {
    id: 1,
    title: "Cata Clásica",
    duration: "1.5 horas",
    description: "Descubre los fundamentos del vino con 5 vinos premium.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80",
    includes: ["5 vinos", "Copa profesional", "Guía de aromas"],
    price: "45€",
  },
  {
    id: 2,
    title: "Experiencia Premium",
    duration: "3 horas",
    description: "Vinos de alta gama con maridaje gastronómico.",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=80",
    includes: ["7 vinos premium", "Maridaje", "Tour bodega", "Cata privada"],
    price: "120€",
    featured: true,
  },
  {
    id: 3,
    title: "Cata en Familia",
    duration: "2 horas",
    description: "Actividad para toda la familia.",
    image: "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800&q=80",
    includes: ["Vinos y mosto", "Juego de pistas", "Merienda"],
    price: "65€",
  },
];

export default function Tasting() {
  const [activeExp, setActiveExp] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveExp((prev) => (prev + 1) % experiences.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const exp = experiences[activeExp];

  return (
    <section 
      ref={ref}
      id="experiencias" 
      className="relative py-16 px-4 bg-black overflow-x-hidden"
    >
      <div className="max-w-md mx-auto">
        <div className="text-center mb-10">
          <span className="text-amber-500 text-xs tracking-widest uppercase">Vive la Experiencia</span>
          <h2 className="font-serif text-4xl text-white mt-2">
            Catas <span className="text-amber-500">Guiadas</span>
          </h2>
        </div>

        <div className="relative h-80 rounded-xl overflow-hidden mb-6">
          <Image
            src={exp.image}
            alt={exp.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          {exp.featured && (
            <div className="absolute top-3 right-3 bg-amber-500 text-black text-xs font-bold uppercase px-3 py-1">
              ✦ Popular
            </div>
          )}
          <div className="absolute bottom-4 left-4">
            <span className="bg-black/60 text-white text-xs px-3 py-1">{exp.duration}</span>
          </div>
        </div>

        <div className="bg-stone-900 rounded-xl p-6 border border-stone-800">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-serif text-2xl text-white">{exp.title}</h3>
            <span className="text-amber-500 text-xl font-serif">{exp.price}</span>
          </div>
          
          <p className="text-stone-400 text-sm mb-4">{exp.description}</p>
          
          <ul className="space-y-2 mb-6">
            {exp.includes.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-stone-500 text-xs">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                {item}
              </li>
            ))}
          </ul>
          
          <button className="w-full bg-amber-600 text-white py-3 text-xs tracking-wider uppercase">
            Reservar
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {experiences.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveExp(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeExp ? "w-8 bg-amber-400" : "w-2 bg-stone-700"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
