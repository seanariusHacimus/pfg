"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import React from 'react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 680);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans">
      <header className={`w-full border-white border-b-[1px] fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black -translate-y-[68px]' : 'bg-transparent translate-y-0'}`}>
        <div className="border-white border-b-[1px]">
          <div className="container max-w-[1440px] m-auto flex text-white">
            <div className="pr-7 py-3">
              <span className="text-[10px] text-[#CACACA]">Гарантийный фонд</span>
              <div className="flex items-center">
                <span className="mr-1 text-[12px]">169 716,76 сумов</span>
                <Image src="/media/increase-arrow.svg" alt="Increase arrow" width={15} height={10} />
              </div>
            </div>
            <div className="flex gap-7 px-7 py-3 border-white border-r-[1px] border-l-[1px]">
              {[
                {currency: 'доллара', icon: 'dollar', value: '13 003.95', change: '+14.88'},
                {currency: 'евро', icon: 'euro', value: '13 003.95', change: '+14.88'}, 
                {currency: 'рубля', icon: 'rubl', value: '13 003.95', change: '+14.88'}
              ].map(({currency, icon, value, change}) => (
                <div key={currency}>
                  <span className="text-[#CACACA] text-[10px]">Курс {currency}</span>
                  <div className="flex text-[12px]">
                    <Image src={`/media/${icon}.svg`} alt={`${currency} icon`} width={10} height={10} />
                    <span>{value}</span>
                    <span>{change}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-12 px-7 py-3">
              {Array(4).fill({name: 'OZPH', value: '13 003.95', change: '+14.88'}).map((item, index) => (
                <div key={index}>
                  <span className="text-[#CACACA] text-[10px]">{item.name}</span>
                  <div className="flex text-[12px]">
                    <span>{item.value}</span>
                    <span>{item.change}</span>
                    <Image src="/media/increase-top-arrow.svg" alt="Increase arrow" width={11} height={11} />
                  </div>
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
                  <li><a href="#" className="hover:opacity-80">Сделка</a></li>
                  <li><a href="#" className="hover:opacity-80">Услуги</a></li>
                  <li><a href="#" className="hover:opacity-80">Новости</a></li>
                  <li><a href="#" className="hover:opacity-80">О нас</a></li>
                  <li><a href="#" className="hover:opacity-80">Открыть брокерский счет</a></li>
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

      <section className="bg-gradient-to-b from-[#1a3b91] via-[#2E68FF] to-[#1a3b91]">
        <div className="h-[700px] container max-w-[1440px] m-auto text-white flex flex-col justify-end ">
        <h1 className="text-7xl pt-56 leading-16 font-display font-normal">Ваш партнер<br /> в мире инвестиций<br /> и финансов</h1>
        <div className="flex py-14 items-center">
            <div className="flex gap-12 mr-20">
              <div className="flex flex-col pl-2.5 border-l border-[#2E68FF]">
                <span className="text-4xl leading-9 font-display font-normal">2000</span>
                <p className="text-2xl leading-6 font-sans font-light">успешных сделок</p>
              </div>
              <div className="flex flex-col pl-2.5 border-l border-[#2E68FF]">
                <span className="text-4xl leading-9 font-display font-normal">9 лет</span>
                <p className="text-2xl leading-6 font-sans font-light">в рынке финансов</p>
              </div>
              <div className="flex flex-col pl-2.5 border-l border-[#2E68FF]">
                <span className="text-4xl leading-9 font-display font-normal">250</span>
                <p className="text-2xl leading-6 font-sans font-light">клиентов</p>
              </div>
            </div>
            <p className="text-2xl leading-7 font-sans font-light">Услуги в области инвестиционного посредничества,<br /> выпуска ценных бумаг и сопровождения сделок.</p>
        </div>
        </div>
      </section>

      <section className=" bg-white text-black">
        <div className="container max-w-[1440px] m-auto py-14">
          <h2 className="text-4xl leading-9 pb-6 text-[#2450C4] font-display font-normal">Наши услуги</h2>
          <div className="flex gap-3">
            <div className="flex-1 flex flex-col justify-between p-[30px] aspect-square bg-[#F2F4F7]">
              <h3 className="text-2xl leading-[26px] font-sans font-light">Брокерские<br/>услуги</h3>
              <Image src="/media/services-icon-1.svg" alt="" width={88} height={88}/>
            </div>
            <div className="flex-1 flex flex-col justify-between p-[30px] aspect-square bg-[#F2F4F7]">
              <h3 className="text-2xl leading-[26px] font-sans font-light">Депозитарные<br/>услуги</h3>
              <Image src="/media/services-icon-2.svg" alt="" width={88} height={88}/>
            </div>
            <div className="flex-1 flex flex-col justify-between p-[30px] aspect-square bg-[#F2F4F7]">
              <h3 className="text-2xl leading-[26px] font-sans font-light">Услуги реорганизации<br/>бизнеса</h3>
              <Image src="/media/services-icon-3.svg" alt="" width={88} height={88}/>
            </div>
            <div className="flex-1 flex flex-col justify-between p-[30px] aspect-square bg-[#F2F4F7]">
              <h3 className="text-2xl leading-[26px] font-sans font-light">Корпоративный<br/>консалтинг</h3>
              <Image src="/media/services-icon-4.svg" alt="" width={88} height={88}/>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-white text-black">
        <div className="container max-w-[1440px] m-auto py-14">
          <Image className="w-full" src="/media/partners full.svg" alt="" width={1440} height={100}/>
        </div>
      </section>

      <section className=" bg-white text-black">
        <div className="container max-w-[1440px] m-auto py-14">
          <h2 className="text-4xl leading-9 pb-6 text-[#2450C4] font-display font-normal">Быть удобным брокером для своего клиента</h2>
          <div className="flex gap-3">
            <div className="flex-1 flex">
              {/* <h3 className="font-sans font-light">Как открыть<br/>брокерский счет</h3> */}
              <Image className="w-full" src="/media/comfy-broker-2.svg" alt="" width={666} height={345}/>
            </div>
            <div className="flex-1 flex">
              {/* <h3 className="font-sans font-light">Как открыть<br/>брокерский счет</h3> */}
              <Image className="w-full" src="/media/comfy-broker-1.svg" alt="" width={666} height={345}/>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-white text-black">
        <div className="container max-w-[1440px] m-auto py-14">
          <h2 className="text-4xl leading-9 pb-11 text-[#2450C4] font-display font-normal">Почему мы?</h2>
          <div className="flex flex-col gap-11">
              <div className="flex gap-3">
                <div className="flex-1">
                  <Image src="/media/whyus-1.svg" alt="" width={44} height={44}/>
                  <h3 className="text-2xl leading-[26px] mt-[6px] font-sans font-light">Комплексный<br/>подход</h3>
                </div>
                <div className="flex-1">
                  <Image src="/media/whyus-2.svg" alt="" width={44} height={44}/>
                  <h3 className="text-2xl leading-[26px] mt-[6px] font-sans font-light">Экспертиза<br/>в инвестициях</h3>
                </div>
                <div className="flex-1">
                  <Image src="/media/whyus-3.svg" alt="" width={44} height={44}/>
                  <h3 className="text-2xl leading-[26px] mt-[6px] font-sans font-light">Надёжность<br/>и безопасность</h3>
                </div>
                <div className="flex-1">
                  <Image src="/media/whyus-4.svg" alt="" width={44} height={44}/>
                  <h3 className="text-2xl leading-[26px] mt-[6px] font-sans font-light">Глубокая<br/>экспертиза в M&A</h3>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-1">
                  <Image src="/media/whyus-5.svg" alt="" width={44} height={44}/>
                  <h3 className="text-2xl leading-[26px] mt-[6px] font-sans font-light">Индивидуальные<br/>решения</h3>
                </div>
                <div className="flex-1">
                  <Image src="/media/whyus-6.svg" alt="" width={44} height={44}/>
                  <h3 className="text-2xl leading-[26px] mt-[6px] font-sans font-light">Широкий<br/>спектр услуг</h3>
                </div>
                <div className="flex-1">
                  <Image src="/media/whyus-7.svg" alt="" width={44} height={44}/>
                  <h3 className="text-2xl leading-[26px] mt-[6px] font-sans font-light">Поддержка<br/>на каждом этапе</h3>
                </div>
                <div className="flex-1">
                  <Image src="/media/whyus-8.svg" alt="" width={44} height={44}/>
                  <h3 className="text-2xl leading-[26px] mt-[6px] font-sans font-light">Долгосрочное<br/>партнёрство</h3>
                </div>
              </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-black bg-[url('/media/bg.png')] bg-cover bg-center">
        <div className="container max-w-[1440px] m-auto py-14">
          <h2 className="text-4xl leading-9 pb-11 text-white font-display font-normal">Наши сделки</h2>
          <div className="flex gap-6">
            <div className="flex flex-col justify-between p-[30px] h-[280px] w-1/5 bg-white">
              <div>
                <h4 className="text-[14px] font-bold">Продажа компании в Хмельницкой области</h4>
                <p className="text-[14px] pt-[7px]">Стороны сделки: Roshen, NCH Capital</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-[12px] font-sans font-light">Сумма сделки:</span>
                  <p className="text-2xl leading-7">$125 000</p>
                </div>
                <Image src="/media/strange-avatar.svg" alt="" width={40} height={40}/>
              </div>
            </div>

            <div className="flex flex-col justify-between p-[30px] h-[280px] w-1/5 bg-white">
              <div>
                <h4 className="text-[14px] font-bold">Приобретение IT-компании в Киеве</h4>
                <p className="text-[14px] pt-[7px]">Стороны сделки: Genesis, Intellias</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-[12px] font-sans font-light">Сумма сделки:</span>
                  <p className="text-2xl leading-7">$250 000</p>
                </div>
                <Image src="/media/strange-avatar.svg" alt="" width={40} height={40}/>
              </div>
            </div>

            <div className="flex flex-col justify-between p-[30px] h-[280px] w-1/5 bg-white">
              <div>
                <h4 className="text-[14px] font-bold">Слияние логистических компаний</h4>
                <p className="text-[14px] pt-[7px]">Стороны сделки: Nova Poshta, Meest Express</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-[12px] font-sans font-light">Сумма сделки:</span>
                  <p className="text-2xl leading-7">$180 000</p>
                </div>
                <Image src="/media/strange-avatar.svg" alt="" width={40} height={40}/>
              </div>
            </div>

            <div className="flex flex-col justify-between p-[30px] h-[280px] w-1/5 bg-white">
              <div>
                <h4 className="text-[14px] font-bold">Слияние логистических компаний</h4>
                <p className="text-[14px] pt-[7px]">Стороны сделки: Nova Poshta, Meest Express</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-[12px] font-sans font-light">Сумма сделки:</span>
                  <p className="text-2xl leading-7">$180 000</p>
                </div>
                <Image src="/media/strange-avatar.svg" alt="" width={40} height={40}/>
              </div>
            </div>

            <div className="flex flex-col justify-between p-[30px] h-[280px] w-1/5 bg-white">
              <div>
                <h4 className="text-[14px] font-bold">Слияние логистических компаний</h4>
                <p className="text-[14px] pt-[7px]">Стороны сделки: Nova Poshta, Meest Express</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-[12px] font-sans font-light">Сумма сделки:</span>
                  <p className="text-2xl leading-7">$180 000</p>
                </div>
                <Image src="/media/strange-avatar.svg" alt="" width={40} height={40}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-white text-black">
        <div className="container max-w-[1440px] m-auto py-14">
          <h2 className="text-4xl leading-9 pb-11 text-[#2450C4] font-display font-normal">Наша команда</h2>
          <div className="flex gap-3">
              <div className="w-1/3 h-[340px] p-[30px] text-white bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000')"}}> 
                <h4 className="font-bold">Dior Matchanov</h4>
                <p className="font-sans font-light">Art Director</p>
              </div>
              <div className="w-1/3 h-[340px] p-[30px] text-white bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000')"}}> 
                <h4 className="font-bold">Sarah Johnson</h4>
                <p className="font-sans font-light">Creative Director</p>
              </div>
              <div className="w-1/3 h-[340px] p-[30px] text-white bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000')"}}> 
                <h4 className="font-bold">Michael Chen</h4>
                <p className="font-sans font-light">Technical Director</p>
              </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="container max-w-[1440px] m-auto py-14">
          <h2 className="text-4xl leading-9 pb-11 text-[#2450C4] font-display font-normal">Новости</h2>
          <div className="flex">
            <div className="w-1/2">
              <div className="flex items-center pb-11">
                <Image className="mr-6" src="/media/new-1.svg" alt="" width={227} height={150}/>
                <div>
                  <p className="text-[14px]">
                    <span className="mr-2.5">Рубрика </span>
                    <span>24 января 2025</span>
                  </p>
                  <h3 className="text-2xl leading-[26px] max-w-[360px] font-sans font-light">Московская биржа возобновляет утреннюю сессию с 27 января 2025 года</h3>
                </div>
              </div>
              <div className="flex items-center pb-11">
                <Image className="mr-6" src="/media/new-1.svg" alt="" width={227} height={150}/>
                <div>
                  <p className="text-[14px]">
                    <span className="mr-2.5">Рубрика </span>
                    <span>24 января 2025</span>
                  </p>
                  <h3 className="text-2xl leading-[26px] max-w-[360px] font-sans font-light">Московская биржа возобновляет утреннюю сессию с 27 января 2025 года</h3>
                </div>
              </div>
              <div className="flex items-center pb-11">
                <Image className="mr-6" src="/media/new-1.svg" alt="" width={227} height={150}/>
                <div>
                  <p className="text-[14px]">
                    <span className="mr-2.5">Рубрика </span>
                    <span>24 января 2025</span>
                  </p>
                  <h3 className="text-2xl leading-[26px] max-w-[360px] font-sans font-light">Московская биржа возобновляет утреннюю сессию с 27 января 2025 года</h3>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <div>
                <Image className="w-full mr-6" src="/media/new-1.svg" alt="" width={635} height={400}/>
                <p className="text-[14px]">
                  <span className="mr-2.5">Рубрика </span>
                  <span>24 января 2025</span>
                </p>
                <h2 className="text-2xl leading-[26px] font-sans font-light">Московская биржа возобновляет утреннюю сессию с 27 января 2025 года Московская биржа возобновляет утреннюю</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#F3F7FA] text-black">
        <div className="container max-w-[1440px] m-auto py-14">
          <div className="flex">
            <div className="w-1/2">
              <Image src="/media/pfg-logo-footer.svg" alt="" width={200} height={50}/>
            </div>
            <div className="flex w-1/2">
              <div className="w-1/4">
                <h4 className="text-[#B2B2B2] pb-3.5">Разделы</h4>
                <ul className="flex flex-col gap-2 text-[14px]">
                  <li><a href="#">Новости</a></li>
                  <li><a href="#">Брокерский счет</a></li>
                  <li><a href="#">Сделки</a></li>
                  <li><a href="#">Аналитика</a></li>
                  <li><a href="#">Услуги</a></li>
                  <li><a href="#">О нас</a></li>
                </ul>
              </div>
              <div className="w-1/4">
                <h4 className="text-[#B2B2B2] pb-3.5">Соц сети:</h4>
                <ul className="flex flex-col gap-2 text-[14px]">
                  <li><a href="#">Telegram</a></li>
                  <li><a href="#">YouTube</a></li>
                  <li><a href="#">Facebook</a></li>
                  <li><a href="#">Instagram</a></li>
                </ul>
              </div>
              <div className="w-1/4">
                <h4 className="text-[#B2B2B2] pb-3.5">Ресурсы:</h4>
                <ul className="flex flex-col gap-2 text-[14px]">
                  <li><a href="#">uzse.uz</a></li>
                  <li><a href="#">uzex.uz</a></li>
                  <li><a href="#">uzrvb.uz</a></li>
                  <li><a href="#">uzcsd.uz</a></li>
                  <li><a href="#">kapitalbozori.uz</a></li>
                  <li><a href="#">new.openinfo.uz</a></li>
                  <li><a href="#">naii.uz</a></li>
                </ul>
              </div>
              <div className="w-1/4">
                <h4 className="text-[#B2B2B2] pb-3.5">Курс валют:</h4>
                <ul className="flex flex-col gap-2">
                {[
                {currency: 'доллара', icon: 'dollar', value: '13 003.95', change: '+14.88'},
                {currency: 'евро', icon: 'euro', value: '13 003.95', change: '+14.88'}, 
                {currency: 'рубля', icon: 'rubl', value: '13 003.95', change: '+14.88'}
                ].map(({currency, icon, value, change}) => (
                  <li key={currency} className="flex text-[14px]">
                    <Image className="block mr-1.5 invert" src={`/media/${icon}.svg`} alt={`${currency} icon`} width={14} height={14} />
                    <span>{value}</span>
                    <span>{change}</span>
          </li>
                ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex items-end pt-36">
            <div className="flex w-1/2">
                <div className="w-1/3">
                  <h4 className="text-[14px] leading-4 pb-0.5">Адрес</h4>
                  <p className="text-[14px] leading-4">Улица Амира Тимура, 107B</p>
                </div>
                <div className="w-1/3">
                  <h4 className="text-[14px] leading-4 pb-0.5">Часы работы</h4>
                  <p className="text-[14px] leading-4">Улица Амира Тимура, 107B</p>
                </div>
                <div className="w-1/3">
                  <h4 className="text-[14px] leading-4 pb-0.5">Почта</h4>
                  <p className="text-[14px] leading-4">Улица Амира Тимура, 107B</p>
                </div>
            </div>
            <div className="w-1/2">
                <p className="text-[12px]">
                  Все материалы, размещенные на данном веб-сайте (включая, но не ограничиваясь текстами, изображениями, графикой, логотипами, видеоматериалами и иными объектами интеллектуальной собственности),  принадлежат Premium Finance Group (PFG) или используются с разрешения правообладателей. Копирование, распространение, модификация, передача, публикация или иное использование любых материалов с данного сайта без предварительного письменного согласия PFG запрещено. Использование сайта означает согласие с настоящими условиями. В случае нарушения прав интеллектуальной собственности PFG оставляет за собой право на защиту своих интересов в соответствии с законодательством. Для получения разрешения на использование материалов обращайтесь по адресу: [указать email или контактную информацию]. Все материалы, размещенные на данном веб-сайте включая, но не ограничиваясь текстами, изображениями.
                </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
