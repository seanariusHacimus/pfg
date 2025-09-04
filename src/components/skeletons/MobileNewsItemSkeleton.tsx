export default function MobileNewsItemSkeleton() {
  return (
    <div className='flex pb-10 md:pb-0 md:flex-col md:gap-[10px] md:w-full animate-pulse'>
      {/* Image skeleton - matches mobile dimensions */}
      <div className="mr-[25px] w-[140px] h-[90px] md:mr-0 md:max-w-none md:w-full md:h-auto md:aspect-[2/1] bg-gray-200 rounded flex-shrink-0"></div>
      
      <div className='md:mt-[5px] flex-1'>
        {/* Category and date skeleton - mobile specific sizing */}
        <p className="text-[14px] flex items-center gap-[0px] mb-2">
          <span className="h-[14px] w-[50px] bg-gray-200 rounded inline-block"></span>
          <span className="w-[3px] h-[3px] md:w-[2px] md:h-[2px] bg-gray-300 rounded-full mx-1.5 md:mx-2 inline-block"></span>
          <span className="h-[14px] w-[70px] bg-gray-200 rounded inline-block"></span>
        </p>
        
        {/* Title skeleton - matches mobile text sizing and spacing */}
        <div className="pt-[8px] md:pt-0 space-y-1 md:space-y-2">
          <div className="h-[18px] md:h-[26px] w-full max-w-[360px] md:max-w-none bg-gray-200 rounded"></div>
          <div className="h-[18px] md:h-[26px] w-4/5 max-w-[280px] md:max-w-none bg-gray-200 rounded"></div>
          <div className="h-[18px] md:h-[26px] w-3/5 max-w-[200px] md:max-w-none bg-gray-200 rounded md:hidden"></div>
        </div>
      </div>
    </div>
  );
}
