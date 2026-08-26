import skills from '../../data/skills';
import ScrollReveal from '../ui/ScrollReveal';

export default function Skills() {
  if (!skills || skills.length === 0) return null;

  return (
    <section id="skills" className="py-24 bg-surface/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-12 flex items-center tracking-tight">
            <span className="text-primary/70 mr-6 text-xl md:text-2xl font-mono font-medium tracking-widest relative -top-1">02.</span> Skills
            <div className="h-px bg-surface flex-grow ml-8 hidden md:block opacity-50"></div>
          </h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <ScrollReveal 
              key={index} 
              delay={index * 0.05} 
              className="group"
            >
              <div className="p-6 h-full bg-background rounded-xl border border-surface/50 text-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-2">
                <p className="font-medium text-text-main group-hover:text-primary transition-colors">{skill.name}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
