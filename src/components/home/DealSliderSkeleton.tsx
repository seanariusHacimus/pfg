"use client"

import { useState, useRef, useEffect } from 'react';
import DealCardSkeleton from './DealCardSkeleton';

export default function DealSliderSkeleton() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(240);

  const getVisibleCardsCount = () => {
    const width = window.innerWidth;
    if (width < 640) return 1; // Mobile: 1 card
    if (width < 768) return 2; // Small tablet: 2 cards
    if (width < 1024) return 3; // Tablet: 3 cards
    if (width < 1280) return 4; // Small desktop: 4 cards
    return 5; // Large desktop: 5 cards
  };

  const calculateCardWidth = () => {
    if (sliderRef.current) {
      const width = window.innerWidth;
      
      // Fixed width for mobile
      if (width < 640) {
        setCardWidth(260);
        return 260;
      }
      
      // Dynamic width for larger screens
      const containerWidth = sliderRef.current.clientWidth;
      const gap = 10; // 10px gap between items
      const visibleCards = getVisibleCardsCount();
      const totalGaps = (visibleCards - 1) * gap;
      const availableWidth = containerWidth - totalGaps;
      const newCardWidth = Math.floor(availableWidth / visibleCards);
      setCardWidth(newCardWidth);
      return newCardWidth;
    }
    return 240;
  };

  useEffect(() => {
    calculateCardWidth();
    
    const handleResize = () => {
      calculateCardWidth();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Show 5 skeleton cards to simulate loading
  const skeletonCards = Array.from({ length: 5 });

  return (
    <div className="relative w-full">
      {/* Skeleton Navigation Arrows */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 opacity-30">
        <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
      </div>
      
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 opacity-30">
        <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
      </div>

      {/* Skeleton Slider Container */}
      <div 
        ref={sliderRef}
        className="flex overflow-hidden gap-[10px] px-5"
        style={{ scrollBehavior: 'smooth' }}
      >
        {skeletonCards.map((_, index) => (
          <div key={`skeleton-slider-${index}`} className="flex-shrink-0">
            <DealCardSkeleton width={cardWidth} />
          </div>
        ))}
      </div>
    </div>
  );
}
