'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ChevronDown, DollarSign, Euro, RussianRuble } from 'lucide-react';
import { useCurrencyRates } from '../../hooks/useCurrencyRates';

// Static data for accordion sections
const footerSections = [
  {
    id: 'main',
    title: 'Основные разделы',
    links: [
      { name: 'Новости', href: '#' },
      { name: 'Брокерский счет', href: '#' },
      { name: 'Сделки', href: '#' },
      { name: 'Аналитика', href: '#' },
      { name: 'Услуги', href: '#' },
      { name: 'О нас', href: '#' }
    ]
  },
  {
    id: 'resources',
    title: 'Ресурсы',
    links: [
      { name: 'uzse.uz', href: 'https://uzse.uz' },
      { name: 'uzex.uz', href: 'https://uzex.uz' },
      { name: 'uzrvb.uz', href: 'https://uzrvb.uz' },
      { name: 'uzcsd.uz', href: 'https://uzcsd.uz' },
      { name: 'kapitalbozori.uz', href: 'https://kapitalbozori.uz' },
      { name: 'new.openinfo.uz', href: 'https://new.openinfo.uz' },
      { name: 'naii.uz', href: 'https://naii.uz' }
    ]
  }
];



const getCurrencyIcon = (iconType: string) => {
  const iconProps = { size: 14, className: "text-[#CACACA]" };
  
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

const socialIcons = [
  { name: 'Facebook', href: '#', icon: '/media/social-facebook.svg' },
  { name: 'YouTube', href: '#', icon: '/media/social-youtube.svg' },
  { name: 'Instagram', href: '#', icon: '/media/social-instagram.svg' },
  { name: 'Telegram', href: '#', icon: '/media/social-telegram.svg' }
];

export default function Footer() {
  const [openSections, setOpenSections] = useState<string[]>([]);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const { currencyRates, loading } = useCurrencyRates();

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  return (
    <footer className="bg-white text-black border-t border-t-[#DCDCDC]">
      <div className="px-[34px] py-8 md:px-8 md:py-14">
        {/* Mobile Layout */}
        <div className="block md:hidden">
          {/* Logo */}
          <div className="max-w-[95px] w-full md:max-w-[120px] mb-5 m:mb-8">
            <Image src="/media/pfg-logo-footer.svg" alt="PFG Logo" width={120} height={30} />
          </div>

          {/* Accordion Sections */}
          <div>
            {footerSections.map((section) => (
              <div key={section.id}>
                <button
                  onClick={() => toggleSection(section.id)}
                  className="flex justify-between items-center w-full py-5 border-t-[1px] border-[#DCDCDC] text-left"
                >
                  <span className="text-[16px] font-normal text-black">{section.title}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#A0A0A0] transition-transform duration-200 ${
                      openSections.includes(section.id) ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openSections.includes(section.id) && (
                  <div className="pt-2 pb-3">
                    <ul className="space-y-2">
                      {section.links.map((link) => (
                        <li key={link.name}>
                          <a 
                            href={link.href}
                            className="text-[14px] text-[#666666] hover:text-[#2450C4] transition-colors"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}

            {/* Currency Section */}
            <div className=" pb-4">
              <button
                onClick={() => setCurrencyOpen(!currencyOpen)}
                className="flex justify-between items-center w-full py-5 text-left border-t-[1px] border-[#DCDCDC]"
              >
                <span className="text-[16px] font-normal text-black">Курс валют</span>
                <ChevronDown 
                  className={`w-5 h-5 text-[#A0A0A0] transition-transform duration-200 ${
                    currencyOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {currencyOpen && (
                <div className="pt-2 pb-3">
                  <ul className="space-y-2">
                    {loading ? (
                      <li className="flex text-[14px] items-center">
                        <span className="text-[#CACACA]">Загрузка курсов...</span>
                      </li>
                    ) : (
                      currencyRates.map(({currency, icon, value, change}) => (
                      <li key={currency} className="flex text-[14px] items-center">
                        <span className="mr-2">{getCurrencyIcon(icon)}</span>
                        <span className="text-black">{value}</span>
                        <span className="ml-2 text-[#CACACA]">{change}</span>
                      </li>
                      ))
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-8 mb-8">
            <h4 className="text-[16px] font-normal text-[#2450C4] mb-4">Контакты</h4>
            <div className="space-y-5">
              <div>
                <p className="text-[29px] font-medium text-black leading-[33px]">+998 55 515-20-00</p>
                <p className="text-[29px] text-black leading-[33px]">Info@pfg.uz</p>
              </div>
              <div>
                <p className="text-[14px] text-[#2450C4] font-medium">Адрес</p>
                <p className="text-[14px] text-black">Проспект Амира Тимура 107B</p>
              </div>
              <div>
                <p className="text-[14px] text-[#2450C4] font-medium">Часы работы</p>
                <p className="text-[14px] text-black">С 9:00 до 18:00</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-between gap-[10px] mt-[28px] mb-[24px]">
            {socialIcons.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-full h-full bg-white flex items-center justify-center"
              >
                <Image
                  src={social.icon}
                  alt={`${social.name} icon`}
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </a>
            ))}
          </div>

          {/* Legal Text */}
          <div className="text-[11px] text-[#BCBCBC] leading-4 pb-[24px]">
            <p>
              Все материалы, размещенные на данном веб-сайте (включая, но не ограничиваясь текстами, изображениями, графикой, логотипами, видеоматериалами и иными объектами интеллектуальной собственности), принадлежат Premium Finance Group (PFG) или используются с разрешения правообладателей. Копирование, распространение, модификация, передача, публикация или иное использование любых материалов с данного сайта без предварительного письменного согласия PFG запрещено. Использование сайта означает согласие с настоящими условиями. В случае нарушения прав интеллектуальной собственности PFG оставляет за собой право на защиту своих интересов в соответствии с законодательством. Для получения разрешения на использование материалов обращайтесь по адресу: [указать email или контактную информацию]. Все материалы, размещенные на данном веб-сайте включая, но не ограничиваясь текстами, изображениями.
            </p>
          </div>
        </div>

        {/* Desktop Layout - Keep original for larger screens */}
        <div className="hidden md:block">
          <div className="container max-w-[1440px] m-auto">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2">
                <Image src="/media/pfg-logo-footer.svg" alt="PFG Logo" width={200} height={50} />
              </div>
              <div className="flex flex-col md:flex-row w-full md:w-1/2">
                {footerSections.map((section) => (
                  <div key={section.title} className="w-full md:w-1/4">
                    <h4 className="text-[#2450C4] pb-3.5">{section.title}</h4>
                    <ul className="flex flex-col gap-2 text-xs">
                      {section.links.map((link) => (
                        <li key={link.name}>
                          <a href={link.href}>{link.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="w-full md:w-1/4">
                  <h4 className="text-[#2450C4] pb-3.5">Курс валют:</h4>
                  <ul className="flex flex-col gap-2">
                    {loading ? (
                      <li className="flex text-xs items-center">
                        <span className="text-[#CACACA]">Загрузка курсов...</span>
                      </li>
                    ) : (
                      currencyRates.map(({currency, icon, value, change}) => (
                      <li key={currency} className="flex text-xs items-center">
                        <span className="mr-1.5">{getCurrencyIcon(icon)}</span>
                        <span>{value}</span>
                        <span className="ml-1.5 text-[#CACACA]">{change}</span>
                      </li>
                      ))
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-end pt-0 md:pt-36">
              <div className="flex flex-col md:flex-row w-full md:w-1/2">
                <div className="w-1/3">
                  <h4 className="text-xs text-[#2450C4] leading-4 pb-0.5">Адрес</h4>
                  <p className="text-xs leading-4">Проспект Амира Тимура 107B</p>
                </div>
                <div className="w-1/3">
                  <h4 className="text-xs text-[#2450C4] leading-4 pb-0.5">Часы работы</h4>
                                      <p className="text-xs leading-4">С 9:00 до 18:00</p>
                </div>
                <div className="w-1/3">
                  <h4 className="text-xs text-[#2450C4] leading-4 pb-0.5">Контакты</h4>
                  <p className="text-xs leading-4">+998 55 515-20-00</p>
                                      <p className="text-xs leading-4">Info@pfg.uz</p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-[12px]">
                  Все материалы, размещенные на данном веб-сайте (включая, но не ограничиваясь текстами, изображениями, графикой, логотипами, видеоматериалами и иными объектами интеллектуальной собственности), принадлежат Premium Finance Group (PFG) или используются с разрешения правообладателей. Копирование, распространение, модификация, передача, публикация или иное использование любых материалов с данного сайта без предварительного письменного согласия PFG запрещено. Использование сайта означает согласие с настоящими условиями. В случае нарушения прав интеллектуальной собственности PFG оставляет за собой право на защиту своих интересов в соответствии с законодательством. Для получения разрешения на использование материалов обращайтесь по адресу: [указать email или контактную информацию]. Все материалы, размещенные на данном веб-сайте включая, но не ограничиваясь текстами, изображениями.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 