// // import Link from "next/link";

// // export default function CTA() {
// //   return (
// //     <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
// //       {/* Background decoration */}
// //       <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      
// //       <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
// //         {/* Badge */}
// //         <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700 mb-6">
// //           <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
// //             <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
// //           </svg>
// //           <span>100% Gratis • Sin tarjeta de crédito</span>
// //         </div>

// //         {/* Title */}
// //         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-navy-900 via-navy-800 to-blue-600 bg-clip-text text-transparent leading-tight">
// //           ¿Listo para simplificar tu gestión financiera?
// //         </h2>
        
// //         {/* Description */}
// //         <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
// //           Comienza a usar ScaleBI hoy y transforma la forma en que analizas tus datos financieros.
// //         </p>
        
// //         {/* CTA Button */}
// //         <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
// //           <Link href="/signup" className="group w-full sm:w-auto">
// //             <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 text-base sm:text-lg inline-flex items-center justify-center gap-3 whitespace-nowrap">
// //               <svg className="w-5 h-5 flex-shrink-0 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
// //               </svg>
// //               Crear Cuenta Gratis
// //             </button>
// //           </Link>
// //         </div>

// //         {/* Trust indicators */}
// //         <div className="mt-8 flex items-center justify-center gap-6 text-sm text-slate-500">
// //           <div className="flex items-center gap-2">
// //             <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// //             </svg>
// //             <span>Sin instalación</span>
// //           </div>
// //           <div className="flex items-center gap-2">
// //             <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
// //             </svg>
// //             <span>100% seguro</span>
// //           </div>
// //           <div className="flex items-center gap-2">
// //             <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
// //             </svg>
// //             <span>Listo en 2 min</span>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// import Link from "next/link";

// export default function CTA() {
//   return (
//     <section className="py12 sm:py-16 lg:py-20 bg-white">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
//         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
//           ¿Listo para simplificar tu gestión financiera?
//         </h2>
//         <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
//           Comienza a usar ScaleBI hoy y transforma la forma en que analizas tus datos financieros.
//         </p>
//         <div className="flex justify-center">
//           <Link href="/signup" className="inline-block">
//             <button className="px-8 sm:px-10 lg:px-12 py-3 sm:py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg text-base sm:text-lg lg:text-xl inline-flex items-center justify-center gap-2 sm:gap-3 whitespace-nowrap">
//               <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
//               </svg>
//               Crear Cuenta Gratis
//             </button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }