"use client";

import React, { useState } from "react";

type ChartType = "bars" | "lines" | "pie";

const MONTHLY_DATA = [
  { month: "Jun", ingresos: 12500000, gastos: 7800000, resultado: 4700000 },
  { month: "Jul", ingresos: 13200000, gastos: 8100000, resultado: 5100000 },
  { month: "Ago", ingresos: 14200000, gastos: 8650000, resultado: 5550000 },
  { month: "Sep", ingresos: 14200000, gastos: 8340000, resultado: 5860000 },
  { month: "Oct", ingresos: 13750000, gastos: 8340000, resultado: 5410000 },
  { month: "Nov", ingresos: 15450000, gastos: 8750000, resultado: 6700000 },
];

const EXPENSE_BREAKDOWN = [
  { category: "Gastos Admin.", value: 2850000, color: "#1a2e3e" },
  { category: "Gastos Ventas", value: 1200000, color: "#2d4a5e" },
  { category: "Costo de Venta", value: 4200000, color: "#64748b" },
  { category: "Gastos Financ.", value: 500000, color: "#94a3b8" },
];

const EBITDA_DATA = [
  { month: "Septiembre", value: 5820000 },
  { month: "Octubre", value: 5380000 },
  { month: "Noviembre", value: 6700000 },
  { month: "Diciembre", value: 7110000 },
];

