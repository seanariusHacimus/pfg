"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { DollarSign, Euro, RussianRuble } from 'lucide-react';
import { useCurrencyRates } from '../../hooks/useCurrencyRates';
import { useStockQuotes } from '../../hooks/useStockQuotes';
import { useGuaranteeFund } from '../../hooks/useGuaranteeFund';



const navigationItems = [
  { name: 'Сделки', href: '/coming-soon' },
  { name: 'Услуги', href: '/coming-soon' },
  { name: 'Новости', href: '/news' },
  { name: 'О нас', href: '/coming-soon' },
  { name: 'Брокерский счет', href: '/coming-soon' }
];

const getCurrencyIcon = (iconType: string) => {
  const iconProps = { size: 12, className: "text-black" };
  
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

export default function HeaderWhite() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currencyRates, loading: currencyLoading } = useCurrencyRates();
  const { stockQuotes, loading: stockLoading } = useStockQuotes();
  const { guaranteeFund, loading: guaranteeFundLoading } = useGuaranteeFund();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };



  return (
    <>
      <header 
        className="w-full font-thin fixed top-0 left-0 z-50 bg-white text-black border-b border-[#D8D8D8]"
      >
        
        {/* Top ticker section - HIDDEN */}
        <div className="border-[#D8D8D8] border-b-[0.5px] hidden">
          <div className="container max-w-[1340px] flex md:min-h-[44px] min-h-[33px] mx-auto overflow-hidden">

            <div className="hidden min-w-[225px] md:flex items-center justify-center overflow-hidden relative after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:h-[20px] after:bg-[#D8D8D8]">
              <span className="text-xs whitespace-nowrap font-normal text-black">Гарантийный фонд: <span className="ml-1 text-xs">{guaranteeFundLoading ? 'Загрузка...' : guaranteeFund.totalAmount}</span></span>
            </div>

            <div className="flex items-center relative flex-1 md:w-[60%] after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:h-[20px] after:bg-[#D8D8D8] after:z-10">
              <div className="overflow-hidden w-full mx-[5px]">
                <div className="flex animate-marquee">
                  {stockLoading ? (
                    <div className="flex text-xs flex-shrink-0 items-center px-2">
                      <span className="text-[#B2B2B2] whitespace-nowrap font-normal">Загрузка акций...</span>
                    </div>
                  ) : (
                    [...stockQuotes, ...stockQuotes, ...stockQuotes].map((item, index) => (
                      <div className="flex text-xs flex-shrink-0 items-center px-2" key={`${item.symbol}-${index}`}>
                      <span className="mr-[3px] font-normal whitespace-nowrap text-black">{item.name}</span>
                        <span className="mr-[4px] font-normal whitespace-nowrap text-black">{item.price}</span>
                      <Image src="/media/increase-top-arrow.svg" alt="Increase arrow" width={11} height={11} />
                      <span className="text-[#00B81D] whitespace-nowrap font-normal">{item.change}</span>
                    </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            <div className="relative hidden md:flex items-center min-h-[44px] flex-1">
              <div className="overflow-hidden w-full mx-[5px] h-[44px] flex items-center">
                <div className="flex">
                  {currencyLoading ? (
                    <div className="flex text-xs flex-shrink-0 items-center px-1">
                      <span className="text-[#B2B2B2] whitespace-nowrap font-normal">Загрузка курсов...</span>
                    </div>
                  ) : (
                    [...currencyRates, ...currencyRates, ...currencyRates].map(({currency, icon, value, change}, index) => (
                    <div className="flex text-xs flex-shrink-0 items-center px-1" key={`${currency}-${index}`}>
                      <span className='mr-[1px]'>{getCurrencyIcon(icon)}</span>
                      <span className='mr-[2px] whitespace-nowrap font-normal text-black'>{value}</span>
                      <span className="text-[#B2B2B2] whitespace-nowrap font-normal">{change}</span>
                    </div>
                    ))
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Main header */}
        <div className="container max-w-[1340px] m-auto">
          <div className="flex items-center justify-between py-[18px] md:py-[0px] md:h-[75px] px-4 md:px-0">
          <div className="flex">

            <div className="max-w-[95px] md:max-w-[125px] md:pr-11">
              <Image src="/media/pfg-logo-footer.svg" alt="PFG Logo" width={95} height={26} />
            </div>

            {/* Desktop Navigation */}
            <nav className='hidden lg:flex items-center'>
              <ul className="flex gap-8 text-sm items-center">
                {navigationItems.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="hover:opacity-80 font-normal text-black">{item.name}</a>
                  </li>
                ))}
              </ul>
            </nav>

          </div>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 text-sm">
                <Image src="/media/lang-arrow-black.svg" alt="language arrow right" width={6} height={6} />
                <span className='font-normal text-black'>RUSSIAN</span>
              </div>
              <a href="tel:+99855515200" className="hover:opacity-80 text-2xl leading-6 text-black">+998 55 515-20-00</a>
            </div>
          </div>

          {/* Mobile Right Side */}
          <div className="flex md:hidden items-center gap-7 md:gap-3">
            <div className="flex items-center gap-2 text-sm">
              <Image 
                className='md:hidden' 
                src="/media/lang-arrow-black.svg" 
                alt="language arrow right" 
                width={6} 
                height={6} 
              />
              <Image 
                className='hidden md:block' 
                src="/media/lang-arrow-black.svg" 
                alt="language arrow right" 
                width={6} 
                height={6} 
              />
              <span className='font-normal text-black'>RU</span>
            </div>
            
            {/* Mobile Hamburger Menu */}
            <button 
              className="cursor-pointer"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <Image 
                src="/media/humburger-icon.svg" 
                alt="Menu" 
                width={32} 
                height={12}
                className="brightness-0"
              />
            </button>
          </div>

          </div>
          
        </div>
        
        {/* Guarantee Fund under navigation - Mobile Only - Full Width */}
        <div className={`w-full md:hidden border-t border-[#D8D8D8] transition-all duration-300 overflow-hidden ${isScrolled ? 'h-0 opacity-0 pointer-events-none' : 'h-auto py-3 opacity-100'}`}>
          <div className="container max-w-[1340px] mx-auto px-4">
            <span className="text-sm whitespace-nowrap font-normal text-black">Гарантийный фонд: <span className="ml-1">{guaranteeFundLoading ? 'Загрузка...' : guaranteeFund.totalAmount}</span></span>
          </div>
        </div>

      </header>

      {/* Mobile Guarantee Fund Section - HIDDEN */}
      <div className="hidden">
        <div className="container max-w-[1340px] mx-auto px-4">
          <div className="flex items-center min-h-[44px]">
            <span className="text-[14px] text-black whitespace-nowrap font-normal">Гарантийный фонд: <span className="ml-1">{guaranteeFundLoading ? 'Загрузка...' : guaranteeFund.totalAmount}</span></span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[60] lg:hidden">
          <div className="h-full flex flex-col">
            
            {/* Mobile Menu Stocks Section - HIDDEN */}
            <div className="border-b border-[#D8D8D8] hidden">
              <div className="flex items-center min-h-[33px] relative">
                <div className="overflow-hidden flex-1 mx-[5px]">
                  <div className="flex animate-marquee">
                    {stockLoading ? (
                      <div className="flex text-xs flex-shrink-0 items-center px-2 text-black">
                        <span className="text-[#B2B2B2] whitespace-nowrap font-normal">Загрузка акций...</span>
                      </div>
                    ) : (
                      [...stockQuotes, ...stockQuotes, ...stockQuotes].map((item, index) => (
                        <div className="flex text-xs flex-shrink-0 items-center px-2 text-black" key={`${item.symbol}-${index}`}>
                        <span className="mr-[3px] font-normal whitespace-nowrap">{item.name}</span>
                          <span className="mr-[4px] font-normal whitespace-nowrap">{item.price}</span>
                        <Image src="/media/increase-top-arrow.svg" alt="Increase arrow" width={11} height={11} />
                        <span className="text-[#00B81D] whitespace-nowrap">{item.change}</span>
                      </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="container max-w-[1340px] mx-auto flex-1 flex flex-col">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between py-[18px] px-4 border-b border-gray-200">
                <Image src="/media/pfg-logo-footer.svg" className='max-h-[26px]' alt="PFG Logo" width={95} height={26} />
                <div className="flex items-center gap-9">
                  <div className="flex items-center gap-2 text-sm">
                    <Image src="/media/lang-arrow-black.svg" alt="language arrow right" width={6} height={6} />
                    <span className="text-black font-normal">RU</span>
                  </div>
                  <button 
                    onClick={closeMobileMenu}
                    aria-label="Close menu"
                  >
                    <Image src="/media/mobile-close.svg" alt='mobile close button' width={23} height={23} />
                  </button>
                </div>
              </div>

              {/* Mobile Navigation */}
                <nav className="flex-1">
                  <ul className='px-5'>
                    {navigationItems.map((item) => (
                      <li className='py-5 border-b border-[#D8D8D8]' key={item.name}>
                        <a 
                          href={item.href} 
                          className="flex items-center justify-between text-[30px] leading-[32px] font-display text-black hover:opacity-80"
                          onClick={closeMobileMenu}
                        >
                          <span>{item.name}</span>
                          <Image 
                            src="/media/arrow-mobile-menu.svg" 
                            alt="Arrow" 
                            width={24} 
                            height={24}
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

              {/* Mobile Menu Footer */}
              <div className="px-5 pb-[35px]">
                <div>
                  <p className="text-[16px] text-[#1D419E]">Контакты</p>
                  <a href="tel:+99855515200" className="block text-[30px] text-black">+998 55 515-20-00</a>
                  <a href="mailto:Info@pfg.uz" className="block text-[30px] text-black">Info@pfg.uz</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
