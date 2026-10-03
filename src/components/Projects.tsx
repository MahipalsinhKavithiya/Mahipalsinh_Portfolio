import { Github, ExternalLink, Construction } from 'lucide-react';
import { projects, type ProjectStatus } from '@/data/projects';

const statusConfig: Record<
  ProjectStatus,
  { label: string; badgeClass: string; dotClass: string }
> = {
  completed: {
    label: 'Completed',
    badgeClass: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
    dotClass: 'bg-emerald-400',
  },
  in_progress: {
    label: 'In Progress',
    badgeClass: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
    dotClass: 'bg-amber-400',
  },
  planned: {
    label: 'Planned',
    badgeClass: 'border-sky-500/30 text-sky-400 bg-sky-500/10',
    dotClass: 'bg-sky-400',
  },
};

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-secondary">
      <div className="container-max">
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-sm text-accent">05.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">Projects</h2>
          <div className="flex-1 h-px border-t border-default" />
        </div>

        <p className="text-secondary text-base mb-8 max-w-2xl">
          A collection of projects I've built and am currently building. Each one represents a
          different aspect of backend engineering and problem-solving.
        </p>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {projects.map((project) => {
            const status = statusConfig[project.status];
            return (
              <article
                key={project.id}
                className="group bg-tertiary rounded-xl border border-default overflow-hidden hover:border-hover-color transition-all duration-300 flex flex-col"
              >
                {/* Status bar */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-default">
                  <span
                    className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-medium border ${status.badgeClass}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${status.dotClass}`} />
                    {status.label}
                  </span>
                  {project.featured && (
                    <span className="text-xs font-mono text-accent">★ Featured</span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-primary mb-2">{project.name}</h3>
                  <p className="text-sm text-secondary leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-elevated border border-default text-tertiary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 mt-auto pt-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-secondary hover:text-accent transition-colors font-medium"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-secondary hover:text-accent transition-colors font-medium"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                    {project.status === 'in_progress' && (
                      <span className="inline-flex items-center gap-1.5 text-sm text-amber-400/80 font-medium ml-auto">
                        <Construction size={16} />
                        Under Development
                      </span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
