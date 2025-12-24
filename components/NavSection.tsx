import { ReactNode } from 'react';

interface NavSectionProps {
  title: string;
  children: ReactNode;
}

export default function NavSection({ title, children }: NavSectionProps) {
  return (
    <div className="space-y-2">
      <h3 className="px-4 text-xs font-semibold uppercase tracking-wider" style={{ color: '#475569' }}>
        {title}
      </h3>
      <ul className="space-y-1">
        {children}
      </ul>
    </div>
  );
}
