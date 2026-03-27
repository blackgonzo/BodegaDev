"use client";

import { useState, useEffect, useRef } from "react";

function ParallaxSection() {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY * 0.3);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute top-20 left-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      <div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
        style={{ transform: `translateY(${scrollY * -0.3}px)` }}
      />
    </div>
  );
}

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

function WineGlass({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 0H70V10C70 15 65 20 50 20C35 20 30 15 30 10V0Z" fill="#78350f" opacity="0.3"/>
      <path d="M25 20C25 20 20 35 20 60C20 85 30 100 50 100C70 100 80 85 80 60C80 35 75 20 75 20" stroke="#78350f" strokeWidth="2" fill="none"/>
      <path d="M35 20H65" stroke="#78350f" strokeWidth="2"/>
      <path d="M45 100V115H55V100" stroke="#78350f" strokeWidth="3" fill="none"/>
      <ellipse cx="50" cy="55" rx="25" ry="30" fill="url(#wineGrad)" opacity="0.6"/>
      <defs>
        <linearGradient id="wineGrad" x1="50" y1="25" x2="50" y2="85" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7f1d1d" stopOpacity="0.8"/>
          <stop offset="1" stopColor="#451a03" stopOpacity="0.4"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Reviews() {
  const [activeReview, setActiveReview] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
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

  return (
    <section 
      ref={sectionRef}
      id="opiniones" 
      className="relative py-20 px-4 md:px-8 bg-stone-950 overflow-hidden"
    >
      <ParallaxSection />
      
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #78350f 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}/>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <WineGlass className="w-12 h-14 text-amber-500 animate-pulse" />
            <span className="text-amber-500 text-5xl font-serif">✦</span>
            <WineGlass className="w-12 h-14 text-amber-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          <span className="inline-block text-amber-400 tracking-[0.5em] uppercase text-sm">
            Lo que dicen nuestros clientes
          </span>
          <h2 className="font-serif text-5xl md:text-9xl mt-6 text-white leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-red-500 to-amber-600">
              4.4
            </span>
            <span className="text-white/30 text-3xl md:text-7xl ml-2 md:ml-4">★</span>
          </h2>
          <p className="text-stone-400 mt-6 text-xl max-w-2xl mx-auto">
            Más de 170 historias compartidas. Cada opiniones es una copa de experiencia vivida.
          </p>
        </div>

        <div className="relative min-h-[500px] mb-16">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`absolute inset-0 transition-all duration-700 ${
                index === activeReview 
                  ? 'opacity-100 scale-100 z-10' 
                  : 'opacity-0 scale-95 z-0'
              }`}
            >
              <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-6 md:p-12 border border-stone-700/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="px-4 py-1 bg-amber-500/20 text-amber-400 text-xs tracking-widest uppercase rounded-full">
                      {review.highlight}
                    </span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-amber-400 ${i < review.rating ? 'opacity-100' : 'opacity-30'}`}>★</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                    <WineGlass className="w-24 h-32 text-amber-600/40 flex-shrink-0 hidden md:block" />
                    
                    <div className="flex-1">
                      <p className="text-lg md:text-3xl text-white font-serif leading-relaxed italic">
                        &ldquo;{review.text}&rdquo;
                      </p>
                      
                      <div className="flex items-center gap-4 mt-8 pt-8 border-t border-stone-700/50">
                        <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-red-700 rounded-full flex items-center justify-center text-white text-xl font-bold">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <span className="block text-white font-semibold text-lg">{review.name}</span>
                          <span className="text-stone-500 text-sm">{review.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <div className="flex justify-center gap-3 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeReview 
                    ? 'bg-amber-500 w-12' 
                    : 'bg-stone-600 hover:bg-stone-500'
                }`}
              />
            ))}
          </div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 text-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { value: "170+", label: "Opiniones" },
            { value: "4.4", label: "Estrellas" },
            { value: "95%", label: "Recomendación" }
          ].map((stat, i) => (
            <div key={i} className="relative">
              <span className="block text-4xl md:text-5xl font-serif text-amber-500">{stat.value}</span>
              <span className="text-stone-500 text-sm uppercase tracking-widest">{stat.label}</span>
              {i < 2 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-stone-800" />
              )}
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a 
            href="https://maps.app.goo.gl/o2JWdiFZ5ZjqTRaVA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 text-amber-400 hover:text-amber-300 transition-colors group"
          >
            <span className="text-3xl">📍</span>
            <span className="text-lg font-medium">Ver todas las opiniones en Google</span>
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </a>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}