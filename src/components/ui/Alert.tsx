'use client';

interface AlertProps {
  children: React.ReactNode;
  variant?: 'info' | 'success' | 'warning' | 'error';
  icon?: React.ReactNode;
}

export default function Alert({ children, variant = 'info', icon }: AlertProps) {
  const variants = {
    info: 'bg-blue-950/50 border-blue-800/50 text-blue-400',
    success: 'bg-green-950/50 border-green-800/50 text-green-400',
    warning: 'bg-yellow-950/50 border-yellow-800/50 text-yellow-400',
    error: 'bg-red-950/50 border-red-800/50 text-red-400',
  };

  return (
    <div className={`border rounded-lg p-4 flex gap-3 ${variants[variant]}`}>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <div className="text-sm">{children}</div>
    </div>
  );
}
