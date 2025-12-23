import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-primary">
          ¿Listo para simplificar tu gestión financiera?
        </h2>
        <p className="text-xl text-text-muted mb-8">
          Comienza a usar ScaleBI hoy y transforma la forma en que analizas tus datos financieros.
        </p>
        <Link 
          href="/dashboard"
          className="inline-block bg-primary text-white px-10 py-4 rounded-lg font-semibold hover:bg-primary-hover transition-colors"
        >
          Acceder al Dashboard
        </Link>
      </div>
    </section>
  );
}
