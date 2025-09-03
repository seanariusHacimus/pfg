import Image from 'next/image';

interface NewsItemProps {
  title: string;
  category: string;
  date: string;
  image: string;
  isLarge?: boolean;
}

export default function NewsItem({ title, category, date, image, isLarge = false }: NewsItemProps) {
  if (isLarge) {
    return (
      <div className='flex pb-10 md:pb-0 md:flex-col md:gap-[10px] md:w-full cursor-pointer hover:opacity-80 transition-opacity duration-200'>
        <Image className="mr-[25px] w-[140px] h-[90px] md:mr-0 md:max-w-none md:w-full md:h-auto object-cover" src={image} alt="news image featured" width={226} height={100} />
        <div className='md:mt-[5px]'>
          <p className="text-[14px] flex items-center gap-[0px]">
            <span className="text-[#2450C4]">{category}</span>
            <span className="w-[3px] h-[3px] md:w-[2px] md:h-[2px] bg-[#A0A0A0] rounded-full mx-1.5 md:mx-2 inline-block"></span>
            <span className="text-[#A0A0A0]">{date}</span>
          </p>
          <h2 className="text-[16px] pt-[8px] md:pt-0 md:text-2xl leading-[18px] md:leading-[26px] max-w-[360px] md:max-w-none font-sans font-light">{title}</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="flex pb-10 cursor-pointer hover:opacity-80 transition-opacity duration-200">
      <Image className="mr-[25px] w-[140px] h-[90px] md:max-w-[226px] md:h-auto object-cover" src={image} alt="" width={226} height={100} />
      <div className='md:mt-[5px]'>
        <p className="text-[14px] flex items-center gap-[0px]">
          <span className="text-[#2450C4]">{category}</span>
          <span className="w-[3px] h-[3px] bg-[#A0A0A0] rounded-full mx-1.5 inline-block"></span>
          <span className="text-[#A0A0A0]">{date}</span>
        </p>
        <h3 className="text-[16px] pt-[8px] md:pt-0 md:text-2xl leading-[18px] md:leading-[26px] max-w-[360px] font-sans font-light">{title}</h3>
      </div>
    </div>
  );
} 