import { User } from '@/types';

/**
 * Obtiene el usuario actual autenticado desde sesión
 * TODO: Conectar con PostgreSQL via API Backend
 * Endpoint: GET /api/users/me
 * Auth: Bearer token (desde NextAuth/session)
 */
export async function getCurrentUser(): Promise<User | null> {
  try {
    // TODO: Descomentar cuando el backend esté listo
    // const response = await fetch('/api/users/me', {
    //   method: 'GET',
    //   headers: { 
    //     'Authorization': `Bearer ${token}`,
    //     'Content-Type': 'application/json'
    //   },
    //   credentials: 'include'
    // });
    // if (!response.ok) throw new Error('Usuario no autenticado');
    // return response.json();

    // TEMPORAL: Retornar null hasta que backend esté listo
    console.warn('getCurrentUser: Backend no conectado - retornando null');
    return null;
  } catch (error) {
    console.error('Error en getCurrentUser:', error);
    return null;
  }
}

/**
 * Obtiene un usuario por ID (para cargar admin de empresa)
 * TODO: Conectar con PostgreSQL via API Backend
 * Endpoint: GET /api/users/:id
 */
export async function getUserById(userId: string): Promise<User | null> {
  try {
    // TODO: Descomentar cuando el backend esté listo
    // const response = await fetch(`/api/users/${userId}`, {
    //   method: 'GET',
    //   headers: { 'Authorization': `Bearer ${token}` }
    // });
    // if (!response.ok) return null;
    // return response.json();

    // TEMPORAL: Retornar null hasta que backend esté listo
    console.warn(`getUserById(${userId}): Backend no conectado`);
    return null;
  } catch (error) {
    console.error('Error en getUserById:', error);
    return null;
  }
}

/**
 * Actualiza el perfil del usuario
 * TODO: Conectar con PostgreSQL via API Backend
 * Endpoint: PUT /api/users/:id
 */
export async function updateUserProfile(userId: string, data: Partial<User>): Promise<User> {
  try {
    // TODO: Descomentar cuando el backend esté listo
    // const response = await fetch(`/api/users/${userId}`, {
    //   method: 'PUT',
    //   headers: { 
    //     'Authorization': `Bearer ${token}`,
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // });
    // if (!response.ok) throw new Error('Error al actualizar perfil');
    // return response.json();

    // TEMPORAL: Lanzar error hasta que backend esté listo
    console.warn(`updateUserProfile(${userId}): Backend no conectado`, { data });
    throw new Error('Backend no disponible. Conecte PostgreSQL primero.');
  } catch (error) {
    console.error('Error en updateUserProfile:', error);
    throw error;
  }
}

/**
 * Sube un avatar para el usuario
 * TODO: Conectar con PostgreSQL via API Backend
 * Endpoint: POST /api/users/:id/avatar
 * Usar FormData para enviar archivo
 */
export async function uploadAvatar(userId: string, file: File): Promise<string> {
  try {
    // TODO: Descomentar cuando el backend esté listo
    // const formData = new FormData();
    // formData.append('avatar', file);
    // const response = await fetch(`/api/users/${userId}/avatar`, {
    //   method: 'POST',
    //   headers: { 'Authorization': `Bearer ${token}` },
    //   body: formData
    // });
    // if (!response.ok) throw new Error('Error al subir avatar');
    // const data = await response.json();
    // return data.avatar_url; // URL pública desde S3/storage

    // TEMPORAL: Lanzar error hasta que backend esté listo
    console.warn(`uploadAvatar(${userId}): Backend no conectado`);
    console.log('Archivo a subir:', file.name, file.size);
    throw new Error('Backend no disponible. Configure S3/storage y PostgreSQL primero.');
  } catch (error) {
    console.error('Error en uploadAvatar:', error);
    throw error;
  }
}

/**
 * Cambia la contraseña del usuario
 * TODO: Conectar con PostgreSQL via API Backend
 * Endpoint: POST /api/users/:id/change-password
 */
export async function changePassword(
  userId: string, 
  oldPassword: string, 
  newPassword: string
): Promise<void> {
  try {
    // TODO: Descomentar cuando el backend esté listo
    // const response = await fetch(`/api/users/${userId}/change-password`, {
    //   method: 'POST',
    //   headers: { 
    //     'Authorization': `Bearer ${token}`,
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ oldPassword, newPassword })
    // });
    // if (!response.ok) throw new Error('Error al cambiar contraseña');

    // TEMPORAL: Lanzar error hasta que backend esté listo
    console.warn(`changePassword(${userId}): Backend no conectado`);
    // Note: oldPassword y newPassword se usarían en la request real comentada arriba
    void oldPassword; void newPassword; // Prevent unused vars error
    throw new Error('Backend no disponible. Configure autenticación y PostgreSQL primero.');
  } catch (error) {
    console.error('Error en changePassword:', error);
    throw error;
  }
}
