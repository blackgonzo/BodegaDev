import Image from "next/image";

const experiences = [
  {
    id: 1,
    title: "Cata Clásica",
    duration: "1.5 horas",
    price: 35,
    description:
      "Descubre los fundamentos del vino con una selección de 5 vinos premium.",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80",
    includes: [
      "5 vinos seleccionados",
      "Copa de cata profesional",
      "Guía de aromas",
      "Panel de degustación",
    ],
  },
  {
    id: 2,
    title: "Experiencia Premium",
    duration: "3 horas",
    price: 85,
    description:
      "Una experiencia exclusiva con vinos de alta gama y maridaje gastronómico.",
    image:
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=80",
    includes: [
      "7 vinos premium",
      "Maridaje con productos locales",
      "Tour por la bodega",
      "Cata privada con sumiller",
      "Regalo: botella personalizada",
    ],
  },
  {
    id: 3,
    title: "Cata en Familia",
    duration: "2 horas",
    price: 55,
    description:
      "Actividad perfecta para toda la familia con opciones sin alcohol para niños.",
    image:
      "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800&q=80",
    includes: [
      "Vinos y mosto",
      "Juego de pistas en el viñedo",
      "Taller de etiquetas",
      "Merienda tradicional",
      "Diploma de catador junior",
    ],
  },
];

export default function Tasting() {
  return (
    <section id="experiencias" className="py-24 px-8 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-amber-600 tracking-[0.3em] uppercase text-sm">
            Vive la Experiencia
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mt-4">
            Catas Guiadas
          </h2>
          <p className="text-stone-600 mt-4 max-w-2xl mx-auto">
            Sumérgete en el mundo del vino con experiencias únicas diseñadas para
            todos los niveles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-sm tracking-wider">{exp.duration}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl text-stone-800 mb-2">
                  {exp.title}
                </h3>
                <p className="text-stone-600 mb-4">{exp.description}</p>
                <ul className="space-y-2 mb-6">
                  {exp.includes.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-sm text-stone-500"
                    >
                      <span className="w-2 h-2 bg-amber-400 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center pt-4 border-t border-stone-200">
                  <span className="text-2xl font-serif text-amber-600">
                    {exp.price}€
                  </span>
                  <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 tracking-wider uppercase text-sm transition-colors">
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
