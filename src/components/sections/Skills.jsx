import skills from '../../data/skills';
import ScrollReveal from '../ui/ScrollReveal';

export default function Skills() {
  if (!skills || skills.length === 0) return null;

  return (
    <section id="skills" className="py-20 bg-surface/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-12 flex items-center tracking-tight">
            <span className="text-primary/70 mr-6 text-xl md:text-2xl font-mono font-medium tracking-widest relative -top-1">02.</span> Skills
            <div className="h-px bg-surface flex-grow ml-8 hidden md:block opacity-50"></div>
          </h2>
        </ScrollReveal>
        
        <div className="space-y-12">
          {skills.map((categoryGroup, index) => (
            <div key={index}>
              <ScrollReveal delay={0.1}>
                <h3 className="text-2xl font-bold mb-6 text-text-main">{categoryGroup.category}</h3>
              </ScrollReveal>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {categoryGroup.items.map((skill, skillIndex) => (
                  <ScrollReveal 
                    key={skillIndex} 
                    delay={skillIndex * 0.05} 
                    className="group"
                  >
                    <div className="p-4 h-full bg-surface rounded-lg border border-primary/10 shadow-sm hover:shadow-md hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></div>
                      <p className="font-medium text-text-main">{skill.name}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
