const aboutPoints = [
  'Building backend systems',
  'Working with APIs and databases',
  'Integrating AI into practical applications',
  'Solving programming problems',
  'Learning software architecture and system design',
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container-max">
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-sm text-accent">01.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">About Me</h2>
          <div className="flex-1 h-px bg-default border-t border-default" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <p className="text-base md:text-lg text-secondary leading-relaxed">
              I'm a B.Sc. Computer Science & IT student focused on backend development and AI
              integration. My work centers on building systems that are well-structured, performant,
              and solve real problems — not just technically impressive, but practically useful.
            </p>
            <p className="mt-4 text-base text-secondary leading-relaxed">
              I care about clean architecture, proper database design, and writing code that's
              maintainable. I'm continuously deepening my understanding of system design and backend
              engineering.
            </p>
          </div>

          <div className="bg-tertiary rounded-xl p-6 border border-default">
            <h3 className="text-sm font-mono text-accent mb-4 tracking-wide">
              // What I enjoy
            </h3>
            <ul className="space-y-3">
              {aboutPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-secondary text-sm md:text-base">
                  <span className="text-accent font-mono mt-0.5">→</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
