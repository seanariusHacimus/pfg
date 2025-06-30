"use client"

import Image from 'next/image';
import React from 'react';

// Import components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import DealCard from '@/components/home/DealCard';
import ServiceCard from '@/components/home/ServiceCard';
import WhyUsItem from '@/components/home/WhyUsItem';
import TeamMember from '@/components/home/TeamMember';
import TeamSlider from '@/components/home/TeamSlider';
import NewsItem from '@/components/home/NewsItem';
import BrokerCard from '@/components/home/BrokerCard';

// Import data
import { 
  heroStats, 
  servicesData, 
  whyUsData, 
  dealsData, 
  teamData, 
  newsData,
  brokerData 
} from '@/components/data';

export default function Home() {
  return (
    <div className="font-sans">
      <Header />

      <section className="bg-gradient-to-b" style={{ backgroundImage: "url('/media/banner.svg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="h-[725px] container max-w-[1340px] m-auto text-white flex flex-col justify-end">
          <h1 className="text-[82px] leading-19 tracking-tight font-display">Ваш партнер<br /> в мире инвестиций<br /> и финансов</h1>
          <div className="flex py-10 items-center">
            <div className="flex gap-10 mr-19">
              {heroStats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-[34px] leading-9 font-display font-normal">{stat.number}</span>
                  <p className="text-2xl leading-[26px] font-sans font-light tracking-[2%">{stat.description}</p>
                </div>
              ))}
            </div>
            <p className="text-2xl leading-[26px] font-sans font-light tracking-[2%]">Услуги в области инвестиционного посредничества,<br /> выпуска ценных бумаг и сопровождения сделок.</p>
          </div>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="container max-w-[1340px] m-auto pt-[50px] pb-[20px]">
          <h2 className="text-[34px] leading-9 pb-[50px] text-[#2450C4] font-display font-normal">Наши услуги</h2>
          <div className="flex gap-3">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} title={service.title} icon={service.icon} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="container max-w-[1340px] m-auto py-14">
          <Image className="w-full" src="/media/partners full.svg" alt="" width={1440} height={100} />
        </div>
      </section>

      <section className="bg-[#F2F4F7] text-black">
        <div className="container max-w-[1340px] m-auto pt-[50px] pb-[10px]">
          <h2 className="text-2xl sm:text-3xl md:text-[34px] leading-tight pb-4 md:pb-10 text-[#2450C4] font-display font-normal">
            Быть удобным брокером <br></br> для своего клиента
          </h2>
          <div className="flex flex-col sm:flex-row gap-[10px] md:gap-[10px]">
            {brokerData.map((broker, index) => (
              <BrokerCard 
                key={index}
                imageUrl={broker.imageUrl}
                title={broker.title}
                className="w-1/2" // Added w-1/2 to make each card take 50% width
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F2F4F7] text-black">
        <div className="container max-w-[1340px] m-auto pb-[50px]">
          <div className="flex flex-col gap-[10px]">
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

      <section className="bg-white text-black">
        <div className="container max-w-[1340px] m-auto py-[50px]">
          <h2 className="text-[34px] leading-9 pb-[50px] text-[#2450C4] font-display font-normal">Наша команда</h2>
          <TeamSlider teamData={teamData} />
        </div>
      </section>

      <section className="bg-[#F2F4F7] text-black bg-cover bg-center">
        <div className="container max-w-[1340px] m-auto py-[50px]">
          <h2 className="text-[34px] leading-9 pb-[50px] text-[#2450C4] font-display font-normal">Наши сделки</h2>
          <div className="flex gap-[10px]">
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

      <section className="bg-white text-black">
        <div className="container max-w-[1340px] m-auto py-[50px]">
          <h2 className="text-[34px] leading-9 pb-[50px] text-[#2450C4] font-display font-normal">Новости</h2>
          <div className="flex gap-[10px]">
            <div className="w-1/2">
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
            <div className="w-1/2">
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
