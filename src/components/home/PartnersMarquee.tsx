"use client"

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface PartnersMarqueeProps {
  logos: string[];
}

export default function PartnersMarquee({ logos }: PartnersMarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    const contentElement = contentRef.current;
    
    if (!marqueeElement || !contentElement) return;

    // Calculate the width of one set of logos plus the gap to the next set
    const calculateWidth = () => {
      const firstSet = contentElement.querySelector('.logo-set');
      const secondSet = contentElement.querySelectorAll('.logo-set')[1];
      if (firstSet && secondSet) {
        const firstRect = firstSet.getBoundingClientRect();
        const secondRect = secondSet.getBoundingClientRect();
        // Width = first set width + gap between sets
        const width = secondRect.left - firstRect.left;
        return width;
      }
      return 0;
    };

    // Set up the animation with a slight delay to ensure DOM is rendered
    const setupAnimation = () => {
      setTimeout(() => {
        const width = calculateWidth();
        if (width > 0) {
          contentElement.style.setProperty('--marquee-width', `${width}px`);
        }
      }, 100);
    };

    // Setup on mount and resize
    setupAnimation();
    window.addEventListener('resize', setupAnimation);

    return () => {
      window.removeEventListener('resize', setupAnimation);
    };
  }, []);

  return (
    <div 
      ref={marqueeRef}
      className="overflow-hidden w-full"
    >
      <div 
        ref={contentRef}
        className="flex animate-marquee-smooth"
      >
        {/* First set */}
        <div className="logo-set flex items-center flex-shrink-0">
          {logos.map((logo, index) => (
            <div 
              key={`first-${index}`} 
              className={`flex-shrink-0 w-[80px] sm:w-[100px] md:w-[120px] h-[22px] sm:h-[27px] md:h-12 flex items-center justify-center ${
                index < logos.length - 1 ? 'mr-[25px] sm:mr-[35px] md:mr-[54px]' : ''
              }`}
            >
              <Image 
                className="max-h-full max-w-full object-contain" 
                src={`/media/${logo}`} 
                alt={`Partner logo ${index + 1}`} 
                width={120} 
                height={48} 
              />
            </div>
          ))}
        </div>
        
        {/* Second set (duplicate for seamless loop) */}
        <div className="logo-set flex items-center flex-shrink-0 ml-[25px] sm:ml-[35px] md:ml-[54px]">
          {logos.map((logo, index) => (
            <div 
              key={`second-${index}`} 
              className={`flex-shrink-0 w-[80px] sm:w-[100px] md:w-[120px] h-[22px] sm:h-[27px] md:h-12 flex items-center justify-center ${
                index < logos.length - 1 ? 'mr-[25px] sm:mr-[35px] md:mr-[54px]' : ''
              }`}
            >
              <Image 
                className="max-h-full max-w-full object-contain" 
                src={`/media/${logo}`} 
                alt={`Partner logo ${index + 1}`} 
                width={120} 
                height={48} 
              />
            </div>
          ))}
        </div>

        {/* Third set (extra coverage to prevent white space) */}
        <div className="logo-set flex items-center flex-shrink-0 ml-[25px] sm:ml-[35px] md:ml-[54px]">
          {logos.map((logo, index) => (
            <div 
              key={`third-${index}`} 
              className={`flex-shrink-0 w-[80px] sm:w-[100px] md:w-[120px] h-[22px] sm:h-[27px] md:h-12 flex items-center justify-center ${
                index < logos.length - 1 ? 'mr-[25px] sm:mr-[35px] md:mr-[54px]' : ''
              }`}
            >
              <Image 
                className="max-h-full max-w-full object-contain" 
                src={`/media/${logo}`} 
                alt={`Partner logo ${index + 1}`} 
                width={120} 
                height={48} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 