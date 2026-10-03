import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X, Sun, Moon, Download } from 'lucide-react';
import { useTheme } from '@/lib/theme';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Learning', href: '#learning' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-primary border-b border-default backdrop-blur-md'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="container-max flex items-center justify-between px-6 py-4 h-16">
        <a href="#home" className="flex items-center gap-2 font-mono text-sm font-semibold text-primary">
          <span className="text-accent">{'<'}</span>
          <span>MK</span>
          <span className="text-accent">{'/>'}</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-secondary hover:text-primary transition-colors duration-200 font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 text-secondary hover:text-primary transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="/resume/Mahipalsinh-Kavithiya-Resume.pdf"
            download
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-default hover:border-hover-color text-primary transition-all duration-200 hover:bg-tertiary"
          >
            <Download size={15} />
            Resume
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-primary"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-primary border-b border-default animate-slide-down">
          <div className="px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className="text-base text-secondary hover:text-primary transition-colors py-2 font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-3 border-t border-default">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-secondary hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="/resume/Mahipalsinh-Kavithiya-Resume.pdf"
                download
                className="ml-auto inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-default text-primary"
              >
                <Download size={15} />
                Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
