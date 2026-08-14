'use client';
import Image from 'next/image';
import Card from '@/components/ui/Card';
import SectionTitle from '@/components/ui/SectionTitle';

export default function About() {
  return (
    <section id="about" className="relative w-full py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-80 h-96">
              {/* Animated rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 rounded-full border border-cyber/30 animate-spin-slow" />
                <div className="absolute w-80 h-80 rounded-full border border-teal/20" />
              </div>

              {/* Avatar */}
              <div className="relative z-10 w-80 h-96 rounded-lg overflow-hidden glow-cyber">
                <Image
                  src="/avatar.jpg"
                  alt="Hemraj Pakhrin"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <SectionTitle label="ABOUT" title="Who I Am" />

            <p className="text-silver-dim text-lg leading-relaxed">
              I'm a passionate full-stack developer from <span className="text-cyber">[NEPAL]</span>{' '}
              with a keen eye for creating beautiful, functional digital experiences. With expertise
              in modern web technologies, I transform ideas into elegant solutions.
            </p>

            <p className="text-silver-dim text-lg leading-relaxed">
              My journey in web development started with curiosity about how things work on the
              internet. Today, I specialize in building responsive, user-centric applications using
              React, Next.js, and Node.js. I'm committed to writing clean, maintainable code and
              delivering exceptional results.
            </p>

            <div className="space-y-4 mt-6">
              <Card variant="glass">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">🎯</span>
                  <div>
                    <h4 className="font-display text-lg text-white mb-1">My Mission</h4>
                    <p className="text-silver-dim text-sm">
                      Build innovative solutions that solve real problems and create meaningful
                      impact in the digital world.
                    </p>
                  </div>
                </div>
              </Card>

              <Card variant="glass">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">⚡</span>
                  <div>
                    <h4 className="font-display text-lg text-white mb-1">My Approach</h4>
                    <p className="text-silver-dim text-sm">
                      Combining technical excellence with creative problem-solving to deliver
                      products that exceed expectations.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
