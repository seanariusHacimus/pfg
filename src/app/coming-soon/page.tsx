"use client"

import React from 'react';
import Link from 'next/link';
import HeaderWhite from '@/components/layout/HeaderWhite';
import Footer from '@/components/layout/Footer';

export default function ComingSoon() {
  return (
    <div className="font-sans overflow-x-hidden">
      <HeaderWhite />
      
      {/* Coming Soon Section */}
      <section className="bg-white text-black px-5 pt-[93px] md:pt-[125px]">
        <div className="container max-w-[1340px] m-auto min-h-[430px] md:min-h-[700px] flex flex-col items-center justify-center py-[50px] md:py-[100px]">
          <div className="text-center max-w-[760px] mx-auto">
            <h1 className="text-[30px] leading-[31px] tracking-[-0.04em] md:text-[82px] md:leading-[75px] md:tracking-[-4%] font-display font-normal text-[#2450C4] mb-[30px] md:mb-[50px] text-center">
              Раздел на стадии разработки
            </h1>
            <Link 
              href="/"
              className="inline-flex items-center justify-center px-[25px] py-[19px] w-[250px] h-[45px] md:max-w-[240px] md:h-[58px] md:px-[26px] md:py-[18px] bg-[#F3F7FA] border border-[#0046FF] text-black text-[14px] leading-[17px] md:text-[18px] md:leading-[22px] tracking-[0.01em] font-sans font-light text-center hover:bg-[#E8F2F5] transition-colors duration-200"
            >
              Вернуться на главную
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
