import { Webhook, ShieldCheck, Database, Layers, Gauge, Bug, Terminal, TestTube, ScrollText, Network } from 'lucide-react';

const focusAreas = [
  { icon: Webhook, label: 'API Design' },
  { icon: ShieldCheck, label: 'Authentication & Authorization' },
  { icon: Database, label: 'Database Design' },
  { icon: Bug, label: 'Error Handling' },
  { icon: Layers, label: 'Clean Architecture' },
  { icon: Gauge, label: 'Performance' },
  { icon: Terminal, label: 'Input Validation' },
  { icon: TestTube, label: 'Testing' },
  { icon: ScrollText, label: 'Logging' },
  { icon: Network, label: 'Scalability' },
];

export default function EngineeringFocus() {
  return (
    <section className="section-padding bg-primary">
      <div className="container-max">
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-sm text-accent">06.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">Engineering Focus</h2>
          <div className="flex-1 h-px border-t border-default" />
        </div>

        <p className="text-secondary text-base mb-8 max-w-2xl">
          These are the engineering areas I care about and am developing — not a claim that every
          one is fully implemented in every project, but the principles I work toward.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {focusAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.label}
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-tertiary border border-default hover:border-hover-color transition-all duration-200 text-center"
              >
                <Icon size={22} className="text-accent" />
                <span className="text-xs md:text-sm text-secondary font-medium leading-tight">
                  {area.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
