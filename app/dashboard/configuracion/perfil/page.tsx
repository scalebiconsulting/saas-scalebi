"use client";

import { useState } from "react";
import { useUser } from "@/hooks";
import { Save, Camera, Shield, Key, X, Eye, EyeOff, User } from "lucide-react";
import Image from "next/image";

export default function PerfilPage() {
  const { user, refreshUser } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  
  // Form state
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.phone || "");
  
  // Avatar state
  const [previewAvatar, setPreviewAvatar] = useState<string | null>(user?.avatar_url || null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [avatarError, setAvatarError] = useState<string | null>(null);

  // Password state
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [savingPassword, setSavingPassword] = useState(false);

  const handleAvatarSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validar tipo
    if (!file.type.startsWith('image/')) {
      setAvatarError('El archivo debe ser una imagen');
      return;
    }

    // Validar tamaño (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setAvatarError('La imagen debe pesar menos de 5MB');
      return;
    }

    setAvatarError(null);
    setSelectedFile(file);
    
    // Generar preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewAvatar(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveAvatar = () => {
    setSelectedFile(null);
    setPreviewAvatar(user?.avatar_url || null);
    setAvatarError(null);
  };

  const handleSave = async () => {
    // TODO: Implementar guardado con API
    console.log("Guardar perfil:", { name, email, phone });
    
    // Si hay avatar nuevo, subirlo
    if (selectedFile) {
      console.log("Subir avatar:", selectedFile);
      // TODO: await uploadAvatar(selectedFile);
    }
    
    // TODO: await updateUserProfile({ name, email, phone });
    await refreshUser();
    setIsEditing(false);
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError(null);

    // Validaciones
    if (newPassword.length < 8) {
      setPasswordError("La contraseña debe tener al menos 8 caracteres");
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordError("Las contraseñas no coinciden");
      return;
    }

    try {
      setSavingPassword(true);
      // TODO: await changePassword(oldPassword, newPassword);
      console.log("Cambiar contraseña");
      
      // Cerrar modal y limpiar
      setShowPasswordModal(false);
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      console.error("Error al cambiar contraseña:", err);
      setPasswordError("Error al cambiar la contraseña");
    } finally {
      setSavingPassword(false);
    }
  };

  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-navy-900 tracking-tight mb-2">
          Mi Perfil
        </h1>
        <p className="text-sm font-medium text-text-muted">
          Gestiona tu información personal y configuración de seguridad
        </p>
      </div>

      {avatarError && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {avatarError}
        </div>
      )}

      {/* Profile Card */}
      <div className="bg-white rounded-2xl shadow-sm p-8 mb-6">
        {/* Avatar Section */}
        <div className="flex items-start gap-6 mb-8 pb-8 border-b border-gray-200">
          <div className="relative group">
            <input
              type="file"
              id="avatar-upload"
              accept="image/*"
              onChange={handleAvatarSelect}
              className="hidden"
            />
            {previewAvatar ? (
              <div className="relative">
                <Image
                  src={previewAvatar}
                  alt={user?.name || "Avatar"}
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-full object-cover"
                />
                {selectedFile && isEditing && (
                  <button
                    type="button"
                    onClick={handleRemoveAvatar}
                    className="absolute -top-1 -right-1 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            ) : (
              <label
                htmlFor="avatar-upload"
                className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center cursor-pointer hover:from-blue-700 hover:to-blue-800 transition-all group-hover:shadow-lg"
              >
                <User className="w-12 h-12 text-white" strokeWidth={1.5} />
              </label>
            )}
            {isEditing && previewAvatar && (
              <label
                htmlFor="avatar-upload"
                className="absolute bottom-0 right-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors shadow-md cursor-pointer"
              >
                <Camera className="w-4 h-4" />
              </label>
            )}
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-navy-900 mb-1">{user?.name}</h2>
            <p className="text-text-muted mb-2">{user?.email}</p>
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
              {user?.role === 'admin' ? 'Administrador' : 'Usuario'}
            </span>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {/* Nombre */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-navy-900 mb-2">
                Nombre completo
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={!isEditing}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all disabled:bg-gray-50 disabled:text-gray-500"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-navy-900 mb-2">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={!isEditing}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all disabled:bg-gray-50 disabled:text-gray-500"
              />
            </div>

            {/* Teléfono */}
            <div className="md:col-span-1">
              <label htmlFor="phone" className="block text-sm font-semibold text-navy-900 mb-2">
                Teléfono (opcional)
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={!isEditing}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all disabled:bg-gray-50 disabled:text-gray-500"
                placeholder="9 1234 5678"
              />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-4">
          {isEditing ? (
            <>
              <button
                onClick={() => {
                  setIsEditing(false);
                  handleRemoveAvatar();
                }}
                className="px-6 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleSave}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                Guardar cambios
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Editar perfil
            </button>
          )}
        </div>
      </div>

      {/* Security Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Password */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
              <Key className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-navy-900 mb-2">
                Cambiar Contraseña
              </h3>
              <p className="text-sm text-text-muted mb-4">
                Actualiza tu contraseña regularmente para mantener tu cuenta segura
              </p>
              <button 
                onClick={() => setShowPasswordModal(true)}
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Cambiar contraseña →
              </button>
            </div>
          </div>
        </div>

        {/* 2FA */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-navy-900 mb-2">
                Autenticación de dos factores
              </h3>
              <p className="text-sm text-text-muted mb-4">
                Añade una capa extra de seguridad a tu cuenta
              </p>
              <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                Configurar 2FA →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Password Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-navy-900">Cambiar Contraseña</h2>
              <button
                onClick={() => setShowPasswordModal(false)}
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {passwordError && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {passwordError}
              </div>
            )}

            <form onSubmit={handlePasswordChange} className="space-y-4">
              {/* Contraseña actual */}
              <div>
                <label className="block text-sm font-semibold text-navy-900 mb-2">
                  Contraseña actual
                </label>
                <div className="relative">
                  <input
                    type={showOldPassword ? "text" : "password"}
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    required
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                  <button
                    type="button"
                    onClick={() => setShowOldPassword(!showOldPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showOldPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Nueva contraseña */}
              <div>
                <label className="block text-sm font-semibold text-navy-900 mb-2">
                  Nueva contraseña
                </label>
                <div className="relative">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    minLength={8}
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                <p className="text-xs text-text-muted mt-1">Mínimo 8 caracteres</p>
              </div>

              {/* Confirmar contraseña */}
              <div>
                <label className="block text-sm font-semibold text-navy-900 mb-2">
                  Confirmar nueva contraseña
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowPasswordModal(false)}
                  className="flex-1 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={savingPassword}
                  className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                >
                  {savingPassword ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Guardando...
                    </>
                  ) : (
                    <>
                      <Key className="w-4 h-4" />
                      Cambiar
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
