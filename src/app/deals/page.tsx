"use client"

import React, { useState, useEffect } from 'react';
import HeaderWhite from '@/components/layout/HeaderWhite';
import Footer from '@/components/layout/Footer';
import DealSlider from '@/components/home/DealSlider';
import DealSliderSkeleton from '@/components/home/DealSliderSkeleton';
import DealCard from '@/components/home/DealCard';
import DealCardSkeleton from '@/components/home/DealCardSkeleton';
import { dealsData } from '@/components/data';

export default function DealsPage() {
  const [visibleDeals, setVisibleDeals] = useState(10); // Show 10 deals initially (5x2 grid)
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  
  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const loadMoreDeals = () => {
    setIsLoadingMore(true);
    // Simulate loading more deals
    setTimeout(() => {
      setVisibleDeals(prev => prev + 10); // Load 10 more deals
      setIsLoadingMore(false);
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <HeaderWhite />
      
      {/* Main Content */}
      <main className="flex-1 pt-[75px] md:pt-[75px]">
        {/* Deals Heading Section */}
        <section className="bg-white text-black px-5">
          <div className="container max-w-[1340px] m-auto pt-[109px] md:pt-[145px] pb-[36px] md:pb-[20px]">
            <h1 className="text-[30px] leading-[31px] md:text-[82px] md:leading-[75px] font-normal text-[#2450C4] tracking-[-0.04em] font-display">
              Сделки
            </h1>
          </div>
        </section>

        {/* Mobile-only Deals Slider */}
        <section className="bg-white text-black px-0 block md:hidden">
          <div className="container max-w-[1340px] m-auto pt-0 pb-[40px]">
            {isLoading ? (
              <DealSliderSkeleton />
            ) : (
              <DealSlider dealsData={dealsData} />
            )}
          </div>
        </section>

        {/* Deals Grid Section */}
        <section className="bg-white text-black px-5">
          <div className="container max-w-[1340px] m-auto pt-0 md:pt-[50px] pb-[58px] md:pb-[58px]">
            {/* Deals Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-[10px]">
              {isLoading ? (
                // Show skeleton loading cards
                Array.from({ length: 10 }).map((_, index) => (
                  <DealCardSkeleton 
                    key={`skeleton-${index}`}
                    fullWidth={true}
                    noBorderOnMobile={true}
                  />
                ))
              ) : (
                // Show actual deal cards
                dealsData.slice(0, visibleDeals).map((deal, index) => (
                  <DealCard 
                    key={index}
                    companyName={deal.companyName}
                    date={deal.date}
                    shareCount={deal.shareCount}
                    shareDescription={deal.shareDescription}
                    percentage={deal.percentage}
                    percentageDescription={deal.percentageDescription}
                    dealAmount={deal.dealAmount}
                    fullWidth={true}
                    noBorderOnMobile={true}
                  />
                ))
              )}
              
              {/* Show additional skeleton cards when loading more */}
              {isLoadingMore && (
                Array.from({ length: 10 }).map((_, index) => (
                  <DealCardSkeleton 
                    key={`loading-more-${index}`}
                    fullWidth={true}
                    noBorderOnMobile={true}
                  />
                ))
              )}
            </div>

            {/* Load More Button */}
            {visibleDeals < dealsData.length && (
              <div className="flex justify-center mt-[40px] md:mt-[60px]">
                <button 
                  onClick={loadMoreDeals}
                  className="inline-flex items-center justify-center px-[25px] py-[19px] w-[250px] h-[45px] md:max-w-[240px] md:h-[58px] md:px-[26px] md:py-[18px] bg-[#F3F7FA] border border-[#0046FF] text-black text-[14px] leading-[17px] md:text-[18px] md:leading-[22px] tracking-[0.01em] font-sans font-light text-center hover:bg-[#E8F2F5] transition-colors duration-200"
                >
                  Загрузить еще
                </button>
              </div>
            )}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
