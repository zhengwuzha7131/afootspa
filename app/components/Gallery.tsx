'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

const galleryImages = [
  '/gallery/one.jpg',
  '/gallery/two.jpg',
  '/gallery/three.jpg',
  '/gallery/four.jpg',
  '/gallery/five.jpg',
  '/gallery/six.jpg',
  '/gallery/seven.jpg',
  '/gallery/eight.jpg',
  '/gallery/nine.jpg',
  '/gallery/ten.jpg',
  '/gallery/eleven.jpg',
  '/gallery/twelve.jpg',
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPreviousLightbox = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  const goToNextLightbox = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  // Get visible thumbnails (current + 2 on each side)
  const getVisibleThumbnails = () => {
    const thumbnails = [];
    for (let i = 0; i < 5; i++) {
      const index = (currentIndex - 2 + i + galleryImages.length) % galleryImages.length;
      thumbnails.push(index);
    }
    return thumbnails;
  };

  return (
    <>
      {/* Main Carousel */}
      <div className="relative">
        {/* Main Image Display */}
        <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover"
              />
              {/* Gradient overlay for better text visibility */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-slate-900 p-4 rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-slate-900 p-4 rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* View Full Size Button */}
          <button
            onClick={() => openLightbox(currentIndex)}
            className="absolute bottom-6 right-6 z-20 bg-green-500 hover:bg-green-400 text-white px-6 py-3 rounded-full shadow-lg transition-all flex items-center gap-2 font-semibold"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
            View Full Size
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-6 z-20 bg-black/60 text-white px-4 py-2 rounded-full backdrop-blur-sm">
            <span className="font-semibold">{currentIndex + 1}</span>
            <span className="text-gray-300"> / {galleryImages.length}</span>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="mt-6 flex items-center justify-center gap-3">
          {getVisibleThumbnails().map((imageIndex, i) => {
            const isCurrent = imageIndex === currentIndex;
            return (
              <button
                key={i}
                onClick={() => goToSlide(imageIndex)}
                className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
                  isCurrent 
                    ? 'w-24 h-24 ring-4 ring-green-500 scale-110' 
                    : 'w-20 h-20 opacity-60 hover:opacity-100'
                }`}
              >
                <Image
                  src={galleryImages[imageIndex]}
                  alt={`Thumbnail ${imageIndex + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>

        {/* Dot Indicators */}
        <div className="mt-6 flex justify-center gap-2">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex 
                  ? 'w-8 h-3 bg-green-500' 
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="mt-4 text-center">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-sm text-gray-600 hover:text-green-600 transition-colors flex items-center gap-2 mx-auto"
          >
            {isAutoPlaying ? (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
                Auto-play On
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Auto-play Off
              </>
            )}
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-green-400 transition-colors z-50"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image Counter */}
          <div className="absolute top-4 left-4 text-white text-lg font-semibold bg-black/50 px-4 py-2 rounded-full">
            {selectedImage + 1} / {galleryImages.length}
          </div>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPreviousLightbox();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-green-400 transition-colors bg-black/50 hover:bg-black/70 rounded-full p-3"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <div 
            className="relative max-w-6xl max-h-[85vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[selectedImage]}
              alt={`Gallery image ${selectedImage + 1}`}
              fill
              className="object-contain"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNextLightbox();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-green-400 transition-colors bg-black/50 hover:bg-black/70 rounded-full p-3"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Thumbnails */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/50 p-3 rounded-full max-w-[90vw] overflow-x-auto">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(index);
                }}
                className={`relative w-16 h-16 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                  selectedImage === index 
                    ? 'border-green-400 scale-110' 
                    : 'border-transparent hover:border-white/50'
                }`}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
