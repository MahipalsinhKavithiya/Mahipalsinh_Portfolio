import { Download, FileText } from 'lucide-react';

export default function Resume() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-max">
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-sm text-accent">07.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">Resume</h2>
          <div className="flex-1 h-px border-t border-default" />
        </div>

        <div className="bg-tertiary rounded-xl border border-default p-8 md:p-10 flex flex-col items-center text-center max-w-2xl mx-auto">
          <div className="w-14 h-14 rounded-xl bg-accent-dim flex items-center justify-center mb-5">
            <FileText size={28} className="text-accent" />
          </div>
          <h3 className="text-lg font-semibold text-primary mb-3">
            Interested in my background?
          </h3>
          <p className="text-sm text-secondary leading-relaxed mb-6 max-w-md">
            Download my resume for a detailed overview of my education, projects, skills, and
            experience.
          </p>
          <a
            href="/resume/Mahipalsinh-Kavithiya-Resume.docx"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-all duration-200 text-sm shadow-lg shadow-cyan-500/10"
            style={{ backgroundColor: 'var(--accent)', color: '#fff' }}
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
