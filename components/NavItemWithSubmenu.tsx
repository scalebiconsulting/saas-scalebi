'use client'

import { usePathname } from 'next/navigation';
import { LucideIcon, ChevronDown } from 'lucide-react';
import { useState, ReactNode } from 'react';

interface NavItemWithSubmenuProps {
  icon: LucideIcon;
  label: string;
  children: ReactNode;
  basePath?: string;
}

export default function NavItemWithSubmenu({ icon: Icon, label, children, basePath }: NavItemWithSubmenuProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  
  // Check if any child route is active
  const isActive = basePath ? pathname.startsWith(basePath) : false;

  return (
    <li>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200"
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
        <ChevronDown 
          size={16}
          style={{
            color: '#94a3b8',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease'
          }}
        />
      </button>
      
      {/* Submenu */}
      <div
        style={{
          maxHeight: isOpen ? '500px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease-in-out'
        }}
      >
        <ul className="space-y-1 mt-1">
          {children}
        </ul>
      </div>
    </li>
  );
}
