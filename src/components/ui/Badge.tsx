'use client';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'danger';
  className?: string;
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-cyan-400/20 border border-cyan-400/50 text-cyber',
    success: 'bg-green-400/20 border border-green-400/50 text-green-400',
    warning: 'bg-yellow-400/20 border border-yellow-400/50 text-yellow-400',
    danger: 'bg-red-400/20 border border-red-400/50 text-red-400',
  };

  return (
    <span className={`px-3 py-1 text-xs font-mono rounded-full ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
