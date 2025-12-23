"use client";

import React from "react";

const EERR_DATA = [
  {
    month: "Septiembre",
    year: 2025,
    ingresos: 14200000,
    costoVenta: 4050000,
    gastosAdministracion: 2700000,
    gastosVentas: 1100000,
    gastosFinancieros: 490000,
    otrosIngresos: 100000,
    otrosGastos: 140000,
  },
  {
    month: "Octubre",
    year: 2025,
    ingresos: 13750000,
    costoVenta: 3900000,
    gastosAdministracion: 2650000,
    gastosVentas: 1150000,
    gastosFinancieros: 480000,
    otrosIngresos: 120000,
    otrosGastos: 160000,
  },
  {
    month: "Noviembre",
    year: 2025,
    ingresos: 15450000,
    costoVenta: 4200000,
    gastosAdministracion: 2850000,
    gastosVentas: 1200000,
    gastosFinancieros: 500000,
    otrosIngresos: 150000,
    otrosGastos: 180000,
  },
  {
    month: "Diciembre",
    year: 2025,
    ingresos: 16200000,
    costoVenta: 4400000,
    gastosAdministracion: 2900000,
    gastosVentas: 1250000,
    gastosFinancieros: 520000,
    otrosIngresos: 180000,
    otrosGastos: 200000,
  },
];

