import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="home" className="min-h-screen flex items-center bg-primary relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container-max px-6 py-24 md:py-32 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center md:text-left animate-fade-in">
            <p className="font-mono text-sm text-accent mb-4 tracking-wide">
              $ whoami
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-[1.15] tracking-tight">
              Mahipalsinh Kavithiya
            </h1>
            <h2 className="mt-4 text-xl md:text-2xl text-secondary font-medium">
              Backend Developer <span className="text-tertiary">|</span>{' '}
              <span className="text-accent">AI Integration</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-secondary max-w-2xl leading-relaxed mx-auto md:mx-0">
              I build backend systems, REST APIs, database-driven applications, and AI-powered
              solutions with a focus on clean architecture, performance, and practical problem
              solving.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-all duration-200 text-sm shadow-lg shadow-cyan-500/10"
                style={{ backgroundColor: 'var(--accent)', color: '#fff' }}
              >
                View Projects
                <ArrowRight size={18} />
              </a>
              <a
                href="/resume/Mahipalsinh-Kavithiya-Resume.docx"
                download
                className="inline-flex items-center gap-2 px-6 py-3 border border-default hover:border-hover-color text-primary font-medium rounded-lg transition-all duration-200 hover:bg-tertiary text-sm"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>

            {/* Social links */}
            <div className="mt-8 flex items-center gap-5 justify-center md:justify-start">
              <a
                href="https://github.com/MahipalsinhKavithiya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-tertiary hover:text-accent transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/mahipalsinh-kavithiya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-tertiary hover:text-accent transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="mailto:mahipalkavithiya@gmail.com"
                className="text-tertiary hover:text-accent transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* Profile photo */}
          <div className="flex-shrink-0 animate-slide-up">
            <div className="relative">
              <div
                className="w-56 h-72 md:w-64 md:h-80 lg:w-[340px] lg:h-[440px] rounded-2xl overflow-hidden border border-default bg-tertiary"                style={{
                  borderColor: 'var(--border-color)',
                }}
              >
                {!imgError ? (
                  <img
                    src="/profile.jpg"
                    alt="Mahipalsinh Kavithiya"
                    className="w-full h-full object-cover"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-tertiary">
                    <div className="w-20 h-20 rounded-full bg-elevated flex items-center justify-center">
                      <span className="text-3xl font-bold text-accent">MK</span>
                    </div>
                    <p className="text-xs text-tertiary font-mono mt-2">profile.jpg</p>
                    <p className="text-xs text-tertiary">Replace at /public/profile.jpg</p>
                  </div>
                )}
              </div>
              {/* Decorative corner brackets */}
              <div className="absolute -top-1.5 -left-1.5 w-6 h-6 border-t-2 border-l-2 border-accent" />
              <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 border-b-2 border-r-2 border-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
