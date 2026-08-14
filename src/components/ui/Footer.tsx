'use client';
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-cyber/20 bg-ink-light/50 py-12 px-6 text-center">
      <p className="font-mono text-xs text-silver-dim">
        © {year} Hemraj Pakhrin. All rights reserved.
      </p>
    </footer>
  );
}
