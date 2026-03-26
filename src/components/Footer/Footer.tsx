import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 border-2 border-amber-400 flex items-center justify-center">
                <span className="text-amber-400 font-serif text-2xl">R</span>
              </div>
              <span className="font-serif text-2xl tracking-wider">
                BODEGA <span className="text-amber-400">RUZAF</span>
              </span>
            </div>
            <p className="text-stone-400 max-w-md mb-4">
              Tienda de vinos especializada. Catas de vino, maridajes y experiencias únicas. Tres generaciones de pasión por el vino.
            </p>
            <p className="text-stone-500 text-sm mb-2">
              C/ de Cadis, 45, L&apos;Eixample · 46006 València
            </p>
            <p className="text-stone-500 text-sm">
              bodegaruzafa@gmail.com · www.bodegaruzafa.es
            </p>
            <div className="flex gap-4">
              {["Instagram", "Facebook", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-stone-800 flex items-center justify-center text-stone-400 hover:bg-amber-600 hover:text-white transition-colors"
                  aria-label={social}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
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
            <h4 className="font-serif text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
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
            © {new Date().getFullYear()} Bodega Ruzafa. Todos los derechos
            reservados.
          </p>

        </div>
      </div>
    </footer>
  );
}
