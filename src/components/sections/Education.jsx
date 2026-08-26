import education from '../../data/education';
import ScrollReveal from '../ui/ScrollReveal';

export default function Education() {
  if (!education || education.length === 0) return null;

  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 flex items-center">
            <span className="text-primary mr-4 text-2xl md:text-3xl font-mono">05.</span> Education
            <div className="h-px bg-surface flex-grow ml-6 hidden md:block"></div>
          </h2>
        </ScrollReveal>
        
        <div className="space-y-12">
          {education.map((edu, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="relative pl-8 md:pl-0 border-l md:border-l-0 border-surface md:grid md:grid-cols-12 group">
                <div className="md:hidden absolute w-4 h-4 bg-background border-2 border-primary rounded-full -left-[9px] top-1 group-hover:bg-primary transition-colors duration-300"></div>
                
                <div className="hidden md:block md:col-span-3 text-right pr-8 pt-1 text-sm text-text-muted font-mono">
                  {edu.year}
                </div>
                
                <div className="hidden md:block absolute left-[25%] top-0 bottom-0 w-px bg-surface group-last:bg-gradient-to-b group-last:from-surface group-last:to-transparent">
                  <div className="absolute w-4 h-4 bg-background border-2 border-primary rounded-full -left-[8px] top-1 group-hover:bg-primary transition-colors duration-300 shadow-[0_0_0_4px_var(--color-surface)]"></div>
                </div>
                
                <div className="md:col-span-9 md:pl-8">
                  <h3 className="text-xl font-bold text-text-main group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h3>
                  <div className="text-primary font-medium mb-1 mt-1">{edu.institution}</div>
                  <div className="md:hidden text-sm text-text-muted font-mono mb-4">{edu.year}</div>
                  <p className="text-text-muted leading-relaxed mt-4 md:mt-2">{edu.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
