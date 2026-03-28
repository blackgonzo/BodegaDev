"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#la-bodega", label: "La Bodega" },
  { href: "#vinos", label: "Vinos" },
  { href: "#catas", label: "Catas" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md py-3 shadow-lg"
          : "bg-gradient-to-b from-[#0A0A0A]/80 to-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 border-2 border-[#C9974A] flex items-center justify-center">
            <span className="text-[#C9974A] font-display text-lg">R</span>
          </div>
          <span className="text-white font-display text-xl md:text-2xl tracking-widest">
            BODEGA <span className="text-[#C9974A]">RUZAFA</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-[#C9974A] transition-colors font-body text-sm tracking-wider uppercase"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="text-white/80 hover:text-[#C9974A] transition-colors p-2"
            aria-label="Buscar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
          
          <Link
            href="#contacto"
            className="hidden md:block bg-[#C9974A] hover:bg-[#B8863B] text-white px-4 py-2 font-body text-sm tracking-wider uppercase transition-colors"
          >
            Reservar
          </Link>
        </div>
      </div>

      {isSearchOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0A0A0A]/95 backdrop-blur-md py-4 px-4">
          <div className="max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Buscar vinos..."
              className="w-full bg-[#1A1A1A] border border-[#2A2A2A] text-white px-4 py-3 font-body focus:outline-none focus:border-[#C9974A]"
              autoFocus
            />
          </div>
        </div>
      )}
    </nav>
  );
}
