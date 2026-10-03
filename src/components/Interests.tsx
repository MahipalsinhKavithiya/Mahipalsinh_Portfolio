import { Server, BrainCircuit, Puzzle } from 'lucide-react';

const interests = [
  {
    title: 'Backend Development',
    description: 'Designing APIs, database schemas, and server-side architecture.',
    icon: Server,
  },
  {
    title: 'AI Integration',
    description: 'Bringing AI capabilities into practical, production-ready applications.',
    icon: BrainCircuit,
  },
  {
    title: 'Problem Solving',
    description: 'Breaking down complex problems into clean, maintainable solutions.',
    icon: Puzzle,
  },
];

export default function Interests() {
  return (
    <section className="section-padding bg-primary">
      <div className="container-max">
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-sm text-accent">03.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">Areas of Interest</h2>
          <div className="flex-1 h-px border-t border-default" />
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {interests.map((interest) => {
            const Icon = interest.icon;
            return (
              <div
                key={interest.title}
                className="group bg-tertiary rounded-xl p-6 border border-default hover:border-hover-color transition-all duration-200 text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-accent-dim flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
                  <Icon size={24} className="text-accent" />
                </div>
                <h3 className="text-base font-semibold text-primary mb-2">{interest.title}</h3>
                <p className="text-sm text-secondary leading-relaxed">{interest.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
