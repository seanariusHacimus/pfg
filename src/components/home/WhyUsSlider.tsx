"use client"

import { useState, useRef, useEffect } from 'react';
import WhyUsItem from './WhyUsItem';

interface WhyUsData {
  title: string;
  icon: string;
}

interface WhyUsSliderProps {
  whyUsData: WhyUsData[];
}

export default function WhyUsSlider({ whyUsData }: WhyUsSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const checkScrollButtons = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', checkScrollButtons);
      return () => slider.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      checkScrollButtons();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const calculateItemWidth = () => {
    if (sliderRef.current) {
      const firstItem = sliderRef.current.querySelector('.whyus-item');
      if (firstItem) {
        const itemWidth = firstItem.getBoundingClientRect().width;
        const gap = 10; // 10px gap between items
        return itemWidth + gap;
      }
    }
    return 290; // Fallback value (280px width + 10px gap)
  };

  const scrollToDirection = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      // Small delay to ensure DOM is fully rendered
      setTimeout(() => {
        const itemWidth = calculateItemWidth();
        const itemsToScroll = window.innerWidth < 768 ? 1 : 2; // 1 item on mobile, 2 on desktop
        const scrollAmount = itemWidth * itemsToScroll;
        
        const newScrollLeft = direction === 'left' 
          ? sliderRef.current!.scrollLeft - scrollAmount
          : sliderRef.current!.scrollLeft + scrollAmount;
        
        sliderRef.current!.scrollTo({
          left: newScrollLeft,
          behavior: 'smooth'
        });
      }, 10);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (sliderRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (sliderRef.current) {
      setIsDragging(true);
      setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !sliderRef.current) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative overflow-x-visible overflow-y-hidden scrollbar-hide -mx-5 md:mx-0">
      {/* Left Arrow */}
      <button
        onClick={() => scrollToDirection('left')}
        className={`absolute left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-all duration-300 cursor-pointer ${
          showLeftArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 9L1 5L5 1" stroke="#2450C4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => scrollToDirection('right')}
        className={`absolute right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-all duration-300 cursor-pointer ${
          showRightArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L5 5L1 9" stroke="#2450C4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Slider Container */}
      <div
        ref={sliderRef}
        className={`overflow-x-auto overflow-y-hidden scrollbar-hide px-5 md:px-0 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex gap-[10px] w-max pl-5 pr-5 md:pr-0 md:pl-0">
          {whyUsData.map((item, index) => (
            <div key={index} className="flex-shrink-0 whyus-item">
              <WhyUsItem title={item.title} icon={item.icon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 