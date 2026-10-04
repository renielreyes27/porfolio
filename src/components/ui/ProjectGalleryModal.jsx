import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function ProjectGalleryModal({ isOpen, onClose, project, activeIndex, setActiveIndex }) {
  const images = project?.images && project.images.length > 0 
    ? project.images 
    : project?.image 
      ? [project.image] 
      : [];

  const currentIndex = activeIndex ?? 0;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
      }
      if (e.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, images.length, setActiveIndex]);

  if (!project || images.length === 0) return null;

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl max-h-[96vh] sm:max-h-[92vh] bg-surface rounded-xl sm:rounded-2xl border border-surface shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Gallery Header */}
            <div className="flex items-center justify-between px-3.5 sm:px-6 py-2.5 sm:py-4 border-b border-surface/80 bg-surface">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-primary/10 text-primary font-semibold border border-primary/20 shrink-0">
                  Gallery
                </span>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-text-main truncate max-w-[130px] sm:max-w-md">
                  {project.title}
                </h3>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                <span className="text-xs font-mono text-text-muted px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-background border border-surface">
                  {currentIndex + 1} / {images.length}
                </span>
                <button
                  onClick={onClose}
                  className="p-1.5 sm:p-2 text-text-muted hover:text-text-main hover:bg-background rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Close gallery"
                >
                  <FiX size={18} />
                </button>
              </div>
            </div>

            {/* Main Image Stage */}
            <div className="relative w-full flex-grow flex items-center justify-center bg-black/40 overflow-hidden min-h-[220px] sm:min-h-[360px] md:min-h-[520px] p-2 sm:p-4">
              <img
                src={images[currentIndex]}
                alt={`${project.title} - Screenshot ${currentIndex + 1}`}
                className="max-w-full max-h-[60vh] sm:max-h-[65vh] object-contain rounded-lg shadow-xl"
              />

              {/* Navigation Arrows (if multiple images) */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 sm:left-4 p-2 sm:p-3 rounded-full bg-surface/90 hover:bg-primary text-text-main hover:text-white shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
                    aria-label="Previous screenshot"
                  >
                    <FiChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 sm:right-4 p-2 sm:p-3 rounded-full bg-surface/90 hover:bg-primary text-text-main hover:text-white shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
                    aria-label="Next screenshot"
                  >
                    <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Navigation (if multiple images) */}
            {images.length > 1 && (
              <div className="flex items-center justify-center gap-2 sm:gap-3 p-2 sm:p-3 bg-surface border-t border-surface/80 overflow-x-auto">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`relative w-14 h-10 sm:w-20 sm:h-14 rounded-md sm:rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                      idx === currentIndex
                        ? 'border-primary ring-2 ring-primary/30 scale-105'
                        : 'border-surface/80 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
