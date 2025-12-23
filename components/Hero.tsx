import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative text-white py-20 overflow-hidden min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/finanzas.jpg"
          alt="Gestión Financiera"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a2e3e]/30 via-[#1a2e3e]/20 to-[#0f1f2e]/40" />
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Gestión Financiera Inteligente para tu Empresa
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Transforma tu libro de compras del SII en Estados de Resultados y gráficas interactivas automáticamente.
          </p>
          <div className="flex gap-4">
            <Link 
              href="/dashboard"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
            >
              Comenzar Ahora
            </Link>
            <Link 
              href="/dashboard"
              className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-hover transition-colors"
            >
              Ver Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
