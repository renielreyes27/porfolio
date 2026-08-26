import { FiDownload } from 'react-icons/fi';
import ScrollReveal from '../ui/ScrollReveal';

export default function Resume() {
  return (
    <section id="resume" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 clip-diagonal pointer-events-none"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text-main">
            Interested in my full profile?
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <p className="text-text-muted mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            Download my resume to get a comprehensive overview of my experience, skills, and education.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary group"
          >
            <FiDownload className="mr-3 group-hover:-translate-y-1 transition-transform" />
            Download Resume
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
