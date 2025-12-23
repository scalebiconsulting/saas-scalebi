"use client";

import React from "react";

const EBITDA_DATA = [
  { month: "Septiembre", value: 5820000 },
  { month: "Octubre", value: 5380000 },
  { month: "Noviembre", value: 6700000 },
  { month: "Diciembre", value: 7110000 },
];

const EBITDA_MONTHLY_TREND = [
  { month: "Ene", value: 4200000 },
  { month: "Feb", value: 4450000 },
  { month: "Mar", value: 4800000 },
  { month: "Abr", value: 5100000 },
  { month: "May", value: 5300000 },
  { month: "Jun", value: 5500000 },
  { month: "Jul", value: 5650000 },
  { month: "Ago", value: 5720000 },
  { month: "Sep", value: 5820000 },
  { month: "Oct", value: 5380000 },
  { month: "Nov", value: 6700000 },
  { month: "Dic", value: 7110000 },
];

export default function EbitdaPage() {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      notation: "compact",
    }).format(value);
  };

  const formatCurrencyFull = (value: number) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
    }).format(value);
  };

  const maxEbitda = Math.max(...EBITDA_DATA.map((d) => d.value));
  const avgEbitda = EBITDA_DATA.reduce((sum, d) => sum + d.value, 0) / EBITDA_DATA.length;
  
  const maxTrend = Math.max(...EBITDA_MONTHLY_TREND.map((d) => d.value));
  
  // Calculate growth
  const currentMonth = EBITDA_DATA[EBITDA_DATA.length - 1].value;
  const previousMonth = EBITDA_DATA[EBITDA_DATA.length - 2].value;
  const growthPercentage = ((currentMonth - previousMonth) / previousMonth) * 100;

  return (
    <div>
      <h1 className="text-3xl font-bold text-primary mb-2">Evolución EBITDA</h1>
      <p className="text-text-muted mb-8">
        Análisis del resultado operacional antes de intereses, impuestos, depreciación y amortización
      </p>

      {/* KPI Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-sm text-text-muted mb-1">EBITDA Actual</p>
          <p className="text-2xl font-bold text-primary">{formatCurrency(currentMonth)}</p>
          <p className="text-sm text-success mt-1">Diciembre 2025</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-sm text-text-muted mb-1">Crecimiento Mensual</p>
          <p className={`text-2xl font-bold ${growthPercentage >= 0 ? "text-success" : "text-danger"}`}>
            {growthPercentage >= 0 ? "+" : ""}{growthPercentage.toFixed(1)}%
          </p>
          <p className="text-sm text-text-muted mt-1">vs. mes anterior</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-sm text-text-muted mb-1">Máximo Alcanzado</p>
          <p className="text-2xl font-bold text-primary">{formatCurrency(maxEbitda)}</p>
          <p className="text-sm text-text-muted mt-1">Último trimestre</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-sm text-text-muted mb-1">Promedio Trimestral</p>
          <p className="text-2xl font-bold text-primary">{formatCurrency(avgEbitda)}</p>
          <p className="text-sm text-text-muted mt-1">Sep - Dic 2025</p>
        </div>
      </div>

      {/* Main EBITDA Chart */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-2xl font-bold text-primary mb-6">EBITDA Último Trimestre</h2>
        <div className="h-80 flex items-end justify-around gap-6 px-4 pb-8">
          {EBITDA_DATA.map((item) => {
            const heightPercent = (item.value / maxEbitda) * 100;
            const isMax = item.value === maxEbitda;
            
            return (
              <div key={item.month} className="flex-1 flex flex-col items-center h-full justify-end">
                <div className="text-sm font-bold text-primary text-center mb-2">
                  {formatCurrency(item.value)}
                </div>
                <div
                  className={`w-full max-w-24 rounded-t-lg transition-all hover:opacity-80 cursor-pointer ${
                    isMax ? "bg-primary" : "bg-success"
                  }`}
                  style={{ height: `${heightPercent}%`, minHeight: "40px" }}
                  title={`${item.month}: ${formatCurrencyFull(item.value)}`}
                ></div>
                <div className="text-sm font-semibold text-primary text-center mt-3">{item.month}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Annual Trend Line Chart */}
      <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
        <h2 className="text-2xl font-bold text-primary mb-6">Tendencia Anual EBITDA - 2025</h2>
        
        <div className="relative h-72 ml-16 mr-4">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-text-muted -ml-14 w-12 text-right">
            <span>{formatCurrency(maxTrend)}</span>
            <span>{formatCurrency(maxTrend * 0.75)}</span>
            <span>{formatCurrency(maxTrend * 0.5)}</span>
            <span>{formatCurrency(maxTrend * 0.25)}</span>
            <span>$0</span>
          </div>

          {/* Grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between border-l-2 border-b-2 border-gray-300">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="border-t border-gray-200"></div>
            ))}
          </div>

          {/* Area and Line using viewBox */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Area fill */}
            <polygon
              points={`0,100 ${EBITDA_MONTHLY_TREND.map((d, i) => {
                const x = (i / (EBITDA_MONTHLY_TREND.length - 1)) * 100;
                const y = 100 - (d.value / maxTrend) * 100;
                return `${x},${y}`;
              }).join(" ")} 100,100`}
              fill="rgba(16, 185, 129, 0.15)"
            />
            {/* Line */}
            <polyline
              points={EBITDA_MONTHLY_TREND.map((d, i) => {
                const x = (i / (EBITDA_MONTHLY_TREND.length - 1)) * 100;
                const y = 100 - (d.value / maxTrend) * 100;
                return `${x},${y}`;
              }).join(" ")}
              fill="none"
              stroke="#10b981"
              strokeWidth="0.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* Data points as overlay */}
          <div className="absolute inset-0">
            {EBITDA_MONTHLY_TREND.map((d, i) => {
              const left = (i / (EBITDA_MONTHLY_TREND.length - 1)) * 100;
              const top = 100 - (d.value / maxTrend) * 100;
              return (
                <div
                  key={i}
                  className="absolute w-3 h-3 bg-success rounded-full transform -translate-x-1/2 -translate-y-1/2 hover:scale-150 transition-transform cursor-pointer border-2 border-white shadow-sm"
                  style={{ left: `${left}%`, top: `${top}%` }}
                  title={`${d.month}: ${formatCurrencyFull(d.value)}`}
                ></div>
              );
            })}
          </div>

          {/* X-axis labels */}
          <div className="absolute -bottom-8 left-0 right-0 flex justify-between text-xs text-text-muted font-semibold">
            {EBITDA_MONTHLY_TREND.map((d, i) => (
              <span key={i}>{d.month}</span>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t">
          <div className="flex justify-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-success rounded"></div>
              <span className="text-sm text-text-muted">EBITDA Mensual</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-success bg-opacity-20 rounded"></div>
              <span className="text-sm text-text-muted">Área de crecimiento</span>
            </div>
          </div>
        </div>
      </div>

      {/* Insights */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-success bg-opacity-10 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-primary">Tendencia Positiva</h3>
          </div>
          <p className="text-text-muted mb-3">
            El EBITDA ha crecido un <span className="font-bold text-success">69.3%</span> durante el año
          </p>
          <p className="text-sm text-text-muted">
            Desde $4.2M en Enero hasta $7.1M en Diciembre, mostrando un crecimiento sostenido.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-primary">Proyección 2026</h3>
          </div>
          <p className="text-text-muted mb-3">
            Siguiendo la tendencia actual, el EBITDA proyectado para Q1 2026 es de{" "}
            <span className="font-bold text-primary">$7.8M - $8.2M</span>
          </p>
          <p className="text-sm text-text-muted">
            Proyección basada en el crecimiento promedio mensual del 5.2%.
          </p>
        </div>
      </div>

      {/* Info Box */}
      <div className="mt-8 p-6 bg-secondary rounded-lg">
        <h3 className="font-bold text-primary mb-2">¿Qué es el EBITDA?</h3>
        <p className="text-sm text-text-muted">
          <span className="font-semibold">EBITDA</span> (Earnings Before Interest, Taxes, Depreciation and Amortization) 
          representa el resultado operacional de la empresa antes de intereses, impuestos, depreciación y amortización. 
          Es un indicador clave para medir la rentabilidad operativa y la capacidad de generación de flujo de caja de un negocio,
          permitiendo comparar empresas sin considerar su estructura de financiamiento o políticas contables.
        </p>
      </div>
    </div>
  );
}
