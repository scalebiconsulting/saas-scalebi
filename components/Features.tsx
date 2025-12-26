// export default function Features() {
//   const faqs = [
//     {
//       question: "¿Qué archivo necesito?",
//       answer: "El Registro de Compras y Ventas (RCV) que descargas del SII en formato CSV."
//     },
//     {
//       question: "¿Mis datos están seguros?",
//       answer: "Sí. Tus datos se almacenan encriptados y nunca los compartimos con terceros."
//     },
//     {
//       question: "¿Necesito saber contabilidad?",
//       answer: "No. El sistema incluye un plan de cuentas predefinido con 28 categorías listas."
//     },
//     {
//       question: "¿Cuánto tarda en estar listo?",
//       answer: "Tu primer P&L estará listo en menos de 5 minutos después de subir tu archivo."
//     }
//   ];

//   const steps = [
//     {
//       icon: (
//         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//           <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
//           <polyline points="17 8 12 3 7 8"></polyline>
//           <line x1="12" y1="3" x2="12" y2="15"></line>
//         </svg>
//       ),
//       bgColor: "bg-blue-400",
//       title: "Sube tu CSV del SII",
//       description: "Registro de Compras y Ventas directo del portal"
//     },
//     {
//       icon: (
//         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//           <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
//         </svg>
//       ),
//       bgColor: "bg-emerald-400",
//       title: "Clasifica una vez, automatiza siempre",
//       description: "Reglas por proveedor que se aplican cada mes"
//     },
//     {
//       icon: (
//         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//           <path d="M3 3v18h18"></path>
//           <path d="M18 17V9"></path>
//           <path d="M13 17V5"></path>
//           <path d="M8 17v-3"></path>
//         </svg>
//       ),
//       bgColor: "bg-amber-400",
//       title: "Dashboard + KPIs automáticos",
//       description: "Margen bruto, EBITDA, tendencias, Top proveedores"
//     }
//   ];

//   const modules = [
//     {
//       icon: (
//         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//           <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
//           <line x1="3" y1="9" x2="21" y2="9"></line>
//           <line x1="9" y1="21" x2="9" y2="9"></line>
//         </svg>
//       ),
//       bgColor: "bg-blue-400",
//       name: "Resumen Ejecutivo"
//     },
//     {
//       icon: (
//         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//           <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
//           <polyline points="14 2 14 8 20 8"></polyline>
//           <line x1="16" y1="13" x2="8" y2="13"></line>
//           <line x1="16" y1="17" x2="8" y2="17"></line>
//         </svg>
//       ),
//       bgColor: "bg-emerald-400",
//       name: "Estado de Resultados"
//     },
//     {
//       icon: (
//         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//           <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
//         </svg>
//       ),
//       bgColor: "bg-yellow-400",
//       name: "Clasificador"
//     },
//     {
//       icon: (
//         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//           <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
//           <circle cx="9" cy="7" r="4"></circle>
//           <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
//           <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
//         </svg>
//       ),
//       bgColor: "bg-purple-400",
//       name: "Gestión RRHH"
//     },
//     {
//       icon: (
//         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//           <line x1="12" y1="1" x2="12" y2="23"></line>
//           <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
//         </svg>
//       ),
//       bgColor: "bg-pink-400",
//       name: "CxC y CxP"
//     },
//     {
//       icon: (
//         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//           <circle cx="12" cy="12" r="3"></circle>
//           <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
//         </svg>
//       ),
//       bgColor: "bg-indigo-400",
//       name: "Configuración"
//     }
//   ];

//   return (
//     <section id="features" className="py-12 sm:py-16 lg:py-20 bg-white">
//       <div className="w-full px-4 sm:px-8 lg:px-20 xl:px-40 2xl:px-60">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
//           {/* Left Column - FAQs */}
//           <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 lg:p-8">
//             <h2 className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
//               <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <circle cx="12" cy="12" r="10"></circle>
//                 <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
//                 <line x1="12" y1="17" x2="12.01" y2="17"></line>
//               </svg>
//               Preguntas Frecuentes
//             </h2>
            
