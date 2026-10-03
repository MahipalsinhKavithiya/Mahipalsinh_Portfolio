import { BookOpen, ArrowRight } from 'lucide-react';

const learningItems = [
  {
    title: 'Advanced FastAPI',
    description: 'Deepening knowledge of middleware, dependency injection, and async patterns.',
  },
  {
    title: 'Database Performance Enhancement',
    description: 'Query optimization, indexing strategies, and connection pooling.',
  },
  {
    title: 'Backend Architecture',
    description: 'Designing scalable, maintainable backend systems with clean separation.',
  },
  {
    title: 'System Design',
    description: 'Understanding distributed systems, caching, and scalability tradeoffs.',
  },
];

export default function Learning() {
  return (
    <section id="learning" className="section-padding bg-secondary">
      <div className="container-max">
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-sm text-accent">04.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">Currently Learning</h2>
          <div className="flex-1 h-px border-t border-default" />
        </div>

        <p className="text-secondary text-base mb-8 max-w-2xl">
          An active learning roadmap — areas I'm currently developing, not claims of expertise.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
          {learningItems.map((item, index) => (
            <div
              key={item.title}
              className="group bg-tertiary rounded-xl p-5 border border-default hover:border-hover-color transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent-dim flex items-center justify-center font-mono text-sm text-accent font-semibold">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-primary mb-1.5">{item.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{item.description}</p>
                </div>
                <ArrowRight
                  size={16}
                  className="text-tertiary group-hover:text-accent transition-colors flex-shrink-0 mt-1"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3 text-sm text-tertiary">
          <BookOpen size={16} className="text-accent" />
          <span className="font-mono">// Always learning, always building</span>
        </div>
      </div>
    </section>
  );
}
