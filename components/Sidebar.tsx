"use client";

import Link from "next/link";
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
  Package
} from "lucide-react";
import NavItem from "./NavItem";
import NavSection from "./NavSection";
import NavItemWithSubmenu from "./NavItemWithSubmenu";
import SubMenuItem from "./SubMenuItem";

export default function Sidebar() {
  return (
    <aside 
      className="w-[260px] min-h-screen fixed left-0 top-0 flex flex-col text-white"
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
      <div className="p-4" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
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
        <div 
          className="px-4 py-3 rounded-lg flex items-center justify-between cursor-pointer"
          style={{ 
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <span className="text-sm font-medium">Empresa Demo SpA</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto space-y-6">
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
          <NavItem href="/dashboard/comparativos" icon={TrendingUp} label="Comparativos" />
        </NavSection>

        <NavSection title="REPORTES">
          <NavItem href="/dashboard/eerr" icon={FileText} label="Estado de Resultados" />
        </NavSection>

        <NavSection title="GESTIÓN DE DATOS">
          <NavItem href="/dashboard/upload" icon={Layers} label="Clasificador Facturas" badge={212} />
        </NavSection>

        <NavSection title="SISTEMA">
          <NavItem href="/dashboard/configuracion" icon={Settings} label="Configuración" />
        </NavSection>
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
