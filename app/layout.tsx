import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ScaleBI - Estado de Resultados Automático",
  description: "Genera tu Estado de Resultados automáticamente desde tu libro de compras del SII",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased`} style={{ fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
