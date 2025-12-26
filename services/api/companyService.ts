import { Company } from '@/types';

/**
 * Obtiene todas las empresas de la cuenta del usuario
 * TODO: Conectar con PostgreSQL via API Backend
 * Endpoint: GET /api/companies
 * Auth: Bearer token
 */
export async function getCompanies(): Promise<Company[]> {
  try {
    // TODO: Descomentar cuando el backend esté listo
    // const response = await fetch('/api/companies', {
    //   method: 'GET',
    //   headers: { 
    //     'Authorization': `Bearer ${token}`,
    //     'Content-Type': 'application/json'
    //   }
    // });
    // if (!response.ok) throw new Error('Error al obtener empresas');
    // return response.json();

    // TEMPORAL: Retornar array vacío hasta que backend esté listo
    // Para testing local, puedes descomentar el mock abajo:
    /*
    return [
      {
        id: 'temp_001',
        name: 'Empresa Demo',
        rut: '76.123.456-7',
        admin_user_id: 'temp_usr_001',
        account_id: 'temp_acc_001',
        created_at: new Date(),
        updated_at: new Date(),
      }
    ];
    */
    return [];
  } catch (error) {
    console.error('Error en getCompanies:', error);
    throw error;
  }
}

/**
 * Obtiene una empresa por ID
 * TODO: Conectar con PostgreSQL via API Backend
 * Endpoint: GET /api/companies/:id
 */
export async function getCompanyById(id: string): Promise<Company | null> {
  try {
    // TODO: Descomentar cuando el backend esté listo
    // const response = await fetch(`/api/companies/${id}`, {
    //   method: 'GET',
    //   headers: { 'Authorization': `Bearer ${token}` }
    // });
    // if (!response.ok) return null;
    // return response.json();

    // TEMPORAL: Retornar null hasta que backend esté listo
    console.warn(`getCompanyById(${id}): Backend no conectado`);
    return null;
  } catch (error) {
    console.error('Error en getCompanyById:', error);
    return null;
  }
}

/**
 * Crea una nueva empresa
 * TODO: Conectar con PostgreSQL via API Backend
 * Endpoint: POST /api/companies
 */
export async function createCompany(
  data: Partial<Omit<Company, 'id' | 'created_at' | 'updated_at'>>
): Promise<Company> {
  try {
    // TODO: Descomentar cuando el backend esté listo
    // const response = await fetch('/api/companies', {
    //   method: 'POST',
    //   headers: { 
    //     'Authorization': `Bearer ${token}`,
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // });
    // if (!response.ok) throw new Error('Error al crear empresa');
    // return response.json();

    // TEMPORAL: Simular creación
    console.warn('createCompany: Backend no conectado', { data });
    throw new Error('Backend no disponible. Conecte PostgreSQL primero.');
  } catch (error) {
    console.error('Error en createCompany:', error);
    throw error;
  }
}

/**
 * Actualiza una empresa existente
 * TODO: Conectar con PostgreSQL via API Backend
 * Endpoint: PUT /api/companies/:id
 */
export async function updateCompany(id: string, data: Partial<Company>): Promise<Company> {
  try {
    // TODO: Descomentar cuando el backend esté listo
    // const response = await fetch(`/api/companies/${id}`, {
    //   method: 'PUT',
    //   headers: { 
    //     'Authorization': `Bearer ${token}`,
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // });
    // if (!response.ok) throw new Error('Error al actualizar empresa');
    // return response.json();

    // TEMPORAL: Lanzar error hasta que backend esté listo
    console.warn(`updateCompany(${id}): Backend no conectado`, { data });
    throw new Error('Backend no disponible. Conecte PostgreSQL primero.');
  } catch (error) {
    console.error('Error en updateCompany:', error);
    throw error;
  }
}

/**
 * Elimina una empresa
 * TODO: Conectar con PostgreSQL via API Backend
 * Endpoint: DELETE /api/companies/:id
 */
export async function deleteCompany(id: string): Promise<void> {
  try {
    // TODO: Descomentar cuando el backend esté listo
    // const response = await fetch(`/api/companies/${id}`, {
    //   method: 'DELETE',
    //   headers: { 'Authorization': `Bearer ${token}` }
    // });
    // if (!response.ok) throw new Error('Error al eliminar empresa');

    // TEMPORAL: Lanzar error hasta que backend esté listo
    console.warn(`deleteCompany(${id}): Backend no conectado`);
    throw new Error('Backend no disponible. Conecte PostgreSQL primero.');
  } catch (error) {
    console.error('Error en deleteCompany:', error);
    throw error;
  }
}

/**
 * Sube un logo para la empresa
 * TODO: Conectar con PostgreSQL via API Backend
 * Endpoint: POST /api/companies/:id/logo
 * Usar FormData para enviar archivo
 */
export async function uploadCompanyLogo(companyId: string, file: File): Promise<string> {
  try {
    // TODO: Descomentar cuando el backend esté listo
    // const formData = new FormData();
    // formData.append('logo', file);
    // const response = await fetch(`/api/companies/${companyId}/logo`, {
    //   method: 'POST',
    //   headers: { 'Authorization': `Bearer ${token}` },
    //   body: formData
    // });
    // if (!response.ok) throw new Error('Error al subir logo');
    // const data = await response.json();
    // return data.logo_url; // URL pública desde S3/storage

    // TEMPORAL: Lanzar error hasta que backend esté listo
    console.warn(`uploadCompanyLogo(${companyId}): Backend no conectado`);
    console.log('Archivo a subir:', file.name, file.size);
    throw new Error('Backend no disponible. Configure S3/storage y PostgreSQL primero.');
  } catch (error) {
    console.error('Error en uploadCompanyLogo:', error);
    throw error;
  }
}
