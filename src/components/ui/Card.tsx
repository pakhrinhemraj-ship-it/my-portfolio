'use client';
import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'hud' | 'glass' | 'dark';
}

export default function Card({ children, className = '', variant = 'hud' }: CardProps) {
  const variants = {
    hud: 'hud-panel border border-cyber/40 hover:border-cyber/80',
    glass: 'bg-ink-light/40 backdrop-blur border border-silver/10',
    dark: 'bg-ink-light border border-silver/20',
  };

  return (
    <div className={`rounded-lg p-6 transition-all duration-300 ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}
