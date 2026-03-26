"use client";

import { useState } from "react";

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
    <section id="contacto" className="py-24 px-8 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <span className="text-amber-400 tracking-[0.3em] uppercase text-sm">
              Contáctanos
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6">
              Reserva tu Experiencia
            </h2>
            <p className="text-stone-400 mb-8">
              ¿Tienes alguna pregunta sobre nuestros vinos o experiencias de
              cata? Estamos aquí para ayudarte a planificar tu visita.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-stone-800 flex items-center justify-center text-amber-400">
                  📍
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Dirección</h4>
                  <p className="text-stone-400">
                    C/ de Cadis, 45, L&apos;Eixample
                    <br />
                    46006 València, Valencia, España
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-stone-800 flex items-center justify-center text-amber-400">
                  📞
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Teléfono</h4>
                  <p className="text-stone-400">+34 667 677 142</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-stone-800 flex items-center justify-center text-amber-400">
                  ✉️
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-stone-400">bodegaruzafa@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-stone-800 flex items-center justify-center text-amber-400">
                  🕐
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Horario</h4>
                  <p className="text-stone-400">
                    Lun: 18:30 - 21:30
                    <br />
                    Mar: 18:30 - 21:30
                    <br />
                    Mié: 18:30 - 21:30
                    <br />
                    Jue: 18:30 - 21:30
                    <br />
                    Vie: 11:30 - 14:00, 18:00 - 01:30
                    <br />
                    Sáb: 11:30 - 14:00, 18:00 - 01:30
                    <br />
                    Dom: Cerrado
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-stone-800 rounded-lg p-8">
            <h3 className="font-serif text-2xl mb-6">Reserva tu Cata</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-stone-400 mb-1">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-stone-700 border border-stone-600 rounded px-4 py-3 text-white focus:border-amber-400 focus:outline-none"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm text-stone-400 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-stone-700 border border-stone-600 rounded px-4 py-3 text-white focus:border-amber-400 focus:outline-none"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-stone-400 mb-1">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-stone-700 border border-stone-600 rounded px-4 py-3 text-white focus:border-amber-400 focus:outline-none"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm text-stone-400 mb-1">
                    Número de Personas
                  </label>
                  <select
                    className="w-full bg-stone-700 border border-stone-600 rounded px-4 py-3 text-white focus:border-amber-400 focus:outline-none"
                    value={formData.guests}
                    onChange={(e) =>
                      setFormData({ ...formData, guests: e.target.value })
                    }
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "persona" : "personas"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-stone-400 mb-1">
                    Experiencia
                  </label>
                  <select
                    className="w-full bg-stone-700 border border-stone-600 rounded px-4 py-3 text-white focus:border-amber-400 focus:outline-none"
                    value={formData.experience}
                    onChange={(e) =>
                      setFormData({ ...formData, experience: e.target.value })
                    }
                  >
                    <option value="clásica">Cata Clásica</option>
                    <option value="premium">Experiencia Premium</option>
                    <option value="familia">Cata en Familia</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-stone-400 mb-1">
                    Fecha Preferida
                  </label>
                  <input
                    type="date"
                    className="w-full bg-stone-700 border border-stone-600 rounded px-4 py-3 text-white focus:border-amber-400 focus:outline-none"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-stone-400 mb-1">
                  Mensaje Adicional
                </label>
                <textarea
                  rows={3}
                  className="w-full bg-stone-700 border border-stone-600 rounded px-4 py-3 text-white focus:border-amber-400 focus:outline-none resize-none"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 tracking-wider uppercase font-semibold transition-colors"
              >
                Solicitar Reserva
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
