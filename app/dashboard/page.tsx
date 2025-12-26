"use client";

import Link from "next/link";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Upload, 
  FileText, 
  BarChart3, 
  Download 
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-navy-900 tracking-tight mb-2">
          Dashboard
        </h1>
        <p className="text-sm font-medium text-text-muted">Resumen de tus métricas principales</p>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 border-t-4 border-green-success">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xs font-medium text-text-muted uppercase tracking-wide mb-2">
                Ingresos del Mes
              </h3>
              <p className="text-3xl font-bold text-navy-900 tracking-tight">
                $15.450.000
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#d1fae5] text-green-success flex items-center justify-center">
              <TrendingUp className="w-6 h-6" strokeWidth={2} />
            </div>
          </div>
          <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold bg-[#d1fae5] text-green-success">+12.5% vs mes anterior</span>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 border-t-4 border-red-error">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xs font-medium text-text-muted uppercase tracking-wide mb-2">
                Gastos del Mes
              </h3>
              <p className="text-3xl font-bold text-navy-900 tracking-tight">
                $8.750.000
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#fee2e2] text-red-error flex items-center justify-center">
              <TrendingDown className="w-6 h-6" strokeWidth={2} />
            </div>
          </div>
          <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold bg-[#fee2e2] text-red-error">+5.2% vs mes anterior</span>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 border-t-4 border-blue-accent">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xs font-medium text-text-muted uppercase tracking-wide mb-2">
                Resultado
              </h3>
              <p className="text-3xl font-bold text-green-success tracking-tight">
                $6.700.000
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#d1fae5] text-green-success flex items-center justify-center">
              <DollarSign className="w-6 h-6" strokeWidth={2} />
            </div>
          </div>
          <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold bg-[#d1fae5] text-green-success">43.4% margen</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
        <h2 className="text-base font-semibold text-navy-900 mb-6">
          Acciones Rápidas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link 
            href="/dashboard/upload" 
            className="flex items-center gap-3 p-4 rounded-lg border-2 border-gray-200 hover:border-blue-accent hover:bg-blue-50/50 transition-all cursor-pointer"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-accent to-blue-accent-dark flex items-center justify-center">
              <Upload className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
            <div>
              <p className="font-semibold text-navy-900 text-sm">Cargar Datos</p>
              <p className="text-xs text-text-muted">Sube tu libro de compras</p>
            </div>
          </Link>

          <Link 
            href="/dashboard/eerr" 
            className="flex items-center gap-3 p-4 rounded-lg border-2 border-gray-200 hover:border-blue-accent hover:bg-blue-50/50 transition-all cursor-pointer"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-accent to-blue-accent-dark flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
            <div>
              <p className="font-semibold text-navy-900 text-sm">Ver EERR</p>
              <p className="text-xs text-text-muted">Estado de Resultados</p>
            </div>
          </Link>

          <Link 
            href="/dashboard/charts" 
            className="flex items-center gap-3 p-4 rounded-lg border-2 border-gray-200 hover:border-blue-accent hover:bg-blue-50/50 transition-all cursor-pointer"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-accent to-blue-accent-dark flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
            <div>
              <p className="font-semibold text-navy-900 text-sm">Gráficas</p>
              <p className="text-xs text-text-muted">Visualización de datos</p>
            </div>
          </Link>

          <button 
            className="flex items-center gap-3 p-4 rounded-lg border-2 border-gray-200 hover:border-blue-accent hover:bg-blue-50/50 transition-all cursor-pointer bg-transparent"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-accent to-blue-accent-dark flex items-center justify-center">
              <Download className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
            <div>
              <p className="font-semibold text-navy-900 text-sm">Exportar</p>
              <p className="text-xs text-text-muted">Descargar reportes</p>
            </div>
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-base font-semibold text-navy-900">
            Actividad Reciente
          </h2>
          <span className="text-blue-accent text-xs font-medium animate-pulse">
            • Sincronizado
          </span>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-4 p-4 rounded-lg bg-green-50 border border-green-200 transition-all">
            <div className="w-2 h-2 rounded-full bg-green-success flex-shrink-0"></div>
            <div className="flex-1">
              <p className="font-semibold text-navy-900 text-sm">
                Libro de compras cargado
              </p>
              <p className="text-xs font-medium text-text-muted mt-0.5">
                Período: Noviembre 2025
              </p>
            </div>
            <span className="text-xs font-medium text-text-muted">Hace 2 días</span>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-lg bg-blue-50 border border-blue-200 transition-all">
            <div className="w-2 h-2 rounded-full bg-blue-accent flex-shrink-0"></div>
            <div className="flex-1">
              <p className="font-semibold text-navy-900 text-sm">
                EERR generado
              </p>
              <p className="text-xs font-medium text-text-muted mt-0.5">
                Período: Noviembre 2025
              </p>
            </div>
            <span className="text-xs font-medium text-text-muted">Hace 2 días</span>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-lg bg-blue-50 border border-blue-200 transition-all">
            <div className="w-2 h-2 rounded-full bg-blue-accent flex-shrink-0"></div>
            <div className="flex-1">
              <p className="font-semibold text-navy-900 text-sm">
                Reporte exportado
              </p>
              <p className="text-xs font-medium text-text-muted mt-0.5">
                EERR_Nov_2025.pdf
              </p>
            </div>
            <span className="text-xs font-medium text-text-muted">Hace 3 días</span>
          </div>
        </div>
      </div>
    </div>
  );
}
