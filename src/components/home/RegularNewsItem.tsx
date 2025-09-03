import Image from 'next/image';

interface RegularNewsItemProps {
  title: string;
  category: string;
  date: string;
  image: string;
}

export default function RegularNewsItem({ title, category, date, image }: RegularNewsItemProps) {
  return (
    <div className="flex w-full cursor-pointer hover:opacity-80 transition-opacity duration-200">
      <Image className="mr-[25px] w-[140px] h-[90px] md:max-w-[226px] md:h-auto object-cover flex-shrink-0" src={image} alt="" width={226} height={100} />
      <div className='md:mt-[5px] flex-1'>
        <p className="text-[14px] flex items-center gap-[0px]">
          <span className="text-[#2450C4]">{category}</span>
          <span className="w-[3px] h-[3px] bg-[#A0A0A0] rounded-full mx-1.5 inline-block"></span>
          <span className="text-[#A0A0A0]">{date}</span>
        </p>
        <h3 className="text-[16px] pt-[8px] md:pt-0 md:text-2xl leading-[18px] md:leading-[26px] font-sans font-light">{title}</h3>
      </div>
    </div>
  );
}
