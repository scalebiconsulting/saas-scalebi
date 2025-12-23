import Link from "next/link";

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-primary mb-6">Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-text-muted text-sm font-semibold uppercase">Ingresos del Mes</h3>
            <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <p className="text-3xl font-bold text-primary">$15.450.000</p>
          <p className="text-sm text-success mt-2">+12.5% vs mes anterior</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-danger">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-text-muted text-sm font-semibold uppercase">Gastos del Mes</h3>
            <svg className="w-8 h-8 text-danger" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
            </svg>
          </div>
          <p className="text-3xl font-bold text-primary">$8.750.000</p>
          <p className="text-sm text-danger mt-2">+5.2% vs mes anterior</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-success">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-text-muted text-sm font-semibold uppercase">Resultado</h3>
            <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-3xl font-bold text-success">$6.700.000</p>
          <p className="text-sm text-success mt-2">43.4% margen</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-xl font-bold text-primary mb-4">Acciones Rápidas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/dashboard/upload" className="flex items-center gap-3 p-4 border-2 border-secondary rounded-lg hover:border-primary hover:bg-secondary transition-all">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-primary">Cargar Datos</p>
              <p className="text-xs text-text-muted">Sube tu libro de compras</p>
            </div>
          </Link>

          <Link href="/dashboard/eerr" className="flex items-center gap-3 p-4 border-2 border-secondary rounded-lg hover:border-primary hover:bg-secondary transition-all">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-primary">Ver EERR</p>
              <p className="text-xs text-text-muted">Estado de Resultados</p>
            </div>
          </Link>

          <Link href="/dashboard/charts" className="flex items-center gap-3 p-4 border-2 border-secondary rounded-lg hover:border-primary hover:bg-secondary transition-all">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-primary">Gráficas</p>
              <p className="text-xs text-text-muted">Visualización de datos</p>
            </div>
          </Link>

          <button className="flex items-center gap-3 p-4 border-2 border-secondary rounded-lg hover:border-primary hover:bg-secondary transition-all">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-primary">Exportar</p>
              <p className="text-xs text-text-muted">Descargar reportes</p>
            </div>
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-bold text-primary mb-4">Actividad Reciente</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-secondary rounded-lg">
            <div className="w-2 h-2 bg-success rounded-full"></div>
            <div className="flex-1">
              <p className="font-semibold text-primary">Libro de compras cargado</p>
              <p className="text-sm text-text-muted">Período: Noviembre 2025</p>
            </div>
            <span className="text-sm text-text-muted">Hace 2 días</span>
          </div>

          <div className="flex items-center gap-4 p-4 bg-secondary rounded-lg">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <div className="flex-1">
              <p className="font-semibold text-primary">EERR generado</p>
              <p className="text-sm text-text-muted">Período: Noviembre 2025</p>
            </div>
            <span className="text-sm text-text-muted">Hace 2 días</span>
          </div>

          <div className="flex items-center gap-4 p-4 bg-secondary rounded-lg">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <div className="flex-1">
              <p className="font-semibold text-primary">Reporte exportado</p>
              <p className="text-sm text-text-muted">EERR_Nov_2025.pdf</p>
            </div>
            <span className="text-sm text-text-muted">Hace 3 días</span>
          </div>
        </div>
      </div>
    </div>
  );
}
