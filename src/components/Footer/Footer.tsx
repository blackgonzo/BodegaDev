import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-20 px-8 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-stone-900 to-transparent" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-amber-600/5 rounded-full blur-[150px]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 border-2 border-amber-500 flex items-center justify-center bg-stone-900">
                <span className="text-amber-500 font-serif text-2xl">R</span>
              </div>
              <div>
                <span className="text-white font-serif text-2xl tracking-widest block">
                  BODEGA <span className="text-amber-500">RUZAF</span>
                </span>
                <span className="text-white/50 text-xs tracking-[0.3em]">VALENCIA</span>
              </div>
            </div>
            <p className="text-stone-400 max-w-md mb-6 leading-relaxed">
              Tienda de vinos especializada. Catas de vino, maridajes y experiencias únicas. 
              Tres generaciones de pasión por el vino.
            </p>
            <p className="text-stone-500 text-sm mb-4">
              📍 C/ de Cadis, 45, L&apos;Eixample · 46006 València, Valencia, España
            </p>
            <p className="text-stone-500 text-sm mb-6">
              📧 bodegaruzafa@gmail.com · 🌐 www.bodegaruzafa.es
            </p>
            <div className="flex gap-4">
              {["Instagram", "Facebook", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-12 h-12 bg-stone-900 flex items-center justify-center text-stone-400 hover:bg-amber-600 hover:text-white transition-all duration-300"
                  aria-label={social}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-white">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {["La Bodega", "Vinos", "Experiencias", "Tienda", "Blog"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-stone-400 hover:text-amber-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-white">Legal</h4>
            <ul className="space-y-3">
              {[
                "Política de Privacidad",
                "Términos y Condiciones",
                "Política de Cookies",
                "Aviso Legal",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-stone-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-500 text-sm">
            © 2026 Bodega Ruzafa · Todos los derechos reservados
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 text-stone-500 text-xs">
            <span>🍷 Beber con moderación</span>
            <span className="hidden md:inline">·</span>
            <span>Prohibida la venta de alcohol a menores de 18 años</span>
          </div>
        </div>
      </div>
    </footer>
  );
}