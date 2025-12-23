"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <aside className="w-64 bg-primary text-white min-h-screen fixed left-0 top-0 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-primary-hover">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <span className="text-primary font-bold text-xl">SB</span>
          </div>
          <span className="text-xl font-bold">ScaleBI</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <Link
              href="/dashboard"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive("/dashboard")
                  ? "bg-primary-hover text-white"
                  : "hover:bg-primary-hover"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Dashboard</span>
            </Link>
          </li>
          
          <li>
            <Link
              href="/dashboard/upload"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive("/dashboard/upload")
                  ? "bg-primary-hover text-white"
                  : "hover:bg-primary-hover"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <span>Cargar Datos</span>
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/eerr"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive("/dashboard/eerr")
                  ? "bg-primary-hover text-white"
                  : "hover:bg-primary-hover"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <span>Estado de Resultados</span>
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/ebitda"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive("/dashboard/ebitda")
                  ? "bg-primary-hover text-white"
                  : "hover:bg-primary-hover"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span>Evolución EBITDA</span>
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/charts"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive("/dashboard/charts")
                  ? "bg-primary-hover text-white"
                  : "hover:bg-primary-hover"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span>Gráficas</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* User Info */}
      <div className="p-4 border-t border-primary-hover">
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="w-10 h-10 bg-primary-hover rounded-full flex items-center justify-center">
            <span className="text-sm font-semibold">US</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold">Usuario</p>
            <p className="text-xs text-gray-300">usuario@empresa.cl</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
