export default function RegularNewsItemSkeleton() {
  return (
    <div className="flex w-full animate-pulse">
      {/* Image skeleton - exact dimensions matching original */}
      <div className="mr-[10px] md:mr-[25px] w-[120px] min-[380px]:w-[170px] h-[90px] md:w-[240px] md:h-[160px] overflow-hidden flex-shrink-0">
        <div className="w-full h-full bg-gray-200 rounded"></div>
      </div>
      
      <div className='md:mt-[5px] flex-1'>
        {/* Category and date skeleton - exact spacing */}
        <p className="text-[8px] md:text-[14px] flex items-center gap-[6px] mb-2">
          <span className="h-[8px] md:h-[14px] w-[40px] md:w-[50px] bg-gray-200 rounded inline-block"></span>
          <span className="h-[8px] md:h-[14px] w-[50px] md:w-[85px] bg-gray-200 rounded inline-block"></span>
        </p>
        
        {/* Title skeleton - matches exact spacing and line height */}
        <div className="pt-[8px] md:pt-0 space-y-1 md:space-y-2">
          <div className="h-[18px] md:h-[26px] w-full max-w-[360px] bg-gray-200 rounded"></div>
          <div className="h-[18px] md:h-[26px] w-4/5 max-w-[280px] bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}
