"use client";

import Link from "next/link";
import Image from "next/image";
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
    <header className={`bg-gradient-to-b from-primary to-primary/80 text-white fixed top-0 left-0 right-0 z-50 shadow-lg transition-all duration-300 ${
      isScrolled ? "py-6" : "py-2"
    }`}>
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <div className={`relative transition-all duration-300 ${
            isScrolled ? "w-24 h-24" : "w-20 h-20"
          }`}>
            <Image
              src="/logo.png"
              alt="ScaleBI Logo"
              fill
              className="object-contain"
            />
          </div>
        </Link>
        <div className="flex gap-6">
          <Link href="/dashboard" className="hover:text-secondary transition-colors">
            Dashboard
          </Link>
          <Link href="#features" className="hover:text-secondary transition-colors">
            Características
          </Link>
          <Link href="#contact" className="hover:text-secondary transition-colors">
            Contacto
          </Link>
        </div>
      </nav>
    </header>
  );
}
