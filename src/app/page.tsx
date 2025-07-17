 "use client"

import Image from 'next/image';
import React from 'react';

// Import components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import DealCard from '@/components/home/DealCard';
import ServiceCard from '@/components/home/ServiceCard';
import WhyUsItem from '@/components/home/WhyUsItem';
import TeamSlider from '@/components/home/TeamSlider';
import NewsItem from '@/components/home/NewsItem';
import BrokerCard from '@/components/home/BrokerCard';
import DealSlider from '@/components/home/DealSlider';
import WhyUsSlider from '@/components/home/WhyUsSlider';

// Import data
import { 
  heroStats, 
  servicesData, 
  whyUsData, 
  dealsData, 
  teamData, 
  newsData,
  brokerData,
  partnersLogos 
} from '@/components/data';

export default function Home() {
  return (
    <div className="font-sans overflow-x-hidden">
      <Header />

      <section className="bg-gradient-to-b px-5" style={{ backgroundImage: "url('/media/banner.svg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="h-[600px] md:h-[725px] container max-w-[1340px] m-auto text-white flex flex-col justify-end">
          <h1 className="text-[30px] leading-[31px] md:text-[82px] md:leading-19 tracking-tight font-display">Ваш партнер<br /> в мире инвестиций<br /> и финансов</h1>
          <div className="flex pb-[30px] pt-9 md:py-10 items-center">
            <div className="flex gap-8 md:gap-10 md:mr-19">
              {heroStats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-[32px] leading-[22px] tracking-[3%] md:text-[34px] md:leading-9 md:tracking-normal font-display font-normal pb-2 md:pb-0">{stat.number}</span>
                  <p className="text-[18px] leading-[17px] md:text-2xl md:leading-[26px] font-sans font-light tracking-[2%">{stat.description}</p>
                </div>
              ))}
            </div>
            <p className="hidden md:block text-2xl leading-[26px] font-sans font-light tracking-[2%]">Услуги в области инвестиционного посредничества,<br /> выпуска ценных бумаг и сопровождения сделок.</p>
          </div>
        </div>
      </section>

      <section className="bg-white text-black px-5 pt-[30px] md:py-0">
        <div className="container max-w-[1340px] m-auto md:pt-[50px] md:pb-[20px]">
          <h2 className="pb-[35px] text-[25px] leading-[27px] md:text-[34px] md:leading-9 md:pb-[50px] text-[#2450C4] font-display font-normal">Наши услуги</h2>
          <div className="grid grid-cols-2 gap-[10px] md:flex md:gap-[10px]">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} title={service.title} icon={service.icon} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white text-black overflow-hidden py-[34px] md:py-[70px]">
        <div className="flex whitespace-nowrap animate-marquee-partners items-center gap-[54px]">
          {/* First set of logos */}
          {partnersLogos.map((logo, index) => (
            <div key={`first-${index}`} className="flex-shrink-0 w-[80px] sm:w-[100px] md:w-[120px] h-[22px] sm:h-[27px] md:h-12 flex items-center justify-center">
              <Image 
                className="max-h-full max-w-full object-contain" 
                src={`/media/${logo}`} 
                alt={`Partner logo ${index + 1}`} 
                width={120} 
                height={48} 
              />
            </div>
          ))}
          {/* Second set of logos for seamless loop */}
          {partnersLogos.map((logo, index) => (
            <div key={`second-${index}`} className="flex-shrink-0 w-[80px] sm:w-[100px] md:w-[120px] h-[22px] sm:h-[27px] md:h-12 flex items-center justify-center">
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
      </section>

      <section className="bg-[#F2F4F7] text-black px-5">
        <div className="container max-w-[1340px] m-auto pt-[30px] md:pt-[50px] pb-[20px] md:pb-[10px]">
          <h2 className="text-2xl sm:text-3xl md:text-[34px] leading-tight pb-[30px] md:pb-10 text-[#2450C4] font-display font-normal">
            Быть удобным брокером <br></br> для своего клиента
          </h2>
          <div className="flex flex-col sm:flex-row gap-[10px] md:gap-[10px]">
            {brokerData.map((broker, index) => (
              <BrokerCard 
                key={index}
                imageUrl={broker.imageUrl}
                title={broker.title}
                className="w-full md:w-1/2 min-h-[200px]"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F2F4F7] text-black md:px-5">
        <div className="container max-w-[1340px] m-auto pb-[30px] md:pb-[50px]">
          {/* Mobile sliding version */}
          <div className="md:hidden">
            <WhyUsSlider whyUsData={whyUsData.flat()} />
          </div>
          {/* Desktop version */}
          <div className="hidden md:flex md:flex-col gap-[10px]">
            {whyUsData.map((row, rowIndex) => (
              <div key={rowIndex} className="flex gap-[10px]">
                {row.map((item, index) => (
                  <WhyUsItem key={index} title={item.title} icon={item.icon} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white text-black md:px-5">
        <div className="container max-w-[1340px] m-auto py-[30px] md:py-[50px]">
          <h2 className="text-2xl sm:text-3xl md:text-[34px] leading-tight pb-[30px] md:pb-[50px] text-[#2450C4] font-display font-normal px-5 md:px-0">Наша команда</h2>
          <TeamSlider teamData={teamData} />
        </div>
      </section>

      <section className="bg-[#F2F4F7] text-black bg-cover bg-center md:px-5">
        <div className="container max-w-[1340px] m-auto py-[30px] md:py-[50px]">
          <h2 className="text-2xl sm:text-3xl md:text-[34px] leading-tight pb-[30px] md:pb-[50px] text-[#2450C4] font-display font-normal px-5 md:px-0">Наши сделки</h2>
          {/* Mobile sliding version */}
          <div className="md:hidden">
            <DealSlider dealsData={dealsData} />
          </div>
          {/* Desktop version */}
          <div className="hidden md:flex gap-[10px]">
            {dealsData.map((deal, index) => (
              <DealCard 
                key={index} 
                title={deal.title} 
                parties={deal.parties} 
                amount={deal.amount} 
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white text-black px-5">
        <div className="container max-w-[1340px] m-auto py-[30px] md:py-[50px]">
          <h2 className="text-2xl sm:text-3xl md:text-[34px] leading-tight pb-[30px] md:pb-[50px] text-[#2450C4] font-display font-normal">Новости</h2>
          <div className="flex flex-col md:flex-row md:gap-[10px]">
            <div className="w-full md:w-1/2">
              {newsData.smallNews.map((news, index) => (
                <NewsItem 
                  key={index}
                  title={news.title}
                  category={news.category}
                  date={news.date}
                  image={news.image}
                />
              ))}
            </div>
            <div className="w-full md:w-1/2">
              <NewsItem 
                title={newsData.featuredNews.title}
                category={newsData.featuredNews.category}
                date={newsData.featuredNews.date}
                image={newsData.featuredNews.image}
                isLarge={true}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
