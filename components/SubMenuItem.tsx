'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LucideIcon } from 'lucide-react';
import { useState } from 'react';

interface SubMenuItemProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

export default function SubMenuItem({ href, icon: Icon, label }: SubMenuItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li>
      <Link
        href={href}
        className="flex items-center gap-3 py-2 pl-12 pr-4 rounded-lg transition-all duration-200"
        style={{
          background: isActive
            ? 'rgba(59, 130, 246, 0.1)'
            : isHovered
            ? 'rgba(255, 255, 255, 0.03)'
            : 'transparent',
          borderLeft: isActive ? '3px solid transparent' : '3px solid transparent',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Icon 
          size={18} 
          style={{ 
            color: isActive ? '#3b82f6' : '#94a3b8',
            strokeWidth: isActive ? 2.5 : 2
          }} 
        />
        <span style={{
          color: isActive ? '#f8fafc' : '#94a3b8',
          fontWeight: isActive ? 600 : 500,
          fontSize: '13px'
        }}>
          {label}
        </span>
      </Link>
    </li>
  );
}
