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
      
      {/* Title Overlay */}
      <div className="absolute top-4 w-full left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-10">
        <h3 className="text-xl sm:text-2xl md:text-3xl leading-tight font-display font-normal text-white max-w-6/10">
          {title}
        </h3>
      </div>
      
      {/* Details Button */}
      <div className="absolute left-4 bottom-4 sm:left-6 sm:bottom-6 md:left-8 md:bottom-8 w-28 h-12 sm:w-32 sm:h-14 md:w-36 md:h-15 flex justify-center items-center border border-white box-border z-10 hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer">
        <span className="text-sm sm:text-base md:text-lg font-light tracking-wide text-white hover:text-black transition-colors duration-300">
          Подробнее
        </span>
      </div>
    </div>
  );
} 