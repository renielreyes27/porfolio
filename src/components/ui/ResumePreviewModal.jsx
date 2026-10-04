import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiX, 
  FiExternalLink, 
  FiDownload, 
  FiPrinter, 
  FiPlus, 
  FiMinus, 
  FiMaximize2 
} from 'react-icons/fi';

const A4_BASE_WIDTH = 820;
const A4_BASE_HEIGHT = 1140;
const A4_RATIO = A4_BASE_HEIGHT / A4_BASE_WIDTH;

export default function ResumePreviewModal({ isOpen, onClose }) {
  const [zoom, setZoom] = useState(100);
  const [isFitWidth, setIsFitWidth] = useState(false);
  const iframeRef = useRef(null);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(() => {
    if (typeof window !== 'undefined') {
      return Math.min(A4_BASE_WIDTH, window.innerWidth - 32);
    }
    return A4_BASE_WIDTH;
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if ((e.ctrlKey || e.metaKey) && (e.key === '=' || e.key === '+')) {
        e.preventDefault();
        setZoom((prev) => Math.min(prev + 10, 180));
      }
      if ((e.ctrlKey || e.metaKey) && e.key === '-') {
        e.preventDefault();
        setZoom((prev) => Math.max(prev - 10, 60));
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
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const updateDimensions = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const style = window.getComputedStyle(containerRef.current);
      const paddingLeft = parseFloat(style.paddingLeft) || 0;
      const paddingRight = parseFloat(style.paddingRight) || 0;
      const availWidth = Math.floor(rect.width - paddingLeft - paddingRight);
      if (availWidth > 0) {
        setContainerWidth(availWidth);
      }
    };

    updateDimensions();

    let resizeObserver;
    if (typeof ResizeObserver !== 'undefined' && containerRef.current) {
      resizeObserver = new ResizeObserver(() => {
        updateDimensions();
      });
      resizeObserver.observe(containerRef.current);
    }

    window.addEventListener('resize', updateDimensions);

    return () => {
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener('resize', updateDimensions);
    };
  }, [isOpen]);

  const zoomIn = () => {
    setIsFitWidth(false);
    setZoom((prev) => Math.min(prev + 15, 180));
  };

  const zoomOut = () => {
    setIsFitWidth(false);
    setZoom((prev) => Math.max(prev - 15, 60));
  };

  const toggleFit = () => {
    if (isFitWidth) {
      setIsFitWidth(false);
      setZoom(100);
    } else {
      setIsFitWidth(true);
      setZoom(120);
    }
  };

  const handlePrint = () => {
    try {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        iframeRef.current.contentWindow.focus();
        iframeRef.current.contentWindow.print();
        return;
      }
    } catch {
      // Fallback
    }
    const printWin = window.open('/reyes.pdf', '_blank');
    if (printWin) {
      printWin.addEventListener('load', () => printWin.print());
    }
  };

  const effectiveBaseWidth = Math.min(A4_BASE_WIDTH, containerWidth > 0 ? containerWidth : A4_BASE_WIDTH);

  const docWidth = isFitWidth 
    ? '100%' 
    : `${Math.round(effectiveBaseWidth * (zoom / 100))}px`;

  const docHeight = isFitWidth
    ? `${Math.round((containerWidth > 0 ? containerWidth : effectiveBaseWidth) * A4_RATIO)}px`
    : `${Math.round(effectiveBaseWidth * (zoom / 100) * A4_RATIO)}px`;

  const maxWidth = isFitWidth
    ? '100%'
    : zoom <= 100
      ? '100%'
      : `${Math.round(effectiveBaseWidth * (zoom / 100))}px`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-1.5 sm:p-4 md:p-6 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl h-[95vh] sm:h-[92vh] bg-surface rounded-xl sm:rounded-2xl border border-surface shadow-2xl flex flex-col overflow-hidden text-text-main"
          >
            {/* Top Modal Header */}
            <div className="flex items-center justify-between px-3 sm:px-5 py-2.5 sm:py-3.5 border-b border-surface/80 bg-surface">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-primary/10 text-primary border border-primary/20 font-semibold shrink-0">
                  LIVE PREVIEW
                </span>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-text-main truncate max-w-[120px] sm:max-w-none">
                  Resume Preview
                </h3>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
                <a
                  href="/reyes.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-primary transition-colors font-medium px-3 py-1.5 rounded-lg hover:bg-background border border-surface/60"
                >
                  <FiExternalLink size={14} />
                  <span>Open in Tab</span>
                </a>
                <a
                  href="/reyes.pdf"
                  download="Ralph_Reniel_Reyes_Resume.pdf"
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-primary transition-colors font-medium px-3 py-1.5 rounded-lg hover:bg-background border border-surface/60"
                >
                  <FiDownload size={14} />
                  <span>Download</span>
                </a>
                <button
                  onClick={onClose}
                  className="p-1.5 sm:p-2 text-text-muted hover:text-text-main hover:bg-background rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary ml-1"
                  aria-label="Close preview"
                >
                  <FiX size={18} />
                </button>
              </div>
            </div>

            {/* Custom Preview Toolbar */}
            <div className="flex items-center justify-between px-2.5 sm:px-6 py-2 sm:py-2.5 bg-background/90 border-b border-surface/80 gap-1.5 sm:gap-3 overflow-x-auto">
              {/* Left Controls: Page Indicator & Fit */}
              <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
                <div className="flex items-center gap-1 font-mono text-[11px] sm:text-xs px-2 py-0.5 sm:px-2.5 sm:py-1 bg-surface rounded-lg border border-surface/80 shadow-xs">
                  <span className="text-text-main font-semibold">Page 1</span>
                  <span className="text-text-muted">/ 1</span>
                </div>

                <button
                  onClick={toggleFit}
                  className={`flex items-center gap-1 text-[11px] sm:text-xs px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg border transition-all shadow-xs cursor-pointer ${
                    isFitWidth
                      ? 'bg-primary/10 text-primary border-primary/30 font-semibold'
                      : 'bg-surface hover:bg-surface/80 text-text-main border-surface/80 font-medium'
                  }`}
                  title="Toggle fit width"
                >
                  <FiMaximize2 size={12} />
                  <span className="hidden xs:inline sm:inline">{isFitWidth ? 'Fit Page' : 'Fit Width'}</span>
                </button>
              </div>

              {/* Right Controls: Zoom, Print, Download */}
              <div className="flex items-center gap-1.5 sm:gap-3 shrink-0 ml-auto">
                {/* Zoom Controls */}
                <div className="flex items-center bg-surface rounded-lg border border-surface/80 shadow-xs p-0.5">
                  <button
                    onClick={zoomOut}
                    disabled={zoom <= 60}
                    className="p-1 hover:text-primary disabled:opacity-30 rounded transition-colors text-text-muted cursor-pointer"
                    aria-label="Zoom out"
                  >
                    <FiMinus size={12} />
                  </button>
                  <span className="w-9 sm:w-12 text-center font-mono text-[11px] sm:text-xs font-semibold text-text-main select-none">
                    {zoom}%
                  </span>
                  <button
                    onClick={zoomIn}
                    disabled={zoom >= 180}
                    className="p-1 hover:text-primary disabled:opacity-30 rounded transition-colors text-text-muted cursor-pointer"
                    aria-label="Zoom in"
                  >
                    <FiPlus size={12} />
                  </button>
                </div>

                {/* Print Button - Desktop/Tablet */}
                <button
                  onClick={handlePrint}
                  className="hidden md:flex items-center gap-1.5 text-xs px-3 py-1 bg-surface hover:bg-surface/80 text-text-main border border-surface/80 rounded-lg transition-colors shadow-xs font-medium cursor-pointer"
                  title="Print resume"
                >
                  <FiPrinter size={13} />
                  <span>Print</span>
                </button>

                {/* Direct Download in Toolbar */}
                <a
                  href="/reyes.pdf"
                  download="Ralph_Reniel_Reyes_Resume.pdf"
                  className="flex items-center gap-1 text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 bg-primary text-white hover:bg-primary/90 rounded-lg transition-colors shadow-xs font-medium"
                  title="Download PDF"
                >
                  <FiDownload size={12} />
                  <span>Download</span>
                </a>
              </div>
            </div>

            {/* Centered Scrollable Resume Document Area */}
            <div 
              ref={containerRef}
              className={`w-full flex-grow p-2 sm:p-4 md:p-8 flex justify-center items-start bg-[#FAF9FC] ${
                zoom > 100 ? 'overflow-auto' : 'overflow-y-auto overflow-x-hidden'
              }`}
            >
              <div
                style={{
                  width: docWidth,
                  maxWidth,
                  height: docHeight,
                  aspectRatio: `${A4_BASE_WIDTH} / ${A4_BASE_HEIGHT}`,
                  transition: 'width 0.15s ease-out, height 0.15s ease-out'
                }}
                className="bg-white rounded-xl shadow-2xl border border-surface/90 overflow-hidden flex flex-col relative shrink-0 mx-auto"
              >
                <iframe
                  ref={iframeRef}
                  id="resume-pdf-frame"
                  src="/reyes.pdf#toolbar=0&navpanes=0"
                  title="Resume Preview Document"
                  className="w-full h-full border-0 bg-white"
                />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
