"use client";

import Sidebar from "@/components/Sidebar";
import { UserProvider } from "@/contexts/UserContext";
import { CompanyProvider } from "@/contexts/CompanyContext";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserProvider>
      <CompanyProvider>
        <div className="flex min-h-screen" style={{ background: '#f8fafc' }}>
          <Sidebar />
          <main className="flex-1 ml-[260px]" style={{ padding: '32px 40px' }}>
            {children}
          </main>
        </div>
      </CompanyProvider>
    </UserProvider>
  );
}
