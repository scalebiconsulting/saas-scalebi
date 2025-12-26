export interface Company {
  id: string;
  name: string;
  rut: string;
  logo_url?: string;
  address?: string;
  phone?: string;
  email?: string;
  admin_user_id: string;
  account_id: string;
  created_at: Date;
  updated_at: Date;
}

export interface CompanyDetails extends Company {
  website?: string;
  industry?: string;
}

export interface CompanyContextType {
  currentCompany: Company | null;
  companies: Company[];
  currentAdmin: User | null;
  setCurrentCompany: (company: Company) => void;
  refreshCompanies: () => Promise<void>;
  isLoading: boolean;
}


interface User {
  id: string;
  name: string;
  email: string;
  avatar_url?: string;
  phone?: string;
  role: 'admin' | 'user';
}
