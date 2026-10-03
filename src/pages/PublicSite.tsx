import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Interests from '@/components/Interests';
import Projects from '@/components/Projects';
import Learning from '@/components/Learning';
import EngineeringFocus from '@/components/EngineeringFocus';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function PublicSite() {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Interests />
        <Projects />
        <Learning />
        <EngineeringFocus />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
