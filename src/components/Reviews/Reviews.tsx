"use client";

import { useState, useEffect, useRef } from "react";

const reviews = [
  {
    id: 1,
    name: "I. Fuertes",
    rating: 5,
    text: "Do you like wine? This is not just a place to have a drink, here you want to feel an experience. You have a large number of wines to choose from with the perfect advice.",
    date: "Hace un año",
    highlight: "Experiencia única"
  },
  {
    id: 2,
    name: "Cliente Google",
    rating: 5,
    text: "Descubrí este lugar por casualidad con una amiga, meses después celebramos allí una despedida de soltera. Cata con karaoke, todas super contentas. Muy atentas a los detalles.",
    date: "Hace un año",
    highlight: "Despedida de soltera"
  },
  {
    id: 3,
    name: "Daniela",
    rating: 5,
    text: "Un sitio espectacular, el dueño nos atendió genial, nos explicó todos los vinos. Sin duda volveré, lo recomiendo muchísimo.",
    date: "Hace 37 días",
    highlight: "Recomendado"
  },
  {
    id: 4,
    name: "Jairo",
    rating: 5,
    text: "Increíble experiencia. Recomendable sus catas y vinos para llevar a casa. Jairo nos tratará de 10. ¡Gracias!",
    date: "Hace 1 mes",
    highlight: "Catas premium"
  },
  {
    id: 5,
    name: "Virginia Vivas",
    rating: 5,
    text: "Buen vino, buenas tapas, excelente atención y ambiente ameno para tomar una copa y conversar tranquilamente.",
    date: "Hace 2 semanas",
    highlight: "Ambiente"
  },
  {
    id: 6,
    name: "Cliente Google",
    rating: 5,
    text: "Voy de vez en cuando con amigos. Atención muy buena y buenas explicaciones. Cata de vinos y cavas espectaculares. Sin duda no voy a dejar de ir.",
    date: "Hace 3 semanas",
    highlight: "Volveré"
  }
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`text-[#C9974A] ${i < rating ? 'opacity-100' : 'opacity-30'}`}>★</span>
      ))}
    </div>
  );
}

export default function Reviews() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="opiniones" 
      className="py-16 md:py-24 px-4 md:px-8 bg-[#5C2530]"
    >
      <div className="max-w-md md:max-w-4xl lg:max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-[#C9974A] text-xs md:text-sm tracking-[0.3em] uppercase">
            Lo que dicen nuestros clientes
          </span>
          <div className="flex items-center justify-center gap-2 md:gap-4 mt-3 md:mt-6">
            <span className="text-4xl md:text-6xl lg:text-7xl font-display text-[#C9974A]">4.4</span>
            <span className="text-[#666666] text-2xl md:text-4xl lg:text-5xl">★</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#2A2A2A]">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-[#C9974A]/20 text-[#C9974A] text-xs tracking-wider uppercase rounded-full">
                  {review.highlight}
                </span>
                <StarRating rating={review.rating} />
              </div>
              
              <p className="text-[#A0A0A0] text-base md:text-lg leading-relaxed mb-6">
                &ldquo;{review.text}&rdquo;
              </p>
            
              <div className="flex items-center gap-3 pt-4 border-t border-[#2A2A2A]">
                <div className="w-10 h-10 bg-gradient-to-br from-[#C9974A] to-[#722F37] rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <span className="block text-white text-sm font-medium">{review.name}</span>
                  <span className="text-[#666666] text-xs">{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-10 md:mt-16 text-center">
          <div>
            <span className="block text-2xl md:text-4xl font-display text-[#C9974A]">170+</span>
            <span className="text-[#666666] text-xs md:text-sm uppercase tracking-wider">Opiniones</span>
          </div>
          <div>
            <span className="block text-2xl md:text-4xl font-display text-[#C9974A]">4.4</span>
            <span className="text-[#666666] text-xs md:text-sm uppercase tracking-wider">Estrellas</span>
          </div>
          <div>
            <span className="block text-2xl md:text-4xl font-display text-[#C9974A]">95%</span>
            <span className="text-[#666666] text-xs md:text-sm uppercase tracking-wider">Recomiendo</span>
          </div>
        </div>

        <div className="text-center mt-8 md:mt-12">
          <a 
            href="https://maps.app.goo.gl/o2JWdiFZ5ZjqTRaVA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#C9974A] text-sm md:text-base"
          >
            <span>Ver todas las opiniones en Google</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
