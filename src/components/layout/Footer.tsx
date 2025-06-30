import Image from 'next/image';
import { DollarSign, Euro, Coins } from 'lucide-react';

// Static data moved into the component file
const footerSections = [
  {
    title: 'Разделы',
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
    title: 'Соц сети:',
    links: [
      { name: 'Telegram', href: '#' },
      { name: 'YouTube', href: '#' },
      { name: 'Facebook', href: '#' },
      { name: 'Instagram', href: '#' }
    ]
  },
  {
    title: 'Ресурсы:',
    links: [
      { name: 'uzse.uz', href: '#' },
      { name: 'uzex.uz', href: '#' },
      { name: 'uzrvb.uz', href: '#' },
      { name: 'uzcsd.uz', href: '#' },
      { name: 'kapitalbozori.uz', href: '#' },
      { name: 'new.openinfo.uz', href: '#' },
      { name: 'naii.uz', href: '#' }
    ]
  }
];

const currencyData = [
  { currency: 'доллара', icon: 'dollar', value: '13 003.95', change: '+14.88' },
  { currency: 'евро', icon: 'euro', value: '13 003.95', change: '+14.88' }, 
  { currency: 'рубля', icon: 'rubl', value: '13 003.95', change: '+14.88' }
];

const getCurrencyIcon = (iconType: string) => {
  const iconProps = { size: 14, className: "text-[#CACACA]" };
  
  switch (iconType) {
    case 'dollar':
      return <DollarSign {...iconProps} />;
    case 'euro':
      return <Euro {...iconProps} />;
    case 'rubl':
      return <Coins {...iconProps} />;
    default:
      return <Coins {...iconProps} />;
  }
};

const contactInfo = [
  { title: 'Адрес', content: 'Улица Амира Тимура, 107B' },
  { title: 'Часы работы', content: 'Улица Амира Тимура, 107B' },
  { title: 'Почта', content: 'Улица Амира Тимура, 107B' }
];

export default function Footer() {
  return (
    <footer className="bg-white text-black border-t border-t-[#DCDCDC]">
      <div className="container max-w-[1440px] m-auto py-14">
        <div className="flex">
          <div className="w-1/2">
            <Image src="/media/pfg-logo-footer.svg" alt="" width={200} height={50} />
          </div>
          <div className="flex w-1/2">
            {footerSections.map((section) => (
              <div key={section.title} className="w-1/4">
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
            <div className="w-1/4">
              <h4 className="text-[#2450C4] pb-3.5">Курс валют:</h4>
              <ul className="flex flex-col gap-2">
                {currencyData.map(({currency, icon, value, change}) => (
                  <li key={currency} className="flex text-xs items-center">
                    <span className="mr-1.5">{getCurrencyIcon(icon)}</span>
                    <span>{value}</span>
                    <span className="ml-1.5 text-[#CACACA]">{change}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-end pt-36">
          <div className="flex w-1/2">
            {contactInfo.map((info) => (
              <div key={info.title} className="w-1/3">
                <h4 className="text-xs text-[#2450C4] leading-4 pb-0.5">{info.title}</h4>
                <p className="text-xs leading-4">{info.content}</p>
              </div>
            ))}
          </div>
          <div className="w-1/2">
            <p className="text-[12px]">
              Все материалы, размещенные на данном веб-сайте (включая, но не ограничиваясь текстами, изображениями, графикой, логотипами, видеоматериалами и иными объектами интеллектуальной собственности), принадлежат Premium Finance Group (PFG) или используются с разрешения правообладателей. Копирование, распространение, модификация, передача, публикация или иное использование любых материалов с данного сайта без предварительного письменного согласия PFG запрещено. Использование сайта означает согласие с настоящими условиями. В случае нарушения прав интеллектуальной собственности PFG оставляет за собой право на защиту своих интересов в соответствии с законодательством. Для получения разрешения на использование материалов обращайтесь по адресу: [указать email или контактную информацию]. Все материалы, размещенные на данном веб-сайте включая, но не ограничиваясь текстами, изображениями.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 