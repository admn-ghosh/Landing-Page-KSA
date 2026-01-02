import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Project {
  title: string;
  description: string;
  alt: string;
  imageSrc: string;
}

const PROJECTS: Project[] = [
  {
    title: "Corrugated Sandwich Panel",
    description: "Sandwich panel delivery across GCC - Corrugated Sandwich Panel",
    alt: "Sandwich panel delivery across GCC - Corrugated Sandwich Panel",
    imageSrc: "https://ghoshgroups.com/wp-content/uploads/2019/03/Corrugated-Sandwich-panel-supplier-dubai-1.jpg" 
  },
  {
    title: "Roof Sandwich Panel",
    description: "Roof Sandwich Panel - Commercial delivery",
    alt: "Sandwich panel delivery across GCC - Roof Sandwich Panel",
    imageSrc: "https://ghoshgroups.com/wp-content/uploads/2019/03/sandwich-panel-roof-supplier-uae.jpg"
  },
  {
    title: "Insulated Roof Panel",
    description: "Door Step Delivery - All over KSA",
    alt: "Sandwich panel delivery across GCC - Insulated Roof Panel",
    imageSrc: "https://ghoshgroups.com/wp-content/uploads/2019/03/insulated-roof-panel-supplier-uae.jpg"
  },
  {
    title: "Flat Sandwich Panel",
    description: "Production Stock Ready - Available for prompt delivery",
    alt: "Sandwich panel delivery across GCC - Flat Sandwich Panel",
    imageSrc: "https://ghoshgroups.com/wp-content/uploads/2019/03/flat-sandwich-panel-supplier-uae.jpg"
  },
  {
    title: "Aluminum Sandwich Panel",
    description: "Quality Aluminum Sandwich Panel - Customised as per your project",
    alt: "Sandwich panel delivery across GCC - Aluminum Sandwich Panel",
    imageSrc: "https://ghoshgroups.com/wp-content/uploads/2019/03/aluminum-sandwich-panel-supplier-dubai.jpg"
  },
  {
    title: "Top Sandwich Panel Supplier",
    description: "Sandwich Panel Supplier - For all types of project in Saudi Arabia",
    alt: "Sandwich panel delivery across GCC - Top Sandwich Panel Supplier",
    imageSrc: "https://ghoshgroups.com/wp-content/uploads/2018/03/puf-insulated-panels-suppliers.jpg"
  }
];

const ProjectGallery: React.FC = () => {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoPlayRef = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  }, []);

  // Auto-play logic
  useEffect(() => {
    if (isPaused) return;
    
    autoPlayRef.current = window.setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Logic needs to reverse for RTL if using semantic next/prev, but typically arrows are physical direction
      if (e.key === 'ArrowLeft') language === 'ar' ? nextSlide() : prevSlide();
      if (e.key === 'ArrowRight') language === 'ar' ? prevSlide() : nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide, language]);

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isSwipeA = distance > 50;
    const isSwipeB = distance < -50;

    // In RTL, swipe direction meaning flips logically, but physically swipe left usually means "show next" (dragging content left) regardless of lang
    if (isSwipeA) nextSlide();
    if (isSwipeB) prevSlide();

    touchStartX.current = 0;
    touchEndX.current = 0;
    setIsPaused(false);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-4">{t.gallery.title}</h2>
          <p className="text-base md:text-lg text-stone-700 max-w-4xl mx-auto leading-relaxed">
            {t.gallery.desc}
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-5xl mx-auto group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          dir="ltr" 
        >
          {/* Note: Kept dir="ltr" on carousel container to maintain physical slide direction regardless of page language */}

          {/* Main Slide Area */}
          <div className="overflow-hidden rounded-xl shadow-lg border border-stone-200 bg-stone-100 relative aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/9]">
            {PROJECTS.map((project, index) => (
              <div 
                key={index}
                className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              >
                <img 
                  src={project.imageSrc} 
                  alt={project.alt}
                  className="object-cover w-full h-full"
                  loading={index === 0 ? "eager" : "lazy"} 
                  width="1200"
                  height="675"
                />
                
                {/* Overlay Caption - Force Left Align inside the slide for consistency with image design or adapt */}
                <div className={`absolute bottom-0 w-full bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 md:p-10 text-white ${language === 'ar' ? 'text-right right-0' : 'text-left left-0'}`}>
                   <div className={`${language === 'ar' ? 'border-r-4 pr-4 border-emerald-500' : 'border-l-4 pl-4 border-emerald-500'}`}>
                      <h3 className="text-xl md:text-2xl font-bold mb-1">{project.title}</h3>
                      <p className="text-stone-200 text-base md:text-lg">{project.description}</p>
                   </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 z-20 bg-emerald-600/90 hover:bg-emerald-700 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-emerald-400 opacity-80 hover:opacity-100"
            aria-label="Previous slide"
          >
            <ChevronLeft size={28} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 z-20 bg-emerald-600/90 hover:bg-emerald-700 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-emerald-400 opacity-80 hover:opacity-100"
            aria-label="Next slide"
          >
            <ChevronRight size={28} />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-3 mt-6">
            {PROJECTS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? 'bg-emerald-600 w-8' 
                    : 'bg-stone-300 hover:bg-emerald-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;