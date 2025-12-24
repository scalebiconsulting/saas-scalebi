import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen" style={{ background: '#f8fafc' }}>
      <Sidebar />
      <main className="flex-1 ml-[260px]" style={{ padding: '32px 40px' }}>
        {children}
      </main>
    </div>
  );
}
