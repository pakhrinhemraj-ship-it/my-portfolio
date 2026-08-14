'use client';
import Button from '@/components/ui/Button';

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'Personal portfolio built with Next.js and Framer Motion',
    github: 'https://github.com',
    live: '#',
    status: 'completed',
  },
  {
    id: 2,
    title: 'Admin Dashboard BookSatau',
    description: 'Cyber-themed admin dashboard for portfolio management',
    github: 'https://github.com',
    live: '#',
    status: 'completed',
  },
  {
    id: 3,
    title: 'Book Satau',
    description:
      'Developed a Full-Stack E-Commerce Application with Integrated Payment Gateway as a Junior Developer ',
    github: 'https://booksatau.com/',
    live: 'https://booksatau.com/',
    status: 'in-progress',
  },
  {
    id: 4,
    title: 'Chat App',
    description: 'Real-time chat app with Socket.io and user authentication. Up comming soon.',
    github: 'https://github.com',
    live: '#',
    status: 'completed',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-xs tracking-[0.3em] text-cyber uppercase text-glow">
            {'>'} PROJECTS {'<'}
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white mt-4">
            Featured Work
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group hud-panel p-6 rounded-lg border border-cyber/40 hover:border-cyber/80 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,136,0.2)]"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-xl text-white">{project.title}</h3>
                <span
                  className={`font-mono text-xs px-2 py-1 rounded ${
                    project.status === 'completed'
                      ? 'bg-green-950/50 text-green-400'
                      : 'bg-yellow-950/50 text-yellow-400'
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <p className="text-silver-dim text-sm mb-4">{project.description}</p>

              <div className="flex gap-3">
                <Button variant="outline" size="sm" href={project.github}>
                  Code
                </Button>
                <Button variant="cyber" size="sm" href={project.live}>
                  Live
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
