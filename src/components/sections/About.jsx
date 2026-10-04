import profile from '../../data/profile';
import ScrollReveal from '../ui/ScrollReveal';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-8 sm:mb-12 flex items-center tracking-tight">
            <span className="text-primary/70 mr-3 sm:mr-6 text-lg sm:text-xl md:text-2xl font-mono font-medium tracking-widest relative -top-0.5 sm:-top-1">01.</span> About Me
            <div className="h-px bg-surface flex-grow ml-4 sm:ml-8 hidden md:block opacity-50"></div>
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <div className="bg-surface rounded-2xl sm:rounded-3xl border border-primary/15 shadow-xl shadow-primary/5 p-5 sm:p-8 lg:p-12">
            <div className="grid md:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 items-center">
              <div className="md:col-span-3 text-text-muted space-y-4 text-base sm:text-lg leading-relaxed">
                <p>
                  {profile.about || 'A passionate technologist focused on building scalable and beautiful web applications. With a strong foundation in modern web technologies, I strive to create impactful digital solutions.'}
                </p>
              </div>
              
              <div className="md:col-span-2 relative group mx-auto md:mx-0 w-48 sm:w-64 md:w-full max-w-sm">
                <div className="relative aspect-square bg-surface rounded-2xl overflow-hidden border border-primary/20 shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/10">
                  {profile.avatar ? (
                    <img src={profile.avatar} alt={profile.name || "Ralph Reniel A. Reyes"} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-tr from-surface to-primary/10 flex items-center justify-center text-text-muted">
                      Photo
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
