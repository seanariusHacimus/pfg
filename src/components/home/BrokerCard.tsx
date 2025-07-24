import Image from 'next/image';

interface BrokerCardProps {
  imageUrl: string;
  title: string;
  className?: string;
}

export default function BrokerCard({ imageUrl, title, className }: BrokerCardProps) {
  return (
    <div className={`relative flex-1 flex overflow-hidden ${className || ''}`}>
      <Image 
        className="w-full h-auto object-cover" 
        src={imageUrl} 
        alt={title}
        width={666} 
        height={345} 
      />
      
      {/* Flexbox Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 md:p-8 z-10">
        {/* Title */}
        <div>
          <h3 className="text-[18px] leading-[21px] sm:text-2xl sm:pb-[30px] md:text-3xl md:leading-tight font-display font-normal text-white max-w-6/10">
            {title}
          </h3>
        </div>
        
        {/* Details Button */}
        <div className="flex">
          <div className="bg-[#F3F7FA] md:text-white md:hover:text-black md:bg-transparent w-28 h-12 sm:w-32 sm:h-14 md:w-36 md:h-15 flex justify-center items-center border border-[#F3F7FA] box-border md:hover:bg-[#F3F7FA] transition-colors duration-300 cursor-pointer">
            <span className="text-sm sm:text-base md:text-lg font-light tracking-wide transition-colors duration-300">
              Подробнее
            </span>
          </div>
        </div>
      </div>
    </div>
  );
} 