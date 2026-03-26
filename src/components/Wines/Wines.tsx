import Image from "next/image";
import { wines } from "@/data/wines";

const typeColors: Record<string, string> = {
  Tinto: "bg-red-900 text-white",
  Blanco: "bg-amber-100 text-amber-800",
  Rosado: "bg-pink-100 text-pink-800",
  Espumoso: "bg-purple-100 text-purple-800",
};

export default function Wines() {
  return (
    <section id="vinos" className="py-24 px-8 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-amber-400 tracking-[0.3em] uppercase text-sm">
            Nuestro Catálogo
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">
            Vinos de Excelencia
          </h2>
          <p className="text-stone-400 mt-4 max-w-2xl mx-auto">
            Cada vino es una expresión única de nuestro terroir, elaborado con
            pasión y respeto por la tradición.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wines.map((wine) => (
            <div
              key={wine.id}
              className="group bg-stone-800 rounded-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={wine.image}
                  alt={wine.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span
                  className={`absolute top-4 left-4 px-3 py-1 text-xs tracking-wider uppercase ${
                    typeColors[wine.type]
                  }`}
                >
                  {wine.type}
                </span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl">{wine.name}</h3>
                  <span className="text-amber-400 font-semibold">
                    {wine.year}
                  </span>
                </div>
                <p className="text-stone-400 text-sm mb-2">{wine.grape}</p>
                <p className="text-stone-500 text-sm mb-4">{wine.aging}</p>
                <p className="text-stone-300 text-sm mb-4 line-clamp-2">
                  {wine.description}
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-stone-700">
                  <span className="text-2xl font-serif text-amber-400">
                    {wine.price}€
                  </span>
                  <button className="text-sm uppercase tracking-wider text-stone-400 hover:text-amber-400 transition-colors">
                    Ver Detalles →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-amber-400 text-amber-400 px-8 py-3 tracking-wider uppercase hover:bg-amber-400 hover:text-stone-900 transition-all duration-300">
            Ver Catálogo Completo
          </button>
        </div>
      </div>
    </section>
  );
}
