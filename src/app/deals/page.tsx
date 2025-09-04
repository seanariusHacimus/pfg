"use client"

import HeaderWhite from '../../components/layout/HeaderWhite';
import Footer from '../../components/layout/Footer';
import DealCard from '../../components/home/DealCard';
import DealSlider from '../../components/home/DealSlider';
import { dealsData } from '../../components/data';
import { useState } from 'react';

export default function DealsPage() {
  const [visibleDeals, setVisibleDeals] = useState(10); // Show 10 deals initially (5x2 grid)
  
  const loadMoreDeals = () => {
    setVisibleDeals(prev => prev + 10); // Load 10 more deals
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
            <DealSlider dealsData={dealsData} />
          </div>
        </section>

        {/* Deals Grid Section */}
        <section className="bg-white text-black px-5">
          <div className="container max-w-[1340px] m-auto pt-0 md:pt-[50px] pb-[58px] md:pb-[58px]">
            {/* Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[10px]">
              {dealsData.slice(0, visibleDeals).map((deal, index) => (
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
                />
              ))}
            </div>

            {/* Load More Button */}
            {visibleDeals < dealsData.length && (
              <div className="flex justify-center mt-[40px] md:mt-[60px]">
                <button 
                  onClick={loadMoreDeals}
                  className="bg-[#2450C4] text-white px-[32px] py-[12px] text-[14px] font-medium hover:bg-[#1a3a9a] transition-colors duration-300"
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
