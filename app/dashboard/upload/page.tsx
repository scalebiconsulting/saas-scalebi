"use client";

import { useState } from "react";
import Link from "next/link";


export default function UploadPage() {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setUploadedFile(files[0].name);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setUploadedFile(files[0].name);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-primary mb-2">Cargar Libro de Compras</h1>
      <p className="text-text-muted mb-8">Sube tu archivo del SII en formato Excel (.xlsx) o CSV</p>

      {/* Upload Area */}
      <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`border-4 border-dashed rounded-lg p-12 text-center transition-all ${
            isDragging
              ? "border-primary bg-secondary"
              : "border-gray-300 hover:border-primary"
          }`}
        >
          <div className="flex flex-col items-center gap-4">
            <svg
              className={`w-20 h-20 ${isDragging ? "text-primary" : "text-text-muted"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <div>
              <p className="text-xl font-semibold text-primary mb-2">
                Arrastra tu archivo aquí
              </p>
              <p className="text-text-muted mb-4">o</p>
              <label className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold cursor-pointer hover:bg-primary-hover transition-colors">
                Seleccionar Archivo
                <input
                  type="file"
                  className="hidden"
                  accept=".xlsx,.xls,.csv"
                  onChange={handleFileSelect}
                />
              </label>
            </div>
            <p className="text-sm text-text-muted">
              Formatos aceptados: .xlsx, .xls, .csv (Máx. 10MB)
            </p>
          </div>
        </div>

        {/* File Info */}
        {uploadedFile && (
          <div className="mt-6 p-4 bg-secondary rounded-lg border-l-4 border-success">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <svg
                  className="w-8 h-8 text-success"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <p className="font-semibold text-primary">{uploadedFile}</p>
                  <p className="text-sm text-text-muted">Archivo listo para procesar</p>
                </div>
              </div>
              <button
                onClick={() => setUploadedFile(null)}
                className="text-danger hover:text-red-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        {uploadedFile && (
          <div className="mt-6 flex gap-4">
            <button className="flex-1 bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-hover transition-colors">
              Procesar Archivo
            </button>
            <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-secondary transition-colors">
              Cancelar
            </button>
          </div>
        )}
      </div>

      {/* Instructions */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-bold text-primary mb-4">Instrucciones</h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
              1
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-1">Descarga tu libro de compras del SII</h3>
              <p className="text-text-muted">
                Accede al portal del SII y descarga tu libro de compras en formato Excel o CSV
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
              2
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-1">Sube el archivo a ScaleBI</h3>
              <p className="text-text-muted">
                Arrastra el archivo a la zona de carga o selecciónalo desde tu computador
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
              3
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-1">Procesa y visualiza</h3>
              <p className="text-text-muted">
                El sistema procesará automáticamente tu archivo y generará el Estado de Resultados
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Previous Uploads */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-bold text-primary mb-4">Archivos Procesados</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">Archivo</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Fecha de Carga</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Período</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Estado</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-secondary">
                <td className="px-6 py-4 text-sm text-primary">libro_compras_nov_2025.xlsx</td>
                <td className="px-6 py-4 text-sm text-text-muted">20 Dic 2025</td>
                <td className="px-6 py-4 text-sm text-text-muted">Noviembre 2025</td>
                <td className="px-6 py-4">
                  <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-success">
                    Procesado
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <Link href="/dashboard/eerr" className="text-primary hover:text-primary-hover font-semibold">
                    Ver EERR
                  </Link>
                </td>
              </tr>
              <tr className="hover:bg-secondary">
                <td className="px-6 py-4 text-sm text-primary">libro_compras_oct_2025.xlsx</td>
                <td className="px-6 py-4 text-sm text-text-muted">15 Nov 2025</td>
                <td className="px-6 py-4 text-sm text-text-muted">Octubre 2025</td>
                <td className="px-6 py-4">
                  <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-success">
                    Procesado
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <Link href="/dashboard/eerr" className="text-primary hover:text-primary-hover font-semibold">
                    Ver EERR
                  </Link>
                </td>
              </tr>
              <tr className="hover:bg-secondary">
                <td className="px-6 py-4 text-sm text-primary">libro_compras_sep_2025.xlsx</td>
                <td className="px-6 py-4 text-sm text-text-muted">10 Oct 2025</td>
                <td className="px-6 py-4 text-sm text-text-muted">Septiembre 2025</td>
                <td className="px-6 py-4">
                  <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-success">
                    Procesado
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <Link href="/dashboard/eerr" className="text-primary hover:text-primary-hover font-semibold">
                    Ver EERR
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
