import Image from "next/image";

export default function About() {
  return (
    <section id="la-bodega" className="py-24 px-8 bg-stone-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=80"
              alt="Bodega Ruzafa"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-amber-600 tracking-[0.3em] uppercase text-sm">
              Nuestra Historia
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mt-4 mb-6">
              Pasión por el Vino desde 3 Generaciones
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              En Bodega Ruzafa, cada copa cuenta una historia de pasión y dedicación. 
              Ubicada en el corazón del Eixample de Valencia, somos más que una tienda 
              de vinos: somos un lugar de encuentro para los amantes del buen vino.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              Organizamos catas guiadas, maridajes exclusivos y viajes a bodegas. 
              Además, contamos con servicio de entrega a domicilio y recogida en tienda.
            </p>
            <div className="grid grid-cols-3 gap-8 border-t border-stone-300 pt-8">
              <div>
                <span className="block text-4xl font-serif text-amber-600">
                  3
                </span>
                <span className="text-stone-500 text-sm">Generaciones</span>
              </div>
              <div>
                <span className="block text-4xl font-serif text-amber-600">
                  500+
                </span>
                <span className="text-stone-500 text-sm">Vinos en Selección</span>
              </div>
              <div>
                <span className="block text-4xl font-serif text-amber-600">
                  4.4
                </span>
                <span className="text-stone-500 text-sm">Valoración Google</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
