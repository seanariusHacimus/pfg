'use client';

import { useState, useEffect } from 'react';
import HeaderWhite from '../../components/layout/HeaderWhite';
import Footer from '../../components/layout/Footer';
import FeaturedNewsItem from '../../components/home/FeaturedNewsItem';
import NewsPageSkeleton from '../../components/skeletons/NewsPageSkeleton';
import MobileNewsPageSkeleton from '../../components/skeletons/MobileNewsPageSkeleton';
import { newsData } from '../../components/data';

export default function NewsPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for demonstration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <HeaderWhite />
        <div className="block md:hidden">
          <MobileNewsPageSkeleton />
        </div>
        <div className="hidden md:block">
          <NewsPageSkeleton />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <HeaderWhite />
      
      {/* Main Content */}
      <main className="flex-1 pt-[75px] md:pt-[75px]">
        {/* News Heading Section */}
        <section className="bg-white text-black px-5">
          <div className="container max-w-[1340px] m-auto pt-[109px] md:pt-[145px] pb-[36px] md:pb-[20px]">
            <h1 className="text-[30px] leading-[31px] md:text-[82px] md:leading-[75px] font-normal text-[#2450C4] tracking-[-0.04em] font-display">
              Новости
            </h1>
          </div>
        </section>

        {/* Featured News Section */}
        <section className="bg-white text-black px-5">
          <div className="container max-w-[1340px] m-auto pt-0 md:pt-[50px] pb-[58px] md:pb-[58px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[45px] md:gap-x-[56px] md:gap-y-[45px]">
              {newsData.featuredNewsGrid.map((news, index) => (
                <FeaturedNewsItem 
                  key={index}
                  title={news.title}
                  category={news.category}
                  date={news.date}
                  image={news.image}
                  slug={news.slug}
                />
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
