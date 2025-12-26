"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useParams } from "next/navigation";
import { ArrowLeft, Save, Upload, X, Building2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useCompany } from "@/hooks";
import { Company } from "@/types";
import { getCompanyById, updateCompany, uploadCompanyLogo } from "@/services/api/companyService";

export default function EditCompanyPage() {
  const router = useRouter();
  const params = useParams();
  const { refreshCompanies } = useCompany();
  
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [company, setCompany] = useState<Company | null>(null);
  const [previewLogo, setPreviewLogo] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Form fields
  const [name, setName] = useState("");
  const [rut, setRut] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const loadCompany = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getCompanyById(params.id as string);
      if (data) {
        setCompany(data);
        setName(data.name);
        setRut(data.rut);
        setAddress(data.address || "");
        setPhone(data.phone || "");
        setEmail(data.email || "");
        setPreviewLogo(data.logo_url || null);
      } else {
        setError("Empresa no encontrada");
      }
    } catch (error) {
      console.error("Error al cargar empresa:", error);
      setError("No se pudo cargar la empresa");
    } finally {
      setLoading(false);
    }
  }, [params.id]);

  useEffect(() => {
    if (params.id) {
      loadCompany();
    }
  }, [params.id, loadCompany]);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validar tipo
    if (!file.type.startsWith('image/')) {
      setError('El archivo debe ser una imagen');
      return;
    }

    // Validar tamaño (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('La imagen debe pesar menos de 5MB');
      return;
    }

    setError(null);
    setSelectedFile(file);
    
    // Generar preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewLogo(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveLogo = () => {
    setSelectedFile(null);
    setPreviewLogo(company?.logo_url || null);
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!company) return;

    try {
      setSaving(true);
      setError(null);

      // Subir logo si hay uno nuevo
      let logoUrl = company.logo_url;
      if (selectedFile) {
        logoUrl = await uploadCompanyLogo(company.id, selectedFile);
      }

      // Actualizar empresa
      await updateCompany(company.id, {
        name,
        rut,
        address,
        phone,
        email,
        logo_url: logoUrl,
      });

      // Refrescar lista de empresas
      await refreshCompanies();

      // Redirigir
      router.push('/dashboard/configuracion/empresas');
    } catch (error) {
      console.error("Error al guardar:", error);
      setError("No se pudo guardar los cambios");
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-text-muted">Cargando empresa...</p>
        </div>
      </div>
    );
  }

  if (!company) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 mb-4">Empresa no encontrada</p>
        <Link href="/dashboard/configuracion/empresas" className="text-blue-600 hover:underline">
          Volver a la lista
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/dashboard/configuracion/empresas"
          className="inline-flex items-center gap-2 text-text-muted hover:text-navy-900 mb-4 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a empresas
        </Link>
        <h1 className="text-3xl font-bold text-navy-900 tracking-tight mb-2">
          Editar Empresa
        </h1>
        <p className="text-sm font-medium text-text-muted">
          Actualiza la información de tu empresa
        </p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {error}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm p-8">
        {/* Logo Upload */}
        <div className="mb-8">
          <label className="block text-sm font-semibold text-navy-900 mb-3">
            Logo de la empresa
          </label>
          <div className="flex items-start gap-6">
            {/* Preview */}
            <div className="relative">
              <input
                type="file"
                id="logo-upload"
                accept="image/*"
                onChange={handleImageSelect}
                className="hidden"
              />
              {previewLogo ? (
                <div className="relative group">
                  <Image
                    src={previewLogo}
                    alt="Logo preview"
                    width={128}
                    height={128}
                    className="w-32 h-32 rounded-lg object-cover border-2 border-gray-200"
                  />
                  {selectedFile && (
                    <button
                      type="button"
                      onClick={handleRemoveLogo}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ) : (
                <label
                  htmlFor="logo-upload"
                  className="w-32 h-32 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center cursor-pointer hover:from-blue-700 hover:to-blue-800 transition-all hover:shadow-lg"
                >
                  <Building2 className="w-16 h-16 text-white" strokeWidth={1.5} />
                </label>
              )}
            </div>

            {/* Upload Button */}
            <div className="flex-1">
              <label
                htmlFor="logo-upload"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
              >
                <Upload className="w-4 h-4" />
                Cambiar logo
              </label>
              <p className="text-xs text-text-muted mt-2">
                Formato: JPG, PNG. Tamaño máximo: 5MB
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Nombre */}
          <div className="md:col-span-2">
            <label htmlFor="name" className="block text-sm font-semibold text-navy-900 mb-2">
              Nombre de la empresa <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
              placeholder="Ej: Comercial del Sur SpA"
            />
          </div>

          {/* RUT */}
          <div>
            <label htmlFor="rut" className="block text-sm font-semibold text-navy-900 mb-2">
              RUT <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="rut"
              value={rut}
              onChange={(e) => setRut(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
              placeholder="Ej: 76.123.456-7"
            />
          </div>

          {/* Teléfono */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-navy-900 mb-2">
              Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
              placeholder="Ej: +56 9 1234 5678"
            />
          </div>

          {/* Email */}
          <div className="md:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold text-navy-900 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
              placeholder="Ej: contacto@empresa.cl"
            />
          </div>

          {/* Dirección */}
          <div className="md:col-span-2">
            <label htmlFor="address" className="block text-sm font-semibold text-navy-900 mb-2">
              Dirección
            </label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
              placeholder="Ej: Av. Providencia 1234, Providencia, Santiago"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-4 mt-8 pt-6 border-t border-gray-200">
          <Link
            href="/dashboard/configuracion/empresas"
            className="px-6 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors"
          >
            Cancelar
          </Link>
          <button
            type="submit"
            disabled={saving || !name || !rut}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
          >
            {saving ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Guardando...
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                Guardar cambios
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
