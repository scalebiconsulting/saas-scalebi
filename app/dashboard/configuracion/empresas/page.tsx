"use client";

import { useCompany } from "@/hooks";
import { Plus, Pencil, Trash2, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function EmpresasPage() {
  const { companies, currentCompany, setCurrentCompany } = useCompany();
  // const [showAddModal, setShowAddModal] = useState(false); // TODO: Implementar modal

  const getCompanyInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-navy-900 tracking-tight mb-2">
            Gestión de Empresas
          </h1>
          <p className="text-sm font-medium text-text-muted">
            Administra las empresas asociadas a tu cuenta
          </p>
        </div>
        <Link
          href="/dashboard/configuracion/empresas/nueva"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Nueva Empresa
        </Link>
      </div>

      {/* Companies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company) => (
          <div
            key={company.id}
            className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all ${
              currentCompany?.id === company.id ? 'ring-2 ring-blue-600' : ''
            }`}
          >
            {/* Header */}
            <div className="flex items-start gap-4 mb-4">
              {company.logo_url ? (
                <Image src={company.logo_url} alt={company.name} width={64} height={64} className="w-16 h-16 rounded-lg object-cover" />
              ) : (
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl font-bold">
                    {getCompanyInitials(company.name)}
                  </span>
                </div>
              )}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-navy-900 truncate mb-1">
                  {company.name}
                </h3>
                <p className="text-sm text-text-muted">RUT: {company.rut}</p>
              </div>
            </div>

            {/* Info */}
            <div className="space-y-2 mb-4">
              {company.address && (
                <div className="flex items-start gap-2 text-sm text-text-muted">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="line-clamp-2">{company.address}</span>
                </div>
              )}
              {company.phone && (
                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>{company.phone}</span>
                </div>
              )}
              {company.email && (
                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate">{company.email}</span>
                </div>
              )}
            </div>

            {/* Badge */}
            {currentCompany?.id === company.id && (
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
                  Empresa Activa
                </span>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-2">
              {currentCompany?.id !== company.id && (
                <button
                  onClick={() => setCurrentCompany(company)}
                  className="flex-1 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium hover:bg-blue-100 transition-colors text-sm"
                >
                  Activar
                </button>
              )}
              <Link
                href={`/dashboard/configuracion/empresas/${company.id}`}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center"
              >
                <Pencil className="w-4 h-4" />
              </Link>
              {companies.length > 1 && (
                <button className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Footer Info */}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-xs text-text-muted">
                Creada el {new Date(company.created_at).toLocaleDateString('es-CL')}
              </p>
            </div>
          </div>
        ))}

        {/* Add Card */}
        <Link
          href="/dashboard/configuracion/empresas/nueva"
          className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border-2 border-dashed border-gray-300 hover:border-blue-500 flex flex-col items-center justify-center min-h-[280px] group"
        >
          <div className="w-16 h-16 rounded-full bg-gray-100 group-hover:bg-blue-50 flex items-center justify-center mb-4 transition-colors">
            <Plus className="w-8 h-8 text-gray-400 group-hover:text-blue-600 transition-colors" />
          </div>
          <p className="text-base font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
            Agregar Nueva Empresa
          </p>
          <p className="text-sm text-text-muted mt-1">
            Configura otra empresa
          </p>
        </Link>
      </div>
    </div>
  );
}
