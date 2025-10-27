import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Lightbox from '../components/Lightbox';
import imagesData from '../data/images.json';
import categoriesData from '../data/categories.json';

export default function Gallery() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredImages, setFilteredImages] = useState(imagesData);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const favoriteImages = imagesData.filter(img => img.favorite);

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
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl mb-4">Gallery</h1>
          <p className="text-lg opacity-70">
            Explore the collection
          </p>
        </div>

        {/* Favorites Section */}
        {favoriteImages.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-3xl">Favorites</h2>
              <div className="h-px flex-1 ml-6 opacity-20" style={{ backgroundColor: 'var(--fg)' }}></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteImages.map((image, index) => (
                <div
                  key={image.id}
                  className="cursor-pointer group relative aspect-[4/3] overflow-hidden rounded-lg"
                  onClick={() => openLightbox(image, index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />

                  {/* Hover Overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
                    style={{
                      background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)'
                    }}
                  >
                    <h3 className="font-serif text-2xl mb-2 text-white">{image.title}</h3>
                    <span
                      className="inline-block px-3 py-1 rounded-full text-sm w-fit"
                      style={{ backgroundColor: 'var(--accent)', color: 'var(--bg)' }}
                    >
                      {image.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Categories Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-3xl">Browse by Category</h2>
            <div className="h-px flex-1 ml-6 opacity-20" style={{ backgroundColor: 'var(--fg)' }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* All Categories Card */}
            <button
              onClick={() => setActiveFilter('All')}
              className={`group relative aspect-square overflow-hidden rounded-lg transition-all ${
                activeFilter === 'All' ? 'ring-4' : 'hover:scale-[1.02]'
              }`}
              style={{
                backgroundColor: 'var(--border)',
                ringColor: activeFilter === 'All' ? 'var(--accent)' : 'transparent'
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-3 opacity-40">✦</div>
                  <h3 className="font-serif text-2xl mb-1">All Photos</h3>
                  <p className="text-sm opacity-60">{imagesData.length} images</p>
                </div>
              </div>
            </button>

            {/* Category Cards */}
            {categoriesData.map(category => {
              const categoryCount = imagesData.filter(img => img.category === category.name).length;

              return (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.name)}
                  className={`group relative aspect-square overflow-hidden rounded-lg transition-all ${
                    activeFilter === category.name ? 'ring-4' : 'hover:scale-[1.02]'
                  }`}
                  style={{
                    ringColor: activeFilter === category.name ? 'var(--accent)' : 'transparent'
                  }}
                >
                  <img
                    src={category.placeholder}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div
                    className="absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3))'
                    }}
                  >
                    <h3 className="font-serif text-2xl mb-1 text-white">{category.name}</h3>
                    <p className="text-sm opacity-80 text-white mb-1">{category.description}</p>
                    <p className="text-xs opacity-60 text-white">{categoryCount} images</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Gallery Grid */}
        {activeFilter !== 'All' && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-3xl">{activeFilter}</h2>
              <button
                onClick={() => setActiveFilter('All')}
                className="text-sm px-4 py-2 rounded-full hover:opacity-70 transition-all"
                style={{ backgroundColor: 'var(--border)' }}
              >
                View All
              </button>
            </div>
          </div>
        )}

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
                  <h3 className="font-serif text-xl mb-2 text-white">{image.title}</h3>
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-sm w-fit"
                      style={{ backgroundColor: 'var(--accent)', color: 'var(--bg)' }}
                    >
                      {image.category}
                    </span>
                    {image.favorite && (
                      <span className="text-xl">★</span>
                    )}
                  </div>
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
