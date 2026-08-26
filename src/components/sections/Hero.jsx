import { motion, useScroll, useTransform } from 'framer-motion';
import profile from '../../data/profile';
import socials from '../../data/socials';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <motion.div 
          style={{ y, opacity }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.h2 variants={itemVariants} className="text-primary font-medium tracking-wide mb-2 uppercase">
            Welcome
          </motion.h2>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-text-main mb-6 leading-tight tracking-tight">
            {profile.name || 'Creative Developer'}
            <br />
            <span className="text-text-muted text-3xl md:text-5xl lg:text-6xl block mt-4 font-bold tracking-normal">
              {profile.title || 'Building Digital Experiences'}
            </span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl leading-relaxed font-light">
            {profile.tagline || 'Passionate about crafting beautiful, functional, and user-centered digital products.'}
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-6 items-center">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="px-8 py-4 bg-primary text-white rounded-full font-bold tracking-wide shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary"
            >
              Get in Touch
            </motion.a>
            <div className="flex space-x-5">
              {socials.map((social, index) => (
                <motion.a 
                  key={index} 
                  whileHover={{ y: -3, color: 'var(--color-primary)' }}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-text-muted transition-colors text-2xl focus:outline-none focus:ring-2 focus:ring-primary rounded"
                  aria-label={social.name}
                >
                  {/* Icon mapping fallback */}
                  <span className="text-sm font-medium">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none"
      >
        <span className="text-xs text-text-muted tracking-widest uppercase mb-2">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-1 h-8 bg-gradient-to-b from-primary/50 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
