"use client";

import { useState, useEffect, useRef } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "clásica",
    date: "",
    guests: "2",
    message: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    { icon: "📍", title: "Dirección", content: "C/ de Cadis, 45, L'Eixample · 46006 València" },
    { icon: "📞", title: "Teléfono", content: "+34 667 677 142" },
    { icon: "✉️", title: "Email", content: "bodegaruzafa@gmail.com" },
    { icon: "♿", title: "Accesibilidad", content: "Entrada accesible para sillas de ruedas" },
  ];

  return (
    <section 
      ref={ref}
      id="contacto" 
      className="relative py-40 px-8 bg-stone-950 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[180px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-red-800/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-16 bg-amber-600" />
              <span className="text-amber-500 text-sm tracking-[0.4em] uppercase">Contáctanos</span>
            </div>
            
            <h2 className="font-serif text-6xl lg:text-7xl text-white mb-8 leading-tight">
              Reserva tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-red-600">Experiencia</span>
            </h2>
            
            <p className="text-stone-400 text-xl mb-12 leading-relaxed">
              ¿Tienes alguna pregunta sobre nuestros vinos o experiencias de cata? 
              Estamos aquí para ayudarte a planificar tu visita.
            </p>

            <div className="space-y-8">
              {contactInfo.map((item, i) => (
                <div key={i} className="group flex items-start gap-6 p-6 bg-stone-900/50 rounded-xl border border-stone-800 hover:border-amber-600/30 transition-all duration-300">
                  <div className="w-14 h-14 bg-stone-800 group-hover:bg-amber-600 flex items-center justify-center text-2xl transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-1">{item.title}</h4>
                    <p className="text-stone-400">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-stone-900/30 rounded-xl border border-stone-800">
              <h4 className="text-white font-semibold mb-4">Servicios</h4>
              <div className="flex flex-wrap gap-3">
                {["Entrega a domicilio", "Retiro en tienda", "Wi-Fi gratis", "LGBTQ+ amigable", "Pagos NFC"].map((service, i) => (
                  <span key={i} className="px-4 py-2 bg-stone-800 text-stone-400 text-sm rounded-full">
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="bg-stone-900/80 backdrop-blur-sm rounded-2xl p-10 border border-stone-800 hover:border-amber-600/30 transition-all duration-500">
              <h3 className="font-serif text-3xl text-white mb-8">Reserva tu Cata</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm text-stone-400 mb-2 group-hover:text-amber-400 transition-colors">Nombre *</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-stone-800/50 border border-stone-700 rounded-lg px-4 py-4 text-white focus:border-amber-500 focus:outline-none focus:bg-stone-800 transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm text-stone-400 mb-2 group-hover:text-amber-400 transition-colors">Email *</label>
                    <input
                      type="email"
                      required
                      className="w-full bg-stone-800/50 border border-stone-700 rounded-lg px-4 py-4 text-white focus:border-amber-500 focus:outline-none focus:bg-stone-800 transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm text-stone-400 mb-2 group-hover:text-amber-400 transition-colors">Teléfono</label>
                    <input
                      type="tel"
                      className="w-full bg-stone-800/50 border border-stone-700 rounded-lg px-4 py-4 text-white focus:border-amber-500 focus:outline-none focus:bg-stone-800 transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm text-stone-400 mb-2 group-hover:text-amber-400 transition-colors">Personas</label>
                    <select
                      className="w-full bg-stone-800/50 border border-stone-700 rounded-lg px-4 py-4 text-white focus:border-amber-500 focus:outline-none focus:bg-stone-800 transition-all"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n} value={n}>{n} {n === 1 ? "persona" : "personas"}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm text-stone-400 mb-2 group-hover:text-amber-400 transition-colors">Experiencia</label>
                    <select
                      className="w-full bg-stone-800/50 border border-stone-700 rounded-lg px-4 py-4 text-white focus:border-amber-500 focus:outline-none focus:bg-stone-800 transition-all"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    >
                      <option value="clásica">Cata Clásica</option>
                      <option value="premium">Experiencia Premium</option>
                      <option value="familia">Cata en Familia</option>
                    </select>
                  </div>
                  <div className="group">
                    <label className="block text-sm text-stone-400 mb-2 group-hover:text-amber-400 transition-colors">Fecha</label>
                    <input
                      type="date"
                      className="w-full bg-stone-800/50 border border-stone-700 rounded-lg px-4 py-4 text-white focus:border-amber-500 focus:outline-none focus:bg-stone-800 transition-all"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm text-stone-400 mb-2 group-hover:text-amber-400 transition-colors">Mensaje</label>
                  <textarea
                    rows={3}
                    className="w-full bg-stone-800/50 border border-stone-700 rounded-lg px-4 py-4 text-white focus:border-amber-500 focus:outline-none focus:bg-stone-800 transition-all resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-5 tracking-[0.2em] uppercase font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-500/20"
                >
                  Solicitar Reserva
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}