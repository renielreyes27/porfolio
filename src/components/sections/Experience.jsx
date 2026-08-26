import experience from '../../data/experience';
import ScrollReveal from '../ui/ScrollReveal';

export default function Experience() {
  if (!experience || experience.length === 0) return null;

  return (
    <section id="experience" className="py-24 bg-surface/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-16 flex items-center tracking-tight">
            <span className="text-primary/70 mr-6 text-xl md:text-2xl font-mono font-medium tracking-widest relative -top-1">04.</span> Experience
            <div className="h-px bg-surface flex-grow ml-8 hidden md:block opacity-50"></div>
          </h2>
        </ScrollReveal>
        
        <div className="space-y-12">
          {experience.map((exp, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="relative pl-8 md:pl-0 border-l md:border-l-0 border-surface md:grid md:grid-cols-12 group">
                {/* Timeline line and dot */}
                <div className="md:hidden absolute w-4 h-4 bg-background border-2 border-primary rounded-full -left-[9px] top-1 group-hover:bg-primary transition-colors duration-300"></div>
                
                {/* Desktop layout: Date on left */}
                <div className="hidden md:block md:col-span-3 text-right pr-8 pt-1 text-sm text-text-muted font-mono">
                  {exp.duration}
                </div>
                
                {/* Desktop timeline line */}
                <div className="hidden md:block absolute left-[25%] top-0 bottom-0 w-px bg-surface group-last:bg-gradient-to-b group-last:from-surface group-last:to-transparent">
                  <div className="absolute w-4 h-4 bg-background border-2 border-primary rounded-full -left-[8px] top-1 group-hover:bg-primary transition-colors duration-300 shadow-[0_0_0_4px_var(--color-surface)]"></div>
                </div>
                
                {/* Content */}
                <div className="md:col-span-9 md:pl-8">
                  <h3 className="text-xl font-bold text-text-main group-hover:text-primary transition-colors">
                    {exp.role} <span className="text-primary">@ {exp.company}</span>
                  </h3>
                  <div className="md:hidden text-sm text-text-muted font-mono mb-4 mt-1">{exp.duration}</div>
                  <p className="text-text-muted leading-relaxed mt-4 md:mt-2">{exp.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
