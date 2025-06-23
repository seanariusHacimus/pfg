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
        <div className="h-[715px] container max-w-[1440px] m-auto text-white flex flex-col justify-end ">
          <h1 className="text-7xl leading-16 font-display font-normal">Ваш партнер<br /> в мире инвестиций<br /> и финансов</h1>
          <div className="flex py-14 items-center">
            <div className="flex gap-12 mr-20">
              {heroStats.map((stat, index) => (
                <div key={index} className="flex flex-col pl-2.5 border-l border-[#2E68FF]">
                  <span className="text-4xl leading-9 font-display font-normal">{stat.number}</span>
                  <p className="text-2xl leading-6 font-sans font-light">{stat.description}</p>
                </div>
              ))}
            </div>
            <p className="text-2xl leading-7 font-sans font-light">Услуги в области инвестиционного посредничества,<br /> выпуска ценных бумаг и сопровождения сделок.</p>
          </div>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="container max-w-[1440px] m-auto py-14">
          <h2 className="text-4xl leading-9 pb-6 text-[#2450C4] font-display font-normal">Наши услуги</h2>
          <div className="flex gap-3">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} title={service.title} icon={service.icon} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="container max-w-[1440px] m-auto py-14">
          <Image className="w-full" src="/media/partners full.svg" alt="" width={1440} height={100} />
        </div>
      </section>

      <section className="bg-[#F2F4F7] text-black">
        <div className="container max-w-[1440px] m-auto pt-14 pb-5">
          <h2 className="text-2xl sm:text-3xl md:text-4xl leading-tight pb-4 md:pb-6 text-[#2450C4] font-display font-normal">
            Быть удобным брокером для своего клиента
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-6">
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
        <div className="container max-w-[1440px] m-auto pb-14">
          <div className="flex flex-col gap-5">
            {whyUsData.map((row, rowIndex) => (
              <div key={rowIndex} className="flex gap-5">
                {row.map((item, index) => (
                  <WhyUsItem key={index} title={item.title} icon={item.icon} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="container max-w-[1440px] m-auto py-14">
          <h2 className="text-4xl leading-9 pb-11 text-[#2450C4] font-display font-normal">Наша команда</h2>
          <div className="flex gap-6 flex-wrap">
            {teamData.map((member, index) => (
              <TeamMember 
                key={index}
                name={member.name}
                position={member.position}
                imageUrl={member.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F2F4F7] text-black bg-cover bg-center">
        <div className="container max-w-[1440px] m-auto py-14">
          <h2 className="text-4xl leading-9 pb-11 text-[#2450C4] font-display font-normal">Наши сделки</h2>
          <div className="flex gap-6">
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
        <div className="container max-w-[1440px] m-auto py-14">
          <h2 className="text-4xl leading-9 pb-11 text-[#2450C4] font-display font-normal">Новости</h2>
          <div className="flex">
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