//             <div className="grid grid-cols-2 gap-3 sm:gap-4">
//               {faqs.map((faq, index) => (
//                 <div key={index} className="bg-gray-100 rounded-lg p-3 sm:p-4">
//                   <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">{faq.question}</h4>
//                   <p className="text-xs sm:text-sm text-gray-600">{faq.answer}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Column - Steps */}
//           <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 lg:p-8">
//             <div className="space-y-3 sm:space-y-4">
//               {steps.map((step, index) => (
//                 <div key={index} className="bg-white rounded-xl border border-gray-200 p-3 sm:p-4 lg:p-5 flex items-start gap-3 sm:gap-4">
//                   <div className={`w-10 h-10 sm:w-12 sm:h-12 ${step.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
//                     <div className="w-5 h-5 sm:w-6 sm:h-6">
//                       {step.icon}
//                     </div>
//                   </div>
//                   <div className="flex flex-col">
//                     <strong className="text-gray-900 mb-1 text-sm sm:text-base">{step.title}</strong>
//                     <span className="text-xs sm:text-sm text-gray-600">{step.description}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Modules Section - Full width below */}
//         <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 lg:p-8">
//           <h4 className="text-xs sm:text-sm font-semibold text-gray-500 mb-4 sm:mb-6 tracking-wide">
//             6 Módulos Incluidos
//           </h4>
//           <div className="grid grid-cols-1 sm:grid-cols-1 gap-3 sm:gap-4">
//             {modules.map((module, index) => (
//               <div key={index} className="bg-gray-100 rounded-xl border border-gray-200 p-3 sm:p-4 flex items-center gap-3 sm:gap-4">
//                 <div className={`w-8 h-8 sm:w-10 sm:h-10 ${module.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
//                   <div className="w-4 h-4 sm:w-5 sm:h-5">
//                     {module.icon}
//                   </div>
//                 </div>
//                 <span className="font-semibold text-gray-900 text-sm sm:text-base">{module.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



export default function Features() {
  const faqs = [
    {
      question: "¿Qué archivo necesito?",
      answer: "El Registro de Compras y Ventas (RCV) que descargas del SII en formato CSV."
    },
    {
      question: "¿Mis datos están seguros?",
      answer: "Sí. Tus datos se almacenan encriptados y nunca los compartimos con terceros."
    },
    {
      question: "¿Necesito saber contabilidad?",
      answer: "No. El sistema incluye un plan de cuentas predefinido con 28 categorías listas."
    },
    {
      question: "¿Cuánto tarda en estar listo?",
      answer: "Tu primer P&L estará listo en menos de 5 minutos después de subir tu archivo."
    }
  ];

  const steps = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="17 8 12 3 7 8"></polyline>
          <line x1="12" y1="3" x2="12" y2="15"></line>
        </svg>
      ),
      bgColor: "bg-blue-500",
      title: "Sube tu CSV del SII",
      description: "Registro de Compras y Ventas directo del portal"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
        </svg>
      ),
      bgColor: "bg-emerald-500",
      title: "Clasifica una vez, automatiza siempre",
      description: "Reglas por proveedor que se aplican cada mes"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 3v18h18"></path>
          <path d="M18 17V9"></path>
          <path d="M13 17V5"></path>
          <path d="M8 17v-3"></path>
        </svg>
      ),
      bgColor: "bg-amber-500",
      title: "Dashboard + KPIs automáticos",
      description: "Margen bruto, EBITDA, tendencias, Top proveedores"
    }
  ];

  const modules = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      ),
      bgColor: "bg-blue-500",
      name: "Resumen Ejecutivo"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
        </svg>
      ),
      bgColor: "bg-emerald-500",
      name: "Estado de Resultados"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
        </svg>
      ),
      bgColor: "bg-yellow-500",
      name: "Clasificador"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      bgColor: "bg-purple-500",
      name: "Gestión RRHH"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      ),
      bgColor: "bg-pink-500",
      name: "CxC y CxP"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      ),
      bgColor: "bg-indigo-500",
      name: "Configuración"
    }
  ];

  return (
    <section id="features" className="bg-white py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Column - FAQs */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 hover:shadow-xl transition-shadow">
            <h2 className="flex items-center gap-3 text-xl sm:text-2xl font-bold text-gray-900 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              Preguntas Frecuentes
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200 hover:border-blue-300 transition-colors">
                  <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">{faq.question}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Middle Column - Steps */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 hover:shadow-xl transition-shadow">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Cómo Funciona</h2>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={index} className="bg-white rounded-xl border-2 border-gray-200 p-4 sm:p-5 flex items-start gap-4 hover:border-blue-400 hover:shadow-md transition-all">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 ${step.bgColor} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <div className="w-6 h-6 sm:w-7 sm:h-7 text-white">
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <strong className="text-gray-900 mb-1.5 text-sm sm:text-base font-bold">{step.title}</strong>
                    <span className="text-xs sm:text-sm text-gray-600 leading-relaxed">{step.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Modules */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 hover:shadow-xl transition-shadow">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">6 Módulos Incluidos</h2>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {modules.map((module, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-gray-200 p-4 flex flex-col items-center justify-center gap-3 hover:border-blue-400 hover:shadow-md transition-all text-center">
                  <div className={`w-12 h-12 ${module.bgColor} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <div className="w-6 h-6 text-white">
                      {module.icon}
                    </div>
                  </div>
                  <span className="font-bold text-gray-900 text-xs sm:text-sm leading-tight">{module.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}