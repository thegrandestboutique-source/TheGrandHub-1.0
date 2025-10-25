import { useEffect, useState } from 'react';

export default function Lightbox({ image, onClose, onPrev, onNext, hasPrev, hasNext }) {
  const [showExif, setShowExif] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
      if (e.key === 'i' || e.key === 'I') setShowExif(prev => !prev);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 hover:opacity-70 transition-opacity z-50"
        aria-label="Close lightbox (ESC)"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Previous Button */}
      {hasPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 p-3 hover:opacity-70 transition-opacity z-50"
          aria-label="Previous image (←)"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Next Button */}
      {hasNext && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 p-3 hover:opacity-70 transition-opacity z-50"
          aria-label="Next image (→)"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* EXIF Toggle */}
      <button
        onClick={(e) => { e.stopPropagation(); setShowExif(!showExif); }}
        className="absolute top-4 left-4 px-3 py-2 border rounded-md text-sm hover:opacity-70 transition-opacity z-50"
        style={{ borderColor: 'var(--border)' }}
        aria-label="Toggle EXIF info (I)"
      >
        {showExif ? 'Hide Info' : 'Show Info'}
      </button>

      {/* Image Container */}
      <div 
        className="max-w-6xl max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <img
          src={image.src}
          alt={image.alt}
          className="max-w-full max-h-[70vh] object-contain mb-4"
        />

        {/* Image Info */}
        <div className="text-center mb-4">
          <h3 className="font-serif text-2xl mb-2">{image.title}</h3>
          <span 
            className="inline-block px-3 py-1 rounded-full text-sm"
            style={{ 
              backgroundColor: 'var(--border)',
              color: 'var(--fg)'
            }}
          >
            {image.category}
          </span>
        </div>

        {/* EXIF & Story */}
        {showExif && image.exif && (
          <div 
            className="p-4 rounded-lg max-w-2xl mx-auto"
            style={{ backgroundColor: 'var(--border)' }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
              <div>
                <div className="opacity-60 mb-1">ISO</div>
                <div className="font-medium">{image.exif.iso}</div>
              </div>
              <div>
                <div className="opacity-60 mb-1">Aperture</div>
                <div className="font-medium">{image.exif.aperture}</div>
              </div>
              <div>
                <div className="opacity-60 mb-1">Shutter</div>
                <div className="font-medium">{image.exif.shutter}</div>
              </div>
              <div>
                <div className="opacity-60 mb-1">Focal Length</div>
                <div className="font-medium">{image.exif.focal}</div>
              </div>
            </div>
            {image.story && (
              <div className="text-sm opacity-90 italic">
                <strong>Behind the Shot:</strong> {image.story}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Keyboard Hints */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm opacity-50 text-center">
        <kbd className="px-2 py-1 rounded" style={{ backgroundColor: 'var(--border)' }}>←</kbd>
        {' '}
        <kbd className="px-2 py-1 rounded" style={{ backgroundColor: 'var(--border)' }}>→</kbd>
        {' Navigate · '}
        <kbd className="px-2 py-1 rounded" style={{ backgroundColor: 'var(--border)' }}>I</kbd>
        {' Info · '}
        <kbd className="px-2 py-1 rounded" style={{ backgroundColor: 'var(--border)' }}>ESC</kbd>
        {' Close'}
      </div>
    </div>
  );
}
