export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-4">
      <div className="max-w-md mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-10 h-10 border-2 border-amber-500 flex items-center justify-center">
            <span className="text-amber-500 font-serif text-lg">R</span>
          </div>
          <div>
            <span className="text-white font-serif text-lg tracking-widest block">
              BODEGA <span className="text-amber-500">RUZAFA</span>
            </span>
          </div>
        </div>
        
        <p className="text-stone-400 text-sm mb-4">
          C/ de Cadis, 45, L'Eixample · Valencia
        </p>
        <p className="text-stone-400 text-sm mb-6">
          bodegaruzafa@gmail.com
        </p>
        
        <div className="flex justify-center gap-3 mb-8">
          {["IG", "FB", "X"].map((social) => (
            <a
              key={social}
              href="#"
              className="w-10 h-10 bg-stone-900 flex items-center justify-center text-stone-400 hover:bg-amber-600 hover:text-white text-xs"
            >
              {social}
            </a>
          ))}
        </div>

        <div className="border-t border-stone-800 pt-6">
          <p className="text-stone-500 text-xs">
            © 2026 Bodega Ruzafa
          </p>
          <p className="text-stone-600 text-[10px] mt-2">
            Prohibida la venta a menores de 18 años
          </p>
        </div>
      </div>
    </footer>
  );
}