export default function EERRPage() {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      maximumFractionDigits: 0,
    }).format(value);
  };

  const calcMargenBruto = (data: typeof EERR_DATA[0]) => data.ingresos - data.costoVenta;
  const calcGastosOperacionales = (data: typeof EERR_DATA[0]) => data.gastosAdministracion + data.gastosVentas;
  const calcResultadoOperacional = (data: typeof EERR_DATA[0]) => calcMargenBruto(data) - calcGastosOperacionales(data);
  const calcResultadoFinal = (data: typeof EERR_DATA[0]) => 
    calcResultadoOperacional(data) + data.otrosIngresos - data.gastosFinancieros - data.otrosGastos;

  // Calcular totales anuales
  const anual = {
    ingresos: EERR_DATA.reduce((sum, d) => sum + d.ingresos, 0),
    costoVenta: EERR_DATA.reduce((sum, d) => sum + d.costoVenta, 0),
    gastosAdministracion: EERR_DATA.reduce((sum, d) => sum + d.gastosAdministracion, 0),
    gastosVentas: EERR_DATA.reduce((sum, d) => sum + d.gastosVentas, 0),
    gastosFinancieros: EERR_DATA.reduce((sum, d) => sum + d.gastosFinancieros, 0),
    otrosIngresos: EERR_DATA.reduce((sum, d) => sum + d.otrosIngresos, 0),
    otrosGastos: EERR_DATA.reduce((sum, d) => sum + d.otrosGastos, 0),
  };

  // Calcular promedios
  const count = EERR_DATA.length;
  const promedio = {
    ingresos: anual.ingresos / count,
    costoVenta: anual.costoVenta / count,
    gastosAdministracion: anual.gastosAdministracion / count,
    gastosVentas: anual.gastosVentas / count,
    gastosFinancieros: anual.gastosFinancieros / count,
    otrosIngresos: anual.otrosIngresos / count,
    otrosGastos: anual.otrosGastos / count,
  };

  // Calcular resultados anuales
  const resOpAnual = anual.ingresos - anual.costoVenta - anual.gastosAdministracion - anual.gastosVentas;
  const finalAnual = anual.ingresos - anual.costoVenta - anual.gastosAdministracion - anual.gastosVentas + 
                    anual.otrosIngresos - anual.gastosFinancieros - anual.otrosGastos;

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-primary mb-2">Estado de Resultados</h1>
        <p className="text-text-muted">Visualiza el EERR comparativo de todos los períodos</p>
      </div>

      {/* EERR Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold sticky left-0 bg-primary z-10">Concepto</th>
                {EERR_DATA.map((data) => (
                  <th key={`${data.month}-header`} colSpan={2} className="px-2 py-3 text-center text-xs font-semibold border-l-2 border-white">
                    {data.month.toUpperCase()}
                  </th>
                ))}
                <th colSpan={2} className="px-2 py-3 text-center text-xs font-semibold border-l-2 border-white">
                  ANUAL
                </th>
                <th className="px-2 py-3 text-center text-xs font-semibold border-l-2 border-white">
                  PROMEDIO
                </th>
              </tr>
              <tr className="bg-primary/90">
                <th className="px-4 py-2 text-left text-xs sticky left-0 bg-primary/90 z-10"></th>
                {EERR_DATA.map((data) => (
                  <React.Fragment key={`${data.month}-header-cols`}>
                    <th className="px-2 py-2 text-center text-xs border-l-2 border-white">Monto</th>
                    <th className="px-2 py-2 text-center text-xs">%</th>
                  </React.Fragment>
                ))}
                <th className="px-2 py-2 text-center text-xs border-l-2 border-white">Monto</th>
                <th className="px-2 py-2 text-center text-xs">%</th>
                <th className="px-2 py-2 text-center text-xs border-l-2 border-white">Monto</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {/* INGRESOS */}
              <tr className="bg-secondary">
                <td className="px-4 py-2 text-xs font-bold text-primary sticky left-0 bg-secondary z-10">INGRESOS OPERACIONALES</td>
                {EERR_DATA.map((data, idx) => (
                  <React.Fragment key={`${data.month}-ingresos-op-empty-${idx}`}>
                    <td className="px-2 py-2 border-l-2 border-gray-200"></td>
                    <td className="px-2 py-2"></td>
                  </React.Fragment>
                ))}
                <td className="px-2 py-2 border-l-2 border-gray-200"></td>
                <td className="px-2 py-2"></td>
                <td className="px-2 py-2 border-l-2 border-gray-200"></td>
              </tr>
              <tr className="hover:bg-secondary">
                <td className="px-4 py-2 text-xs text-primary pl-8 sticky left-0 bg-white z-10">Ingresos por Ventas</td>
                {EERR_DATA.map((data) => (
                  <React.Fragment key={`${data.month}-ingresos`}>
                    <td className="px-2 py-2 text-xs text-right text-primary font-semibold border-l-2 border-gray-200">
                      {formatCurrency(data.ingresos)}
                    </td>
                    <td className="px-2 py-2 text-xs text-right text-text-muted">100.0%</td>
                  </React.Fragment>
                ))}
                <td className="px-2 py-2 text-xs text-right text-primary font-semibold border-l-2 border-gray-200">
                  {formatCurrency(anual.ingresos)}
                </td>
                <td className="px-2 py-2 text-xs text-right text-text-muted">100.0%</td>
                <td className="px-2 py-2 text-xs text-right text-primary font-semibold border-l-2 border-gray-200">
                  {formatCurrency(promedio.ingresos)}
                </td>
              </tr>

              {/* COSTO DE VENTA */}
              <tr className="bg-secondary">
                <td className="px-4 py-2 text-xs font-bold text-primary sticky left-0 bg-secondary z-10">COSTO DE VENTA</td>
                {EERR_DATA.map((data, idx) => (
                  <React.Fragment key={`${data.month}-costo-empty-${idx}`}>
                    <td className="px-2 py-2 border-l-2 border-gray-200"></td>
                    <td className="px-2 py-2"></td>
                  </React.Fragment>
                ))}
                <td className="px-2 py-2 border-l-2 border-gray-200"></td>
                <td className="px-2 py-2"></td>
                <td className="px-2 py-2 border-l-2 border-gray-200"></td>
              </tr>
              <tr className="hover:bg-secondary">
                <td className="px-4 py-2 text-xs text-primary pl-8 sticky left-0 bg-white z-10">Costo de Venta</td>
                {EERR_DATA.map((data) => (
                  <React.Fragment key={`${data.month}-costo`}>
                    <td className="px-2 py-2 text-xs text-right text-danger border-l-2 border-gray-200">
                      ({formatCurrency(data.costoVenta)})
                    </td>
                    <td className="px-2 py-2 text-xs text-right text-text-muted">
                      {((data.costoVenta / data.ingresos) * 100).toFixed(1)}%
                    </td>
                  </React.Fragment>
                ))}
                <td className="px-2 py-2 text-xs text-right text-danger border-l-2 border-gray-200">
                  ({formatCurrency(anual.costoVenta)})
                </td>
                <td className="px-2 py-2 text-xs text-right text-text-muted">
                  {((anual.costoVenta / anual.ingresos) * 100).toFixed(1)}%
                </td>
                <td className="px-2 py-2 text-xs text-right text-danger border-l-2 border-gray-200">
                  ({formatCurrency(promedio.costoVenta)})
                </td>
              </tr>

              {/* MARGEN BRUTO */}
              <tr className="bg-primary text-white font-bold">
                <td className="px-4 py-2 text-xs sticky left-0 bg-primary z-10">MARGEN BRUTO</td>
                {EERR_DATA.map((data) => {
                  const margen = calcMargenBruto(data);
                  return (
                    <React.Fragment key={`${data.month}-margen`}>
                      <td className="px-2 py-2 text-xs text-right border-l-2 border-white">
                        {formatCurrency(margen)}
                      </td>
                      <td className="px-2 py-2 text-xs text-right">
                        {((margen / data.ingresos) * 100).toFixed(1)}%
                      </td>
                    </React.Fragment>
                  );
                })}
                <td className="px-2 py-2 text-xs text-right border-l-2 border-white">
                  {formatCurrency(anual.ingresos - anual.costoVenta)}
                </td>
                <td className="px-2 py-2 text-xs text-right">
                  {(((anual.ingresos - anual.costoVenta) / anual.ingresos) * 100).toFixed(1)}%
                </td>
                <td className="px-2 py-2 text-xs text-right border-l-2 border-white">
                  {formatCurrency(promedio.ingresos - promedio.costoVenta)}
                </td>
              </tr>

              {/* GASTOS OPERACIONALES */}
              <tr className="bg-secondary">
                <td className="px-4 py-2 text-xs font-bold text-primary sticky left-0 bg-secondary z-10">GASTOS OPERACIONALES</td>
                {EERR_DATA.map((data, idx) => (
                  <React.Fragment key={`${data.month}-gastos-op-empty-${idx}`}>
                    <td className="px-2 py-2 border-l-2 border-gray-200"></td>
                    <td className="px-2 py-2"></td>
                  </React.Fragment>
                ))}
                <td className="px-2 py-2 border-l-2 border-gray-200"></td>
                <td className="px-2 py-2"></td>
                <td className="px-2 py-2 border-l-2 border-gray-200"></td>
              </tr>
              <tr className="hover:bg-secondary">
                <td className="px-4 py-2 text-xs text-primary pl-8 sticky left-0 bg-white z-10">Gastos de Administración</td>
                {EERR_DATA.map((data) => (
                  <React.Fragment key={`${data.month}-admin`}>
                    <td className="px-2 py-2 text-xs text-right text-danger border-l-2 border-gray-200">
                      ({formatCurrency(data.gastosAdministracion)})
                    </td>
                    <td className="px-2 py-2 text-xs text-right text-text-muted">
                      {((data.gastosAdministracion / data.ingresos) * 100).toFixed(1)}%
                    </td>
                  </React.Fragment>
                ))}
                <td className="px-2 py-2 text-xs text-right text-danger border-l-2 border-gray-200">
                  ({formatCurrency(anual.gastosAdministracion)})
                </td>
                <td className="px-2 py-2 text-xs text-right text-text-muted">
                  {((anual.gastosAdministracion / anual.ingresos) * 100).toFixed(1)}%
                </td>
                <td className="px-2 py-2 text-xs text-right text-danger border-l-2 border-gray-200">
                  ({formatCurrency(promedio.gastosAdministracion)})
                </td>
              </tr>
              <tr className="hover:bg-secondary">
                <td className="px-4 py-2 text-xs text-primary pl-8 sticky left-0 bg-white z-10">Gastos de Ventas</td>
                {EERR_DATA.map((data) => (
                  <React.Fragment key={`${data.month}-ventas`}>
                    <td className="px-2 py-2 text-xs text-right text-danger border-l-2 border-gray-200">
                      ({formatCurrency(data.gastosVentas)})
                    </td>
                    <td className="px-2 py-2 text-xs text-right text-text-muted">
                      {((data.gastosVentas / data.ingresos) * 100).toFixed(1)}%
                    </td>
                  </React.Fragment>
                ))}
                <td className="px-2 py-2 text-xs text-right text-danger border-l-2 border-gray-200">
                  ({formatCurrency(anual.gastosVentas)})
                </td>
                <td className="px-2 py-2 text-xs text-right text-text-muted">
                  {((anual.gastosVentas / anual.ingresos) * 100).toFixed(1)}%
                </td>
                <td className="px-2 py-2 text-xs text-right text-danger border-l-2 border-gray-200">
                  ({formatCurrency(promedio.gastosVentas)})
                </td>
              </tr>

              {/* RESULTADO OPERACIONAL */}
              <tr className="bg-primary text-white font-bold">
                <td className="px-4 py-2 text-xs sticky left-0 bg-primary z-10">RESULTADO OPERACIONAL</td>
                {EERR_DATA.map((data) => {
                  const resultado = calcResultadoOperacional(data);
                  return (
                    <React.Fragment key={`${data.month}-resop`}>
                      <td className="px-2 py-2 text-xs text-right border-l-2 border-white">
                        {formatCurrency(resultado)}
                      </td>
                      <td className="px-2 py-2 text-xs text-right">
                        {((resultado / data.ingresos) * 100).toFixed(1)}%
                      </td>
                    </React.Fragment>
                  );
                })}
                <td className="px-2 py-2 text-xs text-right border-l-2 border-white">
                  {formatCurrency(resOpAnual)}
                </td>
                <td className="px-2 py-2 text-xs text-right">
                  {((resOpAnual / anual.ingresos) * 100).toFixed(1)}%
                </td>
                <td className="px-2 py-2 text-xs text-right border-l-2 border-white">
                  {formatCurrency(promedio.ingresos - promedio.costoVenta - promedio.gastosAdministracion - promedio.gastosVentas)}
                </td>
              </tr>

              {/* RESULTADO NO OPERACIONAL */}
              <tr className="bg-secondary">
                <td className="px-4 py-2 text-xs font-bold text-primary sticky left-0 bg-secondary z-10">RESULTADO NO OPERACIONAL</td>
                {EERR_DATA.map((data, idx) => (
                  <React.Fragment key={`${data.month}-res-no-op-empty-${idx}`}>
                    <td className="px-2 py-2 border-l-2 border-gray-200"></td>
                    <td className="px-2 py-2"></td>
                  </React.Fragment>
                ))}
                <td className="px-2 py-2 border-l-2 border-gray-200"></td>
                <td className="px-2 py-2"></td>
                <td className="px-2 py-2 border-l-2 border-gray-200"></td>
              </tr>
              <tr className="hover:bg-secondary">
                <td className="px-4 py-2 text-xs text-primary pl-8 sticky left-0 bg-white z-10">Otros Ingresos</td>
                {EERR_DATA.map((data) => (
                  <React.Fragment key={`${data.month}-otring`}>
                    <td className="px-2 py-2 text-xs text-right text-success border-l-2 border-gray-200">
                      {formatCurrency(data.otrosIngresos)}
                    </td>
                    <td className="px-2 py-2 text-xs text-right text-text-muted">
                      {((data.otrosIngresos / data.ingresos) * 100).toFixed(1)}%
                    </td>
                  </React.Fragment>
                ))}
                <td className="px-2 py-2 text-xs text-right text-success border-l-2 border-gray-200">
                  {formatCurrency(anual.otrosIngresos)}
                </td>
                <td className="px-2 py-2 text-xs text-right text-text-muted">
                  {((anual.otrosIngresos / anual.ingresos) * 100).toFixed(1)}%
                </td>
                <td className="px-2 py-2 text-xs text-right text-success border-l-2 border-gray-200">
                  {formatCurrency(promedio.otrosIngresos)}
                </td>
              </tr>
              <tr className="hover:bg-secondary">
                <td className="px-4 py-2 text-xs text-primary pl-8 sticky left-0 bg-white z-10">Gastos Financieros</td>
                {EERR_DATA.map((data) => (
                  <React.Fragment key={`${data.month}-fin`}>
                    <td className="px-2 py-2 text-xs text-right text-danger border-l-2 border-gray-200">
                      ({formatCurrency(data.gastosFinancieros)})
                    </td>
                    <td className="px-2 py-2 text-xs text-right text-text-muted">
                      {((data.gastosFinancieros / data.ingresos) * 100).toFixed(1)}%
                    </td>
                  </React.Fragment>
                ))}
                <td className="px-2 py-2 text-xs text-right text-danger border-l-2 border-gray-200">
                  ({formatCurrency(anual.gastosFinancieros)})
                </td>
                <td className="px-2 py-2 text-xs text-right text-text-muted">
                  {((anual.gastosFinancieros / anual.ingresos) * 100).toFixed(1)}%
                </td>
                <td className="px-2 py-2 text-xs text-right text-danger border-l-2 border-gray-200">
                  ({formatCurrency(promedio.gastosFinancieros)})
                </td>
              </tr>
              <tr className="hover:bg-secondary">
                <td className="px-4 py-2 text-xs text-primary pl-8 sticky left-0 bg-white z-10">Otros Gastos</td>
                {EERR_DATA.map((data) => (
                  <React.Fragment key={`${data.month}-otrgas`}>
                    <td className="px-2 py-2 text-xs text-right text-danger border-l-2 border-gray-200">
                      ({formatCurrency(data.otrosGastos)})
                    </td>
                    <td className="px-2 py-2 text-xs text-right text-text-muted">
                      {((data.otrosGastos / data.ingresos) * 100).toFixed(1)}%
                    </td>
                  </React.Fragment>
                ))}
                <td className="px-2 py-2 text-xs text-right text-danger border-l-2 border-gray-200">
                  ({formatCurrency(anual.otrosGastos)})
                </td>
                <td className="px-2 py-2 text-xs text-right text-text-muted">
                  {((anual.otrosGastos / anual.ingresos) * 100).toFixed(1)}%
                </td>
                <td className="px-2 py-2 text-xs text-right text-danger border-l-2 border-gray-200">
                  ({formatCurrency(promedio.otrosGastos)})
                </td>
              </tr>

              {/* RESULTADO FINAL */}
              <tr className="bg-primary text-white font-bold text-lg">
                <td className="px-4 py-3 text-xs sticky left-0 bg-primary z-10">RESULTADO FINAL</td>
                {EERR_DATA.map((data) => {
                  const resultado = calcResultadoFinal(data);
                  return (
                    <React.Fragment key={`${data.month}-final`}>
                      <td className="px-2 py-3 text-xs text-right border-l-2 border-white">
                        {formatCurrency(resultado)}
                      </td>
                      <td className="px-2 py-3 text-xs text-right">
                        {((resultado / data.ingresos) * 100).toFixed(1)}%
                      </td>
                    </React.Fragment>
                  );
                })}
                <td className="px-2 py-3 text-xs text-right border-l-2 border-white">
                  {formatCurrency(finalAnual)}
                </td>
                <td className="px-2 py-3 text-xs text-right">
                  {((finalAnual / anual.ingresos) * 100).toFixed(1)}%
                </td>
                <td className="px-2 py-3 text-xs text-right border-l-2 border-white">
                  {formatCurrency(
                    promedio.ingresos - promedio.costoVenta - promedio.gastosAdministracion - promedio.gastosVentas +
                    promedio.otrosIngresos - promedio.gastosFinancieros - promedio.otrosGastos
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Export Actions */}
      <div className="mt-6 flex gap-4">
        <button className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-hover transition-colors flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Exportar a PDF
        </button>
        <button className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-secondary transition-colors flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Exportar a Excel
        </button>
      </div>
    </div>
  );
}