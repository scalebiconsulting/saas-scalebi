"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`bg-white text-gray-800 fixed top-0 left-0 right-0 z-50 shadow-md transition-all duration-300 ${
      isScrolled ? "py-4" : "py-6"
    }`}>
      <nav className="w-full px-40 flex items-center justify-between">
        <Link href="/">
          <div className={`flex items-center gap-4 transition-all duration-300 ${
            isScrolled ? "scale-110" : "scale-100"
          }`}>
            <div className="w-12 h-12 text-white bg-[#0a1628] rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 25 30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                <path d="M3 3v18h18"></path>
                <path d="M18 9l-5-6-4 8-3-2"></path>
              </svg>
            </div>
            <span className="text-2xl w-12 font-bold text-gray-900">ScaleBI</span>
          </div>
        </Link>
        
        <div className="flex gap-4">
          <Link href="/login">
            <button className="px-6 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium">
              Iniciar Sesión
            </button>
          </Link>
          <Link href="/signup">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm">
              Crear Cuenta
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}