'use client';
import Card from '@/components/ui/Card';
import SectionTitle from '@/components/ui/SectionTitle';

const skillCategories = [
  {
    category: 'Frontend Development',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'HTML5', 'CSS3'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          label="EXPERTISE"
          title="Skills"
          subtitle="A frontend developer with expertise in modern web technologies and frameworks"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.category} variant="hud" className="group">
              <h3 className="font-display text-2xl text-cyber mb-6 font-bold">
                {'> '} {category.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm font-mono text-cyber/90 border border-cyber/40 rounded hover:bg-cyber/10 hover:border-cyber/80 transition-all duration-300 cursor-default"
                  >
                    ◈ {skill}
                  </span>
                ))}
              </div>

              {/* Animated line */}
              <div className="mt-6 pt-4 border-t border-cyber/20">
                <div className="h-1 bg-gradient-to-r from-cyber via-teal to-transparent rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            { label: 'Projects Completed', value: '2+' },
            { label: 'Years Experience', value: '1+' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="hud-panel border border-cyber/40 rounded-lg p-6 text-center"
            >
              <div className="font-display text-4xl text-cyber font-bold mb-2">{stat.value}</div>
              <div className="font-mono text-xs text-silver-dim tracking-widest uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
