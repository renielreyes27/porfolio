import { FiExternalLink } from 'react-icons/fi';
import certificates from '../../data/certificates';
import ScrollReveal from '../ui/ScrollReveal';

export default function Certificates() {
  if (!certificates || certificates.length === 0) return null;

  return (
    <section id="certificates" className="py-24 bg-surface/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-12 flex items-center tracking-tight">
            <span className="text-primary/70 mr-6 text-xl md:text-2xl font-mono font-medium tracking-widest relative -top-1">06.</span> Certificates
            <div className="h-px bg-surface flex-grow ml-8 hidden md:block opacity-50"></div>
          </h2>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="p-6 bg-surface rounded-xl border border-primary/10 hover:border-primary/40 transition-all duration-300 group h-full flex flex-col hover:-translate-y-1 shadow-sm hover:shadow-md hover:shadow-primary/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 to-primary/10"></div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-text-main group-hover:text-primary transition-colors leading-snug pr-4">{cert.name}</h3>
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors flex-shrink-0" aria-label="View Certificate">
                      <FiExternalLink size={18} />
                    </a>
                  )}
                </div>
                <div className="mt-auto flex flex-col gap-1">
                  <span className="font-semibold text-text-main/90 text-base">{cert.issuer}</span>
                  <span className="font-mono text-primary/80 text-sm">{cert.date}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
