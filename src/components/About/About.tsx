"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

function CountUp({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2500;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={ref}
      id="la-bodega" 
      className="relative py-16 px-4 bg-black overflow-x-hidden"
    >
      <div className="max-w-md mx-auto">
        <div className="relative h-64 rounded-xl overflow-hidden border border-stone-800 mb-10">
          <Image
            src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=80"
            alt="Bodega Ruzafa"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="text-amber-500 text-xs tracking-wider uppercase">Valencia, España</span>
          </div>
        </div>
        
        <div className="text-center mb-10">
          <span className="text-amber-500 text-xs tracking-widest uppercase">Nuestra Historia</span>
        </div>
        
        <h2 className="font-serif text-4xl text-white text-center leading-tight mb-6">
          Pasión por el{' '}
          <span className="text-amber-500">Vino</span>
          <br />
          desde 3 Generaciones
        </h2>
        
        <p className="text-stone-400 text-base leading-relaxed mb-6">
          En <span className="text-amber-500 font-medium">Bodega Ruzafa</span>, cada copa cuenta una historia de pasión y dedicación. Somos más que una tienda de vinos: somos un lugar de encuentro para los amantes del buen vino.
        </p>
        
        <p className="text-stone-400 text-base leading-relaxed mb-10">
          Organizamos catas guiadas, maridajes exclusivos y experiencias únicas. 
          Servicio de entrega a domicilio y recogida en tienda.
        </p>

        <div className="grid grid-cols-3 gap-4">
          {[
            { number: "3+", label: "Generaciones" },
            { number: "500+", label: "Vinos" },
            { number: "4.4", label: "Valoración" }
          ].map((stat, i) => (
            <div key={i} className="p-4 bg-stone-900 rounded-xl border border-stone-800 text-center">
              <span className="block text-2xl font-serif text-amber-500 mb-1">
                {stat.number}
              </span>
              <span className="text-stone-500 text-xs uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
