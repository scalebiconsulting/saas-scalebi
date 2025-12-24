"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`bg-white text-gray-800 fixed top-0 left-0 right-0 z-50 shadow-md transition-all duration-300 ${
      isScrolled ? "py-3 sm:py-4" : "py-4 sm:py-6"
    }`}>
      <nav className="w-full px-4 sm:px-8 lg:px-20 xl:px-40 flex items-center justify-between">
        <Link href="/">
          <div className={`flex items-center gap-2 sm:gap-4 transition-all duration-300 ${
            isScrolled ? "scale-105 sm:scale-110" : "scale-100"
          }`}>
            <div className="w-10 h-10 sm:w-12 sm:h-12 text-white bg-[#0a1628] rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 25 30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-8 sm:h-8">
                <path d="M3 3v18h18"></path>
                <path d="M18 9l-5-6-4 8-3-2"></path>
              </svg>
            </div>
            <span className="text-xl sm:text-2xl font-bold text-gray-900">ScaleBI</span>
          </div>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden lg:flex gap-4">
          <Link href="/login">
            <button className="px-4 xl:px-6 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm xl:text-base">
              Iniciar Sesión
            </button>
          </Link>
          <Link href="/signup">
            <button className="px-4 xl:px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm text-sm xl:text-base">
              Crear Cuenta
            </button>
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-3">
          <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
            <button className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium">
              Iniciar Sesión
            </button>
          </Link>
          <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>
            <button className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm">
              Crear Cuenta
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}