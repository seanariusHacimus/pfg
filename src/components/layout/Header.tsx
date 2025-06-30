"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { DollarSign, Euro, RussianRuble } from 'lucide-react';

// Static data moved into the component file
const currencyData = [
  { currency: 'доллара', icon: 'dollar', value: '13 003.95', change: '+14.88' },
  { currency: 'евро', icon: 'euro', value: '13 003.95', change: '+14.88' }, 
  { currency: 'рубля', icon: 'rubl', value: '13 003.95', change: '+14.88' }
];

const stockData = Array(5).fill({ name: 'OZPH', value: '13 003.95', change: '+14.88' });

const navigationItems = [
  { name: 'Сделка', href: '#' },
  { name: 'Услуги', href: '#' },
  { name: 'Новости', href: '#' },
  { name: 'О нас', href: '#' },
  { name: 'Открыть брокерский счет', href: '#' }
];

const getCurrencyIcon = (iconType: string) => {
  const iconProps = { size: 12, className: "text-white" };
  
  switch (iconType) {
    case 'dollar':
      return <DollarSign {...iconProps} />;
    case 'euro':
      return <Euro {...iconProps} />;
    case 'rubl':
      return <RussianRuble {...iconProps} />;
    default:
      return <RussianRuble {...iconProps} />;
  }
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full font-thin text-white border-[#D8D8D8] border-b-[0.5px] fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1E42A1] -translate-y-[0px]' : 'bg-transparent translate-y-0'}`}>
      
      <div className="border-[#D8D8D8] border-b-[0.5px]">
        <div className="container max-w-[1340px] flex min-h-[44px] mx-auto">

          <div className="min-w-[225px] flex items-center justify-center overflow-hidden relative after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:h-[20px] after:bg-[#D8D8D8]">
            <span className="text-xs text-white whitespace-nowrap">Гарантийный фонд: <span className="ml-1 text-xs"> 169 716,76 сумов</span></span>
          </div>

          <div className="overflow-hidden flex items-center relative after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:h-[20px] after:bg-[#D8D8D8] after:z-10">
            <div className="flex animate-marquee">
              {[...stockData, ...stockData, ...stockData].map((item, index) => (
                <div className="flex text-xs flex-shrink-0 items-center px-2" key={index}>
                  <span className="mr-[3px] font-normal whitespace-nowrap">{item.name}</span>
                  <span className="mr-[4px] font-normal whitespace-nowrap">{item.value}</span>
                  <Image src="/media/increase-top-arrow.svg" alt="Increase arrow" width={11} height={11} />
                  <span className="text-[#00B81D] whitespace-nowrap">{item.change}</span>
                </div>
              ))}
            </div>
            <div className={`absolute left-0 top-0 w-16 h-full bg-gradient-to-r to-transparent z-10 ${isScrolled ? 'from-[#1E42A1]' : 'from-[#223142]'}`}></div>
            <div className={`absolute right-0 top-0 w-16 h-full bg-gradient-to-l to-transparent z-10 ${isScrolled ? 'from-[#1E42A1]' : 'from-[#223142]'}`}></div>
          </div>

          <div className="relative pl-4 overflow-hidden flex items-center">
            <div className="flex animate-marquee-slow">
              {[...currencyData, ...currencyData, ...currencyData].map(({currency, icon, value, change}, index) => (
                <div className="flex text-xs flex-shrink-0 items-center px-1" key={`${currency}-${index}`}>
                  <span className='mr-[1px]'>{getCurrencyIcon(icon)}</span>
                  <span className='mr-[2px] whitespace-nowrap'>{value}</span>
                  <span className="text-[#B2B2B2] whitespace-nowrap">{change}</span>
                </div>
              ))}
            </div>
            <div className={`absolute left-0 top-0 w-16 h-full bg-gradient-to-r to-transparent z-10 ${isScrolled ? 'from-[#1E42A1]' : 'from-[#223142]'}`}></div>
          </div>

        </div>
      </div>

      <div className="container max-w-[1340px] m-auto flex items-center justify-between h-[75px]">
        <div className="flex">

          <div className="pr-11">
            <Image src="/media/PFG Logo.svg" alt="PFG Logo" width={125} height={21} />
          </div>

          <nav className='flex items-center'>
            <ul className="flex gap-8 text-sm items-center">
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
            <div className="flex items-center gap-2 text-sm">
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