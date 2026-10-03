import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const contactItems = [
  {
    label: 'Email',
    value: 'mahipalkavithiya@gmail.com',
    href: 'mailto:mahipalkavithiya@gmail.com',
    icon: Mail,
    placeholder: true,
  },
  {
    label: 'Phone',
    value: '9558855075',
    href: 'tel:9558855075',
    icon: Phone,
    placeholder: true,
  },
  {
    label: 'LinkedIn',
    value: 'https://www.linkedin.com/in/mahipalsinh-kavithiya',
    href: 'https://www.linkedin.com/in/mahipalsinh-kavithiya',
    icon: Linkedin,
    placeholder: true,
  },
  {
    label: 'GitHub',
    value: 'https://github.com/MahipalsinhKavithiya',
    href: 'https://github.com/MahipalsinhKavithiya',
    icon: Github,
    placeholder: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-primary">
      <div className="container-max">
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-sm text-accent">08.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">Contact</h2>
          <div className="flex-1 h-px border-t border-default" />
        </div>

        <p className="text-secondary text-base mb-8 max-w-2xl">
          Feel free to reach out — whether it's about a project, collaboration, or just to connect.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-3xl">
          {contactItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.label === 'LinkedIn' || item.label === 'GitHub' ? '_blank' : undefined}
                rel={item.label === 'LinkedIn' || item.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-4 p-5 rounded-xl bg-tertiary border border-default hover:border-hover-color transition-all duration-200"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-accent-dim flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                  <Icon size={20} className="text-accent" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-tertiary font-mono uppercase tracking-wide mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm text-primary font-medium truncate group-hover:text-accent transition-colors">
                    {item.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        <p className="mt-6 text-xs text-tertiary font-mono">
          // Replace placeholder contact info with your actual details
        </p>
      </div>
    </section>
  );
}
