import Image from 'next/image';

interface FeaturedNewsItemProps {
  title: string;
  category: string;
  date: string;
  image: string;
}

export default function FeaturedNewsItem({ title, category, date, image }: FeaturedNewsItemProps) {
  return (
    <div className='flex flex-col gap-[10px] w-full cursor-pointer hover:opacity-80 transition-opacity duration-200'>
      <Image 
        className="w-full object-cover" 
        src={image} 
        alt="featured news image" 
        width={320} 
        height={180} 
      />
      <div>
        <p className="text-[14px] flex items-center gap-[0px]">
          <span className="text-[#2450C4]">{category}</span>
          <span className="w-[2px] h-[2px] bg-[#A0A0A0] rounded-full mx-2 inline-block"></span>
          <span className="text-[#A0A0A0]">{date}</span>
        </p>
        <h2 className="text-[18px] md:text-[20px] leading-[20px] md:leading-[22px] font-sans font-light pt-[8px]">
          {title}
        </h2>
      </div>
    </div>
  );
}
