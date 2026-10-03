import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-default">
      <div className="container-max px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold text-primary">Mahipalsinh Kavithiya</p>
            <p className="text-xs text-tertiary mt-1">
              Backend Developer | AI Integration
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tertiary hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tertiary hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-tertiary hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-default text-center">
          <p className="text-xs text-tertiary">
            &copy; 2026 Mahipalsinh Kavithiya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
