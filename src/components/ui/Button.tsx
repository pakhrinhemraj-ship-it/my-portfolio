'use client';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'cyber' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  children,
  variant = 'cyber',
  size = 'md',
  href,
  onClick,
  className,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-body font-bold tracking-widest uppercase text-xs transition-all duration-300 rounded disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-cyan-400/20 disabled:hover:shadow-none';

  const sizes = {
    sm: 'px-5 py-2.5',
    md: 'px-8 py-3.5',
    lg: 'px-10 py-4',
  };

  const variants = {
    cyber:
      'bg-cyan-400/20 border border-cyan-400/60 text-cyber hover:bg-cyan-400/40 hover:shadow-[0_0_20px_rgba(0,255,136,0.6)]',
    outline: 'border border-cyber/60 text-cyber hover:bg-cyber/10',
    ghost: 'text-silver hover:text-cyber border border-transparent hover:border-cyber/40',
  };

  const classes = cn(base, sizes[size], variants[variant], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
