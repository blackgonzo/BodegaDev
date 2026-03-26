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
      className="relative py-40 px-8 bg-black overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 100px, rgba(180, 83, 9, 0.1) 100px, rgba(180, 83, 9, 0.1) 101px)`,
        }}/>
      </div>

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-900/10 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto">
        <div className={`grid lg:grid-cols-2 gap-20 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-600/20 to-red-800/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-700" />
            <div className="relative h-[600px] rounded-2xl overflow-hidden border border-stone-800">
              <Image
                src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=80"
                alt="Bodega Ruzafa"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-px bg-amber-500" />
                  <span className="text-amber-500 text-sm tracking-[0.3em] uppercase">Valencia, España</span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-stone-900 rounded-2xl border border-stone-800 p-6 hidden lg:block">
              <div className="text-center">
                <span className="block text-4xl font-serif text-amber-500">
                  <CountUp end={50} suffix="+" />
                </span>
                <span className="text-stone-500 text-xs uppercase tracking-wider">Años de historia</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-16 bg-amber-600" />
                <span className="text-amber-500 text-sm tracking-[0.4em] uppercase">Nuestra Historia</span>
              </div>
              
              <h2 className="font-serif text-6xl lg:text-7xl text-white leading-tight">
                Pasión por el{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-red-600">
                  Vino
                </span>
                <br />
                desde 3 Generaciones
              </h2>
            </div>
            
            <p className="text-stone-400 text-xl leading-relaxed">
              En Bodega Ruzafa, cada copa cuenta una historia de pasión y dedicación.{' '}
              <span className="text-amber-500 font-medium">Ubicada en el corazón del Eixample de Valencia</span>, 
              somos más que una tienda de vinos: somos un lugar de encuentro para los amantes del buen vino.
            </p>
            
            <p className="text-stone-400 text-xl leading-relaxed">
              Organizamos catas guiadas, maridajes exclusivos y experiencias únicas. 
              Además, servicio de entrega a domicilio y recogida en tienda.
            </p>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-stone-800">
              {[
                { number: "3+", label: "Generaciones", icon: "♾" },
                { number: "500+", label: "Vinos", icon: "🍷" },
                { number: "4.4", label: "Valoración", icon: "⭐" }
              ].map((stat, i) => (
                <div key={i} className="group p-6 bg-stone-900/50 rounded-xl border border-stone-800 hover:border-amber-600/50 transition-all duration-300">
                  <span className="block text-4xl font-serif text-amber-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </span>
                  <span className="text-stone-500 text-sm uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}