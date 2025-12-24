'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LucideIcon } from 'lucide-react';
import { useState } from 'react';
import Badge from './Badge';

interface NavItemProps {
  href: string;
  icon: LucideIcon;
  label: string;
  badge?: number;
}

export default function NavItem({ href, icon: Icon, label, badge }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li>
      <Link
        href={href}
        className="flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200"
        style={{
          background: isActive
            ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 100%)'
            : isHovered
            ? 'rgba(255, 255, 255, 0.03)'
            : 'transparent',
          borderLeft: isActive ? '3px solid #3b82f6' : '3px solid transparent',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center gap-3">
          <Icon 
            size={20} 
            style={{ 
              color: isActive ? '#3b82f6' : '#94a3b8',
              strokeWidth: isActive ? 2.5 : 2
            }} 
          />
          <span style={{
            color: isActive ? '#f8fafc' : '#94a3b8',
            fontWeight: isActive ? 600 : 500,
            fontSize: '14px'
          }}>
            {label}
          </span>
        </div>
        {badge !== undefined && <Badge count={badge} />}
      </Link>
    </li>
  );
}
