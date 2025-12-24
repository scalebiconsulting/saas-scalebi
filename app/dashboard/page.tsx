"use client";

import Link from "next/link";

export default function DashboardPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="title" style={{ color: '#0a1628', marginBottom: '8px' }}>
          Dashboard
        </h1>
        <p className="label">Resumen de tus métricas principales</p>
      </div>
      
      {/* Stats Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '32px' }}>
        <div className="dashboard-card card-positive">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="label" style={{ textTransform: 'uppercase', marginBottom: '8px' }}>
                Ingresos del Mes
              </h3>
              <p className="kpi-value" style={{ color: '#0a1628' }}>
                $15.450.000
              </p>
            </div>
            <div className="icon-container icon-success">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
          </div>
          <span className="badge badge-positive">+12.5% vs mes anterior</span>
        </div>

        <div className="dashboard-card card-negative">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="label" style={{ textTransform: 'uppercase', marginBottom: '8px' }}>
                Gastos del Mes
              </h3>
              <p className="kpi-value" style={{ color: '#0a1628' }}>
                $8.750.000
              </p>
            </div>
            <div className="icon-container icon-error">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
              </svg>
            </div>
          </div>
          <span className="badge badge-negative">+5.2% vs mes anterior</span>
        </div>

        <div className="dashboard-card card-primary">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="label" style={{ textTransform: 'uppercase', marginBottom: '8px' }}>
                Resultado
              </h3>
              <p className="kpi-value" style={{ color: '#10b981' }}>
                $6.700.000
              </p>
            </div>
            <div className="icon-container icon-success">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <span className="badge badge-positive">43.4% margen</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="dashboard-card" style={{ marginBottom: '32px' }}>
        <h2 className="subtitle" style={{ color: '#0a1628', marginBottom: '24px' }}>
          Acciones Rápidas
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
          <Link 
            href="/dashboard/upload" 
            className="flex items-center gap-3 p-4 rounded-lg transition-smooth"
            style={{ 
              border: '2px solid #e5e7eb',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#3b82f6';
              e.currentTarget.style.background = 'rgba(59, 130, 246, 0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e5e7eb';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <div 
              className="w-12 h-12 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)' }}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <div>
              <p className="font-semibold" style={{ color: '#0a1628', marginBottom: '2px' }}>Cargar Datos</p>
              <p className="text-xs" style={{ color: '#64748b' }}>Sube tu libro de compras</p>
            </div>
          </Link>

          <Link 
            href="/dashboard/eerr" 
            className="flex items-center gap-3 p-4 rounded-lg transition-smooth"
            style={{ 
              border: '2px solid #e5e7eb',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#3b82f6';
              e.currentTarget.style.background = 'rgba(59, 130, 246, 0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e5e7eb';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <div 
              className="w-12 h-12 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)' }}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold" style={{ color: '#0a1628', marginBottom: '2px' }}>Ver EERR</p>
              <p className="text-xs" style={{ color: '#64748b' }}>Estado de Resultados</p>
            </div>
          </Link>

          <Link 
            href="/dashboard/charts" 
            className="flex items-center gap-3 p-4 rounded-lg transition-smooth"
            style={{ 
              border: '2px solid #e5e7eb',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#3b82f6';
              e.currentTarget.style.background = 'rgba(59, 130, 246, 0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e5e7eb';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <div 
              className="w-12 h-12 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)' }}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold" style={{ color: '#0a1628', marginBottom: '2px' }}>Gráficas</p>
              <p className="text-xs" style={{ color: '#64748b' }}>Visualización de datos</p>
            </div>
          </Link>

          <button 
            className="flex items-center gap-3 p-4 rounded-lg transition-smooth"
            style={{ 
              border: '2px solid #e5e7eb',
              cursor: 'pointer',
              background: 'transparent'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#3b82f6';
              e.currentTarget.style.background = 'rgba(59, 130, 246, 0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e5e7eb';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <div 
              className="w-12 h-12 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)' }}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold" style={{ color: '#0a1628', marginBottom: '2px' }}>Exportar</p>
              <p className="text-xs" style={{ color: '#64748b' }}>Descargar reportes</p>
            </div>
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="dashboard-card">
        <div className="flex items-center justify-between mb-6">
          <h2 className="subtitle" style={{ color: '#0a1628' }}>
            Actividad Reciente
          </h2>
          <span className="sync-indicator" style={{ color: '#3b82f6', fontSize: '12px', fontWeight: 500 }}>
            • Sincronizado
          </span>
        </div>
        <div className="space-y-3">
          <div 
            className="flex items-center gap-4 p-4 rounded-lg transition-smooth"
            style={{ background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)' }}
          >
            <div 
              className="w-2 h-2 rounded-full"
              style={{ background: '#10b981' }}
            ></div>
            <div className="flex-1">
              <p className="font-semibold" style={{ color: '#0a1628', fontSize: '14px' }}>
                Libro de compras cargado
              </p>
              <p className="label" style={{ marginTop: '2px' }}>
                Período: Noviembre 2025
              </p>
            </div>
            <span className="label">Hace 2 días</span>
          </div>

          <div 
            className="flex items-center gap-4 p-4 rounded-lg transition-smooth"
            style={{ background: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.2)' }}
          >
            <div 
              className="w-2 h-2 rounded-full"
              style={{ background: '#3b82f6' }}
            ></div>
            <div className="flex-1">
              <p className="font-semibold" style={{ color: '#0a1628', fontSize: '14px' }}>
                EERR generado
              </p>
              <p className="label" style={{ marginTop: '2px' }}>
                Período: Noviembre 2025
              </p>
            </div>
            <span className="label">Hace 2 días</span>
          </div>

          <div 
            className="flex items-center gap-4 p-4 rounded-lg transition-smooth"
            style={{ background: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.2)' }}
          >
            <div 
              className="w-2 h-2 rounded-full"
              style={{ background: '#3b82f6' }}
            ></div>
            <div className="flex-1">
              <p className="font-semibold" style={{ color: '#0a1628', fontSize: '14px' }}>
                Reporte exportado
              </p>
              <p className="label" style={{ marginTop: '2px' }}>
                EERR_Nov_2025.pdf
              </p>
            </div>
            <span className="label">Hace 3 días</span>
          </div>
        </div>
      </div>
    </div>
  );
}
