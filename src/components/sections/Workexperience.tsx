'use client';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';
import SectionTitle from '@/components/ui/SectionTitle';
import { experiences } from '@/constants/experience';

export default function Workexperience() {
  return (
    <section id="experience" className="relative w-full py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          label="EXPERIENCE"
          title="Work Experience"
          subtitle="Professional roles where I built, maintained, and supported real-world products"
        />

        <div className="relative max-w-4xl">
          {/* Timeline line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-cyber via-cyber/30 to-transparent" />

          <div className="space-y-10">
            {experiences.map((experience) => (
              <div key={experience.company} className="group relative pl-10 md:pl-12">
                {/* Timeline dot */}
                <span className="absolute left-2 top-8 w-4 h-4 rounded-full border-2 border-cyber bg-ink group-hover:bg-cyber group-hover:shadow-[0_0_12px_rgba(0,255,136,0.8)] group-hover:scale-110 transition-all duration-300" />

                <Card variant="hud">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h3 className="font-display text-xl md:text-2xl text-cyber font-bold">
                      {'> '} {experience.role}
                    </h3>
                    {experience.duration && <Badge variant="success">{experience.duration}</Badge>}
                  </div>

                  <p className="font-mono text-xs text-silver-dim uppercase tracking-widest mt-2 mb-4">
                    <span className="text-silver">[{experience.company}]</span>{' '}
                    <span className="text-cyber">[{experience.location}]</span>
                  </p>

                  <ul className="space-y-2">
                    {experience.responsibilities.map((responsibility) => (
                      <li
                        key={responsibility}
                        className="flex items-start gap-2 text-sm text-silver leading-relaxed font-mono"
                      >
                        <span className="text-cyber mt-1">▸</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Animated line */}
                  <div className="mt-6 pt-4 border-t border-cyber/20">
                    <div className="h-1 bg-gradient-to-r from-cyber via-teal to-transparent rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
