import { FiExternalLink } from 'react-icons/fi';
import certificates from '../../data/certificates';
import ScrollReveal from '../ui/ScrollReveal';

export default function Certificates() {
  if (!certificates || certificates.length === 0) return null;

  return (
    <section id="certificates" className="py-24 bg-surface/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center">
            <span className="text-primary mr-4 text-2xl md:text-3xl font-mono">06.</span> Certificates
            <div className="h-px bg-surface flex-grow ml-6 hidden md:block"></div>
          </h2>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="p-6 bg-background rounded-xl border border-surface/50 hover:border-primary/50 transition-all duration-300 group h-full flex flex-col hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary font-mono font-bold">
                    C
                  </div>
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors" aria-label="View Certificate">
                      <FiExternalLink size={20} />
                    </a>
                  )}
                </div>
                <h3 className="text-lg font-bold text-text-main mb-2 group-hover:text-primary transition-colors">{cert.name}</h3>
                <p className="text-text-muted text-sm mt-auto">{cert.issuer} &bull; <span className="font-mono text-primary/80">{cert.date}</span></p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
