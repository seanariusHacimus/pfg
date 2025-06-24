"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Static data moved into the component file
const currencyData = [
  { currency: 'доллара', icon: 'dollar', value: '13 003.95', change: '+14.88' },
  { currency: 'евро', icon: 'euro', value: '13 003.95', change: '+14.88' }, 
  { currency: 'рубля', icon: 'rubl', value: '13 003.95', change: '+14.88' }
];

const stockData = Array(4).fill({ name: 'OZPH', value: '13 003.95', change: '+14.88' });

const navigationItems = [
  { name: 'Сделка', href: '#' },
  { name: 'Услуги', href: '#' },
  { name: 'Новости', href: '#' },
  { name: 'О нас', href: '#' },
  { name: 'Открыть брокерский счет', href: '#' }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 680);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full border-white border-b-[1px] fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black -translate-y-[68px]' : 'bg-transparent translate-y-0'}`}>
      <div className="border-white border-b-[1px]">
        <div className="container max-w-[1440px] m-auto flex text-white">
          <div className="pr-7 py-3">
            <span className="text-[12px] text-white">Гарантийный фонд: <span className="ml-1 text-[12px]"> 169 716,76 сумов</span></span>
          </div>
          <div className="flex items-center px-7 py-3  gap-4 border-white border-l-[1px]">
            {stockData.map((item, index) => (
              <div className="flex text-[12px]" key={index}>
                <span className="mr-1 font-medium">{item.name}</span>
                <span className="mr-1 font-normal">{item.value}</span>
                <Image src="/media/increase-top-arrow.svg" alt="Increase arrow" width={11} height={11} />
                <span className="text-[#00B81D]">{item.change}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-7 px-7 py-3 border-white border-r-[1px] border-l-[1px]">
            {currencyData.map(({currency, icon, value, change}) => (
              <div className="flex text-[12px]" key={currency}>
                <Image className="mr-1" src={`/media/${icon}.svg`} alt={`${currency} icon`} width={10} height={10} />
                <span className="mr-1">{value}</span>
                <span className="mr-1 text-[#B2B2B2]">{change}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container max-w-[1440px] m-auto flex items-center justify-between py-5">
        <div className="flex">
          <div>
            <Image src="/media/PFG Logo.svg" alt="PFG Logo" width={125} height={21} />
          </div>
          <nav className="pl-11">
            <ul className="flex gap-8 text-white text-[12px] items-center">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:opacity-80">{item.name}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center">
          <div className="flex items-center gap-8 text-white">
            <div className="flex items-center gap-2 text-[12px]">
              <Image src="/media/lang-arrow.svg" alt="language arrow right" width={6} height={6} />
              <span>RUSSIAN</span>
            </div>
            <a href="tel:+998712001234" className="hover:opacity-80 text-2xl leading-6">+998 71 200 12 34</a>
          </div>
        </div>
      </div>  
    </header>
  );
} 