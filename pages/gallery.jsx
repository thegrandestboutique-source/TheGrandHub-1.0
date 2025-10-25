import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Lightbox from '../components/Lightbox';
import imagesData from '../data/images.json';

export default function Gallery() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredImages, setFilteredImages] = useState(imagesData);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const categories = ['All', 'Macro', 'Wildlife', 'Night'];

  useEffect(() => {
    // Check for filter in URL query
    if (router.query.filter) {
      setActiveFilter(router.query.filter);
    }
  }, [router.query]);

  useEffect(() => {
    // Filter images based on active filter
    if (activeFilter === 'All') {
      setFilteredImages(imagesData);
    } else {
      setFilteredImages(imagesData.filter(img => img.category === activeFilter));
    }
  }, [activeFilter]);

  const openLightbox = (image, index) => {
    setLightboxImage(image);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const goToPrev = () => {
    if (lightboxIndex > 0) {
      const newIndex = lightboxIndex - 1;
      setLightboxIndex(newIndex);
      setLightboxImage(filteredImages[newIndex]);
    }
  };

  const goToNext = () => {
    if (lightboxIndex < filteredImages.length - 1) {
      const newIndex = lightboxIndex + 1;
      setLightboxIndex(newIndex);
      setLightboxImage(filteredImages[newIndex]);
    }
  };

  return (
    <>
      <Head>
        <title>Gallery | TheGrandHub</title>
        <meta name="description" content="Explore nature, night, and macro photography by Lorenzo LDS" />
      </Head>

      <div className="max-w-content mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl mb-4">Gallery</h1>
          <p className="text-lg opacity-70">
            Explore the collection
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full transition-all ${
                activeFilter === category 
                  ? 'font-medium' 
                  : 'hover:opacity-70'
              }`}
              style={{
                backgroundColor: activeFilter === category ? 'var(--accent)' : 'var(--border)',
                color: activeFilter === category ? 'var(--bg)' : 'var(--fg)'
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="break-inside-avoid cursor-pointer group"
              onClick={() => openLightbox(image, index)}
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Hover Overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4"
                  style={{ 
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' 
                  }}
                >
                  <h3 className="font-serif text-xl mb-2">{image.title}</h3>
                  <span 
                    className="inline-block px-3 py-1 rounded-full text-sm w-fit"
                    style={{ backgroundColor: 'var(--accent)', color: 'var(--bg)' }}
                  >
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16 opacity-60">
            <p className="text-xl">No images found in this category.</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <Lightbox
          image={lightboxImage}
          onClose={closeLightbox}
          onPrev={goToPrev}
          onNext={goToNext}
          hasPrev={lightboxIndex > 0}
          hasNext={lightboxIndex < filteredImages.length - 1}
        />
      )}
    </>
  );
}