export default function ChartsPage() {
  const [selectedChart, setSelectedChart] = useState<ChartType>("bars");

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      notation: "compact",
    }).format(value);
  };

  const maxValue = Math.max(...MONTHLY_DATA.map((d) => Math.max(d.ingresos, d.gastos, d.resultado)));
  const totalExpenses = EXPENSE_BREAKDOWN.reduce((sum, item) => sum + item.value, 0);

  return (
    <div>
      <h1 className="text-3xl font-bold text-primary mb-2">Gráficas y Análisis</h1>
      <p className="text-text-muted mb-8">Visualiza el rendimiento financiero de tu empresa</p>

      {/* Chart Type Selector */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
        <div className="flex gap-4">
          <button
            onClick={() => setSelectedChart("bars")}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              selectedChart === "bars"
                ? "bg-primary text-white"
                : "bg-secondary text-primary hover:bg-primary hover:text-white"
            }`}
          >
            Barras
          </button>
          <button
            onClick={() => setSelectedChart("lines")}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              selectedChart === "lines"
                ? "bg-primary text-white"
                : "bg-secondary text-primary hover:bg-primary hover:text-white"
            }`}
          >
            Líneas
          </button>
          <button
            onClick={() => setSelectedChart("pie")}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              selectedChart === "pie"
                ? "bg-primary text-white"
                : "bg-secondary text-primary hover:bg-primary hover:text-white"
            }`}
          >
            Circular
          </button>
        </div>
      </div>

      {/* Bar Chart */}
      {selectedChart === "bars" && (
        <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Ingresos vs Gastos - Últimos 6 Meses</h2>
          
          <div className="space-y-6">
            {MONTHLY_DATA.map((data, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-primary w-12">{data.month}</span>
                  <div className="flex-1 flex gap-2">
                    {/* Ingresos Bar */}
                    <div className="flex-1">
                      <div className="relative h-8 bg-secondary rounded overflow-hidden">
                        <div
                          className="absolute h-full bg-success transition-all duration-500"
                          style={{ width: `${(data.ingresos / maxValue) * 100}%` }}
                        >
                          <span className="absolute right-2 top-1 text-xs text-white font-semibold">
                            {formatCurrency(data.ingresos)}
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Gastos Bar */}
                    <div className="flex-1">
                      <div className="relative h-8 bg-secondary rounded overflow-hidden">
                        <div
                          className="absolute h-full bg-danger transition-all duration-500"
                          style={{ width: `${(data.gastos / maxValue) * 100}%` }}
                        >
                          <span className="absolute right-2 top-1 text-xs text-white font-semibold">
                            {formatCurrency(data.gastos)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-8 mt-8 pt-6 border-t">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-success rounded"></div>
              <span className="text-sm text-text-muted">Ingresos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-danger rounded"></div>
              <span className="text-sm text-text-muted">Gastos</span>
            </div>
          </div>
        </div>
      )}

      {/* Line Chart */}
      {selectedChart === "lines" && (
        <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Evolución del Resultado - Últimos 6 Meses</h2>
          
          <div className="relative h-96 border-l-2 border-b-2 border-gray-300">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-text-muted -ml-12 w-10 text-right">
              <span>{formatCurrency(maxValue)}</span>
              <span>{formatCurrency(maxValue * 0.75)}</span>
              <span>{formatCurrency(maxValue * 0.5)}</span>
              <span>{formatCurrency(maxValue * 0.25)}</span>
              <span>$0</span>
            </div>

            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className="border-t border-gray-200"></div>
              ))}
            </div>

            {/* Line */}
            <svg className="absolute inset-0 w-full h-full" style={{ overflow: "visible" }}>
              <polyline
                points={MONTHLY_DATA.map((d, i) => {
                  const x = (i / (MONTHLY_DATA.length - 1)) * 100;
                  const y = 100 - (d.resultado / maxValue) * 100;
                  return `${x}%,${y}%`;
                }).join(" ")}
                fill="none"
                stroke="#10b981"
                strokeWidth="3"
                className="transition-all duration-500"
              />
              {MONTHLY_DATA.map((d, i) => {
                const x = (i / (MONTHLY_DATA.length - 1)) * 100;
                const y = 100 - (d.resultado / maxValue) * 100;
                return (
                  <g key={i}>
                    <circle cx={`${x}%`} cy={`${y}%`} r="6" fill="#10b981" />
                    <text
                      x={`${x}%`}
                      y={`${y}%`}
                      dy="-15"
                      textAnchor="middle"
                      className="text-xs font-semibold fill-primary"
                    >
                      {formatCurrency(d.resultado)}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* X-axis labels */}
            <div className="absolute -bottom-8 left-0 right-0 flex justify-between text-xs text-text-muted font-semibold">
              {MONTHLY_DATA.map((d, i) => (
                <span key={i}>{d.month}</span>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-6 border-t text-center">
            <p className="text-sm text-text-muted">
              Tendencia de resultado mensual - Mayor valor: {formatCurrency(Math.max(...MONTHLY_DATA.map(d => d.resultado)))}
            </p>
          </div>
        </div>
      )}

      {/* Pie Chart */}
      {selectedChart === "pie" && (
        <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Distribución de Gastos - Noviembre 2025</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Pie Chart */}
            <div className="flex justify-center">
              <div className="relative w-80 h-80">
                <svg viewBox="0 0 100 100" className="transform -rotate-90">
                  {EXPENSE_BREAKDOWN.reduce((acc, item, index) => {
                    const percentage = (item.value / totalExpenses) * 100;
                    const offset = acc.offset;
                    const circumference = 2 * Math.PI * 40;
                    const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;
                    
                    acc.elements.push(
                      <circle
                        key={index}
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke={item.color}
                        strokeWidth="20"
                        strokeDasharray={strokeDasharray}
                        strokeDashoffset={-offset}
                        className="transition-all duration-500"
                      />
                    );
                    
                    acc.offset += (percentage / 100) * circumference;
                    return acc;
                  }, { elements: [] as React.ReactElement[], offset: 0 }).elements}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">{formatCurrency(totalExpenses)}</p>
                    <p className="text-sm text-text-muted">Total Gastos</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="space-y-4">
              {EXPENSE_BREAKDOWN.map((item, index) => {
                const percentage = ((item.value / totalExpenses) * 100).toFixed(1);
                return (
                  <div key={index} className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-4 h-4 rounded"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="font-semibold text-primary">{item.category}</span>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary">{formatCurrency(item.value)}</p>
                      <p className="text-sm text-text-muted">{percentage}%</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Insights Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-success bg-opacity-10 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-primary">Crecimiento</h3>
          </div>
          <p className="text-text-muted mb-3">
            Los ingresos han aumentado un <span className="font-bold text-success">12.5%</span> en el último mes
          </p>
          <p className="text-sm text-text-muted">
            Comparado con Octubre 2025, se observa un crecimiento sostenido en ventas.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-primary">Margen Operacional</h3>
          </div>
          <p className="text-text-muted mb-3">
            El margen operacional es del <span className="font-bold text-primary">43.4%</span> este mes
          </p>
          <p className="text-sm text-text-muted">
            Un indicador saludable que muestra eficiencia en la operación.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-danger bg-opacity-10 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-danger" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-primary">Área de Atención</h3>
          </div>
          <p className="text-text-muted mb-3">
            Los gastos de administración representan el <span className="font-bold text-danger">18.4%</span>
          </p>
          <p className="text-sm text-text-muted">
            Considera revisar oportunidades de optimización en esta área.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-primary">Proyección</h3>
          </div>
          <p className="text-text-muted mb-3">
            Siguiendo esta tendencia, el resultado de Diciembre podría ser de{" "}
            <span className="font-bold text-success">$7.2M</span>
          </p>
          <p className="text-sm text-text-muted">
            Proyección basada en el crecimiento promedio de los últimos 3 meses.
          </p>
        </div>
      </div>

      {/* EBITDA Chart */}
      <div className="bg-white p-6 rounded-lg shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-primary mb-6">Evolución EBITDA (Resultado Operacional)</h2>
        <div className="h-80 flex items-end justify-around gap-6 px-4">
          {EBITDA_DATA.map((item) => {
            const maxEbitda = Math.max(...EBITDA_DATA.map((d) => d.value));
            const minEbitda = Math.min(...EBITDA_DATA.map((d) => d.value));
            const range = maxEbitda - minEbitda;
            const height = range > 0 ? ((item.value - minEbitda) / range) * 100 : 50;
            const isPositive = item.value >= 0;
            
            return (
              <div key={item.month} className="flex-1 flex flex-col items-center gap-3">
                <div className="text-sm font-bold text-primary text-center">
                  {formatCurrency(item.value)}
                </div>
                <div
                  className={`w-full rounded-t-lg transition-all hover:opacity-80 cursor-pointer ${
                    isPositive ? "bg-success" : "bg-danger"
                  }`}
                  style={{ height: `${Math.max(height, 15)}%` }}
                  title={`${item.month}: ${formatCurrency(item.value)}`}
                ></div>
                <div className="text-sm font-semibold text-primary text-center">{item.month}</div>
              </div>
            );
          })}
        </div>
        <div className="mt-6 p-4 bg-secondary rounded-lg">
          <p className="text-sm text-text-muted">
            <span className="font-semibold text-primary">EBITDA:</span> Earnings Before Interest, Taxes, Depreciation and Amortization.
            Representa el resultado operacional antes de intereses, impuestos, depreciación y amortización.
          </p>
        </div>
      </div>
    </div>
  );
}
