import { useState } from 'react';
import experience from '../../data/experience';
import ScrollReveal from '../ui/ScrollReveal';

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleMap = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  if (!experience || experience.length === 0) return null;

  return (
    <section id="experience" className="py-16 sm:py-24 bg-surface/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-10 sm:mb-16 flex items-center tracking-tight">
            <span className="text-primary/70 mr-3 sm:mr-6 text-lg sm:text-xl md:text-2xl font-mono font-medium tracking-widest relative -top-0.5 sm:-top-1">04.</span> Experience
            <div className="h-px bg-surface flex-grow ml-4 sm:ml-8 hidden md:block opacity-50"></div>
          </h2>
        </ScrollReveal>
        
        <div className="space-y-8 sm:space-y-12">
          {experience.map((exp, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="relative pl-6 sm:pl-8 md:pl-0 border-l md:border-l-0 border-surface md:grid md:grid-cols-12 group">
                {/* Timeline line and dot */}
                <div className="md:hidden absolute w-3.5 h-3.5 bg-background border-2 border-primary rounded-full -left-[8px] top-6 group-hover:bg-primary transition-colors duration-300"></div>
                
                {/* Desktop layout: Date on left */}
                <div className="hidden md:block md:col-span-3 text-right pr-8 pt-5 text-sm text-text-muted font-mono">
                  {exp.duration}
                </div>
                
                {/* Desktop timeline line */}
                <div className="hidden md:block absolute left-[25%] top-0 bottom-0 w-px bg-surface group-last:bg-gradient-to-b group-last:from-surface group-last:to-transparent">
                  <div className="absolute w-4 h-4 bg-background border-2 border-primary rounded-full -left-[8px] top-6 group-hover:bg-primary transition-colors duration-300 shadow-[0_0_0_4px_var(--color-surface)]"></div>
                </div>
                
                {/* Content */}
                <div className="md:col-span-9 md:pl-8">
                  <div className="bg-surface rounded-xl sm:rounded-2xl border border-primary/15 shadow-sm hover:shadow-md hover:border-primary/30 p-4 sm:p-6 transition-all duration-300">
                    <h3 className="text-lg sm:text-xl font-bold text-text-main group-hover:text-primary transition-colors leading-snug">
                      {exp.role} <span className="text-primary block sm:inline">@ {exp.company}</span>
                    </h3>
                    
                    {exp.location && (
                      <button 
                        onClick={() => toggleMap(index)}
                        className="text-primary font-medium mb-1 mt-1 text-left hover:underline focus:outline-none flex items-center text-sm sm:text-base cursor-pointer"
                        aria-label={`View map for ${exp.company}`}
                      >
                        <span>{exp.location}</span>
                        <svg className="w-4 h-4 ml-1.5 opacity-70 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                      </button>
                    )}

                    {expandedIndex === index && exp.location && (
                      <div className="mt-3 mb-4 w-full h-40 sm:h-48 md:h-56 rounded-lg overflow-hidden border border-surface bg-background">
                        <iframe
                          title={`Map of ${exp.company}`}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          loading="lazy"
                          allowFullScreen
                          src={`https://www.google.com/maps?q=${encodeURIComponent(exp.location)}&output=embed`}
                        ></iframe>
                      </div>
                    )}

                    <div className="md:hidden text-xs sm:text-sm text-text-muted font-mono mb-2 mt-1">{exp.duration}</div>
                    <p className="text-text-muted text-sm sm:text-base leading-relaxed mt-2">{exp.description}</p>
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
