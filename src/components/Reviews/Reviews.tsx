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
    highlight: " Ambiente"
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
        <span key={i} className={`text-amber-400 ${i < rating ? 'opacity-100' : 'opacity-30'}`}>★</span>
      ))}
    </div>
  );
}

export default function Reviews() {
  const [activeReview, setActiveReview] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const review = reviews[activeReview];

  return (
    <section 
      ref={sectionRef}
      id="opiniones" 
      className="py-16 px-4 bg-stone-950"
    >
      <div className="max-w-md mx-auto">
        <div className="text-center mb-10">
          <span className="text-amber-400 text-xs tracking-[0.3em] uppercase">
            Lo que dicen nuestros clientes
          </span>
          <div className="flex items-center justify-center gap-2 mt-3">
            <span className="text-4xl font-serif text-amber-500">4.4</span>
            <span className="text-stone-500 text-2xl">★</span>
          </div>
        </div>

        <div className="bg-stone-900 rounded-2xl p-6 border border-stone-800">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-amber-500/20 text-amber-400 text-xs tracking-wider uppercase rounded-full">
              {review.highlight}
            </span>
          </div>
          
          <StarRating rating={review.rating} />
          
          <p className="text-stone-300 text-base leading-relaxed mt-4">
            &ldquo;{review.text}&rdquo;
          </p>
         
          <div className="flex items-center gap-3 mt-6 pt-4 border-t border-stone-800">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-red-700 rounded-full flex items-center justify-center text-white text-sm font-bold">
              {review.name.charAt(0)}
            </div>
            <div>
              <span className="block text-white text-sm font-medium">{review.name}</span>
              <span className="text-stone-500 text-xs">{review.date}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveReview(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeReview 
                  ? 'bg-amber-500 w-8' 
                  : 'bg-stone-700 w-2'
              }`}
              aria-label={`Ver opinión ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex justify-center gap-8 mt-8 text-center">
          <div>
            <span className="block text-2xl font-serif text-amber-500">170+</span>
            <span className="text-stone-500 text-xs uppercase tracking-wider">Opiniones</span>
          </div>
          <div>
            <span className="block text-2xl font-serif text-amber-500">95%</span>
            <span className="text-stone-500 text-xs uppercase tracking-wider">Recomiendo</span>
          </div>
        </div>

        <div className="text-center mt-8">
          <a 
            href="https://maps.app.goo.gl/o2JWdiFZ5ZjqTRaVA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-amber-400 text-sm"
          >
            <span>Ver todas en Google</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
