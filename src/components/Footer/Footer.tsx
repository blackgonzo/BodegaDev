export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-md md:max-w-4xl lg:max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <div className="w-10 h-10 md:w-14 md:h-14 border-2 border-amber-500 flex items-center justify-center">
                <span className="text-amber-500 font-serif text-lg md:text-2xl">R</span>
              </div>
              <div>
                <span className="text-white font-serif text-lg md:text-2xl tracking-widest block">
                  BODEGA <span className="text-amber-500">RUZAFA</span>
                </span>
              </div>
            </div>
            
            <p className="text-stone-400 text-sm md:text-base text-center md:text-left mb-2">
              C/ de Cadis, 45, L'Eixample · Valencia
            </p>
            <p className="text-stone-400 text-sm md:text-base text-center md:text-left mb-6">
              bodegaruzafa@gmail.com
            </p>
            
            <div className="flex justify-center md:justify-start gap-3">
              {["IG", "FB", "X"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 md:w-12 md:h-12 bg-stone-900 flex items-center justify-center text-stone-400 hover:bg-amber-600 hover:text-white text-xs md:text-sm"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-serif text-lg md:text-xl mb-4 text-white">Enlaces</h4>
            <ul className="space-y-2">
              {["La Bodega", "Vinos", "Experiencias", "Contacto"].map(
                (link) => (
                  <li key={link}>
                    <a href="#" className="text-stone-400 hover:text-amber-400 text-sm md:text-base">
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-serif text-lg md:text-xl mb-4 text-white">Legal</h4>
            <ul className="space-y-2">
              {["Privacidad", "Términos", "Cookies"].map(
                (link) => (
                  <li key={link}>
                    <a href="#" className="text-stone-400 hover:text-amber-400 text-sm">
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-10 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-500 text-xs md:text-sm">
            © 2026 Bodega Ruzafa · Todos los derechos reservados
          </p>
          <p className="text-stone-600 text-[10px] md:text-xs">
            Prohibida la venta de alcohol a menores de 18 años
          </p>
        </div>
      </div>
    </footer>
  );
}
