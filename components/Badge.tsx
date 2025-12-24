interface BadgeProps {
  count: number;
}

export default function Badge({ count }: BadgeProps) {
  return (
    <span className="px-2 py-1 text-xs font-semibold rounded-lg" style={{
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      color: '#3b82f6'
    }}>
      {count}
    </span>
  );
}
