"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <aside 
      className="w-[260px] min-h-screen fixed left-0 top-0 flex flex-col text-white"
      style={{
        background: 'linear-gradient(180deg, #0a1628 0%, #111d35 100%)'
      }}
    >
      {/* Logo */}
      <div className="p-6" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <Link href="/" className="flex items-center gap-2">
          <div 
            className="w-10 h-10 bg-white rounded-lg flex items-center justify-center"
            style={{ boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)' }}
          >
            <span style={{ color: '#0a1628', fontWeight: 700, fontSize: '20px' }}>SB</span>
          </div>
          <span className="text-xl font-bold">ScaleBI</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        {/* Main Section */}
        <div className="mb-6">
          <h3 
            className="px-4 mb-2 text-xs font-semibold text-gray-400"
            style={{ 
              textTransform: 'uppercase', 
              letterSpacing: '1px',
              fontSize: '11px' 
            }}
          >
            Principal
          </h3>
          <ul className="space-y-1">
            <li>
              <Link
                href="/dashboard"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive("/dashboard")
                    ? ""
                    : ""
                }`}
                style={
                  isActive("/dashboard")
                    ? {
                        background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                        boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)'
                      }
                    : {}
                }
                onMouseEnter={(e) => {
                  if (!isActive("/dashboard")) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive("/dashboard")) {
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="font-medium">Dashboard</span>
              </Link>
            </li>
            
            <li>
              <Link
                href="/dashboard/upload"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive("/dashboard/upload")
                    ? ""
                    : ""
                }`}
                style={
                  isActive("/dashboard/upload")
                    ? {
                        background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                        boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)'
                      }
                    : {}
                }
                onMouseEnter={(e) => {
                  if (!isActive("/dashboard/upload")) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive("/dashboard/upload")) {
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <span className="font-medium">Cargar Datos</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Reports Section */}
        <div>
          <h3 
            className="px-4 mb-2 text-xs font-semibold text-gray-400"
            style={{ 
              textTransform: 'uppercase', 
              letterSpacing: '1px',
              fontSize: '11px' 
            }}
          >
            Reportes
          </h3>
          <ul className="space-y-1">
            <li>
              <Link
                href="/dashboard/eerr"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive("/dashboard/eerr")
                    ? ""
                    : ""
                }`}
                style={
                  isActive("/dashboard/eerr")
                    ? {
                        background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                        boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)'
                      }
                    : {}
                }
                onMouseEnter={(e) => {
                  if (!isActive("/dashboard/eerr")) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive("/dashboard/eerr")) {
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span className="font-medium">Estado de Resultados</span>
              </Link>
            </li>

            <li>
              <Link
                href="/dashboard/ebitda"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive("/dashboard/ebitda")
                    ? ""
                    : ""
                }`}
                style={
                  isActive("/dashboard/ebitda")
                    ? {
                        background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                        boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)'
                      }
                    : {}
                }
                onMouseEnter={(e) => {
                  if (!isActive("/dashboard/ebitda")) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive("/dashboard/ebitda")) {
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span className="font-medium">Evolución EBITDA</span>
              </Link>
            </li>

            <li>
              <Link
                href="/dashboard/charts"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive("/dashboard/charts")
                    ? ""
                    : ""
                }`}
                style={
                  isActive("/dashboard/charts")
                    ? {
                        background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                        boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)'
                      }
                    : {}
                }
                onMouseEnter={(e) => {
                  if (!isActive("/dashboard/charts")) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive("/dashboard/charts")) {
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span className="font-medium">Gráficas</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* User Info */}
      <div className="p-4" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <div className="flex items-center gap-3 px-4 py-3">
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(255, 255, 255, 0.1)' }}
          >
            <span className="text-sm font-semibold">VH</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold">Victor Hernandez</p>
            <p className="text-xs" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>victor@kirovich.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
            