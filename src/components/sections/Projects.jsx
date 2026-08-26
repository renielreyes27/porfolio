import { FiGithub, FiExternalLink } from 'react-icons/fi';
import projects from '../../data/projects';
import ScrollReveal from '../ui/ScrollReveal';

export default function Projects() {
  if (!projects || projects.length === 0) return null;

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-12 flex items-center tracking-tight">
            <span className="text-primary/70 mr-6 text-xl md:text-2xl font-mono font-medium tracking-widest relative -top-1">03.</span> Projects
            <div className="h-px bg-surface flex-grow ml-8 hidden md:block opacity-50"></div>
          </h2>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="bg-surface rounded-xl overflow-hidden border border-surface/50 hover:border-primary/50 transition-all duration-300 group h-full flex flex-col hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5">
                <div className="aspect-video bg-background/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-text-muted">
                      No Image
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-text-main group-hover:text-primary transition-colors">{project.title}</h3>
                    <div className="flex space-x-3 text-text-muted">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="GitHub Repo">
                          <FiGithub size={20} />
                        </a>
                      )}
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="External Link">
                          <FiExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-text-muted mb-6 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-background">
                    {project.tags?.map((tag, i) => (
                      <span key={i} className="text-xs font-mono px-2 py-1 bg-background/80 rounded text-primary/80">
                        {tag}
                      </span>
                    ))}
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
