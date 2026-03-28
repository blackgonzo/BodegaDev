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
      className="relative py-16 md:py-24 px-4 md:px-8 bg-[#0A0A0A] overflow-x-hidden"
    >
      <div className="max-w-md md:max-w-4xl lg:max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden border border-[#2A2A2A] order-2 md:order-1">
            <Image
              src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80"
              alt="Bodega Ruzafa"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="text-[#C9974A] text-xs md:text-sm tracking-wider uppercase">Valencia, España</span>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="text-center md:text-left mb-6 md:mb-10">
              <span className="text-[#C9974A] text-xs md:text-sm tracking-widest uppercase">Nuestra Historia</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white text-center md:text-left leading-tight mb-6 md:mb-8">
              Pasión por el{' '}
              <span className="text-[#C9974A]">Vino</span>
              <br />
              desde 3 Generaciones
            </h2>
            
            <p className="text-[#A0A0A0] text-base md:text-lg leading-relaxed mb-6">
              En <span className="text-[#C9974A] font-medium">Bodega Ruzafa</span>, cada copa cuenta una historia de pasión y dedicación. Somos más que una tienda de vinos: somos un lugar de encuentro para los amantes del buen vino.
            </p>
            
            <p className="text-[#A0A0A0] text-base md:text-lg leading-relaxed mb-8 md:mb-10">
              Organizamos catas guiadas, maridajes exclusivos y experiencias únicas. 
              Servicio de entrega a domicilio y recogida en tienda.
            </p>

            <div className="grid grid-cols-3 gap-4 md:gap-6">
              {[
                { number: "3+", label: "Generaciones" },
                { number: "500+", label: "Vinos" },
                { number: "4.4", label: "Valoración" }
              ].map((stat, i) => (
                <div key={i} className="p-4 md:p-6 bg-[#111111] rounded-xl border border-[#2A2A2A] text-center">
                  <span className="block text-2xl md:text-3xl lg:text-4xl font-display text-[#C9974A] mb-1">
                    {stat.number}
                  </span>
                  <span className="text-[#666666] text-xs md:text-sm uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
