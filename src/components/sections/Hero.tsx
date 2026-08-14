'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';

const roles = ['Software Developer'];

export default function Hero() {
  const [role, setRole] = useState(roles[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setRole((prev) => roles[(roles.indexOf(prev) + 1) % roles.length]);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 z-0 opacity-20 grid-bg" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 w-full relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Mobile Avatar - shown FIRST on mobile, hidden on desktop */}
          <div className="flex lg:hidden justify-center items-center relative w-full">
            <div className="relative w-48 h-48">
              {/* Animated rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full rounded-full border border-cyber/30 animate-spin-slow" />
                <div className="absolute w-44 h-44 rounded-full border border-teal/20" />
                <div className="absolute w-40 h-40 rounded-full border border-cyber/10 animate-pulse" />
              </div>
              {/* Avatar image */}
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden glow-cyber border-2 border-cyber/40">
                <Image
                  src="/avatar.jpg"
                  alt="Hemraj Pakhrin"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
              </div>
              {/* Info badges */}
              <div className="absolute -bottom-3 -right-3 bg-ink-light/80 backdrop-blur px-3 py-1.5 rounded border border-cyber/40 font-mono text-xs text-cyber">
                🇳🇵 NEPAL
              </div>
              <div className="absolute -top-3 -left-3 bg-ink-light/80 backdrop-blur px-3 py-1.5 rounded border border-silver/40 font-mono text-xs text-silver">
                ⚛ REACT DEV
              </div>
            </div>
          </div>

          {/* Left side - Text (shown second on mobile, left on desktop) */}
          <div className="flex flex-col gap-8">
            <span className="font-mono text-xs tracking-[0.3em] text-cyber uppercase text-glow">
              {'>'} PORT 2025 {'<'}
            </span>

            <div>
              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9]">
                HEMRAJ
              </h1>
              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-gradient leading-[0.9]">
                PAKHRIN
              </h1>
            </div>

            <div className="flex items-center gap-2 h-8">
              <span className="font-mono text-sm text-cyber tracking-widest">{'>'}</span>
              <span className="font-mono text-sm text-silver tracking-wider">{role}</span>
              <span className="w-0.5 h-5 bg-cyber animate-blink" />
            </div>

            <p className="text-silver-dim text-base max-w-md leading-relaxed font-mono">
              Developer from <span className="text-cyber">[NEPAL]</span> • Building responsive &
              cinematic digital experiences with modern technologies
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                variant="cyber"
                onClick={() =>
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                {'> > '} View Work
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex items-center gap-10 pt-4 border-t border-cyber/20">
              <div className="flex flex-col">
                <span className="font-display text-3xl text-cyber font-bold">2+</span>
                <span className="font-mono text-xs text-silver-dim">[PROJECTS]</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-3xl text-cyber font-bold">12+</span>
                <span className="font-mono text-xs text-silver-dim">[TECHNOLOGIES]</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-3xl text-cyber font-bold">1+</span>
                <span className="font-mono text-xs text-silver-dim">[YEARS]</span>
              </div>
            </div>
          </div>

          {/* Right side - Avatar for Desktop only */}
          <div className="hidden lg:flex justify-center items-center relative">
            {/* Animated rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 rounded-full border border-cyber/30 animate-spin-slow" />
              <div className="absolute w-72 h-72 rounded-full border border-teal/20" />
              <div className="absolute w-64 h-64 rounded-full border border-cyber/10 animate-pulse" />
            </div>

            {/* Avatar */}
            <div className="relative z-10 w-72 h-72">
              <div className="relative w-full h-full rounded-full overflow-hidden glow-cyber">
                <Image
                  src="/avatar.jpg"
                  alt="Hemraj Pakhrin"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-cyber/40" />

              {/* Info badges */}
              <div className="absolute -bottom-4 -right-4 bg-ink-light/80 backdrop-blur px-4 py-2 rounded border border-cyber/40 font-mono text-xs text-cyber">
                🇳🇵 NEPAL
              </div>
              <div className="absolute -top-4 -left-4 bg-ink-light/80 backdrop-blur px-4 py-2 rounded border border-silver/40 font-mono text-xs text-silver">
                ⚛ REACT DEV
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="font-mono text-xs tracking-widest text-cyber/70">↓ SCROLL ↓</span>
        <div className="w-px h-10 bg-gradient-to-b from-cyber to-transparent animate-pulse" />
      </div>
    </section>
  );
}
