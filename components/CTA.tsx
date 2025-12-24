import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-primary">
          ¿Listo para simplificar tu gestión financiera?
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-text-muted mb-6 sm:mb-8">
          Comienza a usar ScaleBI hoy y transforma la forma en que analizas tus datos financieros.
        </p>
        <div className="mb-4 flex justify-center">
          <Link href="/signup">
            <button className="w-full sm:w-auto px-6 sm:px-10 lg:px-14 py-3 sm:py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg text-lg sm:text-xl lg:text-2xl xl:text-3xl flex items-center justify-center gap-2 sm:gap-3">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Crear Cuenta Gratis
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}