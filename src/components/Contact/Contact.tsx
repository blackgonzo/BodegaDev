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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section 
      id="contacto" 
      className="py-16 md:py-24 px-4 md:px-8 bg-[#722F37] overflow-x-hidden"
    >
      <div className="max-w-md md:max-w-4xl lg:max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <div>
            <div className="text-center md:text-left mb-8 md:mb-10">
              <span className="text-[#C9974A] text-xs md:text-sm tracking-widest uppercase">Contáctanos</span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mt-2 md:mt-4">
                Reserva tu <span className="text-[#C9974A]">Experiencia</span>
              </h2>
            </div>

            <div className="bg-[#0A0A0A] rounded-xl p-6 md:p-8 border border-[#2A2A2A]">
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-xl md:text-2xl">📍</span>
                  <div>
                    <span className="block text-white text-sm md:text-base font-medium">Dirección</span>
                    <span className="text-[#A0A0A0] text-xs md:text-sm">C/ de Cadis, 45, L'Eixample · Valencia</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl md:text-2xl">📞</span>
                  <div>
                    <span className="block text-white text-sm md:text-base font-medium">Teléfono</span>
                    <span className="text-[#A0A0A0] text-xs md:text-sm">+34 667 677 142</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl md:text-2xl">✉️</span>
                  <div>
                    <span className="block text-white text-sm md:text-base font-medium">Email</span>
                    <span className="text-[#A0A0A0] text-xs md:text-sm">bodegaruzafa@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 mt-8 md:mt-0">
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="group">
                <label className="block text-xs md:text-sm text-[#888888] mb-1 md:mb-2">Nombre *</label>
                <input
                  type="text"
                  required
                  className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg px-4 py-3 md:py-4 text-white text-sm md:text-base focus:border-[#C9974A] focus:outline-none"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="group">
                <label className="block text-xs md:text-sm text-[#888888] mb-1 md:mb-2">Email *</label>
                <input
                  type="email"
                  required
                  className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg px-4 py-3 md:py-4 text-white text-sm md:text-base focus:border-[#C9974A] focus:outline-none"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="group">
                <label className="block text-xs md:text-sm text-[#888888] mb-1 md:mb-2">Teléfono</label>
                <input
                  type="tel"
                  className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg px-4 py-3 md:py-4 text-white text-sm md:text-base focus:border-[#C9974A] focus:outline-none"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="group">
                <label className="block text-xs md:text-sm text-[#888888] mb-1 md:mb-2">Personas</label>
                <select
                  className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg px-4 py-3 md:py-4 text-white text-sm md:text-base focus:border-[#C9974A] focus:outline-none"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                >
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="group">
                <label className="block text-xs md:text-sm text-[#888888] mb-1 md:mb-2">Experiencia</label>
                <select
                  className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg px-4 py-3 md:py-4 text-white text-sm md:text-base focus:border-[#C9974A] focus:outline-none"
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                >
                  <option value="clásica">Cata Clásica</option>
                  <option value="premium">Premium</option>
                  <option value="familia">Familia</option>
                </select>
              </div>
              <div className="group">
                <label className="block text-xs md:text-sm text-[#888888] mb-1 md:mb-2">Fecha</label>
                <input
                  type="date"
                  className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg px-4 py-3 md:py-4 text-white text-sm md:text-base focus:border-[#C9974A] focus:outline-none"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
              </div>
            </div>

            <div className="group">
              <label className="block text-xs md:text-sm text-[#888888] mb-1 md:mb-2">Mensaje</label>
              <textarea
                rows={3}
                className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg px-4 py-3 md:py-4 text-white text-sm md:text-base focus:border-[#C9974A] focus:outline-none resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#C9974A] hover:bg-[#B8863B] text-white py-4 md:py-5 text-sm md:text-base tracking-wider uppercase font-medium"
            >
              Solicitar Reserva
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
