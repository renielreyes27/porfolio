import { useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import projects from '../../data/projects';
import ScrollReveal from '../ui/ScrollReveal';
import ProjectGalleryModal from '../ui/ProjectGalleryModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!projects || projects.length === 0) return null;

  const openGallery = (project, imgIndex = 0) => {
    if (project.images?.length > 0 || project.image) {
      setSelectedProject(project);
      setActiveImageIndex(imgIndex);
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-8 sm:mb-12 flex items-center tracking-tight">
            <span className="text-primary/70 mr-3 sm:mr-6 text-lg sm:text-xl md:text-2xl font-mono font-medium tracking-widest relative -top-0.5 sm:-top-1">03.</span> Projects
            <div className="h-px bg-surface flex-grow ml-4 sm:ml-8 hidden md:block opacity-50"></div>
          </h2>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => {
            const hasImages = (project.images?.length > 0) || Boolean(project.image);
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div 
                  onClick={() => openGallery(project, 0)}
                  className={`bg-surface rounded-xl overflow-hidden border border-surface/50 hover:border-primary/50 transition-all duration-300 group h-full flex flex-col hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 ${
                    hasImages ? 'cursor-pointer' : ''
                  }`}
                >
                  <div className="aspect-video bg-background/50 relative overflow-hidden">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-text-muted">
                        No Image
                      </div>
                    )}
                  </div>
                  <div className="p-5 sm:p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-text-main group-hover:text-primary transition-colors leading-snug">{project.title}</h3>
                        {project.github ? (
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors mt-1 font-medium"
                          >
                            GitHub <span className="leading-none">↗</span>
                          </a>
                        ) : null}
                      </div>
                      <div className="flex space-x-3 text-text-muted" onClick={(e) => e.stopPropagation()}>
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
                    <p className="text-sm sm:text-base text-text-muted mb-4 sm:mb-6 flex-grow leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto pt-3 sm:pt-4 border-t border-background">
                      {project.tags?.map((tag, i) => (
                        <span key={i} className="text-xs font-mono px-2 py-0.5 sm:py-1 bg-background/80 rounded text-primary/80">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      <ProjectGalleryModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
        activeIndex={activeImageIndex}
        setActiveIndex={setActiveImageIndex}
      />
    </section>
  );
}
