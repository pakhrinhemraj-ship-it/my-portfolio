'use client';

interface SectionTitleProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ label, title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-16">
      <span className="font-mono text-xs tracking-[0.3em] text-cyber uppercase text-glow">
        {'>'} {label} {'<'}
      </span>
      <h2 className="font-display text-5xl md:text-6xl font-bold text-white mt-4">{title}</h2>
      {subtitle && <p className="text-silver-dim text-base mt-4">{subtitle}</p>}
    </div>
  );
}
