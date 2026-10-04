import { FiExternalLink } from 'react-icons/fi';
import certificates from '../../data/certificates';
import ScrollReveal from '../ui/ScrollReveal';

export default function Certificates() {
  if (!certificates || certificates.length === 0) return null;

  return (
    <section id="certificates" className="py-16 sm:py-24 bg-surface/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-8 sm:mb-12 flex items-center tracking-tight flex-wrap sm:flex-nowrap">
            <span className="text-primary/70 mr-3 sm:mr-6 text-lg sm:text-xl md:text-2xl font-mono font-medium tracking-widest relative -top-0.5 sm:-top-1">06.</span> Certificates & Training
            <div className="h-px bg-surface flex-grow ml-4 sm:ml-8 hidden md:block opacity-50"></div>
          </h2>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {certificates.map((cert, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="p-5 sm:p-6 bg-surface rounded-xl border border-primary/10 hover:border-primary/40 transition-all duration-300 group h-full flex flex-col hover:-translate-y-1 shadow-sm hover:shadow-md hover:shadow-primary/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 to-primary/10"></div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-text-main group-hover:text-primary transition-colors leading-snug pr-3 sm:pr-4 break-words">
                    {cert.title || cert.name}
                  </h3>
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors flex-shrink-0" aria-label="View Certificate">
                      <FiExternalLink size={18} />
                    </a>
                  )}
                </div>
                <div className="mt-auto flex flex-col gap-1.5 pt-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <span className="font-semibold text-text-main/90 text-sm sm:text-base">
                      {cert.provider || cert.issuer}
                    </span>
                    {cert.type && (
                      <span className="text-xs text-text-muted font-medium bg-background px-2 py-0.5 rounded border border-surface w-fit">
                        {cert.type}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-1.5 text-xs sm:text-sm font-mono text-primary/80 mt-0.5">
                    <span>{cert.date}</span>
                    {cert.certificateCode && (
                      <span className="text-xs text-text-muted/80 font-mono">
                        Code: {cert.certificateCode}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
