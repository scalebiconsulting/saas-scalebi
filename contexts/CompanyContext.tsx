"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { Company, CompanyContextType, User } from '@/types';
import { getCompanies } from '@/services/api/companyService';
import { getUserById } from '@/services/api/userService';

const CompanyContext = createContext<CompanyContextType | undefined>(undefined);

export function CompanyProvider({ children }: { children: ReactNode }) {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [currentCompany, setCurrentCompany] = useState<Company | null>(null);
  const [currentAdmin, setCurrentAdmin] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadCompanies = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await getCompanies();
      setCompanies(data);
      
      // Set first company as default if none selected
      if (!currentCompany && data.length > 0) {
        const savedCompanyId = localStorage.getItem('currentCompanyId');
        const defaultCompany = savedCompanyId 
          ? data.find(c => c.id === savedCompanyId) || data[0]
          : data[0];
        setCurrentCompany(defaultCompany);
      }
    } catch (error) {
      console.error('Error loading companies:', error);
    } finally {
      setIsLoading(false);
    }
  }, [currentCompany]);

  const refreshCompanies = useCallback(async () => {
    await loadCompanies();
  }, [loadCompanies]);

  // Cargar admin cuando cambia currentCompany
  useEffect(() => {
    if (currentCompany?.admin_user_id) {
      getUserById(currentCompany.admin_user_id)
        .then(setCurrentAdmin)
        .catch(err => console.error('Error loading admin:', err));
    } else {
      setCurrentAdmin(null);
    }
  }, [currentCompany]);

  useEffect(() => {
    loadCompanies();
  }, [loadCompanies]);

  const handleSetCurrentCompany = (company: Company) => {
    setCurrentCompany(company);
    localStorage.setItem('currentCompanyId', company.id);
  };

  return (
    <CompanyContext.Provider 
      value={{ 
        currentCompany, 
        companies, 
        currentAdmin,
        setCurrentCompany: handleSetCurrentCompany,
        refreshCompanies,
        isLoading 
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
}

export function useCompany() {
  const context = useContext(CompanyContext);
  if (context === undefined) {
    throw new Error('useCompany must be used within a CompanyProvider');
  }
  return context;
}
