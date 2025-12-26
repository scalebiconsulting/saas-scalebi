// import Link from "next/link";
// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section className="relative bg-white top-16 sm:top-20 text-gray-900 py-12 sm:py-16 lg:py-20 overflow-hidden min-h-[auto] lg:min-h-[600px] flex items-center">
//       {/* Content */}
//       <div className="w-full relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//           {/* Left Column - Dashboard Image */}
//           <div className="relative order-2 lg:order-1 px-4 sm:px-8 lg:px-0 lg:-ml-12 xl:-ml-20 max-w-md sm:max-w-lg lg:max-w-none mx-auto lg:mx-0">
//             <div className="relative rounded-3xl shadow-2xl overflow-hidden scale-90 sm:scale-95 lg:scale-75">
//               <Image
//                 src="/grafico.png.png"
//                 alt="Dashboard de ScaleBI"
//                 width={900}
//                 height={600}
//                 priority
//                 className="object-cover w-full h-auto"
//               />
//             </div>
//           </div>

//           {/* Right Column - Text Content */}
//           <div className="max-w-2xl order-1 lg:order-2 px-2 sm:px-4 lg:px-8 xl:px-12">
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-gray-900">
//               Tu Estado de Resultados en minutos
//             </h1>
//             <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-gray-600 leading-relaxed">
//               Sube el <span className="font-semibold text-gray-900">Libro de Compras y Ventas del SII</span>, clasifica tus gastos, y obtén un P&L profesional con dashboard ejecutivo. Sin Excel, sin fórmulas, sin perder tiempo.
//             </p>

//             {/* Price Badge */}
//             <div className="border border-gray-300 rounded-2xl p-4 sm:p-6 mb-4">
//               <div className="flex flex-wrap items-center gap-3 mb-6 sm:mb-10">
//                 <span className="text-3xl sm:text-4xl font-bold text-emerald-500">Gratis</span>
//                 <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
//                   Sin tarjeta
//                 </span>
//               </div>

//               {/* CTA Button */}
//               <div className="mb-4">
//                 <Link href="/signup">
//                   <button className="w-full sm:w-auto px-6 sm:px-10 lg:px-14 py-3 sm:py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg text-lg sm:text-xl lg:text-2xl xl:text-3xl flex items-center justify-center gap-2 sm:gap-3">
//                     <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
//                     </svg>
//                     Crear Cuenta Gratis
//                   </button>
//                 </Link>
//               </div>

//               {/* Additional Info */}
//               <div className="flex items-center gap-2 text-gray-500 text-sm sm:text-base">
//                 <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//                 <span>Empieza a usarlo en menos de 2 minutos</span>
//               </div>
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
    <section className="relative bg-white top-16 sm:top-20 text-gray-900 py-12 sm:py-16 lg:py-20 overflow-hidden min-h-[auto] lg:min-h-[600px] flex items-center">
      {/* Content */}
      <div className="w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Dashboard Image */}
          <div className="relative order-2 lg:order-1 px-4 sm:px-8 lg:px-0 lg:px-4 xl:px-4 max-w-md sm:max-w-lg lg:max-w-none mx-auto lg:mx-0 flex items-start">
            <div className="relative rounded-3xl shadow-2xl overflow-hidden w-full">
              <Image
                src="/grafico.png.png"
                alt="Dashboard de ScaleBI"
                width={900}
                height={600}
                priority
                className="object-cover w-full h-auto"
              />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="max-w-2xl order-1 lg:order-2 px-2 sm:px-4 lg:px-8 xl:px-12 flex flex-col justify-between h-full">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-gray-900">
              Tu Estado de Resultados en minutos
            </h1>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-gray-600 leading-relaxed">
              Sube el <span className="font-semibold text-gray-900">Libro de Compras y Ventas del SII</span>, clasifica tus gastos, y obtén un P&L profesional con dashboard ejecutivo. Sin Excel, sin fórmulas, sin perder tiempo.
            </p>

            {/* Price Badge */}
            <div className="border border-gray-300 rounded-2xl p-4 sm:p-6 mb-4">
              <div className="flex flex-wrap items-center gap-3 mb-6 sm:mb-10">
                <span className="text-3xl sm:text-4xl font-bold text-emerald-500">Gratis</span>
                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                  Sin tarjeta
                </span>
              </div>

              {/* CTA Button */}
              <div className="mb-4">
                <Link href="/signup">
                  <button className="w-full sm:w-auto px-6 sm:px-10 lg:px-14 py-3 sm:py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg text-lg sm:text-xl lg:text-2xl xl:text-3xl flex items-center justify-center gap-2 sm:gap-3">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Crear Cuenta Gratis
                  </button>
                </Link>
              </div>

              {/* Additional Info */}
              <div className="flex items-center gap-2 text-gray-500 text-sm sm:text-base">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
