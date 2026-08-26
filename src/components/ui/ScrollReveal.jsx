import { motion } from 'framer-motion';

export default function ScrollReveal({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.5, 
  className = '', 
  once = true 
}) {
  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once, margin: "-50px" }}
      transition={{ 
        duration, 
        delay, 
        ease: 'easeOut' 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
