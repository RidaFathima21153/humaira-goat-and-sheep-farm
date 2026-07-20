import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye, Camera } from 'lucide-react';

export default function FarmGallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const galleryItems = [
    {
      src: '/images/hero-entrance.png',
      title: 'Farm Entrance & Blue Ramp',
      category: 'Infrastructure',
      description: 'Our iconic blue wooden elevated walkway leading into the main livestock shed under clear skies.',
      span: 'col-span-1 md:col-span-2 row-span-2'
    },
    {
      src: '/images/baby-goats.png',
      title: 'Healthy Brown & White Kids',
      category: 'Baby Goats',
      description: 'Two adorable baby goats cared for with clean bedding and organic nutrition.',
      span: 'col-span-1 row-span-1'
    },
    {
      src: '/images/male-goat.png',
      title: 'Breeding Male Goat (Buck)',
      category: 'Breeding Stock',
      description: 'Prime male goat standing proudly in the blue metal elevated shed corridor.',
      span: 'col-span-1 row-span-1'
    },
    {
      src: '/images/playing-goats.png',
      title: 'Playful Goats in Yard',
      category: 'Outdoor Courtyard',
      description: 'Goats playing naturally in our wide open courtyard surrounded by lush palm trees.',
      span: 'col-span-1 row-span-1'
    },
    {
      src: '/images/shed-interior.png',
      title: 'Elevated Shed Interior',
      category: 'Hygiene & Facilities',
      description: 'Spacious elevated slatted wooden flooring shed with modern night lighting and clean blue partitions.',
      span: 'col-span-1 md:col-span-2 row-span-1'
    },
  ];

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-24 bg-farm-paleBeige relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-4 py-1.5 rounded-full bg-farm-emerald/10 text-farm-emerald text-xs font-extrabold uppercase tracking-widest flex items-center gap-2 w-fit mx-auto">
            <Camera className="w-4 h-4 text-farm-accentGreen" />
            <span>Real Photos of Our Farm</span>
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-farm-darkGreen">
            Humaira Farm <span className="text-gradient-green">Gallery</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Explore authentic photos of our entrance, elevated sheds, healthy breeding stock, and courtyard exercise grounds. Click any photo to view full size.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setLightboxIndex(index)}
              className={`relative rounded-3xl overflow-hidden shadow-xl cursor-pointer group h-72 md:h-80 ${item.span}`}
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"></div>

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-farm-darkGreen text-xs font-bold shadow-md">
                  {item.category}
                </span>
              </div>

              {/* Expand Icon Button */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity group-hover:scale-110">
                <Maximize2 className="w-5 h-5" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <h4 className="font-heading font-bold text-lg text-white group-hover:text-farm-accentGreen transition-colors flex items-center gap-2">
                  <span>{item.title}</span>
                  <Eye className="w-4 h-4 text-farm-skyBlue opacity-0 group-hover:opacity-100 transition-opacity" />
                </h4>
                <p className="text-xs text-slate-300 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setLightboxIndex(null)}
        >
          <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute -top-12 right-0 text-white hover:text-farm-accentGreen p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image display */}
            <div className="relative w-full max-h-[75vh] flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl bg-black">
              <img
                src={galleryItems[lightboxIndex].src}
                alt={galleryItems[lightboxIndex].title}
                className="max-h-[75vh] w-auto object-contain rounded-xl"
              />

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-4 p-3 rounded-full bg-black/50 text-white hover:bg-farm-emerald hover:scale-110 transition shadow-lg"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 p-3 rounded-full bg-black/50 text-white hover:bg-farm-emerald hover:scale-110 transition shadow-lg"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Image Details Bar */}
            <div className="mt-4 w-full p-4 glass-card-dark rounded-2xl text-white flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <span className="text-xs font-bold text-farm-accentGreen uppercase tracking-wider">
                  {galleryItems[lightboxIndex].category} ({lightboxIndex + 1} of {galleryItems.length})
                </span>
                <h3 className="font-heading font-bold text-xl text-white">
                  {galleryItems[lightboxIndex].title}
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  {galleryItems[lightboxIndex].description}
                </p>
              </div>

              <a
                href={galleryItems[lightboxIndex].src}
                target="_blank"
                download
                className="px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-bold whitespace-nowrap transition flex items-center gap-2"
              >
                <Eye className="w-4 h-4" /> View Full Resolution
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
