import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import profile from '../../data/profile';
import socials from '../../data/socials';
import ResumePreviewModal from '../ui/ResumePreviewModal';

export default function Hero() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
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
      
      {/* Subtle Solar Eclipse Element */}
      <div className="absolute right-0 top-0 translate-x-1/3 -translate-y-1/3 w-[200px] h-[200px] md:w-[350px] md:h-[350px] rounded-full border-[0.5px] border-primary/20 shadow-[0_0_40px_rgba(168,85,247,0.15)] pointer-events-none z-0 flex items-center justify-center opacity-60">
        <div className="w-full h-full bg-background rounded-full shadow-[inset_0_0_15px_rgba(168,85,247,0.1)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 pt-8 md:pt-4">
        <motion.div 
          style={{ y, opacity }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={itemVariants} className="mb-6 inline-block">
            <span className="text-primary font-mono text-xl md:text-2xl font-bold bg-primary/10 px-3 py-1 rounded-md border border-primary/20">
              &lt;R/&gt;
            </span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-text-main mb-6 leading-tight tracking-tight relative z-10">
            {profile.name || 'Ralph Reniel A. Reyes'}
            <br />
            <span className="text-text-main/90 text-2xl md:text-4xl lg:text-5xl block mt-4 font-semibold tracking-wide">
              {profile.title || 'Information Technology Student'}
            </span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-text-muted mb-8 max-w-3xl leading-relaxed font-light relative z-10">
            {profile.tagline || 'IT student learning and building practical web projects while developing my skills in programming and technology.'}
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 md:gap-6 items-center relative z-10">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="px-8 py-4 bg-primary text-white rounded-full font-bold tracking-wide shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary"
            >
              Get in Touch
            </motion.a>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={() => setIsPreviewOpen(true)}
              className="px-8 py-4 bg-transparent border-2 border-primary text-text-main rounded-full font-bold tracking-wide hover:bg-primary/20 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary flex items-center gap-2 cursor-pointer"
            >
              View Resume <span className="text-xl leading-none -mt-1">↗</span>
            </motion.button>
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

      {/* Resume Live Preview Modal */}
      <ResumePreviewModal 
        isOpen={isPreviewOpen} 
        onClose={() => setIsPreviewOpen(false)} 
      />
    </section>
  );
}
