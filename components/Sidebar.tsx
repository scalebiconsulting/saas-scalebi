"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  BarChart3,
  TrendingUp,
  FileText,
  Layers,
  Settings,
  ChevronDown,
  DollarSign,
  Percent,
  BarChart2,
  PieChart,
  Users,
  Activity,
  Package,
  Calendar,
  CalendarRange,
  CalendarClock,
  Wand2,
  Users2,
  Database,
  Building2,
  Check
} from "lucide-react";
import NavItem from "./NavItem";
import NavSection from "./NavSection";
import NavItemWithSubmenu from "./NavItemWithSubmenu";
import SubMenuItem from "./SubMenuItem";
import { useCompany } from "@/hooks";

export default function Sidebar() {
  const { currentCompany, currentAdmin, companies, setCurrentCompany } = useCompany();
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);

  // Generate initials from name
  const getUserInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getCompanyInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <aside
      className="w-[260px] h-screen fixed left-0 top-0 flex flex-col text-white"
      style={{
        background: 'linear-gradient(180deg, #0a1628 0%, #111d35 100%)'
      }}
    >
      {/* Logo */}
      <div className="p-6" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <Link href="/" className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ background: '#3b82f6' }}
          >
            <span style={{ color: '#ffffff', fontWeight: 700, fontSize: '16px' }}>SB</span>
          </div>
          <span className="text-xl font-bold">ScaleBI</span>
        </Link>
      </div>

      {/* Empresa Activa */}
      <div className="p-4 relative" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <h3
          className="px-2 mb-2 text-xs font-semibold"
          style={{
            color: 'rgba(255, 255, 255, 0.5)',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            fontSize: '11px'
          }}
        >
          EMPRESA ACTIVA
        </h3>
        <button
          onClick={() => setShowCompanyDropdown(!showCompanyDropdown)}
          className="w-full px-4 py-3 rounded-lg flex items-center gap-3 hover:bg-white/10 transition-colors"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          {currentCompany?.logo_url ? (
            <Image src={currentCompany.logo_url} alt={currentCompany.name} width={32} height={32} className="w-8 h-8 rounded" />
          ) : (
            <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-xs font-bold">
              {currentCompany ? getCompanyInitials(currentCompany.name) : 'ED'}
            </div>
          )}
          <div className="flex-1 text-left">
            <span className="text-sm font-medium block truncate">
              {currentCompany?.name || 'Cargando...'}
            </span>
            {currentCompany?.rut && (
              <span className="text-xs opacity-60">{currentCompany.rut}</span>
            )}
          </div>
          <ChevronDown className={`w-4 h-4 transition-transform ${showCompanyDropdown ? 'rotate-180' : ''}`} />
        </button>

        {/* Dropdown */}
        {showCompanyDropdown && (
          <div 
            className="absolute left-4 right-4 mt-2 bg-navy-800 rounded-lg shadow-xl border border-white/10 z-50 max-h-64 overflow-y-auto"
            style={{ background: '#1a2744' }}
          >
            {companies.map((company) => (
              <button
                key={company.id}
                onClick={() => {
                  setCurrentCompany(company);
                  setShowCompanyDropdown(false);
                }}
                className="w-full px-4 py-3 flex items-center gap-3 hover:bg-white/10 transition-colors text-left"
              >
                {company.logo_url ? (
                  <Image src={company.logo_url} alt={company.name} width={32} height={32} className="w-8 h-8 rounded" />
                ) : (
                  <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-xs font-bold">
                    {getCompanyInitials(company.name)}
                  </div>
                )}
                <div className="flex-1">
                  <span className="text-sm font-medium block">{company.name}</span>
                  <span className="text-xs opacity-60">{company.rut}</span>
                </div>
                {currentCompany?.id === company.id && (
                  <Check className="w-4 h-4 text-green-400" />
                )}
              </button>
            ))}
            <Link
              href="/dashboard/configuracion/empresas"
              onClick={() => setShowCompanyDropdown(false)}
              className="w-full px-4 py-3 flex items-center gap-3 hover:bg-white/10 transition-colors border-t border-white/10"
            >
              <Building2 className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium text-blue-400">Gestionar Empresas</span>
            </Link>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-hide relative z-10">
        <NavSection title="ANÁLISIS FINANCIERO">
          <NavItemWithSubmenu icon={BarChart3} label="Gráficos" basePath="/dashboard/charts">
            <SubMenuItem href="/dashboard/charts/tendencia-ingresos" icon={TrendingUp} label="Tendencia Ingresos" />
            <SubMenuItem href="/dashboard/charts/ebitda" icon={DollarSign} label="EBITDA" />
            <SubMenuItem href="/dashboard/charts/margen-bruto" icon={Percent} label="Margen Bruto" />
            <SubMenuItem href="/dashboard/charts/gastos-fijos-variables" icon={BarChart2} label="Gastos fijos vs variables" />
            <SubMenuItem href="/dashboard/charts/gastos-categoria" icon={PieChart} label="Gastos por Categoría" />
            <SubMenuItem href="/dashboard/charts/detalle-rrhh" icon={Users} label="Detalle RRHH" />
            <SubMenuItem href="/dashboard/charts/flujo-mensual" icon={Activity} label="Flujo Mensual" />
            <SubMenuItem href="/dashboard/charts/tipo-proveedores" icon={Package} label="Tipo Proveedores" />
          </NavItemWithSubmenu>
          
          <NavItemWithSubmenu icon={TrendingUp} label="Comparativos" basePath="/dashboard/comparativos">
            <SubMenuItem href="/dashboard/comparativos/mes-vs-mes" icon={Calendar} label="Mes vs Mes" />
            <SubMenuItem href="/dashboard/comparativos/analisis-trimestral" icon={CalendarRange} label="Análisis trimestral" />
            <SubMenuItem href="/dashboard/comparativos/ano-vs-ano" icon={CalendarClock} label="Año vs Año" />
          </NavItemWithSubmenu>
        </NavSection>

        <NavSection title="REPORTES">
          <NavItem href="/dashboard/eerr" icon={FileText} label="Estado de Resultados" />
        </NavSection>

        <NavSection title="GESTIÓN DE DATOS">
          <NavItem href="/dashboard/upload" icon={Layers} label="Clasificador Facturas" />
          <SubMenuItem href="/dashboard/configuracion/reglas-clasificacion" icon={Wand2} label="Reglas Auto.Clasificación" />
          <SubMenuItem href="/dashboard/configuracion/proveedores-frecuentes" icon={Users2} label="Proveedores Frecuentes" />
          <SubMenuItem href="/dashboard/configuracion/respaldos" icon={Database} label="Respaldos" />

        </NavSection>

        <NavSection title="SISTEMA">
          <NavItemWithSubmenu icon={Settings} label="Configuración" basePath="/dashboard/configuracion">
            <SubMenuItem href="/dashboard/configuracion/empresas" icon={Building2} label="Empresas" />
            <SubMenuItem href="/dashboard/configuracion/perfil" icon={Users} label="Mi Perfil" />
          </NavItemWithSubmenu>
        </NavSection>
      </nav>

      {/* User Info - Admin de la empresa activa */}
      <div className="p-4 relative z-0" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <Link href="/dashboard/configuracion/perfil" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors">
          {currentAdmin?.avatar_url ? (
            <Image src={currentAdmin.avatar_url} alt={currentAdmin.name} width={40} height={40} className="w-10 h-10 rounded-full" />
          ) : (
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(255, 255, 255, 0.1)' }}
            >
              <span className="text-sm font-semibold">
                {currentAdmin ? getUserInitials(currentAdmin.name) : '??'}
              </span>
            </div>
          )}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold truncate">{currentAdmin?.name || 'Cargando...'}</p>
            <p className="text-xs truncate" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
              {currentAdmin?.email || 'admin@empresa.cl'}
            </p>
          </div>
        </Link>
      </div>
    </aside>
  );
}
