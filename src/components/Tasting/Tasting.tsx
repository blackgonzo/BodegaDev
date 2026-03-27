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
  const ref = useRef<HTMLElement>(null);

  return (
    <section 
      ref={ref}
      id="experiencias" 
      className="relative py-16 md:py-24 px-4 md:px-8 bg-black overflow-x-hidden"
    >
      <div className="max-w-md md:max-w-4xl lg:max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-amber-500 text-xs md:text-sm tracking-widest uppercase">Vive la Experiencia</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white mt-2 md:mt-4">
            Catas <span className="text-amber-500">Guiadas</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className={`relative bg-stone-900 rounded-xl overflow-hidden border border-stone-800 ${
                exp.featured ? 'ring-2 ring-amber-500' : ''
              }`}
            >
              <div className="relative h-56 md:h-64 lg:h-72 rounded-xl overflow-hidden">
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

              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-serif text-xl md:text-2xl lg:text-3xl text-white">{exp.title}</h3>
                  <span className="text-amber-500 text-xl md:text-2xl font-serif">{exp.price}</span>
                </div>
                
                <p className="text-stone-400 text-sm md:text-base mb-4">{exp.description}</p>
                
                <ul className="space-y-2 md:space-y-3 mb-6">
                  {exp.includes.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-stone-500 text-xs md:text-sm">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 md:py-4 text-xs md:text-sm tracking-wider uppercase">
                  Reservar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
