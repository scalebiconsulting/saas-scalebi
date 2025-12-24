// import Link from "next/link";
// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section className="relative bg-white text-gray-900 py-20 overflow-hidden min-h-[600px] flex items-center">
//       {/* Content */}
//       <div className="w-full relative z-10">
//         <div className="grid lg:grid-cols-2 gap-8 items-center">
//           {/* Left Column - Dashboard Image */}
//           <div className="relative order-2 lg:order-1 -ml-12 lg:-ml-20">
//             <div className="relative rounded-2xl shadow-2xl overflow-hidden scale-70 lg:scale-70">
//               <Image
//                 src="/grafico.png.png"
//                 alt="Dashboard de ScaleBI"
//                 width={700}
//                 height={600}
//                 priority
//                 className="object-cover w-full h-auto"
//               />
//             </div>
//           </div>

//           {/* Right Column - Text Content */}
//           <div className="max-w-2xl order-1 lg:order-2 px-6 lg:px-12">
//             <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-16 leading-tight text-navy-900 whitespace-nowrap">
//               Tu Estado de Resultados en minutos
//             </h1>
//             <p className="text-xl mb-8 text-gray-600 leading-relaxed">
//               Sube el <span className="font-semibold text-navy-900">Libro de Compras y Ventas del SII</span>, clasifica tus gastos, y obtén un P&L profesional con dashboard ejecutivo. Sin Excel, sin fórmulas, sin perder tiempo.
//             </p>

//             {/* Price Badge */}
//             <div className="flex items-center gap-3 mb-6">
//               <span className="text-4xl font-bold text-emerald-500">Gratis</span>
//               <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
//                 Sin tarjeta
//               </span>
//             </div>

//             {/* CTA Button */}
//             <div className="mb-4">
//               <Link href="/signup">
//                 <button className="w-full lg:w-auto px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg text-lg flex items-center justify-center gap-2">
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
//                   </svg>
//                   Crear Cuenta Gratis
//                 </button>
//               </Link>
//             </div>

//             {/* Additional Info */}
//             <div className="flex items-center gap-2 text-gray-500">
//               <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//               <span>Empieza a usarlo en menos de 2 minutos</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-white text-gray-900 py-20 overflow-hidden min-h-[600px] flex items-center">
      {/* Content */}
      <div className="w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Dashboard Image */}
          <div className="relative order-2 lg:order-1 -ml-12 lg:-ml-20">
            <div className="relative rounded-2xl shadow-2xl overflow-hidden scale-70 lg:scale-70">
              <Image
                src="/grafico.png.png"
                alt="Dashboard de ScaleBI"
                width={700}
                height={600}
                priority
                className="object-cover w-full h-auto"
              />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="max-w-2xl order-1 lg:order-2 px-6 lg:px-12">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight text-gray-900 whitespace-nowrap">
              Tu Estado de Resultados en minutos
            </h1>
            <p className="text-xl mb-8 text-gray-600 leading-relaxed">
              Sube el <span className="font-semibold text-gray-900">Libro de Compras y Ventas del SII</span>, clasifica tus gastos, y obtén un P&L profesional con dashboard ejecutivo. Sin Excel, sin fórmulas, sin perder tiempo.
            </p>

            {/* Price Badge */}
            <div className="border border-gray-300 rounded-2xl p-6 mb-4">
              <div className="flex items-center gap-3 mb-10">
                <span className="text-4xl font-bold text-emerald-500">Gratis</span>
                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                  Sin tarjeta
                </span>
              </div>

              {/* CTA Button */}

              <div className="mb-4">
                <Link href="/signup">
                  <button className="w-full lg:w-auto px-18 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg text-3xl flex items-center justify-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Crear Cuenta Gratis
                  </button>
                </Link>
              </div>

              {/* Additional Info */}
              <div className="flex items-center gap-2 text-gray-500">
                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Empieza a usarlo en menos de 2 minutos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}