import profile from '../../data/profile';
import ScrollReveal from '../ui/ScrollReveal';

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-12 flex items-center tracking-tight">
            <span className="text-primary/70 mr-6 text-xl md:text-2xl font-mono font-medium tracking-widest relative -top-1">01.</span> About Me
            <div className="h-px bg-surface flex-grow ml-8 hidden md:block opacity-50"></div>
          </h2>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <ScrollReveal delay={0.1} className="md:col-span-3 text-text-muted space-y-4 text-lg leading-relaxed">
            <p>
              {profile.about || 'A passionate technologist focused on building scalable and beautiful web applications. With a strong foundation in modern web technologies, I strive to create impactful digital solutions.'}
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="left" delay={0.2} className="md:col-span-2 relative group mx-auto md:mx-0 w-3/4 md:w-full max-w-sm">
            <div className="absolute inset-0 border-2 border-primary rounded-2xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
            <div className="relative aspect-square bg-surface rounded-2xl overflow-hidden border border-surface/50 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 z-10">
              {profile.avatar ? (
                <img src={profile.avatar} alt="Profile" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500" />
              ) : (
                <div className="w-full h-full bg-gradient-to-tr from-surface to-primary/20 flex items-center justify-center text-text-muted">
                  Photo
                </div>
              )}
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300 pointer-events-none"></div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
