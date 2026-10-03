import { Code2, Server, Database, Cloud } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming',
    icon: Code2,
    skills: [
      { name: 'Python', level: 'active' },
      { name: 'Java', level: 'active' },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      { name: 'FastAPI', level: 'active' },
      { name: 'RESTful APIs', level: 'active' },
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', level: 'active' },
      { name: 'MongoDB', level: 'basic' },
    ],
  },
  {
    title: 'Cloud & Tools',
    icon: Cloud,
    skills: [
      { name: 'AWS', level: 'basic' },
      { name: 'Git', level: 'active' },
      { name: 'GitHub', level: 'active' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-primary">
      <div className="container-max">
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-sm text-accent">02.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">Technical Skills</h2>
          <div className="flex-1 h-px border-t border-default" />
        </div>

        <p className="text-secondary text-base mb-8 max-w-2xl">
          Technologies I work with day-to-day, with an honest distinction between what I actively
          use and what I have basic familiarity with.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="bg-tertiary rounded-xl p-5 border border-default hover:border-hover-color transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-accent-dim flex items-center justify-center">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <h3 className="text-sm font-semibold text-primary">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors duration-200 ${
                        skill.level === 'active'
                          ? 'border-accent text-accent bg-accent-dim'
                          : 'border-default text-tertiary bg-elevated'
                      }`}
                    >
                      {skill.name}
                      {skill.level === 'basic' && (
                        <span className="text-[10px] uppercase opacity-60 font-mono">basic</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-6 flex items-center gap-6 text-xs text-tertiary">
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded border border-accent bg-accent-dim" />
            Actively working with
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded border border-default bg-elevated" />
            Basic knowledge
          </span>
        </div>
      </div>
    </section>
  );
}
