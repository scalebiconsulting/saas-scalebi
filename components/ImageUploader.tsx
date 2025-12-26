"use client";

import { useRef, useState } from 'react';
import { Upload, X } from 'lucide-react';
import Image from 'next/image';

interface ImageUploaderProps {
  currentImage?: string;
  onImageSelect: (file: File) => void;
  onImageRemove?: () => void;
  label?: string;
  accepts?: string;
  maxSizeMB?: number;
}

export default function ImageUploader({
  currentImage,
  onImageSelect,
  onImageRemove,
  label = 'Subir imagen',
  accepts = 'image/png, image/jpeg, image/jpg',
  maxSizeMB = 5
}: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | undefined>(currentImage);
  const [error, setError] = useState<string>('');

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validar tamaño
    const sizeMB = file.size / (1024 * 1024);
    if (sizeMB > maxSizeMB) {
      setError(`El archivo debe ser menor a ${maxSizeMB}MB`);
      return;
    }

    // Validar tipo
    if (!file.type.startsWith('image/')) {
      setError('Solo se permiten imágenes');
      return;
    }

    setError('');
    
    // Crear preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    // Enviar al padre
    onImageSelect(file);
  };

  const handleRemove = () => {
    setPreview(undefined);
    setError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    onImageRemove?.();
  };

  return (
    <div className="space-y-3">
      {preview ? (
        <div className="relative inline-block">
          <Image
            src={preview}
            alt="Preview"
            width={128}
            height={128}
            className="w-32 h-32 rounded-lg object-cover border-2 border-gray-200"
          />
          <button
            type="button"
            onClick={handleRemove}
            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center hover:border-blue-500 hover:bg-blue-50 transition-all group"
        >
          <Upload className="w-8 h-8 text-gray-400 group-hover:text-blue-500 mb-2" />
          <span className="text-xs text-gray-500 group-hover:text-blue-600">{label}</span>
        </button>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept={accepts}
        onChange={handleFileSelect}
        className="hidden"
      />

      {error && (
        <p className="text-xs text-red-600">{error}</p>
      )}
      
      <p className="text-xs text-text-muted">
        PNG, JPG hasta {maxSizeMB}MB
      </p>
    </div>
  );
}
